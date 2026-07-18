function initScrollReveal(){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }else{

                entry.target.classList.remove("show");

            }

        });

    },{
        threshold:0,
        rootMargin:"0px 0px -50px 0px"
    });

    document.querySelectorAll(`
        .section-title,
        .featured-slide,
        .gallery-item,
        .resume-preview,
        .resume-profile,
        .skill-card,
        .about-card,
        .contact-card 
    `).forEach(element=>{

        element.classList.add("reveal");

        observer.observe(element);

    });

}
