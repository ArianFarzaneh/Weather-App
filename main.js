'use strict'
const search = document.getElementById('search-input');
const loginBtn=document.getElementById('login-btn');
const loginModal=document.getElementById('login-modal');
export const container = document.getElementById('app');
import './src/styles/style.css';
import { getData } from './src/getData/main';
import { Search } from './src/Search/main';
import { debounce } from "lodash";

search.addEventListener('input',
debounce(() => {
  Search(search.value);
},1000)
)

loginBtn.addEventListener('click',(e)=>
{
    loginModal.style.height='100vh'
})