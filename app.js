document.addEventListener('DOMContentLoaded', function () {
  // Background Animation
  const bgAnimation = document.getElementById('bgAnimation');
  const numberOfColorBoxes = 400;

  for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.appendChild(colorBox);
  }

  // Voting System
  const questionText = "Did you like this pitch?";
  const options = ["Yes", "No"];

  document.getElementById('question').textContent = questionText;

  const table = document.getElementById('table');
  updateOptions(options);

  function updateOptions(options) {
      options.forEach(item => {
          var row = document.createElement("div");
          row.classList.add("tr");

          var cell1 = document.createElement("div");
          cell1.classList.add("td", "check");
          cell1.innerHTML = "<i class='far fa-square'></i>";

          var cell2 = document.createElement("div");
          cell2.classList.add("td");
          cell2.innerText = item;

          row.appendChild(cell1);
          row.appendChild(cell2);
          table.appendChild(row);
      });
  }

  var rows = document.getElementsByClassName("tr");
  for (var i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function (e) {
          var isActive = this.classList.contains("active");

          // Remove active class from all rows
          for (var j = 0; j < rows.length; j++) {
              rows[j].classList.remove("active");
          }

          // Toggle the active class on the clicked row
          if (!isActive) {
              this.classList.add("active");
              document.getElementById("vote").classList.add("shown");
          } else {
              this.classList.remove("active");
              document.getElementById("vote").classList.remove("shown");
          }
      });
  }

  document.getElementById("vote").addEventListener("click", function (e) {
      this.classList.add("loading");
      var choice = document.querySelector(".tr.active .td:nth-child(2)").innerText;
      setTimeout(() => {
          document.getElementById("content").innerHTML = `<h1>You chose ${choice}.</h1><h2>Thank you for voting!</h2>`;
          triggerConfetti(choice);
      }, 1000);
  });

  function triggerConfetti(choice) {
      const confettiSettings = {
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
      };

      if (choice === "Yes") {
          confetti({
              ...confettiSettings,
              particleCount: 200,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#00ff00'],
              shapes: ['circle'],
          });
      } else {
          confetti({
              ...confettiSettings,
              particleCount: 200,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#ff0000'],
              shapes: ['circle'],
          });
      }
  }
});
