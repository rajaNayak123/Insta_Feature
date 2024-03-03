var con = document.querySelector('#container');
var icon = document.querySelector('#love');
var icon1 = document.querySelector('#love1');

con.addEventListener('dblclick',function(){
    icon.style.transform = 'translate(-50%,-50%) scale(1)';
    icon.style.opacity = 0.8;
    icon.style.color = 'red'
    icon1.style.color = 'red'

    setTimeout(function(){
        icon.style.opacity = 0;
    },1000)
    setTimeout(function(){
        icon.style.transform = 'translate(-50%,-50%) scale(0)'
    },2000)
})