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

async function requestAllData() {
  //Request Data from local json file on the page load 
  const response = await fetch('countries.json');
  const data = await response.json();

  dataContainer.forEach(element => {
    for (let i = 0; i < data.length; i++) {
      dataContainer[i].textContent = data[i].name[0];
      //timeCurrent[i].textContent = data[i].timeframes.daily.current + (data[i].timeframes.daily.current > 1 ? "hrs" : "hr");
      //timePrevious[i].textContent = "Yesterday - " + data[i].timeframes.daily.previous + (data[i].timeframes.daily.previous > 1 ? "hrs" : "hr");
    }
  });
}
requestAllData();
fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(data => initialize(data))
  .catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  console.log(countries[32])
  // code
  console.log(`code ${countries[50].altSpellings[0]}`)
  // native name
  // console.log(`native name ${countries[0].altSpellings[1]}`)
  // native name
  // console.log(`native name ${countries[0].altSpellings[2]}`)
  // native name
  // console.log(`OFFICIAL name ${countries[0].altSpellings[3]}`)
  //common name
  console.log(`COMMON NAME        ${countries[50].name.common}`)
  // official name
  console.log(`OFFICIAL NAME          ${countries[50].name.official}`)
  // native name
  console.log(`NATIVE NAME        ${countries[50].name.nativeName.eng.common}`)

  // borders
  if (!("borders" in countries[32])) {
    console.log("there is no borders")
  } else {
    console.log(countries[32].borders[0]) //could be more
    for (borderingCountry of countries[32].borders) {
      console.log(borderingCountry)
    }
  }
  //capital
  console.log(countries[50].capital[0])
  //population
  console.log(countries[50].population)
  //region
  console.log(`region    ${countries[50].region}`)
  //domain
  for (domain of countries[50].tld) {
    console.log(domain)
  }
  console.log(countries[50].tld[0])
  //subregion
  console.log(` subregions       ${countries[50].subregion}`)
  console.log(`continents ${countries[50].continents[0]}`)
  // for (let currenc of countries[50].currencies) {
  //   console.log(currenc)

  // }
  console.log(countries[50].currencies)
  console.log(countries[50].flags.png)

  console.log(countries[50].languages) //could be more

  console.log(countries[50].maps.googleMaps)
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
  countryCapital.innerHTML = countryData.capital[0];

}