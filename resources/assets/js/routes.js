module.exports = ($routeProvider) => {
    $routeProvider
        .when('/tasks', {
            template: '<tasks></tasks>',
        })
        .when('/tasks/create', {
            template: '<create-task></create-task>',
        })
        .when('/tasks/:id', {
            template: '<show-task></show-task>',
        })
        .otherwise({
            redirectTo: '/tasks',
        });
};
