
const buttonName = document.getElementById("changeName");
const studentName = document.getElementById("studentName");

const buttonBg = document.getElementById("changeBg");
const profileCard = document.getElementById("profileCard");

const buttonDetails = document.getElementById("toggleDetails");
const details = document.getElementById("details");

const bgColors = ["#ffffff", "#fef3c7", "#e0f2fe", "#f3e8ff", "#dcfce7"];
let colorIndex = 0;


buttonName.addEventListener("mouseenter", function () {
  if (studentName.textContent === "Jerume Bandol Atazar") {
    studentName.textContent = "Munsss";
  } else if (studentName.textContent === "Munsss") {
    studentName.textContent = "Munoyy";
  } else if (studentName.textContent === "Munoyy") {
    studentName.textContent = "Nyinggg";
  } else {
    studentName.textContent = "Jerume Bandol Atazar";
  }
});


buttonBg.addEventListener("mouseenter", function () {
  colorIndex = (colorIndex + 1) % bgColors.length;
  profileCard.style.backgroundColor = bgColors[colorIndex];
});


buttonDetails.addEventListener("mouseenter", function () {
  details.classList.toggle("hidden");
});