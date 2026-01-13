document.getElementById('save').addEventListener('click', () => {
    const user = document.getElementById('uid').value;
    const pass = document.getElementById('pass').value;
    chrome.storage.local.set({ g_user: user, g_pass: pass }, () => {
        alert("Saved! Refresh the login page.");
    });
});