let base_url= 'http://localhost:8080/snaptw/api/v1';
const signup_btn = document.getElementById('signup');
const form_login = document.getElementById('login-form');
const e_username = document.getElementById('username');
const e_password = document.getElementById('pass');
let token = '';
const user = {
    "name" : "Sergio",
    "lastName" : "Suarique",
    "email" : "ss_1913@outlook.com",
    "username": "checho",
    "password": "chech0123"
}

signup_btn.addEventListener('click', () =>{
    let xhr;
    let url = base_url+'/auth/signup';
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.addEventListener('load',(data)=>{
        console.log(`status: ${data.target.status}`);
        alert(JSON.parse(data.target.response).message);
    });

    xhr.send(JSON.stringify(user));
});
form_login.addEventListener('submit', (e)=>{
    e.preventDefault();
    let xhr;
    let url = base_url+'/auth/login'
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.addEventListener('load',(data)=>{
        let status = data.target.status;
        let response = JSON.parse(data.target.response);
        console.log(`status: ${status}`);
        if(status == 200){
            alert(response.token);
            token = response;
        }
        else
            alert(response.message);
        
    });
    const username = e_username.value;
    const password = e_password.value;
    const login_data = {
        username,
        password
    }
    xhr.send(JSON.stringify(login_data));
});
