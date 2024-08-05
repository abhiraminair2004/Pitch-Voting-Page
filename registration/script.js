document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('bgAnimation');
    const colorBoxes = 400; // 20x20 grid

    for (let i = 0; i < colorBoxes; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        container.appendChild(colorBox);
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log('Team Registration Submitted!');
    console.log('Team Name:', document.getElementById('teamName').value);
    console.log('Member 1:', document.getElementById('member1').value);
    console.log('Member 2:', document.getElementById('member2').value);
    console.log('Member 3:', document.getElementById('member3').value);
    console.log('Member 4:', document.getElementById('member4').value);
    

    alert('Team registration submitted successfully!');
    this.reset();
});