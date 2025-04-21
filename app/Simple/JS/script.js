// gsap.from("#p1 #box", {
//     scale: 0,
//     delay:1,
//     duration:2,
//     rotate: 360
// })
// gsap.from("#p2 #box", {
//     scale: 0,
//     // delay:1,
//     duration:2,
//     rotate: 360,
//     // scrollTrigger:"#p2 #box"
//     scrollTrigger:{
//         trigger: "#p2 #box",
//         toggleActions: "restart none none none",
//         scroller: "body",
//         markers: true
//     }
// })
// gsap.from("#p1 #box", {
//     scale: 0,
//     opacity: 0,
//     rotate: 720,
//     duration: 1,
//     scrollTrigger:{
//         trigger: "#p1 #box",
//         scroller: "body",
//         // toggleActions: "restart none none none",
//         markers: true,
//         start: "top 60%",
//         scrub: 5,
//         end: "top 30%"
//     }
// })

// gsap.from("#p3 h1",{
//     duration:2,
//     opacity: 0,
//     x: 500,
//     scrollTrigger:{
//         trigger: "#p3 h1",
//         scroller: "body",
//         markers: true,
//         toggleActions: "restart none none none",
//         start: "top 50%"
//     }
// })
// gsap.from("#p3 h2",{
//     duration:2,
//     opacity: 0,
//     x: -500,
//     scrollTrigger:{
//         trigger: "#p3 h2",
//         scroller: "body",
//         scrub: true,
//         start: "top 50%"
//     }
// })

// ++++++++++++++++++++++++++++++++++++++++++Working from here+++++++++++++++++++++++++++++++++++++++++++++++=

gsap.to("#p2 h1", {
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger: "#p2",
        scroller:"body",
        // markers: true,
        start:"top 0%",
        end: "top -150%",
        pin: true,
        scrub:2
    }
})




// page 3 inside index.html
function breakTheText() {
    var h1 = document.querySelector("h2")
    var h1Text = h1.textContent
    var clutter = ""
    var splittedTxt = h1Text.split("")
    splittedTxt.forEach(function(val){
        clutter += `<span>${val}</span>`
        console.log(val)
    })
    h1.innerHTML = clutter
}
breakTheText()

gsap.from("#p3 h2 span", {
    y: 50, 
    opacity: 0,
    duration: 1,
    delay: 0.5, 
    stagger: 0.2
})