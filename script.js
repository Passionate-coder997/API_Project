let search = document.getElementById('country_search');

let Sbtn = document.getElementById('btn');

Sbtn.addEventListener('click', () => {
    let country = search.value;

    let furl = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

    console.log(furl);

    fetch(furl)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
        })
        .catch(() => {
            if (country.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        });
});
// KeyBoard Shortcut
document.addEventListener('keyup', keyUpHandler, false);

function keyUpHandler(e) {
    if (e.keyCode === 13) {
        Sbtn.click();
    }
}
