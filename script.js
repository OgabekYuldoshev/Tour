document.querySelector("#enter-res").addEventListener('click', function(){

    document.querySelector("#respons").style.transform = "translateX(0%)";
    document.querySelector("#enter-res").style.opacity = "0";
    
})
document.querySelector("#exit").addEventListener('click', function(){
    document.querySelector("#respons").style.transform = "translateX(100%)";
    document.querySelector("#enter-res").style.opacity = "1";

})



window.addEventListener('scroll',function(){
    var page =  window.pageYOffset;
    if(page>250){
        document.querySelector('#travel').style.background = 'white'
    }
    if(page>130){
        document.querySelector('.line').style.width = '15vh'
        console.log(page);
    }
    if(page>200){
        document.querySelector('.mainCard').style.transform = 'translateY(0vh)';
    }
    if(page>350){
        document.querySelector('#f1').style.opacity = '1';
    }
    if(page>850){
        document.querySelector('.img1').style.transform = 'translateY(0vh)';
        document.querySelector('.img2').style.transform = 'translateY(0vh)';
        document.querySelector('.img3').style.transform = 'translateY(0vh)';
    }
    if(page>1100){
        document.querySelector('.img4').style.transform = 'translateY(0vh)';
        document.querySelector('.img5').style.transform = 'translateY(0vh)';
        document.querySelector('.img6').style.transform = 'translateY(0vh)';
    }
    if(page>1444){
        document.querySelector('.line1').style.width = ' 20vh';
    }
    if(page>1650){
        document.querySelector('.about').style.opacity = '1';
    }
    if(page>2160){
        document.querySelector('.line2').style.width = ' 23vh';
    }
    if(page>2430){
        document.querySelector('.massage').style.transform = 'translateX(0vh)';
        document.querySelector('.massageInfo').style.opacity = '1';
    }
    if(page>450){
        document.querySelector('#buy').style.transform = 'translatex(0vh)';
    }
    if(page>500){
        document.querySelector("#enter-res").style.transform = "translate(-0%, -50%)";
} else{
    document.querySelector("#enter-res").style.transform = "translate(100%, -50%)";
}

console.log(page);
})

document.querySelector('#buy').addEventListener('click', function(){

    document.querySelector('.mainCard').style.transform = 'rotateY(180deg)';

})
document.querySelector('#buyNow').addEventListener('click', function(){

    document.querySelector('.mainCard').style.transform = 'rotateY(0deg)';

})

document.querySelector('#backInfo').addEventListener('click', function(){

    document.querySelector('#aboutInfo').style.display = 'none';
    document.querySelector('.hotelInfo').style.display = 'block';
    document.querySelector('.serviceInfo').style.display = 'block';
    document.querySelector('.foodInfo').style.display = 'block';


})

document.querySelector('#home').addEventListener('click', function(){

    document.querySelector('#aboutInfo').style.display = 'block';

    document.querySelector('.serviceInfo').style.display = 'none';

    document.querySelector('.foodInfo').style.display = 'none';
    


})

document.querySelector('#serv').addEventListener('click', function(){

    document.querySelector('#aboutInfo').style.display = 'block';

    document.querySelector('.hotelInfo').style.display = 'none';

    document.querySelector('.foodInfo').style.display = 'none';
    


})

document.querySelector('#foods').addEventListener('click', function(){

    document.querySelector('#aboutInfo').style.display = 'block';

    document.querySelector('.serviceInfo').style.display = 'none';

    document.querySelector('.hotelInfo').style.display = 'none';
    


})

  




