import fetch from "node-fetch";

async function fetchCountryDetails() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/name/india");
    if (response) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    throw err;
  }
}

async function fetchCurrency() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/currency/inr");
    if (response) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    throw err;
  }
}

async function fetchAPIs() {
  try {
    const details = await fetchCountryDetails();
    const currentDetails = await fetchCurrency();
  } catch (err) {
    console.log(err);
  }
}

fetchAPIs();
