const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
};

const displayCountries = countries => { 
    console.log(countries[0])
const allCountriesHTML = countries.map (country =>  getcountriesHTML(country) )
const country = document.getElementById('countries')
country.innerHTML = allCountriesHTML.join(' ')

} 

const getcountriesHTML = country => {
    return `
    <div class="col">
     <div class="country "> 
     <h2>${country.name.common} </h2>
     <img src="${country.flags.png}">
     </div>
     </div>
    `
}
loadCountries()