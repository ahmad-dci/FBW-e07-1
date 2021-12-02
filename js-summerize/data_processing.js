(async () => {
    const URL = 'https://api.worldbank.org/v2/country/?format=json&per_page=300';
    // print only the world regions data that you will get from the previous API 
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data[1]);
        const dataSet = data[1];
        // task
        // create an array that contains only the iso2Code values from the items
        // in the dataSet
        const iso2Codes = dataSet.map(item => item.iso2Code)
        console.log(iso2Codes);
        // create an array that will contain the country name and country iso2Code
        // for only the countries that they have capitalcity 
        // with this pattern
        // [['Aruba', 'AW'], ['Afghanistan', 'AF'], ['Angola', 'AO'], .......]
        const countries = dataSet.filter(item => item.capitalCity)
            .map(item => [item.name, item.iso2Code]);
        // task 
        // create an array that contains the countries names that contain capitalCity
        // and the incomeLevel is High income
        // ['Aruba', 'Andorra', .....]
        const richCountries = dataSet.filter(country => country.capitalCity && country.incomeLevel.value === 'High income')
            .map(country => country.name)

        // task:
        // the points on the map that have positive latitude it exist in the north half of the world
        // create an array that contains only the capital cities that exist on the north half of the world
        // ['Oranjestad', 'Kabul', .....]
        const southCapitalCities = dataSet.filter(country => country.capitalCity && Number(country.latitude) > 0)
            .map(country => country.capitalCity);
        console.log(southCapitalCities);
        //task:
        // log the closest capital city from the north pole 
    } catch (error) {
        //console.log('');
        console.log('url is not right');
    }


    // fetch(URL).then(response => {
    //     response.json().then(data => {
    //         console.log(data[1]);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }).catch(error => {
    //     console.log(error);
    // })



})()
