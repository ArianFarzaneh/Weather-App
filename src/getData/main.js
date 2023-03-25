//function for getting data

export async function getData(url = 'htttttttp://api.openweathermap.org/data/2.5/weather?q=tehran&APPID=293f36bd0823e687692586ada38e5da1'){
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
    //   renderData(data)
        console.log((data.main.temp)-272);
    } catch (err) { alert(`your error is: ${err}`)}
};