const aboutMeBtn = document.getElementById('about-me-btn');
const myPortfolioBtn = document.getElementById('portfolio-btn');
const contactMeBtn = document.getElementById('contact-me-btn');
const aboutMe = document.getElementById('about-me');
const myPortfolio = document.getElementById('my-portfolio');
const contactMe = document.getElementById('contact-me');
const intro = document.getElementById('intro');

const pubCrawlerBtn = document.getElementById('pubcrawler');
const pubCrawler = document.getElementById('pubcrawler-page');
const workdayPlannerBtn = document.getElementById('workday-planner');
const workdayPlanner = document.getElementById('workday-planner-page');
const quizBtn = document.getElementById('js-quiz');
const jsQuiz = document.getElementById('quiz-page');

//Renders About Me section
function showAboutMe() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.setAttribute('class', 'hidden');
    contactMe.setAttribute('class', 'hidden');
    aboutMe.removeAttribute('class', 'hidden');
    workdayPlanner.setAttribute('class', 'hidden');
    pubCrawler.setAttribute('class', 'hidden');
    jsQuiz.setAttribute('class', 'hidden');

    aboutMeBtn.setAttribute('class', 'nav-btn selected');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn');
}

function showMyPortfolio() {
    intro.setAttribute('class', 'hidden');
    myPortfolio.removeAttribute('class', 'hidden');
    contactMe.setAttribute('class', 'hidden');
    aboutMe.setAttribute('class', 'hidden');
    workdayPlanner.setAttribute('class', 'hidden');
    pubCrawler.setAttribute('class', 'hidden');
    jsQuiz.setAttribute('class', 'hidden');

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
    workdayPlanner.setAttribute('class', 'hidden');
    pubCrawler.setAttribute('class', 'hidden');
    jsQuiz.setAttribute('class', 'hidden');
    
    aboutMeBtn.setAttribute('class', 'nav-btn');
    myPortfolioBtn.setAttribute('class', 'nav-btn');
    contactMeBtn.setAttribute('class', 'nav-btn selected');
}

//Renders PubCrawler page
function showPubCrawler() {
    myPortfolio.setAttribute('class', 'hidden');
    pubCrawler.removeAttribute('class', 'hidden');
}

//Renders Workday Planner page
function showWorkdayPlanner() {
    myPortfolio.setAttribute('class', 'hidden');
    workdayPlanner.removeAttribute('class', 'hidden');
}

function showQuiz() {
    myPortfolio.setAttribute('class', 'hidden');
    jsQuiz.removeAttribute('class', 'hidden');
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

//Event listener: show pubcrawler page
pubCrawlerBtn.addEventListener('click', function() {
    showPubCrawler();
})

//Event listener: show workday planner page
workdayPlannerBtn.addEventListener('click', function() {
    showWorkdayPlanner();
})

//Event listener: show JS quiz
quizBtn.addEventListener('click', function() {
    showQuiz();
})