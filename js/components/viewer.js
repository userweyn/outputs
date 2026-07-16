// ============================================
// VIEWER
// ============================================

function openViewer(content){
    const modal =
        document.getElementById("viewerModal");
    const body =
        document.getElementById("viewerBody");
    body.innerHTML = content;
    modal.classList.add("active");
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
}
function closeViewer(){
    const modal =
        document.getElementById("viewerModal");
    const body =
        document.getElementById("viewerBody");
    body.innerHTML="";
    modal.classList.remove("active");
}
