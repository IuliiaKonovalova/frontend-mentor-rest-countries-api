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

/**
 * Load Cards' content onLoad
 */
document.addEventListener('DOMContentLoaded', function () {


});



fetch("assets/js/countries.json")
  .then(res => res.json())
  .then(data => initialize(data))
  // .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

// fetch("../services/contributors.JSON")
// .then(res => res.json())
// .then(data => console.log(data))

function initialize(countriesData) {
  countries = countriesData;

  let options = "";

  // console.log(countries[0].name)



  countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);
  // options += `<option value="${countries[i].alpha3Code[0]}">${countries[i].name.common}</option>`

  countriesList.innerHTML = options
  console.log(countriesList)
  countriesList.selectedIndex = Math.floor(Math.random() * countriesList.length);
  displayCountryData(countriesList[countriesList.selectedIndex].value);
}

function displayCountryData(countryByCode) {
  const countryData = countries.find(country => country.alpha3Code === countryByCode);
  console.log(countryData.name)
  countryName.innerHTML = countryData.name;
  console.log(countryData.population.toLocaleString("en-US"))
  countryPopulation.innerHTML = countryData.population.toLocaleString("en-US")
  countryRegion.innerHTML = countryData.region;
  countryCapital.innerHTML = countryData.capital;
  countryNativeName.innerHTML = countryData.nativeName;

  countrySubregion.innerHTML = countryData.subregion;

  countryDomain.innerHTML = countryData.topLevelDomain[0]
  countryLanguages.innerHTML = countryData.languages[0].name
  countryCurrencies.innerHTML = countryData.currencies[0].name;
}