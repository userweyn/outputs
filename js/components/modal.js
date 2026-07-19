// ============================================
// PROJECT DETAILS
// ============================================

function getMediaType(file){
    const extension = file.split(".").pop().toLowerCase();

    if(["jpg","jpeg","png","webp","gif","avif"].includes(extension)){
        return "image";
    }

    if(["mp4","webm","mov"].includes(extension)){
        return "video";
    }

    return "unknown";
}

function renderProjectDetails(project){

    const modal =
        document.getElementById("projectModal");

    const body =
        document.getElementById("modalBody");

    let html = `
        <h2>
            ${project.title}
        </h2>
        <p>
            <strong>
                ${project.type.join(" | ")}
            </strong>
            - ${project.year}
        </p>
    `;
        if(project.details.role){
        html += `
            <h3>Role</h3>
            <p>
                ${project.details.role}
            </p>
        `;
    }

    if(project.details.software?.length){
        html += `
            <h3>Software</h3>
            <ul>
                ${project.details.software
                    .map(item=>`<li>${item}</li>`)
                    .join("")}
            </ul>
        `;
    }

    if(project.details.objective){
        html += `
            <h3>Objective</h3>
            <p>
                ${project.details.objective}
            </p>
        `;
    }

    if(project.details.description){
        html += `
            <h3>Description</h3>
            <p>
                ${project.details.description}
            </p>
        `;
    }

    if(project.details.media?.length){

        html += `
            <h3>
                ${project.details.mediaTitle || "Gallery"}
            </h3>

            <div class="process-gallery">
        `;
                project.details.media.forEach((file,index)=>{

            const type =
                getMediaType(file);

            if(type==="image"){

                html += `
                    <img
                        src="assets/projects/${project.folder}/${file}"
                        alt="${project.title}"
                        onclick="openDetailsViewer(
                            'image',
                            'assets/projects/${project.folder}/${file}',
                            ${index}
                        )">
                `;

            }else if(type==="video"){

                html += `
                    <video
                        class="process-video"
                        muted
                        playsinline
                        preload="metadata"
                        onclick="openDetailsViewer(
                            'video',
                            'assets/projects/${project.folder}/${file}',
                            ${index}
                        )">

                        <source
                            src="assets/projects/${project.folder}/${file}"
                            type="video/mp4">

                    </video>
                `;

            }

        });

        html += `
            </div>
        `;
    }

    if(project.details.note){

        html += `
            <h3>
                Note
            </h3>

            <p>
                ${project.details.note}
            </p>
        `;
    }
        if(project.details.links?.some(link=>link.url && link.label)){

        html += `
            <h3>
                Related Links
            </h3>

            <div class="project-links">
        `;

        project.details.links.forEach(link=>{

            if(link.url && link.label){

                html += `
                    <a
                        href="${link.url}"
                        target="_blank">

                        ${link.label}

                    </a>
                `;

            }

        });

        html += `
            </div>
        `;
    }


    body.innerHTML = html;
        const gallery =
        body.querySelector(".process-gallery");

    if(gallery){

        gallery.addEventListener(
            "wheel",
            e=>{

                if(
                    gallery.scrollWidth <=
                    gallery.clientWidth
                ){
                    return;
                }

                e.preventDefault();

                gallery.scrollLeft +=
                    e.deltaY;

            },
            {
                passive:false
            }
        );

    }

    modal.classList.add("active");

}

function openDetails(id){

    setCurrentProject(id);

    const project =
        getCurrentGalleryProject();

    if(!project) return;

    renderProjectDetails(project);

}
// ============================================
// PROJECT MODAL
// ============================================

let touchStartX = 0;
let touchEndX = 0;

function initProjectModal(){

    const modal =
        document.getElementById("projectModal");

    const close =
        document.querySelector(".closeModal");

    close.addEventListener("click",()=>{

        modal.classList.remove("active");

    });

    modal.addEventListener("click",e=>{

        if(e.target===modal){

            modal.classList.remove("active");

        }

    });

    document.addEventListener("keydown",e=>{

        const viewer =
            document.getElementById("viewerModal");

        if(
            !modal.classList.contains("active") ||
            (viewer && viewer.classList.contains("active"))
        ){
            return;
        }

        switch(e.key){

            case "Escape":

                modal.classList.remove("active");

                break;

            case "ArrowLeft":

                showPreviousProject();

                break;

            case "ArrowRight":

                showNextProject();

                break;

        }

    });

    // Mobile swipe navigation intentionally removed.
    // The details modal contains horizontally scrollable galleries,
    // so swipe gestures should scroll the content instead of
    // changing projects.
}
