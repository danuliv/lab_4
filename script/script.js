$(document).ready(() => {
  $('.loader__img').animate(
    {
      top: 0
    },
    3000,
    () => {
      $('.loader').animate(
        {
          opacity: 0
        },
        1000,
        () => {
          $('.loader').css('display', 'none');
        }
      );
    }
  );
});
