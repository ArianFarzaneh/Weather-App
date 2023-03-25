'use strict'
const search = document.getElementById("search-input")
export const container = document.getElementById('app')
import './src/styles/style.css'
import { getData } from './src/getData/main';
import { Search } from './src/Search/main';
import { debounce } from "lodash"
// http://api.openweathermap.org/data/2.5/weather?q=tehran&APPID=293f36bd0823e687692586ada38e5da1

// getData()

search.addEventListener('input',
debounce(() => {
  Search(search.value);
},1000)
)