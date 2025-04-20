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
//         markers: 2,
//         // toggleActions: "restart none none none",
//         scrub: true,
//         start: "top 50%"
//     }
// })

gsap.to("#p2 h1", {
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger: "#p2",
        scroller:"body",
        // markers: true,
        start:"top 0%",
        end: "top -150%",
        // toggleActions: "restart none none none",
        pin: true,
        scrub:2
    }
})

var initialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

var string  = document.querySelector("#string")
string.addEventListener("mousemove", function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        duration: "power3.out"
    })
})
string.addEventListener("mouseleave", function(){
    gsap.to("svg path",  {
        attr: { d:  finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})
var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(event){
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 1,
        ease:"bounce.out"
    })
})

