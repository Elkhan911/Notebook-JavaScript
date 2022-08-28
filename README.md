# Notebook-JavaScript

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>Блокнот на JavaScript</title>
  </head>
  <body>
    <section class="list">
      <h1 class="list__heading">Блокнот для записей</h1>

      <div class="notebook">
        <div class="notebook__menu">
          <ul class="notebook__items">
            <li class="notebook__item">Запись 1</li>
            <li class="notebook__item">Запись 2</li>
            <li class="notebook__item">Запись 3</li>
            <li class="notebook__item">Запись 4</li>
          </ul>

          <div class="notebook__new">
            <button class="notebook__button">Новая запись</button>
          </div>
        </div>

        <textarea
          class="notebook__text"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button class="notebook__button">Сохранить</button>
      </div>
    </section>
    <script src="script.js"></script>

  </body>
</html>
