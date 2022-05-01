function search(e) {
    e.preventDefault();
    const form = new FormData(this);
    const query = form.get("search");
    console.log(query);

    fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
        .then((response) => response.json())
        .then(updatePage);
}

function updatePage(jsonResponse) {
    var searchResults = jsonResponse.data;
    var results = document.getElementById("results");
    var resultsInnerHTML = `
    <h1>${searchResults[0].url}</h1>
    `;
    results.innerHTML = resultsInnerHTML;
}

function pageLoaded() {
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", search);
}

window.addEventListener("load", pageLoaded);
