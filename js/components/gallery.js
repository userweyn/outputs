// ============================================
// GALLERY
// ============================================
function loadGallery(filter="All"){
    const container =
        document.getElementById("galleryContainer");
    if(!container) return;
    container.innerHTML = "";
    let galleryProjects = [...projects]

    .sort((a,b)=>b.priority-a.priority);
    if(filter !== "All"){
        galleryProjects = galleryProjects.filter(project=>
            project.type.includes(filter)
        );
    }
    galleryProjects.forEach((project,index)=>{
        const item = createGalleryItem(project);

        item.style.animationDelay = `${index * 0.04}s`;

        container.appendChild(item);
    });
}
function createGalleryItem(project){
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
        <img
            class="gallery-thumb"
            src="assets/projects/${project.folder}/${project.thumbnail}"
            alt="${project.title}"
            loading="lazy">
        <div class="gallery-overlay">
            <div class="gallery-actions">
                <button
                    class="gallery-details-btn"
                    onclick="event.stopPropagation();openDetails('${project.id}')">
                    <img
                        src="assets/images/icons/actions/info.svg"
                        alt="Details">
                </button>
                <span class="gallery-icon">
                    <img
                        src="${getActionIcon(project.action.type)}"
                        alt="Type">
                </span>
            </div>
            <div class="gallery-header">
                <h3>
                    ${project.title}
                </h3>
                <span class="gallery-type">
                    ${project.type.join(" | ")}
                </span>
            </div>
        </div>
    `;
    item.addEventListener("click",()=>{
        viewProject(project.id);
    });
    return item;
}
// ============================================
// FILTERS
// ============================================
function generateFilters(){
    const container =
        document.querySelector(".gallery-filters");
    if(!container) return;
    container.innerHTML = "";
    // Count every category
    const typeCounts = {};
    projects.forEach(project=>{
        project.type.forEach(type=>{
            typeCounts[type] = (typeCounts[type] || 0) + 1;
        });
    });
    // Sort by highest count, then alphabetically
    const types = Object.keys(typeCounts).sort((a,b)=>{
        if(typeCounts[b] !== typeCounts[a]){
            return typeCounts[b] - typeCounts[a];
        }
        return a.localeCompare(b);
    });
    // ALL button stays first
    const allButton = createFilterButton(
        `ALL (${projects.length})`
    );
    allButton.classList.add("active-filter");
    container.appendChild(allButton);
    // Remaining filters
    types.forEach(type=>{
        container.appendChild(
            createFilterButton(
                `${type} (${typeCounts[type]})`
            )
        );
    });
}
function createFilterButton(label){
    const button =
        document.createElement("button");
    button.textContent = label;
    const filter = label.replace(/\s\(\d+\)$/,"");
    button.dataset.filter =
        filter.toLowerCase();
    button.addEventListener("click",()=>{
        document
            .querySelectorAll(".gallery-filters button")
            .forEach(btn=>
                btn.classList.remove("active-filter")
            );
        button.classList.add("active-filter");
        if(button.dataset.filter==="all"){
            loadGallery("All");
        }
        else{
            loadGallery(filter);
        }
    });
    return button;
}
