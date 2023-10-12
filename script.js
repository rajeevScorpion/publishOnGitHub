document.addEventListener('DOMContentLoaded', function() {
    let closeButtons = document.querySelectorAll('.card .btn-close');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    });
});
