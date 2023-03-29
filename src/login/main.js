export const loginBtn = document.getElementById('login-btn')
export const loginUser = document.getElementById('login-user')
export const loginPass = document.getElementById('login-pass')
const container=document.getElementById('app')
const loginModal = document.getElementById('login-modal')
export async function loginfunc(e)
{
    try {
        const jsonresponse = await(await fetch('http://localhost:3000/data')).json()
        const jsondata = await jsonresponse;
        console.log(jsondata)
        checkValid(jsondata)
    } catch (err) { console.log(`${err}`)}
    function checkValid(jsondata)
    {
        jsondata.map(item=>
            {
                if(item.id===loginUser.value&&item.password===loginPass.value)
                    {
                             container.classList.remove('hidden')
                             loginModal.classList.add('hidden')
                    } 
            })
    }

}
