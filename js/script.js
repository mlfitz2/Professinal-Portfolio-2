const aboutMeBtn = document.getElementById('about-me-btn');
const myPortfolioBtn = document.getElementById('portfolio-btn');
const contactMeBtn = document.getElementById('contact-me-btn');
const myResumeBtn = document.getElementById('resume-btn');
const aboutMe = document.getElementById('about-me');
const myPortfolio = document.getElementById('my-portfolio');
const contactMe = document.getElementById('contact-me');
const myResume = document.getElementById('my-resume');
const intro = document.getElementById('intro');


//Combines two side navbars into one (at the top for mobile view)
function moveNavbar() {
    const size = window.matchMedia('(max-width: 808px)')
    if (size.matches) {
        document.getElementById('nav1').append(document.getElementById('contact-me-btn'));
        document.getElementById('nav1').append(document.getElementById('resume-btn'));
    }
}

function showAboutMe() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.setAttribute('class', 'hidden');
    contactMe.setAttribute('class', 'hidden');
    myResume.setAttribute('class', 'hidden');
    aboutMe.removeAttribute('class', 'hidden');
    
    aboutMeBtn.setAttribute('class', 'nav-btn selected');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn');
    myResumeBtn.setAttribute('class', 'nav-btn');
}

aboutMeBtn.addEventListener('click', function() {
    showAboutMe();
});

//Event listener - on loading, moves the two navbars together on mobile screens
window.addEventListener('load', function() {
    moveNavbar();
});