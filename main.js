const bgShape = document.getElementById('bg-shape');
const showLink = document.getElementById('social-show');
bgShape.addEventListener('click', () => {
    bgShape.classList.toggle('bg-shape--active');
    if (bgShape.classList.contains('bg-shape--active')) {
        showLink.style.display = 'flex';
    } else {
        showLink.style.display = 'none';   
    }
})