document.addEventListener("DOMContentLoaded",()=>{
  let dive3lansiup = document.querySelector(".sinup");
  let pdiv = document.querySelectorAll(".sinup p");
  let btnp = document.querySelector(".sinup input")
  dive3lansiup.addEventListener("mouseover",()=>{
   pdiv.forEach((p)=>{
    p.classList.toggle("activp");
    p.classList.toggle("desactivp");
   });
   btnp.setAttribute("value","قم بالتسجيل مجانا");
   btnp.classList.remove("frbtnp");
  });
  dive3lansiup.addEventListener("mouseout",()=>{
    pdiv.forEach((p)=>{
        p.classList.toggle("activp");
        p.classList.toggle("desactivp");
       });
       btnp.setAttribute("value","Sign up for free");
  });
  btnp.addEventListener("click",()=>{
    window.location.href="/html/signup.html"
  });


  let carte = document.querySelectorAll(".cartes1 .carte");

  carte.forEach((cart)=>{
   let btnplay = cart.querySelector(".fa-play"); 

   cart.addEventListener("mouseover",()=>{
    btnplay.style.opacity="1";
    btnplay.style.top="90px";
   });
   cart.addEventListener("mouseout",()=>{    
    btnplay.style.top="98px";
    btnplay.style.opacity="0";
    btnplay.style.transition="all 0.5s"
   });
  });
 

  let nav = document.querySelector(".container nav");
  let navconthidd = document.querySelector(".containerhidden nav");
  let containerall = document.querySelectorAll(".container")
  containerall.forEach((cont)=>{
    cont.addEventListener("scroll",()=>{
      if(cont.scrollTop >= 0 && cont.scrollTop < 50){
        nav.style.transition="all 0.4s"
        nav.style.background="linear-gradient(135deg, rgba(0, 0, 0, 0.169), rgba(0, 0, 0, 0.169))";
        navconthidd.style.transition="all 0.4s"
        navconthidd.style.background="linear-gradient(135deg, rgba(0, 0, 0, 0.169), rgba(0, 0, 0, 0.169))";
      }
      if(cont.scrollTop >= 50 && cont.scrollTop < 100){
        nav.style.transition="all 0.4s"
        nav.style.background="linear-gradient(135deg, rgba(0, 0, 0, 0.350), rgba(0, 0, 0, 0.200))";
        navconthidd.style.transition="all 0.4s"
        navconthidd.style.background="linear-gradient(135deg, rgba(0, 0, 0, 0.350), rgba(0, 0, 0, 0.200))";
      }
      if(cont.scrollTop >= 100){
        nav.style.background="";
        nav.style.backgroundColor="var(--div-color)";
        navconthidd.style.background="";
        navconthidd.style.backgroundColor="var(--div-color)";
      }
  
    
    });
  })

  let newplayicon = document.querySelector(".Tow .tone>i");
  let newplayliste = document.querySelector(".Tow .tone .d5el5rej");
  let newplaylisteI = document.querySelector(".Tow .tone .d5el5rej i");
  let newplaylisteH5 = document.querySelector(".Tow .tone .d5el5rej h5");
  newplayicon.addEventListener("click",()=>{
   newplayicon.classList.toggle("dora");
   newplayliste.classList.toggle("non");
  });
  document.addEventListener("click", (event) => {
    if (event.target!=newplayliste && event.target!=newplayicon && event.target!=newplaylisteI && event.target!=newplaylisteH5){
      newplayicon.classList.remove("dora");
      newplayliste.classList.remove("non");
    }
  });

  let searchbarinput = document.querySelector(".container2hidd nav #reshearch input");
  let searchicon = document.querySelector(".Search");
  let home = document.querySelector(".home");
  let searchdiv = document.querySelector(".container2hidd nav #reshearch");
  let afterpage2 = document.querySelector(".container2hidd nav #mo2achir .fa-chevron-left");
  let nextpage1 = document.querySelector(".container1hidd nav #mo2achir .fa-chevron-right");
  searchicon.addEventListener("click",()=>{
    containerall[0].classList.add("containerhidden");
    containerall[1].classList.remove("containerhidden");
    searchicon.classList.remove("not-checked");
    searchicon.classList.add("checked");
    home.classList.remove("checked");
    home.classList.add("not-checked");
    searchdiv.classList.remove("not-reshearch");
    searchdiv.classList.add("reshearch");
    createlibrarymessage.classList.remove("messageexiste");

    afterpage2.style.cursor="pointer";
    afterpage2.style.color="var(--white)";
    afterpage2.addEventListener("click",()=>{
      containerall[1].classList.add("containerhidden");
      containerall[0].classList.remove("containerhidden");
      home.classList.remove("not-checked");
      home.classList.add("checked");
      searchicon.classList.remove("checked");
      searchicon.classList.add("not-checked");
      searchdiv.classList.add("not-reshearch");
      searchdiv.classList.remove("reshearch");
      searchbarinput.value="";
      createlibrarymessage.classList.remove("messageexiste");

      nextpage1.style.cursor="pointer";
      nextpage1.style.color="var(--white)";
      nextpage1.addEventListener("click",()=>{
        containerall[0].classList.add("containerhidden");
        containerall[1].classList.remove("containerhidden");
        searchicon.classList.remove("not-checked");
        searchicon.classList.add("checked");
        home.classList.remove("checked");
        home.classList.add("not-checked");
        searchdiv.classList.remove("not-reshearch");
        searchdiv.classList.add("reshearch");
        createlibrarymessage.classList.remove("messageexiste");

      });
    });
  });
  home.addEventListener("click",()=>{
    containerall[1].classList.add("containerhidden");
    containerall[0].classList.remove("containerhidden");
    home.classList.remove("not-checked");
    home.classList.add("checked");
    searchicon.classList.remove("checked");
    searchicon.classList.add("not-checked");
    searchdiv.classList.add("not-reshearch");
    searchdiv.classList.remove("reshearch");
    searchbarinput.value="";
    createlibrarymessage.classList.remove("messageexiste");

  });


  let searchbaricon = document.querySelector(".container2hidd nav #reshearch .fa-magnifying-glass");
  let divsearch = document.querySelector(".container2hidd nav #reshearch");
  divsearch.addEventListener("mouseover",()=>{
    searchbaricon.style.color="var(--white)";
    divsearch.style.border="1px solid #3e3e3e";
    divsearch.style.backgroundColor="rgba(36, 36, 36, 0.826)";
    let iconnull = document.querySelector(".container2hidd nav #reshearch .fa-plus");
    if(searchbarinput.value!=""){
      iconnull.style.display="block";
      iconnull.style.opacity="1";
    }
    if(searchbarinput.value==""){
      iconnull.style.display="none";
      iconnull.style.opacity="0";
    }
  });
  divsearch.addEventListener("mouseout",()=>{
    searchbaricon.style.color="rgba(255, 255, 255, 0.589)";
    divsearch.style.border="none";
    divsearch.style.backgroundColor="rgb(36,36,36)";
    let iconnull = document.querySelector(".container2hidd nav #reshearch .fa-plus");
    if(searchbarinput.value!=""){
      iconnull.style.display="block";
      iconnull.style.opacity="1";
    }
    if(searchbarinput.value==""){
      iconnull.style.display="none";
      iconnull.style.opacity="0";
    }
  });
  searchbarinput.addEventListener("click",()=>{
    searchbaricon.style.color="var(--white)";
    divsearch.style.border="1px solid var(--white)";
    let iconnull = document.querySelector(".container2hidd nav #reshearch .fa-plus");
    if(searchbarinput.value!=""){
      iconnull.style.display="block";
      iconnull.style.opacity="1";
    }
    if(searchbarinput.value==""){
      iconnull.style.display="none";
      iconnull.style.opacity="0";
    }
  });
  
  let iconnull = document.querySelector(".container2hidd nav #reshearch .fa-plus");
  iconnull.addEventListener("click",()=>{
    searchbarinput.value=""
  });


  
  let createlibrarymessage = document.querySelector(".message");
  newplayliste.addEventListener("click",()=>{
    createlibrarymessage.classList.add("messageexiste");
    newplayliste.classList.remove("non");
    newplayicon.classList.remove("dora");
  });
  let notnow = document.querySelector(".message #not");
  notnow.addEventListener("click",()=>{
    createlibrarymessage.classList.remove("messageexiste");
  })



  
});