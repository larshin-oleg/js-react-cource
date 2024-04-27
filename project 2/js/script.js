"use strict";

window.addEventListener('DOMContentLoaded', () => { // Ожидаем событие построения DOM-дерева

    // переменные с элементами страницы:
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    //функция сокрытия контента табов
    function hideTabContent(){
        tabsContent.forEach(item => {
            //item.style.display = 'none'; //всем табам присваиваем стиль display = none
            item.classList.add('hide'); //заменили на класс, делаем тоже что в комменте выше
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active'); // удаляем класс tabheader__item_active у таба, где он прописан
        });
    }

    // функция отображения таба
    function showTabContent (i = 0){ // по дефолту i = 0
        // tabsContent[i].style.display = 'block'; // отображаем нужный нам блок
        tabsContent[i].classList.add('show', 'fade'); //заменили на класс, делаем тоже что в комменте выше
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); // добавление класса активности целевому табу
    }

    hideTabContent();
    showTabContent();

    //переключение табов по клику на tabsParent:
    tabsParent.addEventListener('click', (event) => { 
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => { // если кликнули на таб, то вызываем функции с номером таба
                if (target == item) {
                    hideTabContent();
                    showTabContent(i); // непостредственно переключение самого таба
                }
            });
        }
    })
});