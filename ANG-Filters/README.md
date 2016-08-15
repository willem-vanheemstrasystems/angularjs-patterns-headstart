# ANG-Filters
AngularJS - Filters

#Filters

The filters in AngularJS are responsible for encapsulating logic required for formatting data. Usually filters are used inside the partials but they are also accessible in the controllers, directives, services and other filters through Dependency Injection.

Here is a definition of a sample filter, which changes the given string to uppercase:

```javascript
myModule.filter('uppercase', function () {
  return function (str) {
    return (str || '').toUpperCase();
  };
});
```

Inside a partial this filter could be used using the Unix's piping syntax:

```javascript
<div>{{ name | uppercase }}</div>
```

Inside a controller the filter could be used as follows:

```javascript
function MyCtrl(uppercaseFilter) {
  $scope.name = uppercaseFilter('foo'); //FOO
}
```