document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('bgAnimation');
    const colorBoxes = 400; // 20x20 grid

    for (let i = 0; i < colorBoxes; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        container.appendChild(colorBox);
    }
});

