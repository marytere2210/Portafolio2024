const lenguage__en = document.querySelector('#language-toggle');

function redirect__en() {
    if (lenguage__en.checked) {
        window.location.href = 'index-en.html'; 
    }
}

lenguage__en.addEventListener('change', redirect__en);

export default redirect__en;
