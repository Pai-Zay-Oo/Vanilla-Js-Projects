const colors = ['red','blue','green',"rgba(100,200,180)","#ffffff"];
let btn = document.getElementById('btn');
let color = document.querySelector('.color');
btn.addEventListener('click',function(){
    let randomNumber = colors[getRandomNumber()];
    // console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
    
});
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}