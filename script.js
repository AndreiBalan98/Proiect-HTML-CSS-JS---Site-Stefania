const homeLogoScroll = 350;
const photoAndTextScroll = 250;

function homeLogoAppear(){

    let x = document.documentElement.scrollTop;
    if(x > homeLogoScroll){
        document.getElementById('nbHomeLogo').style.opacity = 1;
    }
    else if(x < homeLogoScroll){
        document.getElementById('nbHomeLogo').style.opacity = 0;
    }
}

function photoAndTextAppear(){

    let x = document.documentElement.scrollTop;
    if(x > photoAndTextScroll){
        document.getElementById('spPhoto').style.opacity = 1;
        document.getElementById('spText').style.opacity = 1;
    }
}

function homeLogoClick(){

    // document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: "smooth"});
}

window.onload = function() {

    document.getElementById('nbHomeLogo').addEventListener('click', homeLogoClick);
    window.onscroll = function() {
        homeLogoAppear();
        photoAndTextAppear();
    };
}