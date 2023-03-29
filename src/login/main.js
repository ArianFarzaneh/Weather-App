export const loginBtn = document.getElementById('login-btn')
export const loginUser = document.getElementById('login-user')
export const loginPass = document.getElementById('login-pass')

export async function loginfunc(e)
{
    try {
        const jsonresponse = await(await fetch('http://localhost:3000/data')).json()
        jsondata = await jsonresponse;
        console.log(jsondata)
    } catch (err) { console.log(`${err}`)}
    
}
