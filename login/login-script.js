import {base_url} from "../modules/base-url.js";
import {showModal,onClickContainer} from "../modules/modal.js";

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
    let response = await makeLoginRequest(login_data);
    showModal(response[0],response[1]);
});

onClickContainer();


const makeLoginRequest = async (login_data) => {
    let url = base_url + "/auth/login";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(login_data),
        });
        const data = await response.json();
        if (response.ok) {
            return ['WELCOME', data.token];
        } else {
            return ['ERROR',data.message];
        }
    } catch (error) {
        return ['Unknown error', error];
    }
};

