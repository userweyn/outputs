// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal(){
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    },{
        threshold:.15
    });
    document
        .querySelectorAll(
            "section, footer"
        )
        .forEach(section=>{
            section.classList.add("reveal");
            observer.observe(section);
        });
}