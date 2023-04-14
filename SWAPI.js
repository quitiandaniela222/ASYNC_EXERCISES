async function infoPeople() {
    try {
        const completeInfo = await fetch('https://swapi.dev/api/people/', //trae tods la promesa
            { method: 'GET' });
        const jsonFresh = await completeInfo.json();
        const resultsInfo = jsonFresh.results; //el arreglo de people 

        const arrayInfoComplete = resultsInfo.map((result) => {
            return {
                name: result.name,
                height: result.height,
                gender: result.gender,
                mass: result.mass
            }
        });
        const height = arrayInfoComplete.filter (result => result.height > 165);
        console.log(height);
    }
    catch (error) {
        console.error(error);
    }
}
infoPeople();

async function infoVehicles() {
    try {
        const completeVehicles = await fetch('https://swapi.dev/api/vehicles/', //trae tods la promesa
            { method: 'GET' });
        const jsonVehicles = await completeVehicles.json();
        const resultsInfo = jsonVehicles.results;
        const arrayInfoComplete = resultsInfo.map((result) => {
            return {
                consumables: result.consumables,
                crew: result.crew,
                length: result.length,
                passengers: result.passengers,
                name: result.name
            }
        });
        const crew = arrayInfoComplete.filter ((result1) => result1.crew > 30);
        console.log(crew);
    }
    catch (error) {
        console.error(error);
    }
}
infoVehicles();
