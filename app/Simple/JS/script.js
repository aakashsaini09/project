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
    var halfVal = splittedTxt.length/2
    splittedTxt.forEach(function(val, index){
        if(index < halfVal){
            clutter += `<span class="a">${val}</span>`
        }else{
            clutter += `<span class="b">${val}</span>`
        }
    })
    h1.innerHTML = clutter
}
breakTheText()

// gsap.from("#p3 h2 span", {
//     y: 60, 
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.5, 
//     stagger: -0.15
// })

gsap.from("#p3 h2 .a", {
    y: 80,
    duration:0.6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})
gsap.from("#p3 h2 .b", {
    y: -80,
    opacity: 0,
    duration:0.6,
    delay: 0.5,
    stagger: 0.15
})