document.getElementById('submit-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  document.getElementById('game-output').innerHTML += `
  <p>You entered: ${userInput}</p>
  `;
  document.getElementById('user-input').value = ''; // Clear the input field
});