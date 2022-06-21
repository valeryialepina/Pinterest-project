localStorage.setItem("key", "value");
// localStorage.getItem('key', imgContainer);
window.addEventListener("storage", function(event) {
    console.log(event.key);
});
$(document).ready(function() {
    $(".wrapper__menu").click(function(event) {
        $(".menu__burger,.menu__text").toggleClass("active");
    });
});
// $(document).ready(function () {
//     $('.hiden-menu').click(function (event) {
//         $('.block__hide').toggleClass('active');
//     })
// })
// function hiden() {
//     blockHide.classList.toggle('active');
// }
function showModalWin() {
    const darkLayer = document.createElement("div"); // слой затемнения
    darkLayer.id = "shadow"; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение
    const modalWin = document.getElementById("popupWin"); // находим наше "окно"
    modalWin.style.display = "block"; // "включаем" его
    darkLayer.onclick = function() {
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = "none"; // делаем окно невидимым
        return false;
    };
    const buttonCan = document.querySelector(".cancellation");
    const buttonNext = document.querySelector(".next");
    buttonCan.onclick = function() {
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = "none"; // делаем окно невидимым
        return false;
    };
    buttonNext.onclick = function() {
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = "none"; // делаем окно невидимым
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
const imgContainer = document.querySelector(".container");
// const imgBlockDeskOne = document.querySelector('.deskOne')
// const block = document.createElement('div')
// block.classList.add('block')
// imgContainer.append(block)
Array.prototype.shuffle = function() {
    return this.sort(()=>Math.random() - 0.5);
};
fetch("https://625f14aa873d6798e2b29ded.mockapi.io/qwe").then((response)=>response.json()).then((responseNotSuffled)=>{
    const response = responseNotSuffled.shuffle();
    for (const image of response){
        const block = document.createElement("div");
        block.classList.add("block");
        imgContainer.append(block);
        //Создаем часть блока с картинкой и вызовом элементов
        const blockimg = document.createElement("div");
        blockimg.classList.add("block__image");
        block.append(blockimg);
        const imageElem = document.createElement("img");
        imageElem.src = image.image;
        blockimg.append(imageElem);
        const hidenMenu = document.createElement("div");
        hidenMenu.classList.add("hiden-menu");
        blockimg.append(hidenMenu);
        const toggleMenu = ()=>{
            blockHide.classList.toggle("active");
        };
        hidenMenu.addEventListener("click", (e)=>{
            e.stopPropagation();
            toggleMenu();
        });
        const blockDesk = document.createElement("div");
        blockDesk.classList.add("block__desk");
        blockimg.append(blockDesk);
        const span = document.createElement("span");
        span.innerHTML = "\xb7\xb7\xb7";
        hidenMenu.append(span);
        // Делаем скрытое меню
        const blockHide = document.createElement("div");
        blockHide.classList.add("block__hide");
        block.append(blockHide);
        document.addEventListener("click", (e)=>{
            let target = e.target;
            let its_blockHide = target == blockHide;
            let its_hidenMenu = target == hidenMenu;
            let hidenMenu_is_active = blockHide.classList.contains("active");
            if (!its_blockHide && !its_hidenMenu && hidenMenu_is_active) toggleMenu();
        });
        document.addEventListener("click", (e)=>{
            let tar = e.target;
            let secHide = tar == blockDesk;
            let secHidenMenu = tar == spanHideTwo;
            let secMenu_is_active = blockDesk.classList.contains("active");
            if (!secHide && !secHidenMenu && secMenu_is_active) secToggleMenu();
        });
        // const blDesk = document.createElement('div')
        // blDesk.classList.add('block__desk')
        // block.append(blDesk)
        const spanHide = document.createElement("span");
        spanHide.innerHTML = "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0438\u043D";
        spanHide.addEventListener("click", ()=>{
            blockimg.classList.toggle("active");
        });
        blockHide.append(spanHide);
        const spanHideTwo = document.createElement("span");
        spanHideTwo.innerHTML = "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0434\u043E\u0441\u043A\u0443";
        blockHide.append(spanHideTwo);
        const secToggleMenu = ()=>{
            blockDesk.classList.toggle("active");
        };
        spanHideTwo.addEventListener("click", (e)=>{
            e.stopPropagation();
            secToggleMenu();
        });
        const spanDesk = document.createElement("span");
        spanDesk.innerHTML = "\u0434\u043E\u0441\u043A\u0430 1";
        blockDesk.append(spanDesk);
        const spanDesktwo = document.createElement("span");
        spanDesktwo.innerHTML = "\u0434\u043E\u0441\u043A\u0430 2";
        blockDesk.append(spanDesktwo);
        const spanDeskthree = document.createElement("span");
        spanDeskthree.innerHTML = "\u0434\u043E\u0441\u043A\u0430 3";
        blockDesk.append(spanDeskthree);
        const spanHideThree = document.createElement("span");
        spanHideThree.innerHTML = "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u0441\u044F";
        spanHideThree.addEventListener("click", showModalWin);
        blockHide.append(spanHideThree);
        // Делаем автора и коментарий под пином 
        const blockDsc = document.createElement("div");
        blockDsc.classList.add("block__dsc");
        block.append(blockDsc);
        const avatar = document.createElement("div");
        avatar.classList.add("avatar");
        blockDsc.append(avatar);
        const avatarElem = document.createElement("img");
        avatarElem.src = image.avatar;
        avatar.append(avatarElem);
        const text = document.createElement("div");
        text.classList.add("text");
        blockDsc.append(text);
        const comentElem = document.createElement("span");
        comentElem.classList.add("text-info");
        comentElem.innerHTML = image.coment;
        text.append(comentElem);
    }
});
document.querySelector(".wrapper__search").oninput = function() {
    let value = this.value.trim();
    let elItems = document.querySelectorAll(".block");
    if (value != "") elItems.forEach(function(elem) {
        const searchElemText = elem.querySelector(".text-info");
        if (searchElemText.textContent.toLowerCase().search(value.toLowerCase()) == -1) elem.classList.add("hide");
        else elem.classList.remove("hide");
    });
    else elItems.forEach(function(elem) {
        elem.classList.remove("hide");
    });
};

