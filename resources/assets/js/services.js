const todosServices = angular.module('todosServices', ['ngResource',]);

todosServices.factory('Task', ['$resource', ($resource) => {
    return $resource('tasks/:id', {id: '@id',}, {
        update: {method: 'PUT',},
    });
}]);
