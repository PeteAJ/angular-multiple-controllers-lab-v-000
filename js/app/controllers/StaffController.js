function StaffController() {
  var vm = this;
  vm.name = 'Petey!';
  vm.email = 'peter.jacobson2@gmail.com';
  vm.phone = '917-902-1122';
}


angular
.module('app')
.controller('StaffController', StaffController);