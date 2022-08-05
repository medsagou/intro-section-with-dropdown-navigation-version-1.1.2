// variable for desktop
const features = document.getElementById("features-button");
const company = document.getElementById("company-button");
const drpDownOne = document.getElementById("drop-down-one");
const drpDownTwo = document.getElementById("drop-down-two");

// variable for mobile
const menuBtn = document.getElementById("menu-botton");
const closeBtn = document.getElementById("close-menu-botton");
const menuContainer = document.getElementById("main-container-menu");
const imgCloseOpenMenuOneDown = document.getElementById("close-open-img1-down");
const imgCloseOpenMenuOneUp = document.getElementById("close-open-img1-up");
const imgCloseOpenMenuTwoUp = document.getElementById("close-open-img2-up");
const imgCloseOpenMenuTwoDown = document.getElementById("close-open-img2-down");
// var width = window.matchMedia("(min-width: 600px)")

// function for dekstop
features.addEventListener('click',function() {
    const test = features.getAttribute('area');
    if (test=='false'){
        drpDownOne.style.display = 'block';
        features.setAttribute('area','true');

        imgCloseOpenMenuOneDown.style.display='none';
        imgCloseOpenMenuOneUp.style.display='block';
        imgCloseOpenMenuTwoDown.style.display='block';
        imgCloseOpenMenuTwoUp.style.display='none';

        drpDownTwo.style.display = 'none';
        company.setAttribute('area','false');

    } else {
        imgCloseOpenMenuOneDown.style.display='block';
        imgCloseOpenMenuOneUp.style.display='none';

        drpDownOne.style.display = 'none';
        features.setAttribute('area','false');
    }
});
company.addEventListener('click',function() {
    const test = company.getAttribute('area');
    if (test=='false'){
        drpDownTwo.style.display = 'block';
        company.setAttribute('area','true');

        imgCloseOpenMenuTwoDown.style.display='none';
        imgCloseOpenMenuTwoUp.style.display='block';
        imgCloseOpenMenuOneDown.style.display='block';
        imgCloseOpenMenuOneUp.style.display='none';

        drpDownOne.style.display = 'none';
        features.setAttribute('area','false');

    } else {
        imgCloseOpenMenuTwoDown.style.display='block';
        imgCloseOpenMenuTwoUp.style.display='none';
        drpDownTwo.style.display = 'none';
        company.setAttribute('area','false');
    }
});
window.addEventListener('click', function(e){
    if (!features.contains(e.target) & !company.contains(e.target)){
        drpDownOne.style.display = 'none';
        features.setAttribute('area','false');
        drpDownTwo.style.display = 'none';
        company.setAttribute('area','false');

        imgCloseOpenMenuTwoDown.style.display='block';
        imgCloseOpenMenuTwoUp.style.display='none';
        imgCloseOpenMenuOneDown.style.display='block';
        imgCloseOpenMenuOneUp.style.display='none';
    }
  });

// functions for mobile
menuBtn.addEventListener('click', function() {
    menuContainer.style.display='block';
})
closeBtn.addEventListener('click', function() {
    menuContainer.style.display='none';
})
window.addEventListener('click',function(e){
    if (!menuContainer.contains(e.target) & !menuBtn.contains(e.target)){
        menuContainer.style.display='none';

        imgCloseOpenMenuTwoDown.style.display='block';
        imgCloseOpenMenuTwoUp.style.display='none';
        imgCloseOpenMenuOneDown.style.display='block';
        imgCloseOpenMenuOneUp.style.display='none';
    }
})














