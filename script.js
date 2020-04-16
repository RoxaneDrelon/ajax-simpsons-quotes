// This function loads quotes from the simpsons quotes API
function fetchQuoteJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data[0]; // response.data instead of response.json() with fetch
    })
    .then(function (quotes) {
      console.log("data decoded from JSON:", quotes);

      // Build a block of HTML
      const quotesHtml = `
          <p><strong>${quotes.quote}</strong></p>
          <img src="${quotes.image}" />
          <p>${quotes.character}</p>
        `;
      document.querySelector("#simpsons").innerHTML = quotesHtml;
    });
}

fetchQuoteJSON();
