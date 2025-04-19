gsap.from("#p1 #box", {
    scale: 0,
    delay:1,
    duration:2,
    rotate: 360
})
gsap.from("#p2 #box", {
    scale: 0,
    // delay:1,
    duration:2,
    rotate: 360,
    // scrollTrigger:"#p2 #box"
    scrollTrigger:{
        trigger: "#p2 #box",
        scroller: "body",
        markers: true
    }
})