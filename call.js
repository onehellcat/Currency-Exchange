fetchEur();
fetchUsd();

async function fetchEur() {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/huf.min.json"
    );
    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const data = await response.json();
    const eurDate = data.date;
    const eurValue = data.huf.toFixed(2);

    document.getElementById("eurDate").innerHTML = eurDate;
    document.getElementById("eurValue").innerHTML = eurValue;

    console.log("EURO: " + eurValue + " | DATE: " + eurDate);
  } catch (error) {
    console.error(error);
  }
}

async function fetchUsd() {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/huf.min.json"
    );
    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const data = await response.json();
    const usdDate = data.date;
    const usdValue = data.huf.toFixed(2);

    document.getElementById("usdDate").innerHTML = usdDate;
    document.getElementById("usdValue").innerHTML = usdValue;
    console.log("EURO: " + usdValue + " | DATE: " + usdDate);
  } catch (error) {
    console.error(error);
  }
}

async function fetchUserDef() {
  try {
    const currency = document.getElementById("currency").value.toLowerCase();
    const response = await fetch(
      ` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}/huf.min.json`
    );

    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const data = await response.json();
    const date = data.date;
    const value = data.huf.toFixed(2);

    console.log(
      `Currency: ${document
        .getElementById("currency")
        .value.toLowerCase()} | Value: ${value} | Date:  ${date}`
    );
    document.getElementById("date").innerHTML = date;
    document.getElementById("value").innerHTML = value;
  } catch (error) {
    console.error(error);
    document.getElementById("fetchUserDef").innerHTML = "Invalid input ";
  }
}

console.log(
  "Api: https://github.com/fawazahmed0/currency-api?tab=readme-ov-file#readme"
);
