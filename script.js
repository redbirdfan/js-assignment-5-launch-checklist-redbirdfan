/*const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

const { nodeDetachedFromDocument } = require("jsdom/lib/jsdom/living/named-properties-window");

const { formSubmission } = require("./scriptHelper");*/


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
    
    })
        
      

    formSubmission();
    console.log(pilotStatus)  

      


