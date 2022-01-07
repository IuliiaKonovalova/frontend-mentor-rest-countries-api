// Variables:
let countries;
const dataContainer = document.getElementById("data__container");
const countryName = document.getElementById("country");
const countryNativeName = document.getElementById("native_name");
const countryPopulation = document.getElementById("population");
const countryRegion = document.getElementById("region");
const countrySubregion = document.getElementById("subregion");
const countryDomain = document.getElementById("top_domain");
const countryCurrencies = document.getElementById("currencies");
const countryLanguages = document.getElementById("languages");



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
  console.log(countries[50].borders[0]) //could be more
  for (borderingCountry of countries[32].borders) {
    console.log(borderingCountry)
  }
  //capital
  console.log(countries[50].capital[0])
  //population
  console.log(countries[50].population)
  //region
  console.log(countries[50].region)
  //domain
  for (domain of countries[50].tld) {
    console.log(domain)
  }
  console.log(countries[50].tld[0])
  //subregion
  console.log(countries[50].subregion)
  console.log(countries[50].continents[0])
  console.log(countries[50].currency)
  console.log(countries[50].flags.png)
  console.log(countries[50].languages[0]) //could be more
  console.log(countries[50].maps.googleMaps)
  let options = "";
  // console.log(countries[0].name)
  for (let i = 0; i < countries.length; i++) {
    options += '';
    options += `<option value="${countries[i].altSpellings[0]}">${countries[i].name.common}</option>`
    document.getElementById("countries").innerHTML = options
    // console.log(options)
  }
}