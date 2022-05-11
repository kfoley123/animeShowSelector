function search(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    const formData = new FormData(this); //populates our new formdata obj with all the data from form
    const query = formData.get("search");
    const rating = formData.get("rating");
    const animeType = formData.get("animeType");
    const status = formData.get("status");
    console.log(query);

    fetch(
        `https://api.jikan.moe/v4/anime?q=${query}&rating=${rating}&type=${animeType}&status=${status}`
    )
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
