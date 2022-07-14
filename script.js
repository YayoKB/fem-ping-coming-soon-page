const form = document.querySelector(".inputs");
const email = document.getElementById("email");
const emailValue = document.getElementById("email").value;
const notifyBtn = document.querySelector(".notify-btn");
const error = document.querySelector(".error");
const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

const image = document.querySelector(".image img");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});

function validateEmail() {
  if (re.test(emailValue) === false) {
    console.log("Wrong email");
    error.style.display = "block";
    email.style.border = "1px solid var(--light-red)";
    image.style.margin = "2rem auto 5rem auto";
  } else if (emailValue === "") {
    console.log("Empty email");
    empty.style.display = "block";
    email.style.border = "1px solid var(--light-red)";
    image.style.margin = "2rem auto 5rem auto";
  } else if (re.test(emailValue) === true) {
    console.log("Correct email");
    error.style.display = "none";
    email.style.border = "1px solid var(--pale-blue";
    image.style.margin = "5rem auto";
  }
}
