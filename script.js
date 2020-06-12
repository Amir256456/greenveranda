var menu = document.querySelector('#menu'); 
var pervoe = document.querySelector('.pervoe');
var detskoe = document.querySelector('.detskoe'); 
var napitki = document.querySelector('.napitki');
var shashlik = document.querySelector('.shashlik');
var riba = document.querySelector('.riba');
var alkohol = document.querySelector('.alkohol');
var zakuski = document.querySelector('.zakuski');
var row = document.querySelectorAll('.clear');
var btn = document.querySelectorAll('.btnMenu');
var website = document.querySelector('.website');

btn[0].addEventListener('click', function(){

    for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('active')){
            btn[i].classList.remove('active');
         }
    }
    btn[0].classList.add('active');

    for(let i = 0; i < row.length; i++){
            row[i].style.visibility = 'visible';
            row[i].style.marginBottom = '55px';
            row[i].style.height = 'auto';
    }

    row[1].children[2].style.visibility = 'visible';
    row[3].children[2].style.visibility = 'visible';
})

btn[1].addEventListener('click', function(){

    for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('active')){
            btn[i].classList.remove('active');
         }
    }
    btn[1].classList.add('active');

    for(let i = 0; i < row.length; i++){
        if(row[i].classList.contains('pervoe')){
            row[i].style.visibility = 'visible';
            row[i].style.marginBottom = '55px';
            row[i].style.height = 'auto';
        }else{
            row[i].style.visibility = 'hidden';
            row[i].style.marginBottom = '0px';
            row[i].style.height = '0.1px';
        }
    }

    row[2].children[2].style.visibility = 'hidden';
    website.style.height = '5111px';
})

btn[2].addEventListener('click', function(){

    for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('active')){
            btn[i].classList.remove('active');
         }
    }
    btn[2].classList.add('active');

    for(let i = 0; i < row.length; i++){
        if(row[i].classList.contains('zakuski')){
            row[i].style.visibility = 'visible';
            row[i].style.marginBottom = '55px';
            row[i].style.height = 'auto';
        }else{
            row[i].style.visibility = 'hidden';
            row[i].style.marginBottom = '0px';
            row[i].style.height = '0.1px';
        }
    }
    row[3].children[3].style.visibility = 'hidden';
})

btn[3].addEventListener('click', function(){

    for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('active')){
            btn[i].classList.remove('active');
         }
    }
    btn[3].classList.add('active');

    for(let i = 0; i < row.length; i++){
        if(row[i].classList.contains('riba')){
            row[i].style.visibility = 'visible';
            row[i].style.marginBottom = '55px';
            row[i].style.height = 'auto';
        }else{
            row[i].style.visibility = 'hidden';
            row[i].style.marginBottom = '0px';
            row[i].style.height = '0.1px';
        }
    }
})

btn[4].addEventListener('click', function(){

    for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('active')){
            btn[i].classList.remove('active');
         }
    }
    btn[4].classList.add('active');

    for(let i = 0; i < row.length; i++){
        if(row[i].classList.contains('shashlik')){
            row[i].style.visibility = 'visible';
            row[i].style.marginBottom = '55px';
            row[i].style.height = 'auto';
        }else{
            row[i].style.visibility = 'hidden';
            row[i].style.marginBottom = '0px';
            row[i].style.height = '0.1px';
        }
    }
})
btn[5].addEventListener('click', function(){

    for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('active')){
            btn[i].classList.remove('active');
         }
    }
    btn[5].classList.add('active');

    for(let i = 0; i < row.length; i++){
        if(row[i].classList.contains('detskoe')){
            row[i].style.visibility = 'visible';
            row[i].style.marginBottom = '55px';
            row[i].style.height = 'auto';
        }else{
            row[i].style.visibility = 'hidden';
            row[i].style.marginBottom = '0px';
            row[i].style.height = '0.1px';
        }
    }
})

btn[6].addEventListener('click', function(){

    for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('active')){
            btn[i].classList.remove('active');
         }
    }
    btn[6].classList.add('active');

    for(let i = 0; i < row.length; i++){
        if(row[i].classList.contains('napitki')){
            row[i].style.visibility = 'visible';
            row[i].style.marginBottom = '55px';
            row[i].style.height = 'auto';
        }else{
            row[i].style.visibility = 'hidden';
            row[i].style.marginBottom = '0px';
            row[i].style.height = '0.1px';
        }
    }
})

btn[7].addEventListener('click', function(){

    for(let i = 0; i < btn.length; i++){
        if(btn[i].classList.contains('active')){
            btn[i].classList.remove('active');
         }
    }
    btn[7].classList.add('active');

    for(let i = 0; i < row.length; i++){
        if(row[i].classList.contains('alkohol')){
            row[i].style.visibility = 'visible';
            row[i].style.marginBottom = '55px';
            row[i].style.height = 'auto';
        }else{
            row[i].style.visibility = 'hidden';
            row[i].style.marginBottom = '0px';
            row[i].style.height = '0.1px';
        }
    }
})


