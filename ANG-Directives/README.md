# ANG-Directives
AngularJS - Directives

#Directives

In AngularJS the directives are the place where all DOM manipulations should be placed. As a rule of thumb, when you have DOM manipulations in your controller you should create a new directive or consider refactoring of already existing one, which could handle the required DOM manipulations. Each directive has a name and logic associated with it. In the simplest case the directive contains only name and definition of postLink function, which encapsulates all the logic required for the directive. In more complex cases the directive could contain a lot of properties such as:

- template
- compile function
- link function
- etc...

By citing the name of the directives they can be used inside the declarative partials.

Example:

```javascript
myModule.directive('alertButton', function () {
  return {
    template: '<button ng-transclude></button>',
    scope: {
      content: '@'
    },
    replace: true,
    restrict: 'E',
    transclude: true,
    link: function (scope, el) {
      el.click(function () {
        alert(scope.content);
      });
    }
  };
});
```

```javascript
<alert-button content="42">Click me</alert-button>
```

In the example above the tag ```<alert-button></alert-button>``` will be replaced button element. When the user clicks on the button the string ```42``` will be alerted.
