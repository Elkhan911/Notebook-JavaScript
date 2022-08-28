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

/_ .notebook {
border: 1px solid black;
width: 1200px;
margin: auto;
padding: 30px;
}
.notebook**menu {
border: 1px solid red;
width: 80%;
margin: auto;
}
.notebook**items {
}
.notebook**heading {
text-align: center;
}
.notebook**item {
width: 200px;
border: 1px dotted green;
font-size: 20px;
text-align: center;
margin: 0 0 5px 20px;
list-style: none;
}
.notebook\_\_page {
border: 1px solid blue;
width: 600px;
display: inline-block;
margin: 0;
height: 400px;
} _/

.list {
border: 1px solid red;
width: 1200px;
margin: auto;
}

.list\_\_heading {
border: 1px saddlebrown solid;
text-align: center;
}

.notebook {
width: 500px;
border: 1px solid red;
margin: 50px auto;
position: relative;
}

.notebook\_\_menu {
border: 1px solid saddlebrown;
width: 150px;
position: absolute;
right: 105%;
}

.notebook\_\_items {
padding: 0;
margin: 0;
}

.notebook\_\_item {
border: 1px dashed green;
padding: 5px;
text-align: center;
margin: 10px;
list-style: none;
cursor: pointer;
}

.notebook**item:hover,
.notebook**item:active {
background: #f1f1f1;
}

.notebook\_\_button {
width: 100%;
padding: 5px;
height: 30px;
}

.notebook\_\_text {
width: 100%;
height: 400px;
box-sizing: border-box;
padding: 10px;
margin-bottom: 10px;
}
