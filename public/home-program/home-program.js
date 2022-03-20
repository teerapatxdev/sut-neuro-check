function showModal(id) {
  $(id).modal('show');
}

function closeModal(modal) {
  $(modal).modal('hide');
  $('iframe').each(function () {
    const src = $(this).attr('src');
    $(this).attr('src', src);
  });
}
