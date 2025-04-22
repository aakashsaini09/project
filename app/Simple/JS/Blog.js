// Blog page
var menu = document.querySelector("#bnav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration: 0.5
})

tl.from("#full h4", {
    x: 150,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0
})

tl.from("#full i",{
    opacity: 0
})

tl.pause()
menu.addEventListener("click", function(){
    console.log("clicked to plays")
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse()
})

window.addEventListener("wheel", function(e){
    if(e.deltaY>0){
        gsap.to(".marque", {
            transform: "translateX(-200%)",
            duration: 4,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marque img", {
            rotate: 180
        })
    }else{
        gsap.to(".marque", {
            transform: "translateX(0%)",
            duration: 4,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marque img", {
            rotate: 0
        })
    }
})