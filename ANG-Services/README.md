# ANG-Services
AngularJS - Services

#Services

Every piece of logic, which doesn't belong to the components described above should be placed inside a service. Usually services encapsulate the domain specific logic, persistence logic, XHR, WebSockets, etc. When the controllers in the application became too "fat" the repetitive code should be placed inside a service.

```javascript
myModule.service('Developer', function () {
  this.name = 'Foo';
  this.motherLanguage = 'JavaScript';
  this.live = function () {
    while (true) {
      this.code();
    }
  };
});
```

The service could be injected inside any component, which supports dependency injection (controllers, other services, filters, directives).

```javascript
function MyCtrl(Developer) {
  var developer = new Developer();
  developer.live();
}
```