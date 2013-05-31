// Controller applicazione

function todoCtrl($scope) {
	$scope.oggetti = [
	];

	var oggettiStr = localStorage.getItem("corso-mohole-app2");
	$scope.oggetti = JSON.parse(oggettiStr);


	$scope.aggiungi = function() {
		console.log(this);
		//alert(nuovoOgg);
		$scope.oggetti.push(
			{"testo": this.nuovoOgg}
		);

		$scope.nuovoOgg = "";

		document.querySelector("form").reset();

		$scope.memorizza();
	}

	$scope.elimina = function() {
		$scope.oggetti.splice(this.$index, 1);
		$scope.memorizza();
	}

	$scope.svuota = function() {
		$scope.oggetti = [];
		localStorage.clear();
	}

	$scope.memorizza = function() {
		var stringa = JSON.stringify($scope.oggetti);
		localStorage.setItem("corso-mohole-app2", stringa);
	}

}