const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
  const countries = JSON.parse(xhr.responseText);
  console.log(countries);

  // asian countries
  console.log(countries.filter((country) => country.region === 'Asia'));

}

xhr.send()