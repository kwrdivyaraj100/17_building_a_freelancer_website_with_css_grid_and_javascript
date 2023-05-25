document.addEventListener('DOMContentLoaded', function() {
    loadPortfolio();
});

function loadPortfolio() {
    const url = 'data.json';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.portfolio);
    })
}