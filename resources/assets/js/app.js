import '../vendor/angular/angular.min';
import '../vendor/angular-route/angular-route.min.js';
import '../vendor/angular-resource/angular-resource.min';
import './services';
import './directives';

const todosApp = angular.module('todosApp', [
    'ngRoute', 'todosDirectives',
]);

todosApp.config(['$routeProvider', require('./routes')]);
