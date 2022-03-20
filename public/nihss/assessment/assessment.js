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
          const scoreArray = [
            form.elements['1a'].value,
            form.elements['1b'].value,
            form.elements['1c'].value,
            form.elements['2a'].value,
            form.elements['3a'].value,
            form.elements['4a'].value,
            form.elements['5a'].value,
            form.elements['6a'].value,
            form.elements['7a'].value,
            form.elements['8a'].value,
            form.elements['9a'].value,
            form.elements['10a'].value,
            form.elements['11a'].value,
          ];
          let resultScore = 0;
          scoreArray.map((item) => {
            resultScore += Number(item);
          });
          localStorage.setItem('result', resultScore);
          window.location = './result';
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
})();

function setChecked1A(value) {
  document.getElementById(value).checked = true;
}

function setChecked1B(value) {
  document.getElementById(value).checked = true;
}

function setChecked1C(value) {
  document.getElementById(value).checked = true;
}

function setChecked2A(value) {
  document.getElementById(value).checked = true;
}

function setChecked3A(value) {
  document.getElementById(value).checked = true;
}

function setChecked4A(value) {
  document.getElementById(value).checked = true;
}

function setChecked5A(value) {
  document.getElementById(value).checked = true;
}

function setChecked6A(value) {
  document.getElementById(value).checked = true;
}

function setChecked7A(value) {
  document.getElementById(value).checked = true;
}

function setChecked8A(value) {
  document.getElementById(value).checked = true;
}

function setChecked9A(value) {
  document.getElementById(value).checked = true;
}

function setChecked10A(value) {
  document.getElementById(value).checked = true;
}

function setChecked11A(value) {
  document.getElementById(value).checked = true;
}
