# ANG-Controllers
AngularJS - Controllers

#Controllers

The AngularJS controllers are JavaScript functions, which help handling the user interactions with the web application (for example mouse events, keyboard events, etc.), by attaching methods to the scope. All required external, for the controllers, components are provided through the Dependency Injection mechanism of AngularJS. The controllers are also responsible for providing the model to the partials by attaching data to the scope. We can think of this data as view model.

```javascript
function MyController($scope) {
  $scope.buttonText = 'Click me to change foo!';
  $scope.foo = 42;

  $scope.changeFoo = function () {
    $scope.foo += 1;
    alert('Foo changed');
  };
}
```

For example, if we wire the sample controller above with the partial provided in the previous section the user will be able to interact with the application in few different ways.

1. Change the value of ```foo``` by typing in the input box. This will immediately reflect the value of ```foo``` because of the two-way data binding.
2. Change the value of ```foo``` by clicking the button, which will be labeled ```Click me to change foo!```.

All the custom elements, attributes, comments or classes could be recognized as AngularJS directives if they are previously defined as ones.