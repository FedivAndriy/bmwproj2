let cookies = document.getElementById('cookie');
activeBtn = document.getElementById('next');

activeBtn.addEventListener('click', function() {
    document.cookie = "CookieBy=InventionTricks; expires="+ new Date(2023, 05, 12).toUTCString()


    document.cookie = "Name=John; max-age="+60*60*24*30
    document.cookue = "LastName=Deo; max-age+"+60*60*24*30

    if(document.cookie){
        cookies.classList.add('hide')
    }
})
