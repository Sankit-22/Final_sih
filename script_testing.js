document.querySelectorAll('.dropdown').forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown-header');
    const body = dropdown.querySelector('.dropdown-body');

    header.addEventListener('click', () => {
        const isOpen = dropdown.classList.contains('open');

        // Close all dropdowns before opening another
        document.querySelectorAll('.dropdown').forEach(item => {
            item.classList.remove('open');
            item.querySelector('.dropdown-body').style.maxHeight = null;
        });

        if (!isOpen) {
            dropdown.classList.add('open');
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            dropdown.classList.remove('open');
            body.style.maxHeight = null;
        }
    });
});
