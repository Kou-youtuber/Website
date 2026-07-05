// ==========================
// こうのゲーム実況！
// JavaScript Ver1.0
// ==========================


// --------------------------
// カードをふわっと表示
// --------------------------

const fadeElements = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

fadeElements.forEach(card=>{

    card.classList.add("fade-up");

    observer.observe(card);

});


// --------------------------
// ボタンを押した演出
// --------------------------

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.animate([

            {transform:"scale(1)"},

            {transform:"scale(.95)"},

            {transform:"scale(1)"}

        ],{

            duration:180

        });

    });

});


// --------------------------
// トップへ戻るボタン
// --------------------------

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="25px";
topButton.style.right="25px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#18c964";
topButton.style.color="white";
topButton.style.fontSize="24px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 0 20px rgba(24,201,100,.5)";
topButton.style.zIndex="9999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// =====================
// スライダー
// =====================

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function changeSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

slides[currentSlide].classList.add("active");

}

setInterval(changeSlide,4000);
