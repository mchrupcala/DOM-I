const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// const html = document.querySelector('html');

// const script = document.createElement('script');
// html.appendChild(script);


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Updating the nav bar.
const nav = document.querySelectorAll('a');

var i = 1;
nav.forEach(attrs => {
  attrs.textContent = siteContent["nav"]["nav-item-"+[i]];
  i++;
})


//Changed the CTA section.
const h1 = document.querySelector('h1');
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


//Updating the main content
const h4 = document.querySelectorAll('.text-content h4');
console.log(h4);
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

const mainContent = document.querySelectorAll('.text-content p');
mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contact = document.querySelectorAll('.contact p');
contact[0].textContent = siteContent["contact"]['address'];
contact[1].textContent = siteContent["contact"]['phone'];
contact[2].textContent = siteContent["contact"]['email'];

//Updated the footer.
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


nav.forEach(attrs => {
  attrs.style.color = 'green';
})

const navElement = document.querySelector('nav');

newA = document.createElement('a');
newB = document.createElement('a');
navElement.prepend(newA);
navElement.appendChild(newB);
newA.innerText = 'Pick Me!';
newB.innerText = 'No, Me!';

const body = document.getElementsByClassName('container');
body[0].style.background = '#708090';
body[0].style.padding = '0 5% 5% 5%';

midImg.style.width = "100%";

const body1 = document.querySelector('.container');







function showOverlay() {
  const overlay = document.createElement('div');
  // body1.parentNode.insertBefore(overlay, body1);
  // overlay.appendChild(body1);
  body1.appendChild(overlay);
  overlay.style.position = 'fixed';
  overlay.style.display = "block";
  overlay.style.zIndex = 3;
  overlay.style.backgroundColor = 'rgba(74,55,55,.5)';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.top = 0;
  overlay.style.bottom = 0;
  overlay.style.left = 0;
  overlay.style.right = 0;
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";

  const popDiv = document.createElement('div');
  overlay.appendChild(popDiv);
  popDiv.style.width = '400px';
  popDiv.style.margin = '0 auto';
  popDiv.style.display = 'flex';
  popDiv.style.justifyContent = 'center';
  popDiv.style.alignItems = 'center';
  popDiv.style.height = '400px';
  popDiv.style.backgroundColor = "blue";

  const button2 = document.createElement('button');
  popDiv.appendChild(button2);

  // function disappear() {
  //   popDiv.style.display = 'none';
  // }

  button2.style.width = "40%";
  button2.style.height = '100px';
  button2.style.textContent = 'Sign Up';
  button2.style.color = 'black';
  // button2.setAttribute('onclick', disappear());
  // button2.style.
}

//Add Event Listener

const start = document.createElement('div');
start.textContent = "Let's get started!";

button.addEventListener('click', (event) => {
  button.parentNode.appendChild(start);
})

// window.onload = setTimeout(showOverlay, 1000);