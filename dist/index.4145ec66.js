$(document).ready(function() {
    $('.wrapper__menu').click(function(event) {
        $('.menu__burger,.menu__text').toggleClass('active');
    });
});
// $(document).ready(function () {
//     $('.hiden-menu').click(function (event) {
//         $('.block__hide').toggleClass('active');
//     })
// })
// function hiden() {
//     const hide = querySelectorAll('.block__hide')
//     hide.classList.toggle('active');
// }
function showModalWin() {
    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение
    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его
    darkLayer.onclick = function() {
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        return false;
    };
}
// function blur() {
//     const img = document.getElementById('1')
//     console.log(img)
//     img.classlist.add('active')
//     console.log(img)
//     return img;
// }
const imgContainer = document.querySelector('.container');
// const block = document.createElement('div')
// block.classList.add('block')
// imgContainer.append(block)
fetch('https://625f14aa873d6798e2b29ded.mockapi.io/qwe').then((response)=>response.json()
).then((response)=>{
    for (const image of response){
        const block = document.createElement('div');
        block.classList.add('block');
        imgContainer.append(block);
        //Создаем часть блока с картинкой и вызовом элементов
        const blockimg = document.createElement('div');
        blockimg.classList.add('block__image');
        block.append(blockimg);
        const imageElem = document.createElement('img');
        imageElem.src = image.image;
        blockimg.append(imageElem);
        const hidenMenu = document.createElement('div');
        hidenMenu.classList.add('hiden-menu');
        blockimg.append(hidenMenu);
        hidenMenu.addEventListener('click', ()=>{
            blockHide.classList.toggle('active');
        });
        // const blockDesk = document.createElement('div')
        // blockDesk.classList.add('block-desk')
        // blockimg.append(blockDesk)
        // blockDesk.addEventListener('click', () => {
        //     blockDesk.classList.toggle('active');
        // })
        const span = document.createElement('span');
        span.innerHTML = '···';
        hidenMenu.append(span);
        // Делаем скрытое меню 
        const blockHide = document.createElement('div');
        blockHide.classList.add('block__hide');
        block.append(blockHide);
        const spanHide = document.createElement('span');
        spanHide.innerHTML = 'Скрыть пин';
        spanHide.addEventListener('click', ()=>{
            blockimg.classList.toggle('active');
        });
        blockHide.append(spanHide);
        const spanHideTwo = document.createElement('span');
        spanHideTwo.innerHTML = 'Добавить на доску';
        spanHideTwo.addEventListener('click');
        blockHide.append(spanHideTwo);
        const spanHideThree = document.createElement('span');
        spanHideThree.innerHTML = 'Пожаловатся';
        spanHideThree.addEventListener('click', showModalWin);
        blockHide.append(spanHideThree);
        // Делаем автора и коментарий под пином 
        const blockDsc = document.createElement('div');
        blockDsc.classList.add('block__dsc');
        block.append(blockDsc);
        const avatar = document.createElement('div');
        avatar.classList.add('avatar');
        blockDsc.append(avatar);
        const avatarElem = document.createElement('img');
        avatarElem.src = image.avatar;
        avatar.append(avatarElem);
        const text = document.createElement('div');
        text.classList.add('text');
        blockDsc.append(text);
        const comentElem = document.createElement('span');
        comentElem.innerHTML = image.coment;
        text.append(comentElem);
    }
});

