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
var img = document.querySelector("#img")

main.addEventListener("mousemove", function(event){

    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 0.5,
        // ease:"bounce.out"
    })
})

img.addEventListener("mouseenter", function(event){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale: 4,
        backgroundColor: "#ffffff3a"
    })
})
img.addEventListener("mouseleave", function(event){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "white"
    })
})