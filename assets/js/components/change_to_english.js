const idiomaToggle = document.getElementById('language-toggle');
function  languageCheck (event)
{
    if(event && event.target && event.target.checked)
      
        window.location.href= 'index-en.html';
}
    if(idiomaToggle)
    {
        idiomaToggle.addEventListener('change',languageCheck)
    }

export default languageCheck;

                