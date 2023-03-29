'use strict'
const search = document.getElementById('search-input');
const loginModal=document.getElementById('login-modal');
export const container = document.getElementById('app');
import './src/styles/style.css';
import { getData } from './src/getData/main';
import { Search } from './src/Search/main';
import { registerBtn } from './src/register/main';
import { registration } from './src/register/main';
import { loginBtn } from './src/login/main';
import { loginfunc } from './src/login/main';
import { debounce } from "lodash";

search.addEventListener('input',
debounce(() => {
  Search(search.value);
},1000)
)

registerBtn.addEventListener('click',(e)=>
{
  e.preventDefault()
  registration(e)
})

loginBtn.addEventListener('click',(e)=>
{
  e.preventDefault()
  loginfunc(e)
})