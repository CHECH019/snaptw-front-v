import {base_url} from "../modules/base-url.js";
import {openModal,closeModal} from "../modules/modal.js";

const form_login = document.getElementById('login-form');
const e_username = document.getElementById('username');
const e_password = document.getElementById('pass');

form_login.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = e_username.value;
    const password = e_password.value;
    const login_data = {
        username,
        password
    };
    openModal("MESSAGE",'Loading...');
    try{
        const response = await makeLoginRequest(login_data);
        const data  = await response.json();
        closeModal();
        if (response.ok) {
            localStorage.setItem('token',data.token);
            form_login.reset();
            location.href = '/me.html';
        } else {
            openModal('ERROR',data.message);
        }
    }catch(e){
        closeModal();
        openModal('Unknown error', 'Something went wrong :(');
    }
});

const makeLoginRequest = login_data => {
    let url = base_url + "/auth/login";
    const response = fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(login_data),
    });
    return response;
};

