# ANG-Partials
AngularJS - Partials

#Partials

The partials are HTML strings. They may contain AngularJS expressions inside the elements or their attributes. One of the distinctions between AngularJS and the others frameworks is the fact that AngularJS' templates are not in an intermediate format, which needs to be turned into HTML (which is the case with mustache.js and handlebars, for example).

Initially each SPA loads ```index.html``` file. In the case of AngularJS this file contains a set of standard and custom HTML attributes, elements and comments, which configure and bootstrap the application. Each sub-sequenced user action requires only load of another partial or change of the state of the application, for example through the data binding provided by the framework.

***Sample partial***

```javascript
<html ng-app>
 <!-- Body tag augmented with ngController directive  -->
 <body ng-controller="MyController">
   <input ng-model="foo" value="bar">
   <!-- Button tag with ng-click directive, and
          string expression 'buttonText'
          wrapped in "{{ }}" markup -->
   <button ng-click="changeFoo()">{{buttonText}}</button>
   <script src="angular.js"></script>
 </body>
</html>
```

With AngularJS expressions partials define what kind of actions should be performed for handling different user interactions. In the example above the value of the attribute ng-click states that the method changeFoo of the current scope will be invoked.