import { skills } from "./data/skills.js";

(function() {
    const create = {
        element: function(type, className) {
            const element = document.createElement(type);
            element.classList.add(className);
            return element;
        }
    }

    for (const [label, progression] of Object.entries(skills)) {
        const item = create.element("article", "skill");
        const image = create.element("img", "skill-image");
        image.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${label.toLowerCase()}/${label.toLowerCase()}-original.svg`;
        const container = create.element("div", "skill-container");
        const text = create.element("p", "skill-container-text");
        text.innerHTML = progression;
        const indicator = create.element("div", "skill-container-indicator");
        const span = document.createElement("span");
        span.style.width = progression;
        indicator.append(span);
        container.append(text, indicator);
        item.append(image, container);
        document.querySelector("#statistics").append(item);
    }
})();

