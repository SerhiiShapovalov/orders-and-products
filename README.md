# React orders-and-products template

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).
Используй этот репозиторий, на базе шаблона организации GoIT (https://goitacademy.github.io/react-homework-template/), как шаблон для создания репозитория
своего проекта либо просто клонируй его себе.

## Создание репозитория по шаблону

Используй этот репозиторий, как шаблон для создания репозитория
своего проекта. Для этого нажми на кнопку `«Use this template»` и выбери опцию
`«Create a new repository»`, как показано на изображении.

![Creating repo from a template step 1](./assets/template-step-1.png)

На следующем шаге откроется страница создания нового репозитория. Заполни поле
его имени, убедись что репозиторий публичный, после чего нажми кнопку
`«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

После того как репозиторий будет создан, необходимо перейти в настройки
созданного репозитория на вкладку `Settings` > `Actions` > `General` как
показано на изображении.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскролив страницу до самого конца, в секции `«Workflow permissions»` выбери
опцию `«Read and write permissions»` и поставь галочку в чекбоксе. Это
необходимо для автоматизации процесса деплоя проекта.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Теперь у тебя есть личный репозиторий проекта, со структурой файлов и папок
репозитория-шаблона. Далее работай с ним как с любым другим личным репозиторием,
клонируй его себе на компьютер, пиши код, делай коммиты и отправляй их на
GitHub.

## Подготовка к работе

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Установи базовые зависимости проекта командой `npm install`.
3. Запусти режим разработки, выполнив команду `npm start`.
4. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и
деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда обновляется
ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого
необходимо в файле `package.json` отредактировать поле `homepage`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/deploy-status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

### Маршрутизация

Если приложение использует библиотеку `react-router-dom` для маршрутизации,
необходимо дополнительно настроить компонент `<BrowserRouter>`, передав в пропе
`basename` точное название твоего репозитория. Слеш в начале строки обязателен.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит линтинг и сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.


## Чтобы настроить и работать с данным репозиторием после его клонирования с GitHub, вам необходимо выполнить следующие шаги:
1.	Клонирование репозитория: Вы уже клонировали репозиторий с GitHub. Убедитесь, что вы работаете с вашей копией, а не с оригинальным репозиторием.
2.	Установка Node.js: Убедитесь, что на вашем компьютере установлена LTS-версия Node.js. Если нет, вы можете скачать и установить ее с официального сайта Node.js.
3.	Установка зависимостей: Перейдите в корневой каталог склонированного проекта (где находится файл package.json) в командной строке или терминале и выполните команду npm install. Это установит все зависимости проекта.
4.	Запуск режима разработки: Вы можете запустить проект в режиме разработки, выполнив команду npm start. Это запустит локальный сервер разработки и автоматически откроет приложение в вашем браузере по адресу http://localhost:3000. Страница будет автоматически перезагружаться после сохранения изменений в файлах проекта.
5.	Настройка деплоя: Если вы хотите развернуть проект на GitHub Pages, вам нужно будет настроить поле homepage в файле package.json. Замените "https://your_username.github.io/your_repo_name/" на ваш актуальный URL GitHub Pages. Например:
jsonCopy code
"homepage": "https://your_username.github.io/your_project_name/" 
6.	Деплой: Проект будет автоматически деплоиться на GitHub Pages каждый раз, когда вы отправляете изменения в ветку main. Это произойдет после прямого пуша или принятого пул-реквеста. Убедитесь, что настройка "GitHub Pages" в настройках вашего репозитория указывает на папку /root в ветке gh-pages.
7.	Маршрутизация (при необходимости): Если ваше приложение использует библиотеку react-router-dom для маршрутизации, убедитесь, что вы правильно настроили BrowserRouter с basename. Пример:
jsxCopy code
import { BrowserRouter } from 'react-router-dom'; // ... <BrowserRouter basename="/your_repo_name"> <App /> </BrowserRouter> 
Теперь у вас есть рабочая копия репозитория, которую вы можете редактировать и развернуть на GitHub Pages, если это необходимо. Вы можете писать код, делать коммиты и отправлять их на GitHub, а также следить за статусом деплоя проекта в разделе "Actions" вашего репозитория на GitHub.


## Запуск сервера

Сервер реализован на http://localhost:3000.
Для запуска сервера используем командную строку (cmd.exe).
Чтобы перейти в папку, где находится файл socketServer.mjs, используем команду cd (Change Directory) в командной строке. Например, в случае, если полный путь к папке c файлом `socketServer.mjs` следующий:

`C:\Users\other_folders\orders-and-products\server`, вот что нужно ввести:

`cd C:\Users\other_folders\orders-and-products\server`
Эта команда изменит текущую директорию командной строки на указанный путь. После того как войдете в эту директорию, используйте команду

```
node socketServer.mjs
```

для запуска сервера.
