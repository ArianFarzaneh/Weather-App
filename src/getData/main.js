//function for getting data
export const showInfo=document.getElementById('show-info')
export const infoContainer=document.getElementById('info-container')

export async function getData(url = 'htttttttp://api.openweathermap.org/data/2.5/weather?q=tehran&APPID=293f36bd0823e687692586ada38e5da1'){
    try {
        const response = await (await fetch(url)).json()
        const data = await response;
        infoContainer.innerHTML=''
        const infobox=`
        <div class="show-info pt-12 mx-auto mt-[50px] w-[70%] lg:w-[25%] h-[300px] rounded-2xl bg-gradient-to-r from-red-300 to-purple-500">
            <div class="cityName text-center mb-[30px] font-bold text-6xl  text-green-200">${data.name}</div>
            <div class="degree text-center mb-[30px] font-bold text-5xl  text-green-200">${Math.floor((data.main.temp)-272)}'</div>
            <div class="weatherCondition text-center mb-[30px] font-bold text-5xl  text-green-200">${data.weather[0].main}</div>
        </div>
        `
        infoContainer.insertAdjacentHTML('beforeend',infobox)
    } catch (err) 
    { 
        console.log(`your error is: ${err}`);
        alert('نام درست وارد کنید!')
    }
};