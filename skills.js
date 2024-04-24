document.querySelectorAll('.front-end h3, .back-end h3, .database h3').forEach(item => {
    item.addEventListener('click', function() {
        let sublist = this.nextElementSibling;
        sublist.classList.toggle('visible');
        sublist.classList.toggle('hidden');
    });
});
