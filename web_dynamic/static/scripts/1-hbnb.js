$(document).ready(function () {
  const amenities = {};
  $('input[type="checkbox"]').click(function () {
    $(this).each(function () {
      if (this.checked === true) {
        amenities[$(this).data('id')] = $(this).data('name');
      } else {
        delete amenities[$(this).data('id')];
      }
    });
    $('.amenities h4').text(Object.values(amenities).join(', '));
  });
});
