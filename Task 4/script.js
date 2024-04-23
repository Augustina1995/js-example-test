/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į countries.json failą (fetch("./countries.json"))
ir iš atvaizduos visas šalis ir jų eksportus. 
Kiekviena šalis turės savo atvaizdavimo "kortelę", kurioje bus 
nurodoma šalis ir jos eksportai.


Pastaba: Informacija apie šalis turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

// Answer

document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
  
    fetchCountries();
  
    async function fetchCountries() {
      try {
        const response = await fetch('./countries.json');
        if (!response.ok) {
          throw new Error('Failed to fetch countries data');
        }
        const countries = await response.json();
        displayCountries(countries);
      } catch (error) {
        console.error('Error fetching countries data:', error.message);
      }
    }
  
    function displayCountries(countries) {
      countries.forEach(country => {
        const countryCard = createCountryCard(country);
        output.appendChild(countryCard);
      });
    }
  
    function createCountryCard(country) {
        const card = document.createElement('div');
        card.classList.add('card');
      
        const countryName = document.createElement('h2');
        countryName.textContent = country.country;
      
        const exportsHeading = document.createElement('h3');
        exportsHeading.textContent = 'Exports:';
      
        const exportsList = document.createElement('ul');
        country.exports.forEach(exportItem => {
          const listItem = document.createElement('li');
          listItem.textContent = exportItem;
          exportsList.appendChild(listItem);
        });
      
        card.appendChild(countryName);
        card.appendChild(exportsHeading);
        card.appendChild(exportsList);
      
        return card;
      }
      
  });
  