console.log('Inside attributes-script.js');

// Global Variables
const profilePicImg = document.querySelector('#profile-pic');
const profileNameH2 = document.querySelector('#profile-name');
const profileDescP = document.querySelector('#profile-desc');
const profileCardDiv = document.querySelector('#profile-card');


// Functions
function changeProfilePicSrc() {
    const profilePicTimeoutId = setTimeout(() => {
        profilePicImg.setAttribute('src', 'img/codeup-duck.png');
    }, 2000);
}
function changeProfileName() {
    const profileNameTimeoutId = setTimeout(() => {
        profileNameH2.innerHTML = 'Randy James';
    }, 4000);
}
function changeProfileDesc() {
    const profileDescTimeoutId = setTimeout(() => {
        profileDescP.classList.add('desc-text-style');
    }, 6000);
}
function changeCardBgColor() {
    const profileCardIntervalId = setInterval(() => {
        profileCardDiv.classList.toggle('pink-bg');
    }, 2000);
}


// Events


// On Load
window.onload = () => {
    changeProfilePicSrc();
    changeProfileName();
    changeProfileDesc();
    changeCardBgColor();
}