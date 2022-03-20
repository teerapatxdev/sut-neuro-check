const userData = {
  firstname: localStorage.getItem('firstname'),
  lastname: localStorage.getItem('lastname'),
  weight: localStorage.getItem('weight'),
  height: localStorage.getItem('height'),
  age: localStorage.getItem('age'),
  disease: localStorage.getItem('disease'),
};
let answer_B = '';
let answer_E = '';
let answer_F = '';
let answer_A = '';
let answer_S = '';
let answer_T = '';

document.getElementById('t').value = moment(Date.now()).format('HH:00');

console.log(userData);

function closeModal(modal) {
  $(modal).modal('hide');
  $('iframe').each(function () {
    const src = $(this).attr('src');
    $(this).attr('src', src);
  });
}

function sendTime() {
  answer_T = document.getElementById('t').value;
  const result = {
    answer_B: answer_B,
    answer_E: answer_E,
    answer_F: answer_F,
    answer_A: answer_A,
    answer_S: answer_S,
    answer_T: answer_T,
  };
  localStorage.setItem('result', JSON.stringify(result));
  window.location = './result';
}

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
          answer_B = form.elements['b'].value === 'true' ? true : false;
          answer_E =
            form.elements['e'].value === 'false'
              ? false
              : form.elements['e'].value;
          answer_F = form.elements['f'].value === 'true' ? true : false;
          answer_A = form.elements['a'].value === 'true' ? true : false;
          answer_S = form.elements['s'].value === 'true' ? true : false;
          if (
            answer_B == false &&
            answer_E == false &&
            answer_F == false &&
            answer_A == false &&
            answer_S == false
          ) {
            const result = {
              answer_B: answer_B,
              answer_E: answer_E,
              answer_F: answer_F,
              answer_A: answer_A,
              answer_S: answer_S,
            };
            localStorage.setItem('result', JSON.stringify(result));
            window.location = './result';
          } else {
            $('#modal_time').modal('show');
          }
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
})();

function setChecked_B(value) {
  document.getElementById(value).checked = true;
}

function setChecked_E(value) {
  document.getElementById(value).checked = true;
}

function setChecked_F(value) {
  document.getElementById(value).checked = true;
}

function setChecked_A(value) {
  document.getElementById(value).checked = true;
}

function setChecked_S(value) {
  document.getElementById(value).checked = true;
}
