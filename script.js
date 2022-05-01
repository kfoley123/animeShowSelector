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

    var resultsContainer = document.getElementById("results");

    var resultsInnerHTML =
        `<h1> Results </h1>` + displaySearchResults(searchResults);
    resultsContainer.innerHTML = resultsInnerHTML;
}

function displaySearchResults(searchResults) {
    var searchResultsString = "";
    searchResults.forEach((searchResult) => {
        searchResultsString += `<li>${searchResult.title}</li>`;
    });
    return searchResultsString;
}

function pageLoaded() {
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", search);
}

window.addEventListener("load", pageLoaded);
