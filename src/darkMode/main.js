import { container } from "../../main"
export const darkModeBtn=document.getElementById('dark-mode-btn')
export const darkModeBtnMobile=document.getElementById('dark-mode-btn-mobile')
export function darkModeFunc()
{
    container.classList.toggle('dark-mode-class')
    container.classList.toggle('bg-gradient-to-r')
    container.classList.toggle('from-green-200')
    container.classList.toggle('to-blue-800')
}