
function signup() {
  var signupUsername = document.getElementById('signup-username').value;
  var signupPassword = document.getElementById('signup-password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var signupData = JSON.parse(localStorage.getItem('signupData')) || [];


  signupData.push({ username: signupUsername, password: signupPassword });
  localStorage.setItem('signupData', JSON.stringify(signupData));

  alert('Sign up successful! You can now log in.');
  window.location.href = 'index.html';
  return false;
}


function login() {
  var loginUsername = document.getElementById('login-username').value;
  var loginPassword = document.getElementById('login-password').value;
  var signupData = JSON.parse(localStorage.getItem('signupData')) || [];

  for (var i = 0; i < signupData.length; i++) {
      if (signupData[i].username === loginUsername && signupData[i].password === loginPassword) {
          alert('Login successful!');
          return true;
      }
  }
}
