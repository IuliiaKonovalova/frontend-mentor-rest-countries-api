// Variables:
let countries;
const countriesList = document.getElementById("countries");
// dropdown menu
const dropdownBtn = document.getElementById('dropdown');
const countriesRegions = dropdownBtn.querySelectorAll('li');
// mode control
const modeControl = document.getElementById("mode-control");
// search
const searchCountry = document.getElementById("search");
// country details modal
const modalWindow = document.getElementById("modal")
const closeModalWindow = document.getElementById('close__modal');
// dictionary for storing name, alpha3code, index
let dictCountries = {}


/**
 * Content onLoad
 */
document.addEventListener('DOMContentLoaded', function () {
  modeControl.addEventListener("click", changeMode);
  dropdownBtn.addEventListener('click', () => {
    dropdownBtn.classList.toggle('open');
  });
  closeModalWindow.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'visible';
  })
  fetchDataCountries();
});

/**
 * Fetch json data
 */
async function fetchDataCountries() {
  const res = await fetch("assets/js/countries.json");
  const countriesData = await res.json();
  displayCountries(countriesData);
}

/**
 * Classify data
 * Display to the user
 * Send data to the country object
 */
const displayCountries = function (countriesData) {
  countriesList.innerHTML = '';
  countriesData.forEach(country => {
    dictCountries[country.alpha3Code] = [country.name, countriesData.indexOf(country)]
    const countryCard = document.createElement('div');
    countryCard.classList.add('data__card');
    countryCard.innerHTML = `
            <div class="flag__container">
              <img src="${country.flag}" alt="Flag of ${country.alpha3Code}"  class="flag__image"/>
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
    // Listen for the click on the country, calls modal
    countryCard.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      displayCountryData(country);
    });
    countriesList.appendChild(countryCard);
  });
}

dictCountries
const displayCountryData = function (country) {
  const modalContent = modalWindow.querySelector(".modal__content");
  const modalFlag = modalWindow.querySelector("#modal__flag");
  // Display all borders by name of the country with click event
  let bordersArray = []
  country.borders.forEach(border => {
    bordersArray.push(`<button class="btn btn__border" onClick="document.getElementsByClassName('data__card')[${dictCountries[border][1]}].click()">${dictCountries[border][0]}</button>`)
  });
  // Get Flag
  modalFlag.innerHTML = `
          <img src="${country.flag}" alt="Flag of ${country.name}"   class="modal__flag"/>
      `;
  // Get Details
  modalContent.innerHTML = `
          <h2 class="modal__country--name">${country.name}</h2>
          <p>
            <strong>Native Name:</strong>
            ${country.nativeName}
          </p>
          <p>
            <strong>Population:</strong>
            ${country.population}
          </p>
          <p>
            <strong>Region:</strong>
            ${country.region}
          </p>
          <p>
            <strong>Sub Region:</strong>
            ${country.subregion}
          </p>
          <p>
            <strong>Capital:</strong>
            ${country.capital}
          </p>
          <p>
            <strong>Top Level Domain:</strong>
            ${country.topLevelDomain[0]}
          </p>
          <p>
            <strong>Currencies:</strong>
            ${country.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ")}
          </p>
          <p>
            <strong>Languages:</strong>
            ${country.languages.map(language => language.name)}
          </p>
          <p class="modal__borders">
            <strong>Border Countries:</strong>
            ${bordersArray.join(' ')}
          </p>
      `
}

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