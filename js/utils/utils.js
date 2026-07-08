function getActionIcon(type){
    switch(type){
        case "video":
            return "assets/images/icons/actions/video.svg";
        case "image":
            return "assets/images/icons/actions/image.svg";
        case "external":
            return "assets/images/icons/actions/website.svg";
        case "case-study":
            return "assets/images/icons/actions/document.svg";
        default:
            return "assets/images/icons/actions/document.svg";
    }
}
function updateGalleryCount(){
    const count =
        document.getElementById(
            "galleryCount"
        );
    if(!count) return;
    count.textContent =
        `${projects.length} WORKS`;
}
