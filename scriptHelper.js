// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === null) {
        console.log("Epmty"); 
    } else if (isNaN(testInput)===true) {
        console.log("Not a Number");
    } else if (testInput === Number){ 
        console.log("Is a Number");
    }
}   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (pilot !== String) {
        validateInput(pilot)
    } else if (copilot !== String) {
        validateInput(copilot)
    } else if (fuelLevel !== Number) {
        validateInput(fuelLevel) 
    } else if (cargoLevel !== Number) {
        validateInput(cargoLevel)
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
