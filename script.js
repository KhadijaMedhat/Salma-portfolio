// ================= TYPE EFFECT =================
const text = "Hardware Design Engineer";

let index = 0;
let deleting = false;

function typeEffect(){
  const element = document.querySelector(".typing");

  if(!element) return;

  if(!deleting){
    element.textContent = text.substring(0, index + 1);
    index++;

    if(index === text.length){
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    element.textContent = text.substring(0, index - 1);
    index--;

    if(index === 0){
      deleting = false;
    }
  }

  setTimeout(typeEffect, 120);
}

typeEffect();


// ================= DARK / LIGHT MODE =================
const toggle = document.getElementById("modeToggle");

if(toggle){
  toggle.onclick = () => {
    document.body.classList.toggle("light-mode");
  };
}


// ================= IMAGE SLIDER =================
const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
  let images = slider.querySelectorAll("img");
  let i = 0;

  if(images.length > 0){
    images[i].style.display = "block";

    setInterval(() => {
      images[i].style.display = "none";
      i = (i + 1) % images.length;
      images[i].style.display = "block";
    }, 2500);
  }
});


// ================= SIDEBAR =================

// فتح / قفل
function toggleMenu(){
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// يقفل لما تدوسي بره
document.addEventListener("click", function(e){
  const nav = document.getElementById("navLinks");
  const btn = document.querySelector(".menu-btn");

  if(nav && nav.classList.contains("active")){
    if(!nav.contains(e.target) && !btn.contains(e.target)){
      nav.classList.remove("active");
    }
  }
});

// يقفل لما تضغطي على لينك
const navLinks = document.querySelectorAll("#navLinks a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});


// ================= FORM (EMAILJS) =================
document.addEventListener("DOMContentLoaded", function(){

  emailjs.init("5D1PvGcOZtGUkf_aZ");

  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-msg");
  const btn = document.querySelector(".send-btn");

  if(!form) return;

  form.addEventListener("submit", function(e){
    e.preventDefault();

    msg.innerHTML = "Sending...";
    msg.style.color = "#3b82f6";

    btn.disabled = true;

    emailjs.sendForm("service_yepuadq", "template_jnekvmo", this)
    .then(function(){

      msg.innerHTML = "Message sent successfully ✅";
      msg.style.color = "#22c55e";

      form.reset();
      btn.disabled = false;

      setTimeout(()=>{
        msg.innerHTML = "";
      },3000);

    }, function(error){

      msg.innerHTML = "Something went wrong ❌";
      msg.style.color = "red";

      btn.disabled = false;
      console.log(error);

    });

  });

});