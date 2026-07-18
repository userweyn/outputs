let heroInterval;
let currentSlide = 0;
let featuredProjects = [];
function updateHero(){
    if(featuredProjects.length===0) return;
    const project =
        featuredProjects[currentSlide];
    document
        .querySelectorAll(".featured-slide")
        .forEach((slide,index)=>{
            slide.classList.toggle(
                "active",
                index===currentSlide
            );
        });
    const media =
        document.getElementById("heroMedia");
    const type =
        document.getElementById("heroProjectType");
    const title =
        document.getElementById("heroProjectTitle");
    const description =
        document.getElementById("heroProjectDescription");
    if(!media) return;
    media.style.opacity = 0;
    setTimeout(()=>{
        if(project.action.type==="video"){
            media.innerHTML=`
                <video
                    preload="metadata"
                    autoplay
                    muted
                    loop
                    playsinline>
                    <source
                        src="assets/projects/${project.folder}/${project.action.source}"
                        type="video/mp4">
                </video>
            `;
        }
        else{
            media.innerHTML=`
                <img
                    src="assets/projects/${project.folder}/${project.action.source}"
                    alt="${project.title}">
            `;
        }
        type.textContent =
            project.type.join(" • ");
        title.textContent =
            project.title;
        description.textContent =
            project.shortDescription;
        media.style.opacity = 1;
    },300);
}
// ============================================
// FEATURED
// ============================================
function loadFeaturedProjects(){
    const container =
        document.getElementById("featuredContainer");
    if(!container) return;
    featuredProjects = projects
        .filter(project => project.featured)
        .sort((a,b) => b.priority - a.priority);
    container.innerHTML = "";
    featuredProjects.forEach((project,index)=>{
        const card = createProjectCard(project);

        card.style.transitionDelay = `${index * 70}ms`;

        card.addEventListener("click",()=>{
            currentSlide = index;
            updateHero();
        });

        container.appendChild(card);
    });
    updateHero();
    startHeroRotation();
}
// ============================================
// PROJECT CARD
// ============================================
function createProjectCard(project){
    const card = document.createElement("div");
    card.className = "featured-slide";
    card.innerHTML = `
        <div class="project-card">
            <img
                class="project-thumb"
                src="assets/projects/${project.folder}/${project.thumbnail}"
                alt="${project.title}"
                loading="lazy">
            <div class="project-content">
                <span class="project-type">
                    ${project.type.join(" | ")}
                </span>
                <h3>
                    ${project.title}
                </h3>
                <p>
                    ${project.shortDescription}
                </p>
                <div class="project-buttons">
                    <button
                        class="view-btn"
                        onclick="viewProject('${project.id}')">
                        View
                    </button>
                    <button
                        class="details-btn"
                        onclick="openDetails('${project.id}')">
                        Details
                    </button>
                </div>
            </div>
        </div>
    `;
    return card;
}
// ============================================
// FEATURED CAROUSEL
// ============================================

function startHeroRotation(){
    clearInterval(heroInterval);
    heroInterval = setInterval(()=>{
        currentSlide++;
        if(currentSlide >= featuredProjects.length){
            currentSlide = 0;
        }
        updateHero();
    },7000);
}
function initFeaturedScroll() {
    const strip = document.getElementById("featuredContainer");
    if (!strip) return;
    strip.addEventListener("wheel", (e) => {
        // Ignore if there's nothing to scroll
        if (strip.scrollWidth <= strip.clientWidth) return;
        e.preventDefault();
        strip.scrollLeft += e.deltaY;
    }, { passive: false });
}
