const scrollSections = document.querySelectorAll(".scroll");
const navBar = document.querySelector(".nav-bar");
const scrollSection = document.querySelector(".scroll-section")

const options = {
    threshold: [0.75],
    // rootMargin: "-100px 0px -100px 0px"
}
// const handleIntersect = (entries, )
const observer = new IntersectionObserver((entries)=>{
    entries.map(entry=>{
        console.log("sakdpiafhdei")
        // if (entry.boundingClientRect.top === 80 && entry.isIntersecting) {
            console.log("entry", entry, entry.target)
        // } else{
        //     console.log("sdihf")
        // }
        if(entry.isIntersecting){
            entry.target.classList.add("intersecting");
            observer.unobserve(entry.target)
        } else {
            console.log("observer removed", entry.target.classList);
            entry.target.classList.remove("intersecting");
        }
      
    })
}, options)

scrollSections.forEach((section)=>{
    observer.observe(section);
})

