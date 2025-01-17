document.addEventListener("DOMContentLoaded",()=>{
    history.scrollRestoration = "manual";

    window.addEventListener('beforeunload', function () {
      window.scrollTo(0, 0); // Force le retour en haut avant de quitter la page
    });
  
  document.body.style.overflow="hidden"

  setTimeout(()=>{
    document.body.style.overflow="auto"
  },5700)
    

 //For dark and light mode
   let checkdarkorwithe = document.querySelector("label[for='darkmode-toggle']");
   checkdarkorwithe.addEventListener("click",()=>{
    let darkwithmod = document.getElementById("darkmode-toggle").checked;
    if(darkwithmod){
     document.body.classList.add("light");
    }
    else{
      document.body.classList.remove("light");
    }
   })
   

  //  Hero Slider
   
  let btnka3ba = document.querySelector(".fa-kaaba");
  let btnmosk = document.querySelector(".fa-mosque");
  let btnkoran = document.querySelector(".fa-book-quran");

  let slide1 = document.querySelector(".slid1");
  let slide2 = document.querySelector(".slid2");
  let slide3 = document.querySelector(".slid3");

  btnka3ba.addEventListener("click",()=>{
    btnkoran.classList.remove("selected");
    btnmosk.classList.remove("selected");
    btnka3ba.classList.add("selected");
    slide1.classList.remove("active");
    slide2.classList.remove("active");
    slide3.classList.add("active");
  })
  btnkoran.addEventListener("click",()=>{
    btnka3ba.classList.remove("selected");
    btnmosk.classList.remove("selected");
    btnkoran.classList.add("selected");
    slide1.classList.remove("active");
    slide3.classList.remove("active");
    slide2.classList.add("active");
  })
  btnmosk.addEventListener("click",()=>{
    btnkoran.classList.remove("selected");
    btnka3ba.classList.remove("selected");
    btnmosk.classList.add("selected");
    slide3.classList.remove("active");
    slide2.classList.remove("active");
    slide1.classList.add("active");
  })

});
