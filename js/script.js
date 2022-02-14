const aboutMeBtn = document.getElementById('about-me-btn');
const myPortfolioBtn = document.getElementById('portfolio-btn');
const contactMeBtn = document.getElementById('contact-me-btn');
const aboutMe = document.getElementById('about-me');
const myPortfolio = document.getElementById('my-portfolio');
const contactMe = document.getElementById('contact-me');
const intro = document.getElementById('intro');

//Renders About Me section
function showAboutMe() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.setAttribute('class', 'hidden');
    contactMe.setAttribute('class', 'hidden');
    aboutMe.removeAttribute('class', 'hidden');
    
    aboutMeBtn.setAttribute('class', 'nav-btn selected');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn');
}

//Renders Contact Me section
function showContactMe() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.setAttribute('class', 'hidden');
    contactMe.removeAttribute('class', 'hidden');
    aboutMe.setAttribute('class', 'hidden');
    
    aboutMeBtn.setAttribute('class', 'nav-btn');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn selected');
}

//Event listener: About Me section
aboutMeBtn.addEventListener('click', function() {
    showAboutMe();
});

//Event listener: Contact Me section
contactMeBtn.addEventListener('click', function(){
    showContactMe();
})
