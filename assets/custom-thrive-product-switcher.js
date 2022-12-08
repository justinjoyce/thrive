document.addEventListener("DOMContentLoaded", function(event) {
  const wrapper = document.getElementById('thrive-button-wrapper');
  const flavor_back = document.getElementById('flavor-back');
  const flavor_info = document.getElementById('flavor-info');
  wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton || event.target.classList.contains('selected')) {
      return;
    }
    flavor_back.src = event.target.getAttribute('data-back');
    flavor_info.src = event.target.getAttribute('data-info');
    document.getElementsByClassName('thrive-button selected')[0].classList.toggle('selected');
    event.target.classList.toggle('selected');
  })
});