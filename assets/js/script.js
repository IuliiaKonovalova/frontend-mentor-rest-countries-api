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

// dropdown menu
const dropdownBtn = document.getElementById('dropdown');
const countriesRegions = dropdownBtn.querySelectorAll('li');

// mode control
const modeControl = document.getElementById("mode-control");
// search
const searchCountry = document.getElementById("search");


/**
 * Load content onLoad
 */
document.addEventListener('DOMContentLoaded', function () {
  modeControl.addEventListener("click", changeMode);
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
    //   "flag": "assets/images/flags/gt.svg",
    countryCard.innerHTML = `
            <div class="flag__container">
              <img src="${country.flag}" alt="Flag of ${country.name}"  class="flag__image"/>
            </div>
            <div class="container__info">
              <h3 class="country__name">${country.name}</h3>
              <div class="data__result">
                <p>
                  <strong>Population: </strong>
                  ${country.population}
                </p>
                <p class="country__region">
                  <strong>Region: </strong>
                  ${country.region}
                </p>
                <p>
                  <strong>Capital:</strong>
                  ${country.capital}
                </p>
              </div>
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
  if (document.querySelector(".mode__title").innerHTML == "Light Mode") {
    document.querySelector(".mode__title").innerHTML = "Dark Mode";
  } else {
    document.querySelector(".mode__title").innerHTML = "Light Mode"
  }
  document.body.classList.toggle('light');
}

/**
 * Search country by the user's input
 */
searchCountry.addEventListener('input', (e) => {
  const {
    value
  } = e.target;

  const countryName = document.querySelectorAll(".country__name");
  countryName.forEach(name => {

    if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
      name.parentElement.parentElement.style.display = 'block'
    } else {
      name.parentElement.parentElement.style.display = 'none'
    }
  })
})

/**
 * Select region
 */
countriesRegions.forEach(region => {
  region.addEventListener('click', () => {
    const value = region.innerText;
    const countryRegion = document.querySelectorAll('.country__region');

    countryRegion.forEach(region => {
      if (region.innerText.includes(value) || value === 'All') {
        region.parentElement.parentElement.parentElement.style.display = 'block';
      } else {
        region.parentElement.parentElement.parentElement.style.display = 'none';
      }
    });
  })
})