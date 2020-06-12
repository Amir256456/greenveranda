// var menu = document.querySelector('#menu');
// var pervoe = document.querySelector('.pervoe');
// var detskoe = document.querySelector('.detskoe');
// var napitki = document.querySelector('.napitki');
// var shashlik = document.querySelector('.shashlik');
// var riba = document.querySelector('.riba');
// var alkohol = document.querySelector('.alkohol');
// var zakuski = document.querySelector('.zakuski');
// var row = document.querySelectorAll('.row');
// var btn = document.querySelectorAll('.btnMenu');
// var num = 0;


// btn[1].addEventListener('click', function(){

//     for(let i = 0; i < btn.length; i++){
//         if(btn[i].classList.contains('active')){
//             btn[i].classList.remove('active');
//         }
//     }

//     btn[1].classList.add('active');
//     for(var l = 0; l < menu.children.length; l++){
//         if(menu.children[l].classList.contains('pervoe')){
//             menu.replaceChild(menu.children[l], menu.children[num]);
//             num++;
//             l--;
//             console.log(menu.children[l]);
//             menu.children[l].style.visibility = 'visible';
//             menu.children[l].style.marginBottom = '55px';
//             menu.children[l].style.height = 'auto';
//         }
//     }
// })


// btn[7].addEventListener('click', function(){

//     for(let i = 0; i < btn.length; i++){
//         if(btn[i].classList.contains('active')){
//             btn[i].classList.remove('active');
//         }
//     }

//     btn[7].classList.add('active');

//     for(let j = 0; j < row.length; j++){
//         row[j].style.visibility = 'hidden';
//         row[j].style.marginBottom = '0px';
//         row[j].style.height = '0.1px';
//     }

//     menu.replaceChild(menu.children[15], menu.children[2]);
//     menu.replaceChild(menu.children[14], menu.children[1]);
//     menu.replaceChild(menu.children[13], menu.children[0]);

//     menu.children[2].style.visibility = 'visible';
//     menu.children[2].style.marginBottom = '55px';
//     menu.children[2].style.height = 'auto';

//     menu.children[0].style.visibility = 'visible';
//     menu.children[0].style.marginBottom = '55px';
//     menu.children[0].style.height = 'auto';

//     menu.children[1].style.visibility = 'visible';
//     menu.children[1].style.marginBottom = '55px';
//     menu.children[1].style.height = 'auto';
// })

var menu = document.querySelector('#menu'); 
var pervoe = document.querySelector('.pervoe');
var detskoe = document.querySelector('.detskoe'); 
var napitki = document.querySelector('.napitki');
var shashlik = document.querySelector('.shashlik');
var riba = document.querySelector('.riba');
var alkohol = document.querySelector('.alkohol');
var zakuski = document.querySelector('.zakuski');
var row = document.querySelectorAll('.row');
var btn = document.querySelectorAll('.btnMenu');

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

    row[1].children[2].style.visibility = 'hidden';
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
    row[3].children[2].style.visibility = 'hidden';
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