document.addEventListener('DOMContentLoaded', function() {
    loadPortfolio();
});

function loadPortfolio() {
   const url = 'data.json';
   fetch(url)
    .then( response => response.json() )
    .then(data =>  {
        let html = '';
        data.portfolio.forEach( item => {
            // Build the Template
            html += `   
                <div class="item">
                    <img src="img/${item.id}.jpg">
                    <div class="content">
                        <h3>${item.projectname}</h3>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `;
        });
        // after we build the template, we add this into the HTML
        document.querySelector('#portfolio').innerHTML = html;
    })
    .catch(function(error) {
        console.log(error);
    });
}