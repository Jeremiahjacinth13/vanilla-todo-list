<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | Todo app</title>
  <link rel="stylesheet" href="./styles/index.css">

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>
  <header class="largeHeader"></header>
    <div class="mainContent">
      <header>
        <h1>TODO</h1>
        <a href="" class = 'theme-switcher'>
          <img src="./images/icon-sun.svg" alt="change to dark mode">
        </a>
      </header>
      <div class = 'inputDiv'>
        <div class="custom-checkbox-container"> 
          <div class="custom-checkbox">
            <input type="checkbox" name="" id="">
            <img src="./images/icon-check.svg" alt="">
          </div>
        </div>
        <form>
          <input type="text" name="" id="" placeholder="Create a new todo...">
        </form>
      </div>
      <div class = 'todo-items-container'></div>
      <div class = 'mobile-only inputDiv'>
        <div>
          <li data-sort="all" class = ${sort === 'all' && 'active'}>All</li>
          <li data-sort="active"class = ${sort === 'active' && 'active'}>Active</li>
          <li style = 'margin: 0;' data-sort="completed" class = ${sort === 'completed' && 'active'}>Completed</li>
        </div>
      </div>
    </div>
    <p class = 'bottom'>Drag and drop to reorder list</p>

  <!-- <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.jacinth-portfolio.herokuapp.com">Jeremiah Lena</a>.
  </div> -->
  <script src="./main.js"></script>
</body>
</html>