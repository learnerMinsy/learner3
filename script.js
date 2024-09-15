document.querySelectorAll('nav ul li a i').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        icon.style.color = 'rgba(255, 255, 255, 0.8)';
    });

    icon.addEventListener('mouseout', function() {
        icon.style.backgroundColor = 'transparent';
        icon.style.color = '#fff';
    });
});
