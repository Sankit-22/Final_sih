document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
      const dropdownContent = button.nextElementSibling;
  
      if (dropdownContent.classList.contains('open')) {
        dropdownContent.classList.remove('open');
      } else {
        document.querySelectorAll('.dropdown-content').forEach(content => {
          content.classList.remove('open');
        });
        dropdownContent.classList.add('open');
      }
    });
  });


 
  