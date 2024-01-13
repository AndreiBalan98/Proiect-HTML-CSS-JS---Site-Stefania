const homeLogoScroll = 350;
const photoAndTextScroll = 250;

function arrowAppear(){

    document.getElementById("tbcArrow").style.opacity = 1;
}

function arrowDisplayNone(){

    document.getElementById("tbcArrow").style.display = 'none';
}

function arrowClick(){

    document.getElementById("secondPage").scrollIntoView({ behavior: 'smooth' });
    console.log("arrow button clicked!");
}

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
        document.getElementById("spPhotoAndText").style.opacity = 1;
        document.getElementById("tbcArrow").style.opacity = 0;
        setTimeout(arrowDisplayNone, 1000);
    }
}

function homeLogoClick(){

    // document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: "smooth"});
}

window.onload = function() {

    setTimeout(arrowAppear, 2000);
    document.getElementById('tbcArrow').addEventListener('click', arrowClick);
    document.getElementById('nbHomeLogo').addEventListener('click', homeLogoClick);
    window.onscroll = function() {
        homeLogoAppear();
        photoAndTextAppear();
    };
}