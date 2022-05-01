function search(e) {
    e.preventDefault();
    const form = new FormData(this);
    const query = form.get("search");
    console.log(query);
}
function pageLoaded() {
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", search);
}

window.addEventListener("load", pageLoaded);
