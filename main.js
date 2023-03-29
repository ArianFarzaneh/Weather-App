'use strict'
const search = document.getElementById('search-input');
export const loginModal=document.getElementById('login-modal');
export const container = document.getElementById('app');
import './src/styles/style.css';
import { getData } from './src/getData/main';
import { Search } from './src/Search/main';
import { registerBtn , registration } from './src/register/main';
import { loginBtn , loginfunc } from './src/login/main';
import { logoutBtn , logoutfunc , logoutBtnMobile } from './src/logout/main';
import { darkModeBtn , darkModeFunc , darkModeBtnMobile } from './src/darkMode/main';
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

logoutBtn.addEventListener('click',()=>
{
  logoutfunc()
})

logoutBtnMobile.addEventListener('click',()=>
{
  logoutfunc()
})

darkModeBtn.addEventListener('click',()=>
{
  darkModeFunc()
})

darkModeBtnMobile.addEventListener('click',()=>
{
  darkModeFunc()
})