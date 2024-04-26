'use strict';

document.addEventListener('DOMContentLoaded', () => { //ожидаем не полную загрузку страницы, а только построения DOM-дерева

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),   //создаем псевдомассив с элементами promo__adv
        poster = document.querySelector('.promo__bg'),        //класс постера, в него вложен блок с жанром
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),    //Родительский элемент для списка фильмов
        addForm = document.querySelector('form.add'),  //форма добавления фильмов
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); //отменяем дефолтное поведение (перезагрузку страницы)

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        // если поле addInput пусто, выходим из функции:
        if(!newFilm) { 
            return
        }

        //Если название фильма больше 21 символа, обрезаем и добавляем ...
        if (newFilm.length > 21) { 
            newFilm = `${newFilm.substring(0,22)}...`;
        }

        //Еслы выбрана галочка "Любимые", выводим сообщение
        if (favourite) {
            console.log(`Добавляем фильм ${newFilm} в любимые`);
        }

        movieDB.movies.push(newFilm); //Добавляем новый фильм в массив
        sortArr(movieDB.movies); //Сортируем по алфавиту

        createMovieList(movieDB.movies, movieList); //Создаем элементы на странице

        event.target.reset(); // очистка формы после отправки
    });
    
    //Перебор элементов promo__adv, добавление их в массив и их удаление:
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });

        //вариант 2: вместо стрелочной функции используем обычную анонимную функцию
        // adv.forEach(function(item) {
        //     item.remove();
        // });
    };
    

    const makeChanges = () => {
        // изменяем жанр (замена текста в блоке):
        genre.textContent = 'Драма';

        //замена заднего фона у элемента poster
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    

    const sortArr = (arr) => {
        arr.sort();
    }
    

    function createMovieList (films, parent) {
        //формируем список фильмой из этого файла (movieDB[movies]), предварительно очистим существующий список на странице:
        parent.innerHTML = ''; //очистка списка фильмов
        sortArr(films);  //сортировка списка фильмов по алфавиту

        films.forEach((film, i) => { //непосредственно запись списка фильмов на страницу
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // Удаление элементов по клику на "корзинку" в списке фильмов:
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); // Удаление родительского элемента (фильма) со страницы
                parent.splice(i, 1); // удаление элемента из массива

                createMovieList (films, parent); //перестроение списка фильмов (рекурсия)
            });
        });
    }

    deleteAdv(adv); // удаление рекламы
    makeChanges();  // изменение элементов (в функции описаны статично)
    createMovieList(movieDB.movies, movieList); // вызов функции для создания списка фильмов

});