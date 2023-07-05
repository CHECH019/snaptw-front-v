const openModal = (title, textContent) =>{
    const e_modal = document.getElementById('modal');
    const modal_children = [...e_modal.children]
    modal_children[0].textContent = title;
    modal_children[1].textContent = textContent;
    e_modal.showModal();
    modal_children[2].addEventListener('click',closeModal);
}

const closeModal = ()=>{
    const e_modal = document.getElementById('modal');
    e_modal.close();
}

export{openModal,closeModal}