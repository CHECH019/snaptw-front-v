import {base_url} from "../modules/base-url.js";
import {openModal,closeModal} from "../modules/modal.js";

const form = document.getElementById('register-form');
const e_name = document.getElementById('name');
const e_surname = document.getElementById('surname');
const e_username = document.getElementById('username');
const e_email = document.getElementById('email');
const e_password = document.getElementById('password');
const closeModalButton = document.getElementById('closeModal');


form.addEventListener('submit', async e=>{
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
    try{
        let response = await makeRegisterRequest(user);
        const data = await response.json();
        if(response.ok){
            openModal('SUCCESS',data.message+'. Now you can login!');
        }else{
            openModal('ERROR',data.message);
        }
    }catch(error){
        openModal('UNKNOWN ERRROR', 'Something went wrong :(');
    }
});

closeModalButton.addEventListener('click',()=>location.href = '/login/login.html');

const makeRegisterRequest = async user =>{
    let url = base_url+'/auth/signup';
    const response = await fetch(url,{
        'method': 'POST',
        'headers':{
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(user)
    });
    return response;
}
