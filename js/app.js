// Controller applicazione

function todoCtrl($scope) {

	var oggettiStr = localStorage.getItem("corso-mohole-app2");
	if (oggettiStr) {
		$scope.oggetti = JSON.parse(oggettiStr);
	} else {
		$scope.oggetti = [];
	}


	$scope.aggiungi = function() {
		//alert(nuovoOgg);
		$scope.oggetti.push(
			{"testo": this.nuovoOgg}
		);

		$scope.nuovoOgg = "";

		document.querySelector("form").reset();

		$scope.memorizza();

		navigator.notification.beep(1);
	}

	$scope.elimina = function() {
		$scope.oggetti.splice(this.$index, 1);
		$scope.memorizza();

		navigator.notification.vibrate(500);
	}

	$scope.svuota = function() {
		if (confirm("Sei sicuro?")) {
			$scope.svuotaConfirm(1);
		}

		/*
		// Confirm non funziona correttamente sull'emulatore
		navigator.notification.confirm(
			"Sei sicuro?",
			function(buttonIndex) {
				//$scope.svuotaConfirm(buttonIndex);
				alert("PIPPO");
				svuotaConfirmGlobal();
			},
			"Conferma",
			"Si,Ma anche no"
		); */

	}

	$scope.svuotaConfirm = function(buttonIndex) {
		alert("cliccato "+buttonIndex);
		if (buttonIndex == 1) {
			$scope.oggetti = [];
			localStorage.clear();

			navigator.notification.vibrate(1000);
		}
	}

	$scope.memorizza = function() {
		var stringa = JSON.stringify($scope.oggetti);
		localStorage.setItem("corso-mohole-app2", stringa);
	}

}


	function svuotaConfirmGlobal(buttonIndex) {
		alert("cliccato "+buttonIndex);
		if (buttonIndex == 1) {
			$scope.oggetti = [];
			localStorage.clear();

			navigator.notification.vibrate(2000);
		}
	}