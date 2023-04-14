async function infoSerie() {
    try {
        const completeSeries = await fetch('https://rickandmortyapi.com/api/character',
            { method: 'GET' });
        const package = await completeSeries.json();
        const resultsInfo = package.results
        const arrayRick = resultsInfo.map((results) => {
            return {
                name: results.name,
                status: results.status,
                species: results.species,
                gender: results.gender,
                id: results.id
            }
        });
        const id = arrayRick.filter (result => result.id > 0);
        console.log(id)
    }
    catch (error) {
        console.error(error);
    }
}
infoSerie();