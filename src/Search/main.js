import { getData, showInfo } from "../getData/main"

export const Search = function(value)
{
    getData(`http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=293f36bd0823e687692586ada38e5da1`)
}