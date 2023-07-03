const e_container = document.getElementById('flex-container');
const e_modal = document.getElementById('modal');

const showModal = (title, textContent) =>{
    e_container.classList.add('blur');
    e_modal.classList.add('show');
    const modalChildren = [...e_modal.children];
    modalChildren[0].textContent = title;
    modalChildren[1].textContent = textContent;
}

const onClickContainer = ()=>{
    e_container.addEventListener('click', ()=>{
        e_container.classList.remove('blur');
        e_modal.classList.remove('show');
    })
}

export{e_container,showModal,onClickContainer}