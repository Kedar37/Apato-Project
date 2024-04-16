import { clearCredentials } from "./auth";

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
    clearCredentials();
    window.location.href = '/login.html';
});