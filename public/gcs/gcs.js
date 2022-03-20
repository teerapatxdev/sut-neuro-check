(function () {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          localStorage.setItem('firstname', form.elements['firstname'].value);
          localStorage.setItem('lastname', form.elements['lastname'].value);
          localStorage.setItem('weight', form.elements['weight'].value);
          localStorage.setItem('height', form.elements['height'].value);
          localStorage.setItem('age', form.elements['age'].value);
          localStorage.setItem('disease', form.elements['disease'].value);
          window.location = './assessment';
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
})();
