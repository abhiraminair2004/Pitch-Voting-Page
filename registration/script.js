document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('bgAnimation');
    const colorBoxes = 400;

    for (let i = 0; i < colorBoxes; i++) {
        const colorBox = document.createElement('div');
        colorBox.classList.add('colorBox');
        container.appendChild(colorBox);
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Team Registration Submitted!');
    console.log('Team Name:', document.getElementById('teamName').value);
    console.log('Member 1:', document.getElementById('member1').value);
    console.log('Member 2:', document.getElementById('member2').value);
    console.log('Member 3:', document.getElementById('member3').value);
    console.log('Member 4:', document.getElementById('member4').value);
    

    alert('Team registration submitted successfully!');
    this.reset();
});