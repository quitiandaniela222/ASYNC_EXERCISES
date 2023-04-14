async function gameOfThrones() {
    try {
        const infoGameOf = await fetch('https://anapioficeandfire.com/api/characters/583',
            { method: 'GET' });
        const jsonFresh = await infoGameOf.json();
        const arrayGameOf = [{
            name: jsonFresh.name,
            gender: jsonFresh.gender,
            culture: jsonFresh.culture,
            tvSeries: jsonFresh.tvSeries,
            born: jsonFresh.born
        }];
        const tvSeriesFilter = arrayGameOf.filter(result => result.tvSeries.length > 1);
        console.log(tvSeriesFilter);
    } catch (error) {
        console.error(error);
    }
}
gameOfThrones();