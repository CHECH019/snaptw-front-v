import {base_url} from "../base-url.js";

const form = document.getElementById('register-form');
const e_name = document.getElementById('name');
const e_surname = document.getElementById('surname');
const e_username = document.getElementById('username');
const e_email = document.getElementById('email');
const e_password = document.getElementById('password');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = e_name.value;
    const lastName = e_surname.value;
    const username = e_username.value;
    const email = e_email.value;
    const password = e_password.value;

    const user = {
        name,
        lastName,
        username,
        email,
        password
    };
    console.log(user)
    makeRegisterRequest(user);

});

const makeRegisterRequest = async user =>{
    let url = base_url+'/auth/signup';
    try {
        const response = await fetch(url,{
            'method': 'POST',
            'headers':{
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(user)
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.log(error)
    }
}
