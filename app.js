
$(() => {

		//modal
	  const $openBtn = $('#openModal');
	  const $modal = $('#modal')
	  const $closeBtn = $('#close');
		const $startButton = $('#getName');
	  const openModal = () => {
	    $modal.css('display', 'block');
	    }
	  const closeModal = () => {
	    $modal.css('display', 'none');
	    }
	  $openBtn.on('click', openModal);
	  $closeBtn.on('click', closeModal);

	  setTimeout(openModal, 1000);



		const addName = () => {
			const $inputBox1 = $('#input-box1')
			const player1 = $inputBox1.val();
			$inputBox1.val('');
			const $inputBox2 = $('#input-box2')
			const player2 = $inputBox2.val();
			$inputBox1.val('');
		}

	$("#submit").on('click', addName, closeModal);

const $blockquote = $('#blockquote')
const $closeBtnWin = $('#closeWinner');

	const closeWinModal = () => {
 	 $blockquote.css('display', 'none');
 	 }
$closeBtnWin.on('click', closeWinModal);


	


	var checkWinnerVertical = function () {

	const player1 = $inputBox1.val();
	const player2 = $inputBox2.val();






//col 1 vertical p1
		if ($("#r1").hasClass('player1') && $("#r2").hasClass('player1') && $('#r3').hasClass('player1') && $('#r4').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#r2").hasClass('player1') && $("#r3").hasClass('player1') && $('#r4').hasClass('player1') && $('#r5').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#r3").hasClass('player1') && $("#r4").hasClass('player1') && $('#r5').hasClass('player1') && $('#r6').hasClass('player1')){

		document.getElementById("blockquote").innerHTML = ("Congratulations, " + player1 + " has won!")






//col 1 vertical p2
		} else if	($("#r1").hasClass('player2') && $("#r2").hasClass('player2') && $('#r3').hasClass('player2') && $('#r4').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");
			} else if ($("#r2").hasClass('player2') && $("#r3").hasClass('player2') && $('#r4').hasClass('player2') && $('#r5').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");
			} else if ($("#r3").hasClass('player2') && $("#r4").hasClass('player2') && $('#r5').hasClass('player2') && $('#r6').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");



//col 2 vertical p1
	} else if ($("#2r1").hasClass('player1') && $("#2r2").hasClass('player1') && $('#2r3').hasClass('player1') && $('#2r4').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
	} else if ($("#2r2").hasClass('player1') && $("#2r3").hasClass('player1') && $('#2r4').hasClass('player1') && $('#2r5').hasClass('player1')){
	alert("Congratulations, " + player1 + " has won!");
} else if ($("#2r3").hasClass('player1') && $("#2r4").hasClass('player1') && $('#2r5').hasClass('player1') && $('#2r6').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");


//col 2 vertical p2
	} else if	($("#2r1").hasClass('player2') && $("#2r2").hasClass('player2') && $('#2r3').hasClass('player2') && $('#2r4').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");
	} else if ($("#r2").hasClass('player2') && $("#2r3").hasClass('player2') && $('#2r4').hasClass('player2') && $('#2r5').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");
	} else if ($("#2r3").hasClass('player2') && $("#2r4").hasClass('player2') && $('#2r5').hasClass('player2') && $('#2r6').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");


			//col 3 vertical p1
		} else if ($("#3r1").hasClass('player1') && $("#3r2").hasClass('player1') && $('#3r3').hasClass('player1') && $('#3r4').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#3r2").hasClass('player1') && $("#3r3").hasClass('player1') && $('#3r4').hasClass('player1') && $('#3r5').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");
	} else if ($("#3r3").hasClass('player1') && $("#3r4").hasClass('player1') && $('#3r5').hasClass('player1') && $('#3r6').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");

	//col 3 vertical p2
} else if	($("#3r1").hasClass('player2') && $("#3r2").hasClass('player2') && $('#3r3').hasClass('player2') && $('#3r4').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
	} else if ($("#3r2").hasClass('player2') && $("#3r3").hasClass('player2') && $('#2r4').hasClass('player2') && $('#3r5').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");
			} else if ($("#3r3").hasClass('player2') && $("#3r4").hasClass('player2') && $('#3r5').hasClass('player2') && $('#3r6').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");

//col 4 vertical p1
	} else if ($("#4r1").hasClass('player1') && $("#4r2").hasClass('player1') && $('#4r3').hasClass('player1') && $('#4r4').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#4r2").hasClass('player1') && $("#4r3").hasClass('player1') && $('#4r4').hasClass('player1') && $('#4r5').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");
	} else if ($("#4r3").hasClass('player1') && $("#4r4").hasClass('player1') && $('#4r5').hasClass('player1') && $('#4r6').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");


		//col 4 vertical p2
	} else if	($("#4r1").hasClass('player2') && $("#4r2").hasClass('player2') && $('#4r3').hasClass('player2') && $('#4r4').hasClass('player2')){
	alert("Congratulations, " + player2 + " has won!");
} else if ($("#4r2").hasClass('player2') && $("#4r3").hasClass('player2') && $('#4r4').hasClass('player2') && $('#4r5').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#4r3").hasClass('player2') && $("#4r4").hasClass('player2') && $('#4r5').hasClass('player2') && $('#4r6').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
			//col 5 vertical p1
	 } else if ($("#5r1").hasClass('player1') && $("#5r2").hasClass('player1') && $('#5r3').hasClass('player1') && $('#5r4').hasClass('player1')){
	alert("Congratulations, " + player1 + " has won!");
} else if ($("#5r2").hasClass('player1') && $("#5r3").hasClass('player1') && $('#5r4').hasClass('player1') && $('#5r5').hasClass('player1')){
	alert("Congratulations, " + player1 + " has won!");
} else if ($("#5r3").hasClass('player1') && $("#5r4").hasClass('player1') && $('#5r5').hasClass('player1') && $('#5r6').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");
		//col 5 vertical p2
	} else if	($("#5r1").hasClass('player2') && $("#5r2").hasClass('player2') && $('#5r3').hasClass('player2') && $('#5r4').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#5r2").hasClass('player2') && $("#5r3").hasClass('player2') && $('#5r4').hasClass('player2') && $('#5r5').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#5r3").hasClass('player2') && $("#5r4").hasClass('player2') && $('#5r5').hasClass('player2') && $('#5r6').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");




		//col 6 vertical p1
	} else if ($("#6r1").hasClass('player1') && $("#6r2").hasClass('player1') && $('#6r3').hasClass('player1') && $('#6r4').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#6r2").hasClass('player1') && $("#6r3").hasClass('player1') && $('#6r4').hasClass('player1') && $('#6r5').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#6r3").hasClass('player1') && $("#6r4").hasClass('player1') && $('#6r5').hasClass('player1') && $('#6r6').hasClass('player1')){
		 alert("Congratulations, " + player1 + " has won!");


		//col 6 vertical p2
	} else if	($("#6r1").hasClass('player2') && $("#6r2").hasClass('player2') && $('#6r3').hasClass('player2') && $('#6r4').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#6r2").hasClass('player2') && $("#6r3").hasClass('player2') && $('#6r4').hasClass('player2') && $('#6r5').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#6r3").hasClass('player2') && $("#6r4").hasClass('player2') && $('#6r5').hasClass('player2') && $('#6r6').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else {
				console.log("turn");
			}
			}

		var checkWinnerHorizontal = function () {

		const player1 = $inputBox1.val();
		const player2 = $inputBox2.val();

	//row 6 horizontal p1
		if ($("#r6").hasClass('player1') && $("#2r6").hasClass('player1') && $('#3r6').hasClass('player1') && $('#4r6').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#2r6").hasClass('player1') && $("#3r6").hasClass('player1') && $('#4r6').hasClass('player1') && $('#5r6').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#3r6").hasClass('player1') && $("#4r6").hasClass('player1') && $('#5r6').hasClass('player1') && $('#6r6').hasClass('player1')){
		 alert("Congratulations, " + player1 + " has won!");
	 } else if ($("#4r6").hasClass('player1') && $("#5r6").hasClass('player1') && $('#6r6').hasClass('player1') && $('#7r6').hasClass('player1')){
	 alert("Congratulations, " + player1 + " has won!");

		//row 6 horizontal p2
		} else if ($("#r6").hasClass('player2') && $("#2r6").hasClass('player2') && $('#3r6').hasClass('player2') && $('#4r6').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#2r6").hasClass('player2') && $("#3r6").hasClass('player2') && $('#4r6').hasClass('player2') && $('#5r6').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#3r6").hasClass('player2') && $("#4r6").hasClass('player2') && $('#5r6').hasClass('player2') && $('#6r6').hasClass('player2')){
		 alert("Congratulations, " + player2 + " has won!");
	 	} else if ($("#4r6").hasClass('player2') && $("#5r6").hasClass('player2') && $('#6r6').hasClass('player2') && $('#7r6').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");
				//row 5 horizontal p1
		} else if ($("#r5").hasClass('player1') && $("#2r5").hasClass('player1') && $('#3r5').hasClass('player1') && $('#4r5').hasClass('player1')){
					alert("Congratulations, " + player1 + " has won!");
		} else if ($("#2r5").hasClass('player1') && $("#3r5").hasClass('player1') && $('#4r5').hasClass('player1') && $('#5r5').hasClass('player1')){
					alert("Congratulations, " + player1 + " has won!");
		} else if ($("#3r5").hasClass('player1') && $("#4r5").hasClass('player1') && $('#5r5').hasClass('player1') && $('#6r5').hasClass('player1')){
				 alert("Congratulations, " + player1 + " has won!");
	 	} else if ($("#4r5").hasClass('player1') && $("#5r5").hasClass('player1') && $('#6r5').hasClass('player1') && $('#7r5').hasClass('player1')) {
			 alert("Congratulations, " + player1 + " has won!");
				//row 5 horizontal p2
		} else if ($("#r5").hasClass('player2') && $('#2r5').hasClass('player2') && $('#3r5').hasClass('player2') && $('#4r5').hasClass('player2')) {
				alert("Congratulations, " + player2 + " has won!");
					//row 5 hor p2
		} else if ($("#2r5").hasClass('player2') && $("#3r5").hasClass('player2') && $('#4r5').hasClass('player2') && $('#5r5').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");
		} else if ($("#3r5").hasClass('player2') && $("#4r5").hasClass('player2') && $('#5r5').hasClass('player2') && $('#6r5').hasClass('player2')){
			 alert("Congratulations, " + player2 + " has won!");
		} else if ($("#4r5").hasClass('player2') && $("#5r5").hasClass('player2') && $('#6r5').hasClass('player2') && $('#7r5').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");


						//row 4 horizontal p1
		} else if ($("#r4").hasClass('player1') && $("#2r4").hasClass('player1') && $('#3r4').hasClass('player1') && $('#4r4').hasClass('player1')){
					alert("Congratulations, " + player1 + " has won!");
		} else if ($("#2r4").hasClass('player1') && $("#3r4").hasClass('player1') && $('#4r4').hasClass('player1') && $('#5r4').hasClass('player1')){
					alert("Congratulations, " + player1 + " has won!");
		} else if ($("#3r4").hasClass('player1') && $("#4r4").hasClass('player1') && $('#5r4').hasClass('player1') && $('#6r4').hasClass('player1')){
					alert("Congratulations, " + player1 + " has won!");
		} else if ($("#4r4").hasClass('player1') && $("#5r4").hasClass('player1') && $('#6r4').hasClass('player1') && $('#7r4').hasClass('player1')){
					alert("Congratulations, " + player1 + " has won!");

						//row 4 horizontal p2
		} else if ($("#r4").hasClass('player2') && $("#2r4").hasClass('player2') && $('#3r4').hasClass('player2') && $('#4r4').hasClass('player2')){
					alert("Congratulations, " + player2 + " has won!");
		} else if ($("#2r4").hasClass('player2') && $("#3r4").hasClass('player2') && $('#4r4').hasClass('player2') && $('#5r4').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");
		} else if ($("#3r4").hasClass('player2') && $("#4r4").hasClass('player2') && $('#5r4').hasClass('player2') && $('#6r4').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");
		} else if ($("#4r4").hasClass('player2') && $("#5r4").hasClass('player2') && $('#6r4').hasClass('player2') && $('#7r4').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");

		//row 3 horizontal p1
		} else if ($("#r3").hasClass('player1') && $("#2r3").hasClass('player1') && $('#3r3').hasClass('player1') && $('#4r3').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#2r3").hasClass('player1') && $("#3r3").hasClass('player1') && $('#4r3').hasClass('player1') && $('#5r3').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");
		} else if ($("#3r3").hasClass('player1') && $("#4r3").hasClass('player1') && $('#5r3').hasClass('player1') && $('#6r3').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");
		} else if ($("#4r3").hasClass('player1') && $("#5r3").hasClass('player1') && $('#6r3').hasClass('player1') && $('#7r3').hasClass('player1')){
			 alert("Congratulations, " + player1 + " has won!");

			//row 3 horizontal p2
		} else if ($("#r3").hasClass('player2') && $("#2r3").hasClass('player2') && $('#3r3').hasClass('player2') && $('#4r3').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#2r3").hasClass('player2') && $("#3r3").hasClass('player2') && $('#4r3').hasClass('player2') && $('#5r3').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#3r3").hasClass('player2') && $("#4r3").hasClass('player2') && $('#5r3').hasClass('player2') && $('#6r3').hasClass('player2')){
			 alert("Congratulations, " + player2 + " has won!");
		} else if ($("#4r3").hasClass('player2') && $("#5r3").hasClass('player2') && $('#6r3').hasClass('player2') && $('#7r3').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");


			//row 2 horizontal p1
		} else if ($("#r2").hasClass('player1') && $("#2r2").hasClass('player1') && $('#3r2').hasClass('player1') && $('#4r2').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");
		} else if ($("#2r2").hasClass('player1') && $("#3r2").hasClass('player1') && $('#4r2').hasClass('player1') && $('#5r2').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");
		} else if ($("#3r2").hasClass('player1') && $("#4r2").hasClass('player1') && $('#5r2').hasClass('player1') && $('#6r2').hasClass('player1')){
		 alert("Congratulations, " + player1 + " has won!");
	 	} else if ($("#4r2").hasClass('player1') && $("#5r2").hasClass('player1') && $('#6r2').hasClass('player1') && $('#7r2').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");

		//row 2 horizontal p2
		} else if ($("#r2").hasClass('player2') && $("#2r2").hasClass('player2') && $('#3r2').hasClass('player2') && $('#4r2').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");
		} else if ($("#2r2").hasClass('player2') && $("#3r2").hasClass('player2') && $('#4r2').hasClass('player2') && $('#5r2').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");
		} else if ($("#3r2").hasClass('player2') && $("#4r2").hasClass('player2') && $('#5r2').hasClass('player2') && $('#6r2').hasClass('player2')){
			 alert("Congratulations, " + player2 + " has won!");
		} else if ($("#4r2").hasClass('player2') && $("#5r2").hasClass('player2') && $('#6r2').hasClass('player2') && $('#7r2').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");


			//row 1 horizontal p1
		} else if ($("#r1").hasClass('player1') && $("#2r1").hasClass('player1') && $('#3r1').hasClass('player1') && $('#4r1').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");

		} else if ($("#2r1").hasClass('player1') && $("#3r1").hasClass('player1') && $('#4r1').hasClass('player1') && $('#5r1').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");

		} else if ($("#3r1").hasClass('player1') && $("#4r1").hasClass('player1') && $('#5r1').hasClass('player1') && $('#6r1').hasClass('player1')){
			 alert("Congratulations, " + player1 + " has won!");

		} else if ($("#4r1").hasClass('player1') && $("#5r1").hasClass('player1') && $('#6r1').hasClass('player1') && $('#7r1').hasClass('player1')){
			 alert("Congratulations, " + player1 + " has won!");

			//row 1 horizontal p2
		} else if ($("#r1").hasClass('player2') && $("#2r1").hasClass('player2') && $('#3r1').hasClass('player2') && $('#4r1').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");

		} else if ($("#2r1").hasClass('player2') && $("#3r1").hasClass('player2') && $('#4r1').hasClass('player2') && $('#5r1').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");

		} else if ($("#3r1").hasClass('player2') && $("#4r1").hasClass('player2') && $('#5r1').hasClass('player2') && $('#6r1').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");

		} else if ($("#4r1").hasClass('player2') && $("#5r1").hasClass('player2') && $('#6r1').hasClass('player2') && $('#7r1').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");

		} else {
			console.log("turn")
			}
		}


		var checkWinnerDiagonal = function () {

		const player1 = $inputBox1.val();
		const player2 = $inputBox2.val();
		//1 diagonal p1
	if ($("#r6").hasClass('player1') && $("#2r5").hasClass('player1') && $('#3r4').hasClass('player1') && $('#4r3').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");

	} else if ($("#3r4").hasClass('player1') && $("#4r3").hasClass('player1') && $('#5r2').hasClass('player1') && $('#6r1').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");

	} else if ($("#2r5").hasClass('player1') && $("#3r4").hasClass('player1') && $('#4r3').hasClass('player1') && $('#5r2').hasClass('player1')){
		 alert("Congratulations, " + player1 + " has won!");

	} else if ($("#r5").hasClass('player1') && $("#2r4").hasClass('player1') && $('#3r3').hasClass('player1') && $('#4r2').hasClass('player1')){
		 alert("Congratulations, " + player1 + " has won!");

	 } else if ($("#5r1").hasClass('player1') && $("#4r2").hasClass('player1') && $('#3r3').hasClass('player1') && $('#2r4').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");

		} else if ($("#r4").hasClass('player1') && $("#2r3").hasClass('player1') && $('#3r2').hasClass('player1') && $('#4r1').hasClass('player1')){
			 alert("Congratulations, " + player1 + " has won!");

	} else if ($("#4r6").hasClass('player1') && $("#5r5").hasClass('player1') && $('#7r3').hasClass('player1') && $('#6r4').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");

	} else if ($("#4r5").hasClass('player1') && $("#5r4").hasClass('player1') && $('#6r3').hasClass('player1') && $('#7r2').hasClass('player1')){
		alert("Congratulations, " + player1 + " has won!");

	} else if ($("#2r6").hasClass('player1') && $("#3r5").hasClass('player1') && $('#4r4').hasClass('player1') && $('#5r3').hasClass('player1')){
		 alert("Congratulations, " + player1 + " has won!");

	} else if ($("#6r2").hasClass('player1') && $("#7r1").hasClass('player1') && $('#5r3').hasClass('player1') && $('#4r4').hasClass('player1')){
		 alert("Congratulations, " + player1 + " has won!");

	 } else if ($("#6r2").hasClass('player1') && $("#5r3").hasClass('player1') && $('#4r4').hasClass('player1') && $('#3r5').hasClass('player1')){
			alert("Congratulations, " + player1 + " has won!");

		} else if ($("#3r6").hasClass('player1') && $("#4r5").hasClass('player1') && $('#5r4').hasClass('player1') && $('#6r3').hasClass('player1')){
			 alert("Congratulations, " + player1 + " has won!");

			 //////
		 } else if ($("#2r3").hasClass('player1') && $("#3r4").hasClass('player1') && $('#4r5').hasClass('player1') && $('#5r6').hasClass('player1')){
			 alert("Congratulations, " + player1 + " has won!");

		 } else if ($("#r3").hasClass('player1') && $("#2r4").hasClass('player1') && $('#3r5').hasClass('player1') && $('#4r6').hasClass('player1')){
				alert("Congratulations, " + player1 + " has won!");

		 } else if ($("#r2").hasClass('player1') && $("#2r3").hasClass('player1') && $('#3r4').hasClass('player1') && $('#4r5').hasClass('player1')){
				alert("Congratulations, " + player1 + " has won!");

			} else if ($("#2r2").hasClass('player1') && $("#3r3").hasClass('player1') && $('#4r4').hasClass('player1') && $('#5r5').hasClass('player1')){
				 alert("Congratulations, " + player1 + " has won!");

			 } else if ($("#6r6").hasClass('player1') && $("#5r5").hasClass('player1') && $('#3r3').hasClass('player1') && $('#4r4').hasClass('player1')){
					alert("Congratulations, " + player1 + " has won!");


				} else if ($("#r1").hasClass('player1') && $("#2r2").hasClass('player1') && $('#3r3').hasClass('player1') && $('#4r4').hasClass('player1')){
					 alert("Congratulations, " + player1 + " has won!");

				 } else if ($("#2r1").hasClass('player1') && $("#3r2").hasClass('player1') && $('#4r3').hasClass('player1') && $('#5r4').hasClass('player1')){
						alert("Congratulations, " + player1 + " has won!");


					} else if ($("#6r5").hasClass('player1') && $("#5r4").hasClass('player1') && $('#4r3').hasClass('player1') && $('#3r2').hasClass('player1')){
						 alert("Congratulations, " + player1 + " has won!");

					 } else if ($("#7r6").hasClass('player1') && $("#6r5").hasClass('player1') && $('#5r4').hasClass('player1') && $('#4r3').hasClass('player1')){
							alert("Congratulations, " + player1 + " has won!");


						} else if ($("#3r1").hasClass('player1') && $("#4r2").hasClass('player1') && $('#5r3').hasClass('player1') && $('#6r4').hasClass('player1')){
							 alert("Congratulations, " + player1 + " has won!");

						 } else if ($("#4r2").hasClass('player1') && $("#7r5").hasClass('player1') && $('#6r4').hasClass('player1') && $('#5r3').hasClass('player1')){
								alert("Congratulations, " + player1 + " has won!");

							} else if ($("#4r4").hasClass('player1') && $("#5r2").hasClass('player1') && $('#6r3').hasClass('player1') && $('#7r4').hasClass('player1')){
						 		alert("Congratulations, " + player1 + " has won!");

//player 2 diagonal


	} else if ($("#r6").hasClass('player2') && $("#2r5").hasClass('player2') && $('#3r4').hasClass('player2') && $('#4r3').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");

	} else if ($("#3r4").hasClass('player2') && $("#4r3").hasClass('player2') && $('#5r2').hasClass('player2') && $('#6r1').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");

	} else if ($("#2r5").hasClass('player2') && $("#3r4").hasClass('player2') && $('#4r3').hasClass('player2') && $('#5r2').hasClass('player2')){
		 alert("Congratulations, " + player2 + " has won!");

	} else if ($("#r5").hasClass('player2') && $("#2r4").hasClass('player2') && $('#3r3').hasClass('player2') && $('#4r2').hasClass('player2')){
		 alert("Congratulations, " + player2 + " has won!");

	 } else if ($("#5r1").hasClass('player2') && $("#4r2").hasClass('player2') && $('#3r3').hasClass('player2') && $('#2r4').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");

	} else if ($("#r4").hasClass('player2') && $("#2r3").hasClass('player2') && $('#3r2').hasClass('player2') && $('#4r1').hasClass('player2')){
		 alert("Congratulations, " + player2 + " has won!");

 	} else if ($("#4r6").hasClass('player2') && $("#5r5").hasClass('player2') && $('#7r3').hasClass('player2') && $('#6r4').hasClass('player2')){
	alert("Congratulations, " + player2 + " has won!");

	} else if ($("#4r5").hasClass('player2') && $("#5r4").hasClass('player2') && $('#6r3').hasClass('player2') && $('#7r2').hasClass('player2')){
		alert("Congratulations, " + player2 + " has won!");

	} else if ($("#2r6").hasClass('player2') && $("#3r5").hasClass('player2') && $('#4r4').hasClass('player2') && $('#5r3').hasClass('player2')){
		 alert("Congratulations, " + player2 + " has won!");

	} else if ($("#6r2").hasClass('player2') && $("#7r1").hasClass('player2') && $('#5r3').hasClass('player2') && $('#4r4').hasClass('player2')){
		 alert("Congratulations, " + player2 + " has won!");

	 } else if ($("#6r2").hasClass('player2') && $("#5r3").hasClass('player2') && $('#4r4').hasClass('player2') && $('#3r5').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");

		} else if ($("#3r6").hasClass('player2') && $("#4r5").hasClass('player2') && $('#5r4').hasClass('player2') && $('#6r3').hasClass('player2')){
			 alert("Congratulations, " + player2 + " has won!");


	 } else if ($("#2r3").hasClass('player2') && $("#3r4").hasClass('player2') && $('#4r5').hasClass('player2') && $('#5r6').hasClass('player2')){
		 alert("Congratulations, " + player2 + " has won!");

	 } else if ($("#r3").hasClass('player2') && $("#2r4").hasClass('player2') && $('#3r5').hasClass('player2') && $('#4r6').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");

	 } else if ($("#r2").hasClass('player2') && $("#2r3").hasClass('player2') && $('#3r4').hasClass('player2') && $('#4r5').hasClass('player2')){
			alert("Congratulations, " + player2 + " has won!");

		} else if ($("#2r2").hasClass('player2') && $("#3r3").hasClass('player2') && $('#4r4').hasClass('player2') && $('#5r5').hasClass('player2')){
			 alert("Congratulations, " + player2 + " has won!");

		 } else if ($("#6r6").hasClass('player2') && $("#5r5").hasClass('player2') && $('#3r3').hasClass('player2') && $('#4r4').hasClass('player2')){
				alert("Congratulations, " + player2 + " has won!");


			} else if ($("#r1").hasClass('player2') && $("#2r2").hasClass('player2') && $('#3r3').hasClass('player2') && $('#4r4').hasClass('player2')){
				 alert("Congratulations, " + player2 + " has won!");

			 } else if ($("#2r1").hasClass('player2') && $("#3r2").hasClass('player2') && $('#4r3').hasClass('player2') && $('#5r4').hasClass('player2')){
					alert("Congratulations, " + player2 + " has won!");


				} else if ($("#6r5").hasClass('player2') && $("#5r4").hasClass('player2') && $('#4r3').hasClass('player2') && $('#3r2').hasClass('player2')){
					 alert("Congratulations, " + player2 + " has won!");

				 } else if ($("#7r6").hasClass('player2') && $("#6r5").hasClass('player2') && $('#5r4').hasClass('player2') && $('#4r3').hasClass('player2')){
						alert("Congratulations, " + player2 + " has won!");


					} else if ($("#3r1").hasClass('player2') && $("#4r2").hasClass('player2') && $('#5r3').hasClass('player2') && $('#6r4').hasClass('player2')){
						 alert("Congratulations, " + player2 + " has won!");

					 } else if ($("#4r2").hasClass('player2') && $("#7r5").hasClass('player2') && $('#6r4').hasClass('player2') && $('#5r3').hasClass('player2')){
							alert("Congratulations, " + player2 + " has won!");

						} else if ($("#4r4").hasClass('player2') && $("#5r2").hasClass('player2') && $('#6r3').hasClass('player2') && $('#7r4').hasClass('player2')){
							alert("Congratulations, " + player2 + " has won!");

	} else {
		console.log("turn")
		}
	}




		var dropCoin = function (column, t) {

			//column = "this" t = "turn"
			//empty string set for variable
			var classColor = '';
			if (t == '1'){
				classColor = 'player1'
			} else{
				classColor = 'player2'
			}
			for (var i = 5; i < column.children().length; i--) {

				if (column.children().eq(i).hasClass('white')) {
					column.children().eq(i).removeClass('white')
					column.children().eq(i).addClass(classColor)

					break;

				}
			}
		checkWinnerVertical();
		checkWinnerHorizontal();
		checkWinnerDiagonal();
		}


		//turn 1
		var turn = 1;
		const $inputBox1 = $('#input-box1');
		const $inputBox2 = $('#input-box2');
		const player1 = $inputBox1.val();
		const player2 = $inputBox2.val();
		$('#turn').text("Welcome! Let's start.");

		$('#C1, #C2, #C3, #C4, #C5, #C6, #C7').on('click', function(){

			if (turn == 1){
				const $inputBox1 = $('#input-box1');
				const $inputBox2 = $('#input-box2');
				const player1 = $inputBox1.val();
				const player2 = $inputBox2.val();
				dropCoin($(this), turn)
				turn = 2;
				$('#turn').text("It\'s " +player2+"\'s turn!");

			}else if(turn == 2){
				const $inputBox1 = $('#input-box1');
				const $inputBox2 = $('#input-box2');
				const player1 = $inputBox1.val();
				const player2 = $inputBox2.val();
				dropCoin($(this), turn)
				turn = 1;
				$('#turn').text("It\'s " +player1+"\'s turn!");
				}
				})
})
