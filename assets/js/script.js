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
  console.log(countries[32])
  // code
  console.log(`code ${countries[32].alpha3Code}`)

  //common name
  console.log(`COMMON NAME        ${countries[50].name}`)
  // official name
  // console.log(`OFFICIAL NAME          ${countries[50].name.official}`)
  // native name
  console.log(`NATIVE NAME        ${countries[50].nativeName}`)

  // borders
  console.log(countries[32].borders) //could be more

  //capital
  console.log(countries[32].capital)
  //population
  console.log(countries[32].population)
  //region
  console.log(`region    ${countries[50].region}`)
  //domain
  // for (domain of countries[50].tld) {
  //   console.log(domain)
  // }
  console.log(countries[50].topLevelDomain[0])
  //subregion
  console.log(` subregions       ${countries[50].subregion}`) /
    // for (let currenc of countries[50].currencies) {
    //   console.log(currenc)

    // }
    console.log(countries[50].currencies[0].name)
  console.log(countries[50].flag)

  console.log(countries[50].languages[0].name) //could be more

  // console.log(countries[50].maps.googleMaps)
  let options = "";

  // console.log(countries[0].name)
  for (let i = 0; i < countries.length; i++) {


    // countries.forEach(country => options += `<option value="${countries[i].altSpellings[0]}">${countries[i].name.common}</option>`);
    options += `<option value="${countries[i].altSpellings[0]}">${countries[i].name.common}</option>`

    // console.log(options)
  }

  countriesList.innerHTML = options
  countriesList.selectedIndex = Math.floor(Math.random() * countriesList.length);
  displayCountryData(countriesList[countriesList.selectedIndex].value);
}

function displayCountryData(countryByCode) {
  const countryData = countries.find(country => country.altSpellings[0] === countryByCode);
  countryName.innerHTML = countryData.name;
  countryNativeName.innerHTML = countryData.nativeName;
  countryPopulation.innerHTML = countryData.population.toLocaleString("en-US")
  countryRegion.innerHTML = countryData.region;
  countrySubregion.innerHTML = countryData.subregion;
  countryCapital.innerHTML = countryData.capital;
  countryDomain.innerHTML = countryData.topLevelDomain[0]
  countryLanguages.innerHTML = countryData.languages[0].name



  countryCurrencies.innerHTML = countryData.currencies[0].name;
}