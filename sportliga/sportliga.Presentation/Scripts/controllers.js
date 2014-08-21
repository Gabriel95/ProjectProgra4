'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | Jimmy Ramos';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | Sign In';
        // TODO: Authorize a user
        $scope.username = "";
        $scope.login = function () {
            if($scope.username==="admin")
                $location.path('/profile');
            else
                $location.path('/userprofile');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
        $scope.register = function() {
            $location.path('/register');
            return false;
        };

    }])

     // Path: /register
    .controller('RegisterCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | Register';
        // TODO: Register a new user
        $scope.login = function () {
            $location.path('/login');
            return false;
        };
    }])

    // Path: /userprofile
    .controller('userprofileCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        //$scope.$root.title = 'SportLiga | userprofile';
        // TODO: Register a new user
        $scope.unsubsciptions = [];

        $scope.filteredMatches = [];

        $scope.ligas = [
        {
            nombre: 'Española', pais: 'España', inicio: new Date(),
            fin: new Date(), cant_equipos: 20, id: 1
        },
        {
            nombre: 'Italiana', pais: 'Italia', inicio: new Date(),
            fin: new Date(), cant_equipos: 21, id: 2
        },
        {
            nombre: 'Inglesa', pais: 'Ingaltera', inicio: new Date(),
            fin: new Date(), cant_equipos: 15, id: 3
        },
        {
            nombre: 'Francesa', pais: 'Francia', inicio: new Date(),
            fin: new Date(), cant_equipos: 21, id: 4
        },
        {
            nombre: 'China', pais: 'China', inicio: new Date(),
            fin: new Date(), cant_equipos: 15, id: 5
        }];
 
        $scope.matches = [{ nombre: 'Levante vs Real Madrid', id_liga: 1, resultado: '0-0' }, { nombre: 'Barcelona vs Sevilla', id_liga: 1, resultado: '0-0' }, { nombre: 'Atletico de Madrid vs Getafe', id_liga: 1, resultado: '0-0' }, { nombre: 'Liverpool vs Arsenal', id_liga: 3, resultado: '0-0' }, { nombre: 'Manchester United vs Manchester City', id_liga: 3, resultado: '0-0' },
{ nombre: 'Chelsea vs Totenham Hottspurs', id_liga: 3, resultado: '0-0' }, { nombre: 'Genova vs A.C. Mila', id_liga: 2, resultado: '0-0' }, { nombre: 'Cagliari vs Juventus', id_liga: 2, resultado: '0-0' }, { nombre: 'Internazionale vs Udinese', id_liga: 2, resultado: '0-0' }, { nombre: 'Monaco vs Bordeux', id_liga: 4, resultado: '0-0' }, { nombre: 'Paris St. Germain vs Lyon', id_liga: 4, resultado: '0-0' },
{ nombre: 'Nantes vs Marseille', id_liga: 4, resultado: '0-0' }];

        var leagueExists = function (id) {
            for (var i = 0; i < $scope.ligas.length; i++) {
                if ($scope.ligas[i].id.toString() === id) {
                    return true;
                }
            }
            return false;
        }

        var inicio = function () {
            if ($scope.filteredMatches.length > 0)
                $scope.filteredMatches.splice(0, $scope.filteredMatches.length);
            for (var i = 0; i < $scope.matches.length; i++) {
                if (leagueExists($scope.matches[i].id_liga.toString()) === true) {
                    $scope.filteredMatches.push($scope.matches[i]);
                }
            }
        }

        inicio();

        $scope.isEditing = false;
        $scope.NameEdited = "";
        $scope.NewScore = "";

        $scope.activate = function(edited) {
            $scope.isEditing = true;
            $scope.NameEdited = edited;
        }

        $scope.deactivate = function() {
            $scope.isEditing = false;
            $scope.NameEdited = "";
            $scope.NewScore = "";
        }
        $scope.FinishEditing = function() {
            for (var i = 0; i < $scope.matches.length; i++) {
                if ($scope.matches[i].nombre === $scope.NameEdited) {
                    $scope.matches[i].resultado = $scope.NewScore;
                }
            }
            $scope.isEditing = false;
            $scope.NameEdited = "";
            $scope.NewScore = "";

        }
        $scope.addLeague = function(name) {
            for (var i = 0; i < $scope.unsubsciptions.length; i++) {
                if ($scope.unsubsciptions[i].nombre === name) {
                    $scope.ligas.push($scope.unsubsciptions[i]);
                    $scope.unsubsciptions.splice(i, 1);
                    inicio();
                }
            }
            
        }

        $scope.removeLeague = function (name) {
            
            for (var i = 0; i < $scope.ligas.length; i++) {
                if ($scope.ligas[i].nombre === name) {
                    $scope.unsubsciptions.push($scope.ligas[i]);
                    $scope.ligas.splice(i, 1);
                    inicio();
                }
            }
            
        }

     
    }])

     // Path: /forgot-password
    .controller('ForgotPasswordCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Recuperar password';
        // TODO: Forgot password
        $scope.RecoverPassword = function () {
            $scope.ShowMessage = true;
           // $location.path('/RecoverPassword');
            return false;
        };
    }])



      // Path: /profile
    .controller('ProfileCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'SportLiga | Mi perfil';
        // TODO: Forgot password
        $scope.ligas = [
        {
            nombre: 'Española', pais: 'España', inicio: new Date(),
            fin: new Date(), cant_equipos: 20, id:1
        },
        {
            nombre: 'Italiana', pais: 'Italia', inicio: new Date(),
            fin: new Date(), cant_equipos: 21, id: 2
        },
        {
            nombre: 'Inglesa', pais: 'Ingaltera', inicio: new Date(),
            fin: new Date(), cant_equipos: 15, id: 3
        },
        {
           nombre: 'Francesa', pais: 'Francia', inicio: new Date(),
           fin: new Date(), cant_equipos: 21, id: 4
        },
        {
            nombre: 'China', pais: 'China', inicio: new Date(),
            fin: new Date(), cant_equipos: 15, id: 5
        }];

        $scope.ordenarPor = function(orden) {
            $scope.OrdenSeleccionado = orden;
        };

        $scope.agregar = false;
        $scope.name = "";
        $scope.land = "";
        $scope.ident = "";

        $scope.activate = function() {
            $scope.agregar = true;
        };

        $scope.addNewLeague = function() {
            $scope.ligas.push({
                nombre: $scope.name,
                pais: $scope.land,
                inicio: new Date(),
                fin: new Date(),
                cant_equipos: 15,
                id: parseInt($scope.ident)
            });
            $scope.agregar = false;
            $scope.name = "";
            $scope.land = "";
            $scope.ident = "";
        };

        $scope.cancelAdd = function() {
            $scope.agregar = false;
            $scope.name = "";
            $scope.land = "";
            $scope.ident = "";
        };
    }])

      // Path: /league
    .controller('LeagueCtrl', ['$scope', '$location', '$window','$stateParams', function ($scope, $location, $window, $stateParams) {
        $scope.$root.title = 'SportLiga | Liga';

        console.log($stateParams.id);
   
        $scope.FilterTeams = [];
        $scope.matches = [];
        $scope.addingMatch = false;
        $scope.editResul = false;
        $scope.isEditing = false;
        $scope.addingTeam = false;
        $scope.isEditingMatch = false;
        $scope.name1 = "";
        $scope.name2 = "";


        $scope.addMatch = function() {
            $scope.matches.push({nombre1:
            $scope.name1, nombre2:
            $scope.name2, id:
            $stateParams.id, resultado:
            'No Determinado Aun'
            });
            $scope.addingMatch = false;
            $scope.name1 = "";
            $scope.name2 = "";
        };

        $scope.cancelMatch = function() {
            $scope.addingMatch = false;
            $scope.name1 = "";
            $scope.name2 = "";
        }


        $scope.teams = [{nombre: 'Levante', id_liga: 1},{nombre: 'Barcelona', id_liga: 1},{nombre: 'Madrid', id_liga: 1},{nombre: 'Liverpool', id_liga: 3},{nombre: 'Manchester', id_liga:3},
        {nombre: 'Chelsea', id_liga: 3},{nombre: 'Genova', id_liga: 2},{ nombre: 'Cagliari', id_liga: 2 }, { nombre: 'Inter', id_liga: 2 }, { nombre: 'Monaco', id_liga: 4 }, { nombre: 'Paris', id_liga: 4 },
        { nombre: 'France', id_liga: 4 }, { nombre: 'Shangai', id_liga: 5 }, { nombre: 'Sheck', id_liga: 5 }, { nombre: 'Chou', id_liga: 5 }];

       
     
        var inicio = function () {
            $scope.FilterTeams = [];
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].id_liga.toString() === $stateParams.id) {
                    $scope.FilterTeams.push($scope.teams[i]);
                }
            }
        };

        inicio();

        $scope.NombreEquipo = "";

        $scope.addNewTeam = function(){
            var team = {nombre: $scope.NombreEquipo, id_liga:parseInt($stateParams.id)};
            $scope.teams.push(team);
            inicio();
            $scope.NombreEquipo = "";
        };

        $scope.deleteTeam = function (nombre) {
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].nombre === nombre ) {
                    $scope.teams.splice(i,1);
                    inicio();
                }
            }
        };

        $scope.NombreAnterior = "";
        $scope.NuevoNombre = "";

        $scope.activate = function () {
            $scope.addingMatch = true;
            $scope.addingTeam = false;
            $scope.isEditing = false;
            $scope.editResul = false;
        };

        $scope.activateNewTeam = function() {
            $scope.addingTeam = true;
            $scope.isEditing = false;
            $scope.addingMatch = false;
            $scope.editResul = false;
        };

        $scope.cancelTeam = function() {
            $scope.addingTeam = false;
            $scope.NuevoNombre = "";
        };
        $scope.editTeam = function (teamname) {
            $scope.isEditing = true;
            $scope.addingMatch = false;
            $scope.addingTeam = false;
            $scope.editResul = false;
            $scope.NombreAnterior = teamname;
            $scope.NuevoNombre = teamname;

        };

        $scope.cancelEdit = function () {
            $scope.isEditing = false;
        };

        $scope.FinishEditing = function () {
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].nombre === $scope.NombreAnterior) 
                    $scope.teams[i].nombre = $scope.NuevoNombre;
            }
            $scope.isEditing = false;
            $scope.NombreAnterior = "";
            $scope.NuevoNombre = "";

            inicio();
        };
        $scope.nameFragen1 = "";
        $scope.nameFragen2= "";
        $scope.neuesResult = "";

        $scope.activateResul = function(name1,name2) {
            $scope.editResul = true;
            $scope.addingMatch = false;
            $scope.isEditing = false;
            $scope.addingTeam = false;
            $scope.nameFragen1 = name1;
            $scope.nameFragen2 = name2;
        };
        $scope.addResultado = function() {
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.matches[i].nombre1 === $scope.nameFragen1 && $scope.matches[i].nombre2 === $scope.nameFragen2)
                    $scope.matches[i].resultado = $scope.neuesResult;
            }
            $scope.editResul = false;
            $scope.nameFragen = "";
            $scope.neuesResult = "";
        };

        $scope.cancelResultado = function() {
            $scope.editResul = false;
            $scope.nameFragen = "";
            $scope.neuesResult = "";
        }

        $scope.prenom1 = "";
        $scope.prenom2 = "";
        $scope.prenom3 = "";
        $scope.prenom4 = "";

        $scope.activateMatchEdit = function (chiamo, chiamo2) {
            $scope.isEditingMatch = true;
            $scope.editResul = false;
            $scope.addingMatch = false;
            $scope.isEditing = false;
            $scope.addingTeam = false;
            $scope.prenom1 = chiamo;
            $scope.prenom2 = chiamo2;
        }
        $scope.finishMEdit = function() {
            for (var i = 0; i < $scope.matches.length; i++) {
                if ($scope.matches[i].nombre1 === $scope.prenom1 && $scope.matches[i].nombre2 === $scope.prenom2) {
                    $scope.matches[i].nombre1 = $scope.prenom3;
                    $scope.matches[i].nombre2 = $scope.prenom4;
                }

            }
            $scope.isEditingMatch = false;
            $scope.prenom1 = "";
            $scope.prenom2 = "";
            $scope.prenom3 = "";
            $scope.prenom4 = "";
        }

        $scope.cancelMatchEdit = function() {
            $scope.isEditingMatch = false;
            $scope.prenom1 = "";
            $scope.prenom2 = "";
            $scope.prenom3 = "";
            $scope.prenom4 = "";
        }

        $scope.deleteMatch = function (name1,name2) {
            for (var i = 0; i < $scope.matches.length; i++) {
                if ($scope.matches[i].nombre1 === name1 && $scope.matches[i].nombre2 === name2)
                    $scope.matches.splice(i, 1);
            }
        }
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);