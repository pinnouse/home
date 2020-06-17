let showProjects = false;

let homeDocument = "";
let otherDocument = "<h1>Projects</h1><span><a href=\"#\" onclick=\"toggle()\">back</a></span>";

let projects = [
    {
        "title": "Discord Bot Dashboard",
        "description": "A dashboard for managing a widely used Discord bot that serves over 9 million users. Built with Nuxt.JS and interacts with a REST API.",
        "image": "dashboard.zerotwo.bot_user.png",
        "links": [{
            "text": "Dashboard",
            "url": "https://dashboard.zerotwo.bot"
        }]
    },
    {
        "title": "Oslyn",
        "description": "Built an AI-powered app with a small group of individuals that accompanies you when you play songs.",
        "image": "oslyn.io.png",
        "links": [{
            "text": "Check Out Oslyn",
            "url": "https://oslyn.io/"
        }]
    },
    {
        "title": "Ruumi",
        "description": "Video sharing service where the main feature is the ability to join together with friends and watch together.",
        "image": "ruumi.net.png",
        "links": [{
            "text": "Visit Ruumi",
            "url": "https://ruumi.net"
        }]
    },
    {
        "title": "AI Chatbot",
        "description": "AI-based chatbot for anyone to talk to. This project was used for a Discord bot of my own.",
        "image": "z2b.xyz.png",
        "links": [{
            "text": "GitHub Repository",
            "url": "https://github.com/pinnouse/PTorchChat",
        },{
            "text": "Bot URL",
            "url": "https://z2b.xyz"
        }]
    },
    {
        "title": "OfflineTV Fan Site",
        "description": "Used vanilla HTML, CSS, and JS as well as a websocket backend to create a fan site for the content creation group OfflineTV.",
        "image": "offline_tv_fan.png",
        "links": [{
            "text": "Check It Out",
            "url": "https://gnowbros.com/offline/"
        }]
    },
    {
        "title": "Robotics Website",
        "image": "uhsrobotics.org_.png",
        "description": "Designed the robotics website to be used in the 2018-2019 school year for High School robotics club.",
        "links": [{
            "text": "GitHub Repository",
            "url": "https://github.com/pinnouse/UHSRoboticsWeb"
        }]
    }
];

let card = null;
let container = null;

window.onload = function() {
    card = document.querySelector('.card');
    container = document.querySelector('.container');
    homeDocument = card.innerHTML;
    projects.forEach(function(project) {
        let links = "";
        if (project.links && project.links.length > 0) {
            project.links.forEach(function(link) {
                links += `<a href="${link.url}" target="_blank" rel="noreferrer noopener">${link.text}</a>`
            });
        }
        otherDocument += `<div>
            <h2>${project.title}</h2>
            <div class="image-container">
            <a href="${project.image}" target="_blank" rel="noreferrer noopener"><img src="${project.image}" /></a></div>
            <span>
            ${project.description}
            </span>
            <span class="links">
            ${links}
            </span>
        </div>`;
    });
}

function toggle() {
    showProjects = !showProjects;
    card.classList.add('inactive');
    setTimeout(function() {
        card.innerHTML = showProjects ? otherDocument : homeDocument;
        card.classList.remove('inactive');
        if (showProjects) {
            container.classList.add('projects');
        } else {
            container.classList.remove('projects');
        }
    }, 700);
}