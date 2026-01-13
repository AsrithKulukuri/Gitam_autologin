// This runs in the website's context (MAIN world)

// 1. Bypass Right-click and Key blocks
document.addEventListener('contextmenu', e => e.stopImmediatePropagation(), true);
document.addEventListener('keydown', e => e.stopImmediatePropagation(), true);

// 2. Kill alert popups
window.alert = () => { console.log("Blocked GITAM alert"); };

// 3. Solve CAPTCHA using the page's hidden variable
const solveCaptcha = setInterval(() => {
    if (window.captchaValue) {
        const field = document.getElementById('captcha_form');
        if (field) {
            field.value = window.captchaValue;
            clearInterval(solveCaptcha);
        }
    }
}, 500);