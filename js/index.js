const btnRed =document.getElementById('btnRed');
const btnWhite =document.getElementById('btnWhite');
const btnBlack =document.getElementById('btnBlack');
const addImg = document.getElementById('addImg');
console.log(addImg.parentElement.parentElement.children[0]);
btnRed.addEventListener('click',(e)=>{
    e.preventDefault()
    addImg.textContent = '';
    const div = document.createElement('div');
    div.innerHTML =
    `
    <img src="/images/coke001.png" alt="">
    `;
    addImg.parentElement.parentElement.style.backgroundColor = '#161616';
    addImg.parentElement.parentElement.children[0].style.backgroundColor = '#830C0F';
    addImg.appendChild(div);
});

btnWhite.addEventListener('click',(e)=>{
    e.preventDefault()
    addImg.textContent = '';
    const div = document.createElement('div');
    div.innerHTML =
    `
    <img src="/images/coke002.png" alt="">
    `;
    addImg.parentElement.parentElement.style.backgroundColor = '#A1A19F';
    addImg.parentElement.parentElement.children[0].style.backgroundColor = '#D10B20';
    addImg.appendChild(div);
});

btnBlack.addEventListener('click',(e)=>{
    e.preventDefault()
    addImg.textContent = '';
    const div = document.createElement('div');
    div.innerHTML =
    `
    <img src="/images/coke003.png" alt="">
    `;
    addImg.parentElement.parentElement.style.backgroundColor = '#830C0F';
    addImg.parentElement.parentElement.children[0].style.backgroundColor = '#090D0B';
    addImg.appendChild(div);
});