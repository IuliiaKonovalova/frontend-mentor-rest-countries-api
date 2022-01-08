// Variables:
let countries;
const countriesList = document.getElementById("countries");
const dataContainer = document.getElementById("data__container");
const countryName = document.getElementById("country");
const countryNativeName = document.getElementById("native_name");
const countryPopulation = document.getElementById("population");
const countryRegion = document.getElementById("region");
const countrySubregion = document.getElementById("subregion");
const countryCapital = document.getElementById("capital");
const countryDomain = document.getElementById("top_domain");
const countryCurrencies = document.getElementById("currencies");
const countryLanguages = document.getElementById("languages");


const dropdownBtn = document.getElementById('dropdown');
const regionFilters = dropdownBtn.querySelectorAll('li');
// show and hide the filters (li tags)


// mode control

const modeControl = document.getElementById("mode-control");


/**
 * Load content onLoad
 */
document.addEventListener('DOMContentLoaded', function () {
  modeControl.addEventListener("click", changeMode)
  dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('open');
  });
  fetchDataCountries();
});

async function fetchDataCountries() {

  const res = await fetch("assets/js/countries.json");
  const countriesData = await res.json();

  displayCountries(countriesData);
}

const displayCountries = function (countriesData) {
  countriesList.innerHTML = '';
  countriesData.forEach(country => {
    const countryCard = document.createElement('div');
    countryCard.classList.add('data__card');

    countryCard.innerHTML = `
            <div class="flag__container">
              <img src="" alt="${country.name}"  class="flag__image"/>
            </div>
            <div class="container__info">
              <h3 class="country__name">${country.name}</h3>
              <p>
                <strong>Population: </strong>
                ${country.population}
              </p>
              <p class="country-region">
                <strong>Region: </strong>
                ${country.region}
              </p>
              <p>
                <strong>Capital:</strong>
                ${country.capital}
              </p>
            </div>
        `;

    countryCard.addEventListener('click', () => {
      modal.style.display = 'flex';
      showCountryDetails(country);
    });

    countriesList.appendChild(countryCard);
  });
}


// function displayCountryData(countryByCode) {
//   const countryData = countries.find(country => country.alpha3Code === countryByCode);
//   countryName.innerHTML = countryData.name;
//   countryPopulation.innerHTML = countryData.population.toLocaleString("en-US")
//   countryRegion.innerHTML = countryData.region;
//   countryCapital.innerHTML = countryData.capital;
//   countryNativeName.innerHTML = countryData.nativeName;

//   countrySubregion.innerHTML = countryData.subregion;

//   countryDomain.innerHTML = countryData.topLevelDomain[0]
//   countryLanguages.innerHTML = countryData.languages[0].name
//   countryCurrencies.innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");

// }

/**
 * Control of the Mode
 */
const changeMode = function () {
  console.log("hi!")
  const navbar = document.getElementById("navbar")
  const body = document.getElementById("body")
  if (modeControl.innerHTML == "Light Mode") {
    modeControl.innerHTML = "Dark Mode";
  } else {
    modeControl.innerHTML = "Light Mode"
  }
  navbar.classList.toggle("navbar--light")
  body.classList.toggle("body--light")
}