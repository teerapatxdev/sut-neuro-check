const userData = {
  firstname: localStorage.getItem('firstname'),
  lastname: localStorage.getItem('lastname'),
  weight: localStorage.getItem('weight'),
  height: localStorage.getItem('height'),
  age: localStorage.getItem('age'),
  disease: localStorage.getItem('disease'),
};

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
          Swal.fire({
            position: 'top',
            icon: 'error',
            toast: true,
            title: 'โปรดแบบประเมินให้ครบ',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          event.preventDefault();
          let resultScore =
            Number(form.elements['e'].value) +
            Number(form.elements['v'].value) +
            Number(form.elements['m'].value);
          localStorage.setItem('result', resultScore);
          window.location = './result';
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
})();

function setChecked_E(value) {
  document.getElementById(value).checked = true;
}
function setChecked_V(value) {
  document.getElementById(value).checked = true;
}
function setChecked_M(value) {
  document.getElementById(value).checked = true;
}
