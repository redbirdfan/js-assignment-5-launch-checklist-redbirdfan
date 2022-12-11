// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
        let planetDisplay = document.getElementById("missionTarget");
            planetDisplay.innerHTML = 
            `<h2>Mission Destination</h2>
            <ol>
                <li>Planet: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${image}"}>    
            `;
//book says no return needed -MC    
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
    let numInput = Number(testInput)
    if(!testInput) {
        return "Empty"
    } else if (isNaN(numInput)){
        return "Not a Number"
    } else if (isNaN(numInput)=== false);
        return "Is a number"
};

function formSubmission(document, list, pilot, copilot, fuel, cargo) {

    const pilotStatus = document.getElementById("pilotName");
    const copilotStatus = document.getElementByName("copilotName");
    const fuelStatus = document.getElementByName("fuelStatus");
    const cargoStatus = document.getElementByName("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");


    if(validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields required");
    } else if(validateInput(pilotName) === "Is a number" || validateInput(copilotName) === "Is a number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Not valid information");
    } else {
        document.getElementById("faultyItems").style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilotName} is ready`; 
        copilotStatus.innerHTML = `Copilot ${copilotName} is ready`;

    if (cargoStatus <= 10000 && fuelStatus < 10000) {
        fuelStatus.innerHTML = "Not enough to launch";
        cargoStatus.innerHTML = "Cargo load good for launch";
        launchStatus.innerHTML = "Shuttle not ready to launch"
        launchStatus.style.color = "DC143C"
    } else if (fuelStatus >= 10000 && cargoStatus > 10000) {
        fuelStatus.innerHTML = "Fuel level good for launch"
        cargoStatus.innerHTML = "Cargo load too heavy for launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "DC143C"
    }else if (fuelStatus < 10000 && cargoStatus > 10000) {
        fuelStatus.innerHTML = "Not enough to launch";
        cargoStatus.innerHTML = "Cargo load too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "#DC143C";
    } else  document.getElementById("fuelStatus").innerHTML = "Fuel level good for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "#20DE59";
    }  
    
};

async function myFetch() {
    let planetsReturned

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
    }); 
        return planetsReturned;
    };


function pickPlanet(planets) { 
    i = Math.floor(Math.random()*10)
        if (i > 5) {
            i = (i-4);
    } 
        planets = planets[i]
    return planets
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;