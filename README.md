# angularjs-patterns-headstart
AngularJS Patterns - Headstart

Based on:

- 'AngularJS in Patterns (Part 1) - Overview of AngularJS' at http://blog.mgechev.com/2014/05/08/angularjs-in-patterns-part-1-overview-of-angularjs/

- 'AngularJS in patterns (source)' at https://github.com/mgechev/angularjs-in-patterns

- 'AngularJS in patterns (docs)' at https://mgechev.github.io/angularjs-in-patterns/

#AngularJS overview

AngularJS is a JavaScript framework developed by Google. It intends to provide a solid base for the development of CRUD Single-Page Applications (SPA). SPA is a web application, which once loaded, does not require full page reload when the user performs any actions with it. This means that all application resources (data, templates, scripts, styles) should be loaded with the initial request or better - the information and resources should be loaded on demand. Since most of the CRUD applications has common characteristics and requirements, AngularJS intends to provide the optimal set of them out-of-the-box. A few important features of AngularJS are:

- two-way data binding
- dependency injection
- separation of concerns
- testability
- abstraction

The separation of concerns is achieved by dividing each AngularJS application into separate components, such as:

- partials (see ANG-Partials)
- controllers (see ANG-Controllers)
- directives (see ANG-Directives)
- services (see ANG-Services)
- filters (see ANG-Filters)

These components can be grouped inside different modules (see ANG-Modules), which helps to achieve a higher level of abstraction and handle complexity. Each of the components encapsulates a specific piece of the application's logic.
