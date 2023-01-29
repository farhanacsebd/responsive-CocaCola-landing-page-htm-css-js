const btnRed =document.getElementById('btnRed');
const btnWhite =document.getElementById('btnWhite');
const btnBlack =document.getElementById('btnBlack');
const addImg = document.getElementById('addImg');

btnRed.addEventListener('click',(e)=>{
    e.preventDefault()
    addImg.textContent = '';
    const div = document.createElement('div');
    div.innerHTML =
    `
    <img src="/images/coke001.png" alt="">
    `;
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
    addImg.appendChild(div);
});