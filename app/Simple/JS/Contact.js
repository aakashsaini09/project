function page1Animation() {
    var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button", {
    y: -40,
    duration: 0.7,
    opacity: 0,
    delay: 0.5,
    stagger: 0.15
})
// gsap.from("nav h4, nav button", {
//     y: -30,
//     opacity: 0,
//     delay: 1,
//     duration: 1
// })

tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5
})
tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4
})
tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4
})
tl.from(".center-part2 img", {
    x: 200,
    duration: 0.5,
    opacity: 0
}, "-=0.7")

tl.from(".section1bottom img", {
    opacity: 0,
    y: 30, 
    stagger: 0.15,
    duration: 0.6
})
}


function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            end: "top 0",
            scrub: 2
        }
    })
    tl2.from(".services",{
        y: 30,
        opacity: 0,
        duration: 0.5
    })
    tl2.from(".elem.line1.left",{
        x: -300,
        opacity: 0,
        duration: 1
    
    }, "animate1")
    tl2.from(".elem.line1.right",{
        x: 300,
        opacity: 0,
        duration: 1
    
    },"animate1")
    tl2.from(".elem.line2.left",{
        x: -300,
        opacity: 0,
        duration: 1
    
    }, "animate2")
    tl2.from(".elem.line2.right",{
        x: 300,
        opacity: 0,
        duration: 1
    
    },"animate2")
    // gsap.from(".services h3", {
    //     x: -100,
    //     opacity: 0,
    //     duration: 0.5,
    //     scrollTrigger: {
    //         trigger: ".services h3",
    //         scroller: "body",
    //         marker: true,
    //         start: "top 50%"
    //     }
    // })
}

page1Animation()
page2Animation()