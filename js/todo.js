function TodoCntrl ($scope) {
			
	$scope.todos = [
					{task:'Code using Angular', done:true},
					{task:'Publish to Web', done:false}];

	$scope.getTodoCount = function () {
		return  $scope.todos.length;
	};
	

	$scope.addTodo = function() {
		$scope.todos.push({task:$scope.todoText,done:false})
		$scope.todoText ='';
		$scope.totalTodos = $scope.todos.length;
	};

	$scope.clearCompleted = function() {
		for (var i = 0; i <= $scope.todos.length; i++) {
			if ($scope.todos[i].done) {
				$scope.todos.splice(i,1);
			};
		};
	}

}