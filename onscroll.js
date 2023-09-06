gsap.to(".gstage", { 
    scrollTrigger :{
       scrub:1,
       scale:2
    },
    scale:0.2,
    opacity:0,
 
});

gsap.to(".glogo", { 
    scrollTrigger :{
       scrub:1
    },
    scale:0.2,
    opacity:0.5,
 
});


const tagline=document.querySelector(".tagline");
setInterval(function () {
    const t=tagline.getBoundingClientRect();
    if(t.top==0){
        tagline.style.color="#FFD700";
    }else{
        tagline.style.color="white";
    }

}, 100);

