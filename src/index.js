import "./styles.css";

const apiUrl = "https://coronavirus-19-api.herokuapp.com/countries";

const appDiv = document.getElementById("app");

async function loadData() {
  const response = await fetch(apiUrl);
  const countries = await response.json();

  let result = "";

  const countriesSorted = countries.sort(function(a, b) {
    return b.recovered - a.recovered;
  });

  for (let country of countriesSorted) {
    result += country.country + " - Recovered: " + country.recovered + "<br>";
  }

  appDiv.innerHTML = result;
}

loadData();

var obj = {
  country: "World",
  cases: 1287168,
  todayCases: 14306,
  deaths: 70533,
  todayDeaths: 1108,
  recovered: 271887,
  active: 944748,
  critical: 46045,
  casesPerOneMillion: 165,
  deathsPerOneMillion: 9,
  totalTests: 0,
  testsPerOneMillion: 0
};
