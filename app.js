let data = [
  {
    id: 1,
    title: "Bookmark in one click",
    text: `  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`,
    img: "./images/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    title: "Intelligent search",
    text: `  Our powerful search feature will help you findsaved sites in no time at all. No need to trawl through all of your
    bookmarks.`,
    img: "./images/illustration-features-tab-2.svg",
  },

  {
    id: 3,
    title: "Share your bookmarks",
    text: `  Easily share your bookmarks and
    collections with others. Create a shareable link that you can send at the click of a button.`,
    img: "./images/illustration-features-tab-3.svg",
  },
];

// **************** dom objects ********************

const sidebar = document.querySelector(".sidebar-container");
const hamburger = document.querySelector(".hamburger");
const closer = document.querySelector(".closer");
const tabBtn = document.querySelectorAll(".tab-btn");
const tabContainer = document.querySelector(".features-main");
const questions = document.querySelectorAll(".qustion");
const sideBarLinks = document.querySelectorAll(".sidebar-links");
const input = document.querySelector("input");
const errorBg = document.querySelector(".background");

const form = document.querySelector("form");
const errorImg = document.querySelector(".error-img");
var flag = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue === "") {
    showMag("background show-error", "Must enter a email", "show-error-img");
  } else if (inputValue !== "") {
    if (!validMail(inputValue)) {
      showMag(
        "background show-error",
        "whoop's make sure its an email",
        "show-error-img"
      );
    }
    if (validMail(inputValue)) {
      showMag("background show-success", "Thanks for Your Time!", "error-img");
    }
  }
});
function showMag(classLists, msg, imgClass) {
  errorBg.className = classLists;
  errorBg.textContent = msg;
  errorImg.classList.add(imgClass);

  setInterval(() => {
    errorBg.className = "";
    errorImg.classList.remove("show-error-img");
  }, 3000);
}
var i = 1;
var index = 0;
// **************** ready for use ********************
// **************** rendering********************
tabBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tabToggle(e);
  });
});

// **************** classLists add ********************
hamburger.addEventListener("click", () => {
  sidebar.classList.add("sidebar-show");
});
closer.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-show");
});
sideBarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    sidebar.classList.remove("sidebar-show");
  });
});
// **************** functions ********************

// **************** for qustion toggle ********************

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const target = e.target.parentElement.parentElement;
    const img = target.querySelector("img");

    questions.forEach((question) => {
      if (question !== target) {
        question.classList.remove("show-text");
        const img = question.querySelector("img");
        img.classList.remove("rotate-arrow");
      }
    });

    img.classList.toggle("rotate-arrow");
    target.classList.toggle("show-text");
  });
});

// **************** for tab toggle ********************
function tabToggle(e) {
  index = e.target.dataset.id;
  i = 1 * index;

  tabContainer.innerHTML = `
    <div class="hero">
          <img src="${data[i].img}" alt="" />
          <div class="bg-color-feature"></div>
        </div>
        <div class="text-sp">
          <h1>${data[i].title}</h1>
          <p>${data[i].text}
          </p>
          <div class="btn btn-hide">More Info</div>
        </div>`;
  tabBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
}
function validMail(mail) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    mail
  );
}
