  var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'ngRoute']); 

  app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    $scope.CustomStyle = {};
    $scope.imagePath = 'images/chicago_sunny.jpg';
    $scope.DashboardColor = "{'background-color': '#81C784'}";
    $scope.QuestionsColor = "{'background-color': '#FDD835'}";
    $scope.BlogColor = "{'background-color': '#3F51B5'}";
    $scope.PortfolioColor = "{'background-color': '#29B6F6'}"
    $scope.ResumeColor = "{'background-color': '#FFA726'}";
    $scope.ContactsColor = "{'background-color': '#F44336'}";

    

   	$scope.menu = [
      {
        link : '',
        bgColor : $scope.DashboardColor,
        txtColor : '#EEEEEE',
        title: 'Dashboard',
        icon: 'dashboard'
      },
      {
        link : '',
        bgColor : $scope.QuestionsColor,
        txtColor : '#EEEEEE',
        title: 'Questions',
        icon: 'question_answer'
      },
      {
        link : '',
        bgColor : $scope.BlogColor,
        txtColor : '#EEEEEE',
        title: 'Blog',
        icon: 'view_list'
      },
      {
        link : '',
        bgColor : $scope.PortfolioColor,
        txtColor : '#EEEEEE',
        title: 'Portfolio',
        icon: 'view_carousel'
      },
      {
        link : '',
        bgColor : $scope.ResumeColor,
        txtColor : '#EEEEEE',
        title: 'Resume',
        icon: 'description'
      },
      {
        link : '',
        bgColor : $scope.ContactsColor,
        txtColor : '#EEEEEE',
        title: 'Contacts',
        icon: 'call'
      }
    ];
    $scope.timeline = [
      {
        link : '',
        evenType: 'description',
        eventName: 'Update in Resume',
        eventMessage: 'Updated Job Description.',
        eventTime: '3 hours ago',
        eventColor: '#FFA726'
      },
      {  
        link : '',
        evenType: 'view_list',
        eventName: 'Update in Blog',
        eventMessage: 'New post was added.',
        eventTime: '11 hours ago',
        eventColor: '#3F51B5'
      },
      {  
        link : '',
        evenType: 'person',
        eventName: 'Update in Personal Details',
        eventMessage: 'Updated address.',
        eventTime: '3d ago',
        eventColor: '#F44336'  
      } 
     /* {
        link : 'showListBottomSheet($event)',
        title: 'Settings',
        icon: 'settings'
      }*/
    ];

    $scope.messages = [
      {
        link : '',
        user: 'info',
        guest: 'timer_auto',
        question: 'Lorem Ipsum summy text of the printing and typesetting industry.',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '

      },
      {
        link : '',
        user: 'info',
        guest: 'timer_auto',
        question: 'Lorem Ipsum is simply dummy text of the printing ansting industry.',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. '

      }
     /* {
        link : 'showListBottomSheet($event)',
        title: 'Settings',
        icon: 'settings'
      }*/
    ];

    $scope.posts = [
        {
          title: 'The beginning',
          views: '124',
          date: '1/17/2016',
          icon: "grade",
          color: "#CCFF90"
        },
        {
          title: 'Communication is key to success',
          views: '57',
          date: '1/17/2016',
          icon: "face",
          color: "#FFB74D"
        },
        {
          title: 'Always look for new challenge',
          views: '65',
          date: '1/17/2016',
          icon: "track_changes",
          color: "#F44336"
        }
      ];



      $scope.weather = [
        {
          day: 'Tue',
          tempDay: '65',
          tempNight: '56',
          icon: 'brightness_7'
        },
        {
          day: 'Wed',
          tempDay: '68',
          tempNight: '61',
          icon: 'brightness_7'
        },
        {
          day: 'Thu',
          tempDay: '78',
          tempNight: '64',
          icon: 'brightness_7'
        },
        {
          day: 'Fri',
          tempDay: '74',
          tempNight: '66',
          icon: 'brightness_7'
        },
        {
          day: 'Sat',
          tempDay: '80',
          tempNight: '72',
          icon: 'brightness_7'
        }
      ];

    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
    
    $scope.showAdd = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
        targetEvent: ev,
      })
      .then(function(answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.alert = 'You cancelled the dialog.';
      });
    };
  }]);

  app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Share', icon: 'share' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' },
    ];
    
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  });

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };

  app.directive('userListavatar', function() {
    return {
      replace: true,
      template: '<svg class="user-avatar" viewBox="0 0 128 128" height="48" width="131" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
    };
  });

  app.directive('userAvatar', function() {
    return {
      replace: true,
      template: '<svg class="user-avatar" viewBox="0 0 128 128" height="180" width="180" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
    };
  });

  app.config(function ($mdThemingProvider) {
    var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
          .primaryPalette('grey')
  });



app.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/', {
         templateUrl: '/pages/dashboard.html',
         //controller: 'indexController1'
     })
     .when('/Questions', {
         templateUrl: '/pages/questions.html',
         //controller: 'indexController2'
     })
     .when('/Blog', {
         templateUrl: '/pages/blog.html',
         //controller: 'indexController2'
     })
     .when('/Portfolio', {
         templateUrl: '/pages/portfolio.html',
         //controller: 'indexController2'
     })
     .when('/Resume', {
         templateUrl: '/pages/resume.html',
         //controller: 'indexController2'
     })
     .when('/Contacts', {
         templateUrl: '/pages/contacts.html',
         //controller: 'indexController2'
     })
     .otherwise({
         redirectTo: '/'
     });


  

 }]);


 
