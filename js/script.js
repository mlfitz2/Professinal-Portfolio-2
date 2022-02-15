const aboutMeBtn = document.getElementById('about-me-btn');
const myPortfolioBtn = document.getElementById('portfolio-btn');
const contactMeBtn = document.getElementById('contact-me-btn');
const aboutMe = document.getElementById('about-me');
const myPortfolio = document.getElementById('my-portfolio');
const contactMe = document.getElementById('contact-me');
const intro = document.getElementById('intro');

const backBtn = document.querySelector('.back-btn')
const pubCrawlerBtn = document.getElementById('pubcrawler');
const pubCrawler = document.getElementById('pubcrawler-page');
const projectPage = document.querySelector('.project-page');

//Renders About Me section
function showAboutMe() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.setAttribute('class', 'hidden');
    contactMe.setAttribute('class', 'hidden');
    aboutMe.removeAttribute('class', 'hidden');
    projectPage.setAttribute('class', 'hidden');
    
    aboutMeBtn.setAttribute('class', 'nav-btn selected');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn');
}

function showMyPortfolio() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.removeAttribute('class', 'hidden');
    contactMe.setAttribute('class', 'hidden');
    aboutMe.setAttribute('class', 'hidden');
    projectPage.setAttribute('class', 'hidden');

    aboutMeBtn.setAttribute('class', 'nav-btn');
    myPortfolioBtn.setAttribute('class', 'nav-btn selected');
    contactMeBtn.setAttribute('class', 'nav-btn');
}

//Renders Contact Me section
function showContactMe() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.setAttribute('class', 'hidden');
    contactMe.removeAttribute('class', 'hidden');
    aboutMe.setAttribute('class', 'hidden');
    projectPage.setAttribute('class', 'hidden');
    
    aboutMeBtn.setAttribute('class', 'nav-btn');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn selected');
}

//Return to portfolio
function backToPortfolio() {
    projectPage.setAttribute('class', 'hidden');
    myPortfolio.removeAttribute('class', 'hidden');

}

//Renders PubCrawler page
function showPubCrawler() {
    myPortfolio.setAttribute('class', 'hidden');
    pubCrawler.removeAttribute('class', 'hidden');
}


//Event listener: About Me section
aboutMeBtn.addEventListener('click', function() {
    showAboutMe();
});

//Event listener: Portfolio section
myPortfolioBtn.addEventListener('click', function() {
    showMyPortfolio();
})

//Event listener: Contact Me section
contactMeBtn.addEventListener('click', function(){
    showContactMe();
})

//Event listener: go back to portfolio from project page
backBtn.addEventListener('click', function() {
    backToPortfolio();
})

//Event listener: show pubcrawler page
pubCrawlerBtn.addEventListener('click', function() {
    showPubCrawler();
})
