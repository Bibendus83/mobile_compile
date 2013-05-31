// Controller applicazione

function todoCtrl($scope) {

	var oggettiStr = localStorage.getItem("corso-mohole-app2");
	if (oggettiStr) {
		$scope.oggetti = JSON.parse(oggettiStr);
	} else {
		$scope.oggetti = [];
	}


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