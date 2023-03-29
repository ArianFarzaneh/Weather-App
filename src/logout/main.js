import { container, loginModal } from "../../main"
export const logoutBtn=document.getElementById('logout-btn')
export const logoutBtnMobile=document.getElementById('logout-btn-mobile')
export function logoutfunc()
{
    container.classList.add('hidden')
    loginModal.classList.remove('hidden')
}