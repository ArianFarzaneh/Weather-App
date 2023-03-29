import { jsonServerPath } from "../../jsonSeverPath/main"
export const registerUser=document.getElementById('register-user')
export const registerPass=document.getElementById('register-pass')
export const registerBtn=document.getElementById('register-submit-btn')

export async function registration(e)
{
    const newUser={
        id:`${registerUser.value}`,
        password:`${registerPass.value}`
    }
    await fetch(`${jsonServerPath}/data`,
    {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newUser)
    })
    registerUser.value=''
    registerPass.value=''
}