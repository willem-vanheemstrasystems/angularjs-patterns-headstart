# ANG-Scope
AngularJS - Scope

#Scope

In AngularJS ```scope``` is a JavaScript object, which is exposed to the partials. The scope could contain different properties - primitives, objects or methods. All methods attached to the scope could be invoked by evaluation of AngularJS expression inside the partials associated with the given scope or direct call of the method by any component, which keeps reference to the scope. By using appropriate directives, the data attached to the scope could be binded to the view in such a way that each change in the partial will reflect a scope property and each change of a scope property will reflect the partial.

Another important characteristics of the scopes of any AngularJS application is that they are connected into a prototypical chain (except scopes, which are explicitly stated as isolated). This way any child scope will be able to invoke methods of its parents since they are properties of its direct or indirect prototype.

Scope inheritance is illustrated in the following example:

```javascript
<div ng-controller="BaseCtrl">
  <div id="child" ng-controller="ChildCtrl">
    <button id="parent-method" ng-click="foo()">Parent method</button>
    <button ng-click="bar()">Child method</button>
  </div>
</div>
```

```javascript
function BaseCtrl($scope) {
  $scope.foo = function () {
    alert('Base foo');
  };
}

function ChildCtrl($scope) {
  $scope.bar = function () {
    alert('Child bar');
  };
}
```

With ```div#child``` is associated ```ChildCtrl``` but since the scope injected inside ```ChildCtrl``` inherits prototypically from its parent scope (i.e. the one injected inside ```BaseCtrl```) the method ```foo``` is accessible by ```button#parent-method```.