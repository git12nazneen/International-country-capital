const loadCountry = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

    const displayCountry = countryss =>{
        const contryContainer = document.getElementById('all-countrysss');
        countryss .forEach(countryss => {
            console.log(countryss.capital? countryss.capital[0] : 'no capital' )
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('country');
            countryDiv.innerHTML = ` 
            <h3>Name: ${countryss.name.common} </h3>
            <p> Capital:${countryss.capital} </p>
            <button onclick="displayCountryDetail('${countryss.cca2}')">Details</button>
            `
            contryContainer.appendChild(countryDiv)
        });
    }
const displayCountryDetail = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url)
    fetch (url)
    .then (res => res.json())
    .then(data => showCountryDetail(data[0]));
   
    console.log('details coming soon', code)
}

const showCountryDetail = countryss =>{
    console.log(countryss)
    const detailContainer = document.getElementById('countrydetl')
    detailContainer.innerHTML = `
    <h3>Name: ${countryss.name.common}</h3>
    <img src= "${countryss.flags.png}">
    `
}
loadCountry()