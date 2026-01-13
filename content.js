// This runs in the extension's context (ISOLATED world)
chrome.storage.local.get(['g_user', 'g_pass'], (data) => {
    if (data.g_user && data.g_pass) {
        const u = document.getElementById('txtusername');
        const p = document.getElementById('password');
        
        if (u && p) {
            u.value = data.g_user;
            p.value = data.g_pass;
            console.log("Credentials auto-filled.");
        }
    }
});