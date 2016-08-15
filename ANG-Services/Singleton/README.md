# Singleton
Singleton

#Singleton

```javascript
The singleton pattern is a design pattern that restricts the instantiation of a class to one object. 
This is useful when exactly one object is needed to coordinate actions across the system. 
The concept is sometimes generalized to systems that operate more efficiently when only one object exists, 
or that restrict the instantiation to a certain number of objects.
```

Illustrated in the UML diagram below is the singleton design pattern.

![Image](../Singleton/img/singleton.png?raw=true)

When given dependency is required by any component, AngularJS resolves it using the following algorithm:

- Takes its name and makes a lookup at a hash map, which is defined into a lexical closure (so it has a private visibility).
- If the dependency exists AngularJS pass it as parameter to the component, which requires it.
- If the dependency does not exists:
    - AngularJS instantiate it by calling the factory method of its provider (i.e. ```$get```). Note that instantiating the dependency may require recursive call to the same algorithm, for resolving all the dependencies required by the given dependency. This process may lead to circular dependency.
    - AngularJS caches it inside the hash map mentioned above.
    - AngularJS passes it as parameter to the component, which requires it.

We can take better look at the AngularJS' source code, which implements the method ```getService```:

```javascript
function getService(serviceName) {
  if (cache.hasOwnProperty(serviceName)) {
    if (cache[serviceName] === INSTANTIATING) {
      throw $injectorMinErr('cdep', 'Circular dependency found: {0}', path.join(' <- '));
    }
    return cache[serviceName];
  } else {
    try {
      path.unshift(serviceName);
      cache[serviceName] = INSTANTIATING;
      return cache[serviceName] = factory(serviceName);
    } catch (err) {
      if (cache[serviceName] === INSTANTIATING) {
        delete cache[serviceName];
      }
      throw err;
    } finally {
      path.shift();
    }
  }
}
```

We can think of each service as a singleton, because each service is instantiated no more than a single time. We can consider the cache as a singleton manager. There is a slight variation from the UML diagram illustrated above because instead of keeping static, private reference to the singleton inside its constructor function, we keep the reference inside the singleton manager (stated in the snippet above as ```cache```).

This way the services are actually singletons but not implemented through the Singleton pattern, which provides a few advantages over the standard implementation:

- It improves the testability of your source code
- You can control the creation of singleton objects (in our case the IoC container controls it for us, by instantiating the singletons lazy)

For further discussion on this topic Misko Hevery's article in the Google Testing blog could be considered.