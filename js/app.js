const mainnav=document.getElementById("mainNav");
const logoimage=document.querySelector("img");

document.addEventListener("scroll",function(){
     if(document.documentElement.scrollTop >0){
         logoimage.style.height="64px";
        mainnav.classList.add("bg-black");
        mainnav.classList.add("txt-white")


     } else{
        logoimage.style.height="84px";
        mainnav.classList.remove("bg-black");
        mainnav.classList.remove("txt-white")

     }
})