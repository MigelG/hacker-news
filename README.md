# Hacker News
Это приложение для просмотра ста последних новостей с сайта [Hacker News](https://news.ycombinator.com/news).  
[Ссылка на gh-pages](https://migelg.github.io/hacker-news)
## Функционал
* На главной странице вы увидите 100 последних новостей с сайта [Hacker News](https://news.ycombinator.com/news)
* При нажатии на каждую новость откроется страница новости с комментариями
* Вы можете вручную ввести url адрес, если знаете id интересующей вас новости, в формате `news/id`
* Если такой новости не существует или адрес неправильный, то откроется страница 404
## В процессе создания применялись:
* Create React App
* CSS - стили написаны вручную с использованием БЭМ
* Загрузка данных с [официального апи Hacker News](https://github.com/HackerNews/API)
* Роутинг React Router v6
## Установка
1. Клонировать репозиторий `git clone git@github.com:MigelG/hacker-news.git`
2. Выполнить `npm install`
3. Выполнить `npm run start`
## Проблемы и планы по доработке
* Не получается корректно отобразить счетчик комментариев
* Добавить лоадер при загрузке комментариев
* Добавить кнопки "Назад" и "Далее" для навигации по списку новостей