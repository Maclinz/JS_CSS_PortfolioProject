import { projects } from "./data/projects.js";

(function() {
    const create = {
        element: function(type, className) {
            const element = document.createElement(type);
            element.classList.add(`portfolio-${className}`);
            return element;
        }
    }

    for (const project of projects) {
        const item = create.element("article", "item");
        const image = create.element("div", "item-image");
        const img = document.createElement("img");
        img.src = `./images/portfolio/${project.image}`;
        image.append(img);
        const hover = create.element("div", "item-hover");
        const h3 = document.createElement("h3");
        h3.innerHTML = project.name;
        const icons = create.element("div", "item-hover-icons");
        project.icons.forEach(icon => {
            const a = document.createElement("a");
            a.href = icon.url;
            a.target = "_blank";
            const i = document.createElement("i");
            i.className = icon.icon;
            a.append(i);
            icons.appendChild(a);
        })
        hover.append(h3, icons);
        item.append(image, hover);
        document.querySelector("#portfolio-container").append(item);
    }
})();
