const form = document.getElementById('votingForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const ageInput = document.getElementById('age').value.trim();
  const nameInput = document.getElementById('name').value.trim();

  // Validation: check empty inputs
  if (!ageInput || !nameInput) {
    alert('Please enter valid details.');
    return;
  }

  const age = Number(ageInput);
  const name = nameInput;

  // Create promise that resolves or rejects after 4 seconds based on age
  const voteCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  voteCheckPromise
    .then((message) => alert(message))
    .catch((message) => alert(message));
});
