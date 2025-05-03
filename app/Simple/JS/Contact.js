var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button", {
    y: -40,
    duration: 0.7,
    opacity: 0,
    delay: 1,
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