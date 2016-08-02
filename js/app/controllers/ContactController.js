function ContactController() {
  var vm = this;
  vm.name = 'Peter!';
  vm.email = 'peter.jacobson@gmail.com';
  vm.phone = '1121212';
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }
   this.changeEmail= function () {
    vm.email = 'Something else!'
  }
   this.changePhone = function () {
    vm.phone = 'Something else!'
  }
}

angular
.module('app')
.controller('ContactController', ContactController);