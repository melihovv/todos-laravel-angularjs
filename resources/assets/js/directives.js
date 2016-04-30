const todosDirectives = angular.module('todosDirectives', ['todosServices',]);

todosDirectives.directive('tasks', () => {
    return {
        restrict: 'E',
        template: require('../templates/tasks/index.html'),
        controller: ['Task', function (Task) {
            this.todos = Task.query();

            this.remaining = () => {
                return this.todos.filter((todo) => {
                    return !todo.completed;
                }).length;
            };

            this.toggleCompleted = (todo) => {
                Task.update({id: todo.id}, todo, (response) => {
                    console.log(response);
                }, (response) => {
                    console.log(response.error);
                    todo.completed = !todo.completed;
                });
            };

            this.delete = (todo) => {
                Task.delete({id: todo.id}, (response) => {
                    console.log(response);
                    this.todos.splice(this.todos.indexOf(todo), 1);
                }, (response) => {
                    console.log(response.error);
                });
            };
        }],
        controllerAs: 'todoCtrl',
    };
});

todosDirectives.directive('createTask', () => {
    return {
        restrict: 'E',
        template: require('../templates/tasks/create.html'),
        controller: ['$location', 'Task', function ($location, Task) {
            this.todo = {};

            this.create = () => {
                Task.save({}, this.todo, (response) => {
                    console.log(response);
                    $location.path('#/tasks');
                }, (response) => {
                    console.log(response.error);
                });
            };
        }],
        controllerAs: 'todoCtrl',
    };
});

todosDirectives.directive('showTask', () => {
    return {
        restrict: 'E',
        template: require('../templates/tasks/show.html'),
        controller: [
            '$routeParams',
            '$location',
            'Task',
            function ($routeParams, $location, Task) {
                this.todo = Task.get({id: $routeParams.id});

                this.update = () => {
                    Task.update({id: this.todo.id}, this.todo, (response) => {
                        console.log(response);
                        $location.path('#/tasks');
                    }, (response) => {
                        console.log(response.error);
                    });
                };
            }
        ],
        controllerAs: 'todoCtrl',
    };
});
