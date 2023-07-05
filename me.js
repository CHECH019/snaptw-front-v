import { base_url } from "./modules/base-url.js";
import { openModal,closeModal } from "./modules/modal.js";

const eName = document.getElementById('name');
const eLastName = document.getElementById('lastName');
const eUsername = document.getElementById('username');
const eEmail = document.getElementById('email');

window.addEventListener('load',async()=>{
    let token = localStorage.getItem('token');
    if(token == null){
        openModal('ERROR','You must be authenticated to access this resource');
    }else{
        try {
            let response = await makeMyInfoRequest(token);
            const data = await response.json();
            if(response.ok){
                fillElements(data);
            }else{
                openModal('Error', data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
});

const makeMyInfoRequest = token =>{
    const url = base_url+'/users/me';
    const response = fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response;
}

const fillElements = (data)=>{
    eName.appendChild(document.createTextNode(data.name));
    eLastName.appendChild(document.createTextNode(data.lastName));
    eUsername.appendChild(document.createTextNode(data.username));
    eEmail.appendChild(document.createTextNode(data.email));
}