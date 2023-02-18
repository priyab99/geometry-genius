

document.getElementById('card').addEventListener('click',function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  card.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
})

document.getElementById('card2').addEventListener('click',function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  card.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
})



