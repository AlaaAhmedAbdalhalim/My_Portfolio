var skills = [
    { image: 'images/XD.svg', skill: 'Adobe XD' },
    { image: 'images/Figma.svg', skill: 'Figma' },
    { image: 'images/HTML.svg', skill: 'HTML' },
    { image: 'images/CSS.svg', skill: 'CSS' },
    { image: 'images/JS.svg', skill: 'Javascript' },
    { image: 'images/Bootstrap.svg', skill: 'Bootstrap' },
    { image: 'images/Tailwindcss.svg', skill: 'Tailwindcss' },
    { image: 'images/Angular.svg', skill: 'Angular' }

]
var projects = [
    { link: 'https://www.behance.net/gallery/151863327/DailyUI', proimage: 'images/Signup.png', projectName: 'Yoga app' },
    { link: 'https://www.behance.net/gallery/153175485/Calculator-Design', proimage: 'images/Calculator.png', projectName: 'Calculator app' },
    { link: 'https://www.behance.net/gallery/151863967/DailyUI', proimage: 'images/Checkout.png', projectName: 'Checkout Page' },

]
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('Skills');
    const projectcontainer = document.getElementById('projectsDiv');
    skills.forEach(item => {
        const skillContainer = document.createElement('div');
        skillContainer.setAttribute('class', "card");
        skillContainer.innerHTML =
            `<img src=${item.image} alt=${item.skill} class="Skills-images">
           <h5 class="Skills-texts">${item.skill}</h5>`
        container.appendChild(skillContainer);
    })
    projects.forEach(item => {
        const projectsContainer = document.createElement('div');
        projectsContainer.setAttribute('class', "ProjectsImages");
        projectsContainer.innerHTML =
            `
            <a href=${item.link} target="_blank">
            <img src=${item.proimage} alt=${item.proimage} class="yoga">
           <p >${item.projectName}</p>`
        projectcontainer.appendChild(projectsContainer);
    })
})



/*     <img src="" alt="Yoga app" class="yoga"><br>
    <p></p>
</a>
</div> */