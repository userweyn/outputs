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
    initResumeModal();
    // initFeaturedCarousel(); Featured strip is now manually scrollable.
    initScrollReveal();
});
// ============================================
// VIEW PROJECT
// ============================================
function viewProject(id){
    const project = projects.find(
        project=>project.id===id
    );
    if(!project) return;
    switch(project.action.type){
        case "video":
            openViewer(`
                <video
                    controls
                    autoplay
                    style="width:100%;border-radius:18px;">
                    <source
                        src="assets/projects/${project.folder}/${project.action.source}"
                        type="video/mp4">
                </video>
            `);
            break;
        case "image":
            openViewer(`
                <img
                    src="assets/projects/${project.folder}/${project.action.source}"
                    style="width:100%;border-radius:18px;">
            `);
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