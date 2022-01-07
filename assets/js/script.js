fetch("https://restcountries.eu/rest/v2/all")
  .then(res => res.json())
  .then(data => initialize(data))
  .catch(err => console.log("Error:", err));