// ============================================
// START
// ============================================
document.addEventListener("DOMContentLoaded", ()=>{
    loadFeaturedProjects();
    initFeaturedScroll();
    generateFilters();
    loadGallery();
    updateGalleryCount();
    initProjectModal();
    initViewerModal();
    // initResumeModal();
    // initFeaturedCarousel(); Featured strip is now manually scrollable.
    initScrollReveal();
});
// ============================================
// VIEW PROJECT
// ============================================
function viewProject(id){

    setCurrentProject(id);

    const project =
        getCurrentGalleryProject();

    if(!project) return;

    switch(project.action.type){

        case "image":

            openViewer(
                "image",
                `assets/projects/${project.folder}/${project.action.source}`
            );

            break;

        case "video":

            openViewer(
                "video",
                `assets/projects/${project.folder}/${project.action.source}`
            );

            break;

        case "external":

            window.open(
                project.action.source,
                "_blank"
            );

            break;

        case "case-study":

            openDetails(project.id);

            break;

    }

}
// ============================================
// UTILITIES
// ============================================
window.addEventListener("keydown",e=>{
    if(e.key!=="Escape") return;
    document
        .querySelectorAll(".modal")
        .forEach(modal=>
            modal.classList.remove("active")
        );
    const viewer =
        document.getElementById("viewerBody");
    if(viewer){
        viewer.innerHTML = "";
    }
});

// ============================================
// END
// ============================================
