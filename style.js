
   
    const openBtn = document.querySelector('.contaner > .fa-bars');
    const closeBtn = document.querySelector('.navbar .fa-circle-xmark');
    const menu = document.querySelector('.navbar');
    
    openBtn.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
    });