let btnEUR = document.getElementById("btnEur");
let btnEnglish = document.getElementById("btnEnglish");
let btnM = document.getElementById("btnM");
let inputCountry = document.getElementById("InputCountry");
let btnSearch = document.getElementById("btnSearch");
let btnReset = document.getElementById("btnReset");

const countryData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    console.log(data);
}
countryData();


