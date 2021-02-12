// selectors
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navModal = document.querySelector(".nav-modal");
const navLink = document.querySelectorAll(".nav-link");

const tabs = document.querySelector(".tabs");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

const faq = document.querySelectorAll(".question");
const faqBtns = document.querySelectorAll(".question-btn");

const form = document.querySelector("#myForm");
const email = document.querySelector("#email");
const formGroup = document.querySelector(".form-group");

// functions
const tabClickHandler = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};

faqBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-faq");
  });
});

const formHandler = (e) => {
  e.preventDefault();
  const emailValue = email.value;
  if (emailValue === "" || !validateEmail(emailValue)) {
    formGroup.classList.add("error");
    alert;
  }
};

const alert = setInterval(() => {
  formGroup.classList.remove("error");
}, 3000);

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// add event listeners
hamburger.addEventListener("click", (e) => {
  navModal.classList.add("show-nav-modal");
  if (e.target.classList.value === "hamburger") {
    hamburger.style.visibility = "hidden";
  }
});
close.addEventListener("click", (e) => {
  navModal.classList.remove("show-nav-modal");
  if (e.target.classList.value === "close") {
    hamburger.style.visibility = "visible";
  }
});

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    const element = e.target.classList.value;
    if (element === "nav-link") {
      navModal.classList.remove("show-nav-modal");
      hamburger.style.visibility = "visible";
    }
  });
});

tabs.addEventListener("click", tabClickHandler);
form.addEventListener("submit", formHandler);
