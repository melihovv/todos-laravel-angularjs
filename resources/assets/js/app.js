import '../vendor/angular/angular.min';

const app = angular.module('app.todos', []);

app.service('TaskService', ['$http', function ($http) {
    this.all = (success, error) => {
        $http.get('/task').then(success, error);
    };
}]);

app.directive('todos', () => {
    return {
        restrict: 'E',
        template: require('../templates/todos.html'),
        controller: ['TaskService', function (TaskService) {
            this.todos = [];

            TaskService.all((response) => {
                this.todos = response.data;
            }, () => {
                console.log('error while fetching tasks');
            });

            this.remaining = () => {
                return this.todos.filter((todo) => {
                    return !todo.completed;
                }).length;
            };
        }],
        controllerAs: 'todoCtrl',
    };
});
