// ============================================
// GALLERY STATE
// ============================================

let currentGalleryProjects = [];
let currentProjectIndex = -1;
let currentGalleryFilter = "All";

// ============================================
// GALLERY
// ============================================

function loadGallery(filter = "All"){

    currentGalleryFilter = filter;

    const container =
        document.getElementById("galleryContainer");

    if(!container) return;

    container.innerHTML = "";

    currentGalleryProjects = [...projects]
        .sort((a,b)=>b.priority-a.priority);

    if(filter !== "All"){
        currentGalleryProjects =
            currentGalleryProjects.filter(project=>
                project.type.includes(filter)
            );
    }

    currentGalleryProjects.forEach((project,index)=>{

        const item =
            createGalleryItem(project,index);

        item.style.transitionDelay =
            `${index * 40}ms`;

        container.appendChild(item);

    });

    updateGalleryCount();
}

// ============================================
// GALLERY ITEM
// ============================================

function createGalleryItem(project,index){

    const media =
        project.details?.media || [];

    const hasVideo =
        media.some(file=>
            /\.(mp4|mov|webm)$/i.test(file)
        );

    const mediaType =
        hasVideo ? "Videos" : "Images";

    const collectionLabel =
        media.length
        ? `
            <span
                class="gallery-collection"
                onclick="
                    event.stopPropagation();
                    openDetails('${project.id}');
                ">
                ${
                    project.details.mediaTitle
                    || "Gallery"
                }
                •
                ${media.length}
                ${mediaType}
            </span>
        `
        : "";

    const item =
        document.createElement("div");

    item.className =
        "gallery-item";

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
                    onclick="
                        event.stopPropagation();
                        openDetails('${project.id}');
                    ">

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

            <div class="gallery-info">

                <h3>${project.title}</h3>

                <span class="gallery-type">
                    ${project.type.join(" | ")}
                </span>

                ${collectionLabel}

            </div>

        </div>

    `;

    item.addEventListener("click",()=>{

        currentProjectIndex = index;

        viewProject(project.id);

    });

    return item;
}
// ============================================
// GALLERY NAVIGATION
// ============================================

function showPreviousProject(){

    if(
        currentProjectIndex <= 0
    ){
        return;
    }

    currentProjectIndex--;

    renderProjectDetails(
        currentGalleryProjects[
            currentProjectIndex
        ]
    );

}

function showNextProject(){

    if(
        currentProjectIndex >=
        currentGalleryProjects.length - 1
    ){
        return;
    }

    currentProjectIndex++;

    renderProjectDetails(
        currentGalleryProjects[
            currentProjectIndex
        ]
    );

}

function setCurrentProject(id){

    currentProjectIndex =
        currentGalleryProjects.findIndex(
            project => project.id === id
        );

}

// ============================================
// FILTERS
// ============================================

function generateFilters(){

    const container =
        document.querySelector(
            ".gallery-filters"
        );

    if(!container) return;

    container.innerHTML = "";

    const typeCounts = {};

    projects.forEach(project=>{

        project.type.forEach(type=>{

            typeCounts[type] =
                (typeCounts[type] || 0) + 1;

        });

    });

    const types =
        Object.keys(typeCounts)
        .sort((a,b)=>{

            if(
                typeCounts[b] !==
                typeCounts[a]
            ){
                return (
                    typeCounts[b]
                    - typeCounts[a]
                );
            }

            return a.localeCompare(b);

        });

    const allButton =
        createFilterButton(
            `ALL (${projects.length})`,
            "All"
        );

    allButton.classList.add(
        "active-filter"
    );

    container.appendChild(
        allButton
    );

    types.forEach(type=>{

        container.appendChild(

            createFilterButton(
                `${type.toUpperCase()} (${typeCounts[type]})`,
                type
            )

        );

    });

}

function createFilterButton(label,filter){

    const button =
        document.createElement("button");

    button.textContent = label;

    button.addEventListener("click",()=>{

        document
            .querySelectorAll(
                ".gallery-filters button"
            )
            .forEach(btn=>
                btn.classList.remove(
                    "active-filter"
                )
            );

        button.classList.add(
            "active-filter"
        );

        loadGallery(filter);

    });

    return button;

}

// ============================================
// GALLERY COUNT
// ============================================

function updateGalleryCount(){

    const count =
        document.getElementById(
            "galleryCount"
        );

    if(!count) return;

    count.textContent =
        `${currentGalleryProjects.length} WORKS`;

}

// ============================================
// UTILITIES
// ============================================

function getCurrentGalleryProject(){

    if(
        currentProjectIndex < 0 ||
        currentProjectIndex >=
        currentGalleryProjects.length
    ){
        return null;
    }

    return currentGalleryProjects[
        currentProjectIndex
    ];

}

// ============================================
// END
// ============================================
