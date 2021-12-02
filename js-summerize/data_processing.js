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
