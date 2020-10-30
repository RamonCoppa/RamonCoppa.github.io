$(document).foundation()

$('.sim-thumb').on('click', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})

const openModal = (element) => {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}