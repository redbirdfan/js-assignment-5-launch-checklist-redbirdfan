/*const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

const { nodeDetachedFromDocument } = require("jsdom/lib/jsdom/living/named-properties-window");

const { formSubmission } = require("./scriptHelper");*/

const { formSubmission } = require("./scriptHelper");


window.addEventListener("load", function(){


    let listedPlanets;

//Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function(result){
            listedPlanets = result;
            console.log("listedPlanets");
    }).then(function() {
        console.log(listedPlanets);
        let myPlanet = pickPlanet("listedPlanets");
        addDestinationInfo(document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image) 
    })

    let button = document.getElementById("formSubmit");
    button.addEventListener("click", function() {
        let pilotInput = document.getElementById("input[name=pilotName]");
        console.log(pilotInput.value);
        let copilotInput = document.getElementById("input[name=copilotName]");
        console.log(copilotInput.value);
        let fuelInput = document.getElementById("input[name=fuelLevel]");
        console.log(fuelInput.value);
        let cargoInput = document.getElementById("input[name=cargoMass]");
        console.log(cargoInput.value)
        formSubmission()
     })
    });
