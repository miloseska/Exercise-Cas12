let btnEUR = document.getElementById("btnEUR");
let btnEnglish = document.getElementById("btnEnglish");
let btnM = document.getElementById("btnM");
let inputCountry = document.getElementById("inputCountry");
let btnSearch = document.getElementById("btnSearch");
let btnReset = document.getElementById("btnReset");

const countryData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    console.log(data);

    btnEUR.addEventListener("click", () => {
        euroShow(data);
    });
    btnEnglish.addEventListener("click", () => {
       englishShow(data);
    });
    btnM.addEventListener("click", () => {
      showMacedonia(data);
    });

    btnSearch.addEventListener("click", () => {
        let searchValue = inputCountry.value.trim().toLowerCase(); 
        if (searchValue !== "") {
            let foundCountry = data.find(country => 
                country.name.common.toLowerCase() === searchValue
            );
            if (foundCountry) {
                displayCountryCard(foundCountry);
            } else {
                document.getElementById("result").innerHTML = "<p>Country not found</p>";
            }
        }
    });
    btnReset.addEventListener("click", () => {
      clearResult(); 
    });
};
countryData();


function euroShow(data) {
  let filterData = data.filter((country) => country.currencies && country.currencies.EUR && country.currencies.EUR.name === "Euro");
  
  document.getElementById("result").innerHTML = "";

  filterData.forEach((country) => {
      let card = document.createElement("div");
      card.classList.add("card");

      let content = `
          <div class="inCard">
              <img src="${country.flags.png}" />
              <h2>${country.name.common}</h2>
              <p>Population: ${country.population}</p>
              <p>Capital: ${country.capital}</p>
              <p>Area: ${country.area} km²</p>
          </div>
      `;
      card.innerHTML = content;
      document.getElementById("result").appendChild(card);
  });
}

function englishShow(data) {
  let languagesData = data.filter((country) => country.languages && country.languages.eng);
  document.getElementById("result").innerHTML = "";

  languagesData.forEach((country) => {
      let card = document.createElement("div");
      card.classList.add("card");

      let content = `
          <div class="inCard">
              <img src="${country.flags.png}" />
              <h2>${country.name.common}</h2>
              <p>Population: ${country.population}</p>
              <p>Capital: ${country.capital}</p>
              <p>Area: ${country.area} km²</p>
          </div>
      `;

      card.innerHTML = content;
      document.getElementById("result").appendChild(card);
  });
}

function showMacedonia(data) {
  console.log(data.map(country => country.name.common));

  let macedoniaData = data.filter((country) => country.name.common.includes("Macedonia"));

  document.getElementById("result").innerHTML = "";

  macedoniaData.forEach((country) => {
      let card = document.createElement("div");
      card.classList.add("card");

      let content = `
          <div class="inCard">
              <img src="${country.flags.png}" />
              <h2>${country.name.common}</h2>
              <p>Population: ${country.population}</p>
              <p>Capital: ${country.capital}</p>
              <p>Area: ${country.area} km²</p>
          </div>
      `;
      card.innerHTML = content;
      document.getElementById("result").appendChild(card);
  });
}

function displayCountryCard(country) {
  document.getElementById("result").innerHTML = "";

  let card = document.createElement("div");
  card.classList.add("card");

  let content = `
      <div class="inCard">
          <img src="${country.flags.png}" />
          <h2>${country.name.common}</h2>
          <p>Population: ${country.population}</p>
          <p>Capital: ${country.capital}</p>
          <p>Area: ${country.area} km²</p>
      </div>
  `;
  card.innerHTML = content;
  document.getElementById("result").appendChild(card);
}
function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("inputCountry").value = "";
};