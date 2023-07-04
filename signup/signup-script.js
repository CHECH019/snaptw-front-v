import {base_url} from "../modules/base-url.js";
import {showModal,removeModal} from "../modules/modal.js";

const form = document.getElementById('register-form');
const e_name = document.getElementById('name');
const e_surname = document.getElementById('surname');
const e_username = document.getElementById('username');
const e_email = document.getElementById('email');
const e_password = document.getElementById('password');
const e_closeModalButton = document.getElementById('closeModal');


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
    let response = await makeRegisterRequest(user);
    showModal(response[0],response[1]);
    form.reset();

});

e_closeModalButton.addEventListener('click', ()=>{
    removeModal();
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
        let header = response.ok ? 'SUCCESS':'ERROR';
        return [header,data.message];
    } catch (error) {
        return ['UNKNOWN ERROR',error];
    }
}
