import {base_url} from "../base-url.js";

const form_login = document.getElementById('login-form');
const e_username = document.getElementById('username');
const e_password = document.getElementById('pass');
let token;

form_login.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const username = e_username.value;
    const password = e_password.value;
    const login_data = {
        username,
        password
    };
    makeLoginRequest(login_data);
    
});

const makeLoginRequest = async login_data =>{
    let url = base_url+'/auth/login'
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login_data)
        });
        const data = await response.json();
        if(response.ok){
            alert(data.token);
        }else{
            alert(data.message);
        }    
    } catch (error) {
        alert(`Unknown error: ${error}`)
    }
}
