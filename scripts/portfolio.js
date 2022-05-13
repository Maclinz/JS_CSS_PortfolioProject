(function() {
    const projects = [
        {
            name: "Project #1",
            image: "port1.jpg",
            icons: [
                { url: "#", icon: "fab fa-github" },
                { url: "#", icon: "fab fa-behance" },
                { url: "#", icon: "fab fa-youtube" }
            ]
        },
        {
            name: "Project #2",
            image: "port2.jpg",
            icons: [
                { url: "#", icon: "fab fa-github" },
                { url: "#", icon: "fab fa-behance" },
                { url: "#", icon: "fab fa-youtube" }
            ]
        },
        {
            name: "Project #3",
            image: "port3.jpg",
            icons: [
                { url: "#", icon: "fab fa-github" },
                { url: "#", icon: "fab fa-behance" },
                { url: "#", icon: "fab fa-youtube" }
            ]
        },
        {
            name: "Project #4",
            image: "port4.jpg",
            icons: [
                { url: "#", icon: "fab fa-github" },
                { url: "#", icon: "fab fa-behance" },
                { url: "#", icon: "fab fa-youtube" }
            ]
        },
        {
            name: "Project #5",
            image: "port5.jpg",
            icons: [
                { url: "#", icon: "fab fa-github" },
                { url: "#", icon: "fab fa-behance" },
                { url: "#", icon: "fab fa-youtube" }
            ]
        },
        {
            name: "Project #6",
            image: "port6.jpg",
            icons: [
                { url: "#", icon: "fab fa-github" },
                { url: "#", icon: "fab fa-behance" },
                { url: "#", icon: "fab fa-youtube" }
            ]
        },
        {
            name: "Project #7",
            image: "port7.jpg",
            icons: [
                { url: "#", icon: "fab fa-github" },
                { url: "#", icon: "fab fa-behance" },
                { url: "#", icon: "fab fa-youtube" }
            ]
        },
        /*
        Objects can be added here. The name of the object is the name of the project.
        The image is the name of the image file.
        The icons are an array of objects. Each object has a url and an icon from the Font Awesome library.
         */
    ]

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
