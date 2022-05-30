import { articles } from "./data/articles.js";

(function() {
    const create = {
        element: function(type, className) {
            const element = document.createElement(type);
            element.classList.add(className);
            return element;
        }
    }

    for (const article of articles) {
        const item = create.element("article", "article");
        const image = document.createElement("img");
        image.src = `./images/blog/${article.image}`;
        const text = create.element("div", "article-text");
        const h4 = document.createElement("h4");
        const link = document.createElement("a");
        link.href = article.url;
        link.innerHTML = article.title;
        h4.append(link);
        const paragraph = document.createElement("p");
        paragraph.innerHTML = article.summary;
        text.append(h4, paragraph);
        item.append(image, text);
        document.querySelector("#articles").append(item);
    }
})();
