
// ============================================
// PROJECT DETAILS
// ============================================
function openDetails(id){
    const project = projects.find(
        project=>project.id===id
    );
    if(!project) return;
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
            | ${project.year}
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
    if(project.details.processImages?.length){
        html += `
            <h3>
                Process | Versions
            </h3>
            <div class="process-gallery">
        `;
        project.details.processImages.forEach(image=>{
            html += `
                <img
                    src="assets/projects/${project.folder}/${image}"
                    alt="${project.title}"
                   onclick="openViewer('<img src=&quot;assets/projects/${project.folder}/${image}&quot; class=&quot;viewer-media&quot;>')">
            `;
        });
        html += `
            </div>
        `;
    }
    if(project.details.lessons){
        html += `
            <h3>
                Lessons Learned
            </h3>
            <p>
                ${project.details.lessons}
            </p>
        `;
    }
    if(project.details.links?.some(link => link.url && link.label)){
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
        const gallery = body.querySelector(".process-gallery");

    if(gallery){
        gallery.addEventListener("wheel", (e)=>{
            if(gallery.scrollWidth <= gallery.clientWidth) return;

            e.preventDefault();
            gallery.scrollLeft += e.deltaY;
        }, { passive:false });
    }
    modal.classList.add("active");
}
// ============================================
// PROJECT MODAL
// ============================================
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
}
