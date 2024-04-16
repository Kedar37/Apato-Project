const storeCredentials = (username, email, password) => {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', btoa(password));
  };
  
  const authenticateUser = (inputEmail, inputPassword) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = atob(localStorage.getItem('password'));
  
    if (inputEmail === storedEmail && inputPassword === storedPassword) {
      return true;
    } else {
      return false;
    }
  };


  const clearCredentials = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  };

  
  export { storeCredentials, authenticateUser, clearCredentials };