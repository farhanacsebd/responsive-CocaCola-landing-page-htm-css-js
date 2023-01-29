const btnRed = document.getElementById("btnRed");
const btnWhite = document.getElementById("btnWhite");
const btnBlack = document.getElementById("btnBlack");
const btnOrange = document.getElementById("btnOrange");
const btnVanilla = document.getElementById("btnVanilla");
const addImg = document.getElementById("addImg");
// console.log(addImg.parentElement.parentElement.children[2].children[0].children[2]);

function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

btnRed.addEventListener("click", (e) => {
  e.preventDefault();
  addImg.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="/images/coke001.png" alt="">
    `;
  addImg.parentElement.parentElement.style.backgroundColor = "#161616";
  addImg.parentElement.parentElement.children[0].style.backgroundColor = "#830C0F";
  addImg.appendChild(div);
});

btnWhite.addEventListener("click", (e) => {
  e.preventDefault();
  addImg.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="/images/coke002.png" alt="">
    `;
  addImg.parentElement.parentElement.style.backgroundColor = "#A1A19F";
  addImg.parentElement.parentElement.children[0].style.backgroundColor = "#D10B20";
  addImg.appendChild(div);
});

btnBlack.addEventListener("click", (e) => {
  e.preventDefault();
  addImg.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="/images/coke003.png" alt="">
    `;
  addImg.parentElement.parentElement.style.backgroundColor = "#830C0F";
  addImg.parentElement.parentElement.children[0].style.backgroundColor = "#090D0B";

  // this is only button part
  addImg.parentElement.parentElement.children[2].children[0].children[2].style.backgroundColor = "#e51e2a";
  addImg.parentElement.parentElement.children[2].children[0].children[2].style.color = "#fff";
  addImg.appendChild(div);
});

btnOrange.addEventListener("click", (e) => {
  e.preventDefault();
  addImg.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="/images/cocacola2.png" alt="">
    `;
  // this only bg color
  addImg.parentElement.parentElement.style.backgroundColor = "#7A7670";
  addImg.parentElement.parentElement.children[0].style.backgroundColor = "#F88F00";

  // this is only button part
  addImg.parentElement.parentElement.children[2].children[0].children[2].style.backgroundColor = "#F18100";
  addImg.parentElement.parentElement.children[2].children[0].children[2].style.color = "#fff";
  addImg.appendChild(div);
});

btnVanilla.addEventListener("click", (e) => {
  e.preventDefault();
  addImg.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="/images/cocacola5.png" alt="">
    `;
  // this is only bg color
  addImg.parentElement.parentElement.style.backgroundColor = "#F40102";
  addImg.parentElement.parentElement.children[0].style.backgroundColor = "#CBB88F";

  // this is only button part
  addImg.parentElement.parentElement.children[2].children[0].children[2].style.backgroundColor = "#EDDFC2";
  addImg.parentElement.parentElement.children[2].children[0].children[2].style.color = "#e51e2a";
  addImg.appendChild(div);
});