const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
};

const displayCountries = countries => { 
const allCountriesHTML = countries.map (country =>  getcountriesHTML(country) )
console.log(allCountriesHTML[0])

} 

const getcountriesHTML = country => {
    return `
     <div> 
     <h2>${country.name.common} </h2>
     </di>
    `
}
loadCountries()