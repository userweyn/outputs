// ============================================
// VIEWER
// ============================================

let viewerMode = "gallery";

let currentViewerProject = null;

let currentViewerMedia = 0;

function renderViewer(type,source){

    const modal =
        document.getElementById("viewerModal");

    const body =
        document.getElementById("viewerBody");

    body.innerHTML = "";

    if(type==="image"){

        body.innerHTML = `
            <img
                src="${source}"
                class="viewer-media">
        `;

    }

    else if(type==="video"){

        body.innerHTML = `
            <video
                class="viewer-media"
                controls
                autoplay>

                <source
                    src="${source}"
                    type="video/mp4">

            </video>
        `;

    }

    modal.classList.add("active");

}
function openViewer(type,source){

    viewerMode = "gallery";

    const project =
        getCurrentGalleryProject();

    if(!project){
        return;
    }

    currentViewerProject =
        project;

    renderViewer(
        type,
        source
    );

}

function openDetailsViewer(type,source,index){

    viewerMode = "details";

    currentViewerProject =
        getCurrentGalleryProject();

    currentViewerMedia =
        index;

    renderViewer(
        type,
        source
    );

}
function showPreviousViewerProject(){

    if(currentProjectIndex <= 0){
        return;
    }

    currentProjectIndex--;

    currentViewerProject =
        currentGalleryProjects[
            currentProjectIndex
        ];

    renderViewer(
        currentViewerProject.action.type,
        `assets/projects/${currentViewerProject.folder}/${currentViewerProject.action.source}`
    );

}

function showNextViewerProject(){

    if(
        currentProjectIndex >=
        currentGalleryProjects.length - 1
    ){
        return;
    }

    currentProjectIndex++;

    currentViewerProject =
        currentGalleryProjects[
            currentProjectIndex
        ];

    renderViewer(
        currentViewerProject.action.type,
        `assets/projects/${currentViewerProject.folder}/${currentViewerProject.action.source}`
    );

}
function showPreviousViewerProject(){

    if(currentProjectIndex <= 0){
        return;
    }

    currentProjectIndex--;

    currentViewerProject =
        currentGalleryProjects[
            currentProjectIndex
        ];

    if(currentViewerProject.action.type==="external"){

        window.open(
            currentViewerProject.action.source,
            "_blank"
        );

        return;

    }

    renderViewer(
        currentViewerProject.action.type,
        `assets/projects/${currentViewerProject.folder}/${currentViewerProject.action.source}`
    );

}

function showNextViewerProject(){

    if(
        currentProjectIndex >=
        currentGalleryProjects.length - 1
    ){
        return;
    }

    currentProjectIndex++;

    currentViewerProject =
        currentGalleryProjects[
            currentProjectIndex
        ];

    if(currentViewerProject.action.type==="external"){

        window.open(
            currentViewerProject.action.source,
            "_blank"
        );

        return;

    }

    renderViewer(
        currentViewerProject.action.type,
        `assets/projects/${currentViewerProject.folder}/${currentViewerProject.action.source}`
    );

}
function initViewerModal(){

    const modal =
        document.getElementById("viewerModal");

    const close =
        document.querySelector(".closeViewer");

    close.addEventListener("click",()=>{

        closeViewer();

    });

    modal.addEventListener("click",e=>{

        if(e.target===modal){

            closeViewer();

        }

    });

    document.addEventListener("keydown",e=>{

        if(!modal.classList.contains("active")){
            return;
        }

        switch(e.key){

            case "Escape":

                closeViewer();
                break;

            case "ArrowLeft":

                if(viewerMode==="gallery"){

                    showPreviousViewerProject();

                }else{

                    showPreviousViewerMedia();

                }

                break;

            case "ArrowRight":

                if(viewerMode==="gallery"){

                    showNextViewerProject();

                }else{

                    showNextViewerMedia();

                }

                break;

        }

    });

}
let viewerTouchStartX = 0;

document.addEventListener("DOMContentLoaded",()=>{

    const modal =
        document.getElementById("viewerModal");

    modal.addEventListener(
        "touchstart",
        e=>{

            viewerTouchStartX =
                e.changedTouches[0].screenX;

        },
        {
            passive:true
        }
    );

    modal.addEventListener(
        "touchend",
        e=>{

            const delta =
                e.changedTouches[0].screenX -
                viewerTouchStartX;

            if(Math.abs(delta) < 50){
                return;
            }

            if(delta > 0){

                if(viewerMode==="gallery"){

                    showPreviousViewerProject();

                }else{

                    showPreviousViewerMedia();

                }

            }else{

                if(viewerMode==="gallery"){

                    showNextViewerProject();

                }else{

                    showNextViewerMedia();

                }

            }

        },
        {
            passive:true
        }
    );

});

function closeViewer(){

    const modal =
        document.getElementById("viewerModal");

    const body =
        document.getElementById("viewerBody");

    body.innerHTML = "";

    modal.classList.remove("active");

    viewerMode = "gallery";
    currentViewerProject = null;
    currentViewerMedia = 0;

}
