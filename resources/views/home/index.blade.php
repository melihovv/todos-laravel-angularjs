<!doctype html>
<html lang="en" ng-app="todosApp">
<head>
  <base href="/">
  <meta charset="UTF-8">
  <title>Tasks</title>

  {!! Html::style('assets/app.css') !!}
</head>
<body>

<h1>Todos</h1>
<ng-view></ng-view>

{!! Html::script('assets/app.js') !!}
</body>
</html>
