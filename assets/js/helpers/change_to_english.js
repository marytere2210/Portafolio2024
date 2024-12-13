const languageToggle = document.getElementById('language-toggle');
const currentLanguage = window.location.href.includes('index-en.html')
languageToggle.checked = currentLanguage;

function languageCheck(){
languageToggle.addEventListener('change', () =>
{
    if (languageToggle.checked) {
        window.location.href= 'index-en.html';
    } else {
        window.location.href= 'index.html';
    }
});
}
export default languageCheck;

