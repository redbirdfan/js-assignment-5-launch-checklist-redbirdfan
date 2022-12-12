/*const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

const { nodeDetachedFromDocument } = require("jsdom/lib/jsdom/living/named-properties-window");

const { formSubmission } = require("./scriptHelper");

const { formSubmission } = require("./scriptHelper");
*/

window.addEventListener("load", function() {
    let form = document.querySelector("form");

    let listedPlanets;

//Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function(result) {
            listedPlanets = result;
            console.log(listedPlanets);
    }).then(function() {
        let myPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image) 
    })

    form.addEventListener("submit", function(event) {
        
        let pilot = document.querySelector("input[name=pilotName]").value;
        console.log(pilot.value);
        let copilot = document.querySelector("input[name=copilotName]").value;
        console.log(copilot.value);
        let fuel = document.querySelector("input[name=fuelLevel]").value;
        console.log(fuel.value);
        let cargo = document.querySelector("input[name=cargoMass]").value;
        console.log(cargo.value)
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilot, copilot, fuel, cargo);
        event.preventDefault();
     })
    });
