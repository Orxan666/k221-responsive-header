let header =document.querySelector("#header")
let navIco=document.querySelector("#header .nav-ico")
let ul=document.querySelector("#header ul")
navIco.addEventListener("click",function(){
    ul.classList.toggle("active")
})

window.onscroll=function(){
if(window.scrollY>150){
    header.classList.add("active-header")

}
else{
    header.classList.remove("active-header")

}

}

let loader=document.querySelector(".loader")
window.onload=function(){
    setTimeout(() => {
        loader.classList.add("active")
        document.body.style.overflowY="scroll"
    }, 500);

}