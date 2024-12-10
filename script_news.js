const API_KEY = "4843591cbd1b4f23b82df24a507fb84c";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("doping"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const finalQuery = `doping ${query}`; // Fixed template literal
    try {
        const res = await fetch(`${url}${encodeURIComponent(finalQuery)}&apiKey=${API_KEY}`);
        const data = await res.json();
        if (data.articles) {
            bindData(data.articles);
        } else {
            console.error("No articles found:", data);
        }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = ""; // Clear previous cards

    articles.forEach((article) => {
        if (!article.urlToImage) return; // Skip articles without images
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsSource.innerHTML = article.source?.name || "Unknown"; // Handle undefined source
    newsDesc.innerHTML = article.description || "Description not available";
}

let curSelectedNav = null;

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active"); // Remove 'active' from previous item
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active"); // Add 'active' to current item
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value.trim(); // Trim whitespace
    if (!query) return; // Ignore empty queries
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});
