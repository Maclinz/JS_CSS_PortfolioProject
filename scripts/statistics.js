(function() {
    const skills = {
        "HTML5": "80%",
        "CSS3": "95%",
        "JavaScript": "75%",
        "React JS": "75%",
        "Node JS": "87%",
        "Python": "70%"
        // Skills can be added here.
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
            title: create.element("p", "skill-title"),
            container: {
                element: create.element("div", "skill-container"),
                text: create.element("p", "skill-container-text"),
                indicator : create.element("div", "skill-container-indicator")
            }
        }
        skill.title.innerHTML = label;
        skill.container.text.innerHTML = progression;
        const span = document.createElement("span");
        span.style.width = progression;
        skill.container.indicator.append(span);
        skill.container.element.append(skill.container.text, skill.container.indicator);
        skill.element.append(skill.title, skill.container.element);
        document.querySelector("#progress").append(skill.element);
    }
})();




