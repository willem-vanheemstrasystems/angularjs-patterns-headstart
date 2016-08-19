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

##How do angular directives work in a nutshell:

We begin with a template (as a string or loaded to a string)

```javascript
var templateString = '<div my-directive>{{5 + 10}}</div>';
```

Now, this ```templateString``` is wrapped as an ***angular element***

```javascript
var el = angular.element(templateString);
```

With ```el```, now we compile it with ```$compile``` to get back the ***link*** function.

```javascript
var l = $compile(el)
```

Here is what happens,
- ```$compile``` walks through the whole template and collects all the directives that it recognizes.
- All the directives that are discovered are ***compiled recursively*** and their ```link``` functions are collected.
- Then, all the ```link``` functions are wrapped in a new ```link``` function and returned as ```l```.

Finally, we provide ```scope``` to this ```l``` (link) function which further executes the wrapped link functions with this ```scope``` and their corresponding elements.

```javascript
l(scope)
```

This adds the ```template``` as a new node to the ```DOM``` and invokes ```controller``` which adds its watches to the ***scope*** which is shared with the template in DOM.

enter image description here

Comparing ***compile*** vs ***link*** vs ***controller*** :

- Every directive is ***compiled*** only once and the ***link*** function is retained for re-use. Therefore, if there's something applicable to all instances of a directive, it should be performed inside directive's ```compile``` function.

- Now, after compilation we have the ```link``` function which is executed while attaching the ***template*** to the ***DOM***. So, therefore, we perform everything that is specific to every instance of the directive. E.g.: ***attaching events***, ***mutating the template based on scope***, etc.

- Finally, the ***controller*** is meant to be available to be live and reactive while the directive works on the ```DOM``` (after getting attached). Therefore:

(1) After setting up the view[***V***] (i.e. template) with link, ```$scope``` is our model[***M***] and ```$controller``` is our controller[***C***] in ***M V C***

(2) Take advantage of the ***2-way*** binding with ***$scope*** by setting up watches.

(3) ```$scope``` watches are expected to be added in the controller since this is what is watching the template during run-time.

(4) Finally, ```controller``` is also used to be able to communicate among related directives. (Like ```myTabs``` example in https://docs.angularjs.org/guide/directive)

(5) It's true that we could have done all of this in the ```link``` function as well, but it's about ***separation of concerns***.

Therefore, finally we have the following which fits all the pieces perfectly:


