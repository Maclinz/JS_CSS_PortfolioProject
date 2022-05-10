(function() {
    const skills = {
        "HTML5": "80%",
        "CSS3": "95%",
        "JavaScript": "75%",
        "React": "75%",
        "NodeJS": "87%",
        "Python": "70%"
        /*
        Skills can be added here.
        The image use for the skills are from the following website: https://devicon.dev/
        Please, use the same naming as the website.
        */
    }

    const create = {
        element: function(type, className) {
            const element = document.createElement(type);
            element.classList.add(className);
            return element;
        }
    }

    for (const [label, progression] of Object.entries(skills)) {
        const skill = {
            element: create.element("div", "skill"),
            image: create.element("img", "skill-image"),
            container: {
                element: create.element("div", "skill-container"),
                text: create.element("p", "skill-container-text"),
                indicator : create.element("div", "skill-container-indicator")
            }
        }
        skill.image.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${label.toLowerCase()}/${label.toLowerCase()}-original.svg`
        skill.container.text.innerHTML = progression;
        const span = document.createElement("span");
        span.style.width = progression;
        skill.container.indicator.append(span);
        skill.container.element.append(skill.container.text, skill.container.indicator);
        skill.element.append(skill.image, skill.container.element);
        document.querySelector("#statistics").append(skill.element);
    }
})();




