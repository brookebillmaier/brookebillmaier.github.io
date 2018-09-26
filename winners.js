$(() => {

  var player1 = $('.p1input')
  var player2 = $('.p2input')

    var checkWinner = function () {

//row 1 vertical p1
  		if ($("#r1").hasClass('player1') && $("#r2").hasClass('player1') && $('#r3').hasClass('player1') && $('#r4').hasClass('player1')){
  			alert("Congratulations, " + player1 + " has won!");
  		} else if ($("#r2").hasClass('player1') && $("#r3").hasClass('player1') && $('#r4').hasClass('player1') && $('#r5').hasClass('player1')){
  			alert("Congratulations, " + player1 + " has won!");
  		} else if ($("#r3").hasClass('player1') && $("#r4").hasClass('player1') && $('#r5').hasClass('player1') && $('#r6').hasClass('player1')){
  			alert("Congratulations, " + player1 + " has won!");

//row 1 vertical p2
  		} else if	($("#r1").hasClass('player2') && $("#r2").hasClass('player2') && $('#r3').hasClass('player2') && $('#r4').hasClass('player2')){
  				alert("Congratulations, " + player2 + " has won!");
  			} else if ($("#r2").hasClass('player2') && $("#r3").hasClass('player2') && $('#r4').hasClass('player2') && $('#r5').hasClass('player2')){
  				alert("Congratulations, " + player2 + " has won!");
  			} else if ($("#r3").hasClass('player2') && $("#r4").hasClass('player2') && $('#r5').hasClass('player2') && $('#r6').hasClass('player2')){
  				alert("Congratulations, " + player2 + " has won!");

//row 2 vertical p1
    if ($("#2r1").hasClass('player1') && $("#2r2").hasClass('player1') && $('#2r3').hasClass('player1') && $('#2r4').hasClass('player1')){
      alert("Congratulations, " + player1 + " has won!");
    } else if ($("#2r2").hasClass('player1') && $("#2r3").hasClass('player1') && $('#2r4').hasClass('player1') && $('#2r5').hasClass('player1')){
    alert("Congratulations, " + player1 + " has won!");
    } else if ($("#r3").hasClass('player1') && $("#2r4").hasClass('player1') && $('#2r5').hasClass('player1') && $('#2r6').hasClass('player1')){
      alert("Congratulations, " + player1 + " has won!");
//row 2 vertical p2
    } else if	($("#2r1").hasClass('player2') && $("#2r2").hasClass('player2') && $('#2r3').hasClass('player2') && $('#2r4').hasClass('player2')){
      alert("Congratulations, " + player2 + " has won!");
    } else if ($("#r2").hasClass('player2') && $("#2r3").hasClass('player2') && $('#2r4').hasClass('player2') && $('#2r5').hasClass('player2')){
      alert("Congratulations, " + player2 + " has won!");
      } else if ($("#r3").hasClass('player2') && $("#2r4").hasClass('player2') && $('#2r5').hasClass('player2') && $('#2r6').hasClass('player2')){
      alert("Congratulations, " + player2 + " has won!");
        //row 3 vertical p1
      if ($("#3r1").hasClass('player1') && $("#3r2").hasClass('player1') && $('#3r3').hasClass('player1') && $('#3r4').hasClass('player1')){
        alert("Congratulations, " + player1 + " has won!");
      } else if ($("#2r2").hasClass('player1') && $("#3r3").hasClass('player1') && $('#3r4').hasClass('player1') && $('#3r5').hasClass('player1')){
      alert("Congratulations, " + player1 + " has won!");
    } else if ($("#r3").hasClass('player1') && $("#3r4").hasClass('player1') && $('#3r5').hasClass('player1') && $('#3r6').hasClass('player1')){
        alert("Congratulations, " + player1 + " has won!");
    //row 3 vertical p2
  } else if	($("#3r1").hasClass('player2') && $("#3r2").hasClass('player2') && $('#3r3').hasClass('player2') && $('#3r4').hasClass('player2')){
        alert("Congratulations, " + player2 + " has won!");
    } else if ($("#3r2").hasClass('player2') && $("#3r3").hasClass('player2') && $('#2r4').hasClass('player2') && $('#3r5').hasClass('player2')){
          alert("Congratulations, " + player2 + " has won!");
        } else if ($("#3r3").hasClass('player2') && $("#3r4").hasClass('player2') && $('#3r5').hasClass('player2') && $('#3r6').hasClass('player2')){
          alert("Congratulations, " + player2 + " has won!");
  //row 4 vertical p1
      if ($("#4r1").hasClass('player1') && $("#4r2").hasClass('player1') && $('#4r3').hasClass('player1') && $('#4r4').hasClass('player1')){
        alert("Congratulations, " + player1 + " has won!");
      } else if ($("#4r2").hasClass('player1') && $("#4r3").hasClass('player1') && $('#4r4').hasClass('player1') && $('#4r5').hasClass('player1')){
      alert("Congratulations, " + player1 + " has won!");
    } else if ($("#4r3").hasClass('player1') && $("#4r4").hasClass('player1') && $('#4r5').hasClass('player1') && $('#4r6').hasClass('player1')){
      alert("Congratulations, " + player1 + " has won!");
      //row 4 vertical p2
    } else if	($("#4r1").hasClass('player2') && $("#4r2").hasClass('player2') && $('#4r3').hasClass('player2') && $('#4r4').hasClass('player2')){
    alert("Congratulations, " + player2 + " has won!");
  } else if ($("#4r2").hasClass('player2') && $("#4r3").hasClass('player2') && $('#4r4').hasClass('player2') && $('#4r5').hasClass('player2')){
        alert("Congratulations, " + player2 + " has won!");
      } else if ($("#4r3").hasClass('player2') && $("#4r4").hasClass('player2') && $('#4r5').hasClass('player2') && $('#4r6').hasClass('player2')){
        alert("Congratulations, " + player2 + " has won!");
        //row 5 vertical p1
    if ($("#5r1").hasClass('player1') && $("#5r2").hasClass('player1') && $('#5r3').hasClass('player1') && $('#5r4').hasClass('player1')){
    alert("Congratulations, " + player1 + " has won!");
  } else if ($("#5r2").hasClass('player1') && $("#5r3").hasClass('player1') && $('#5r4').hasClass('player1') && $('#5r5').hasClass('player1')){
    alert("Congratulations, " + player1 + " has won!");
  } else if ($("#5r3").hasClass('player1') && $("#5r4").hasClass('player1') && $('#5r5').hasClass('player1') && $('#5r6').hasClass('player1')){
      alert("Congratulations, " + player1 + " has won!");
      //row 5 vertical p2
    } else if	($("#5r1").hasClass('player2') && $("#5r2").hasClass('player2') && $('#5r3').hasClass('player2') && $('#5r4').hasClass('player2')){
        alert("Congratulations, " + player2 + " has won!");
      } else if ($("#5r2").hasClass('player2') && $("#5r3").hasClass('player2') && $('#5r4').hasClass('player2') && $('#5r5').hasClass('player2')){
        alert("Congratulations, " + player2 + " has won!");
      } else if ($("#5r3").hasClass('player2') && $("#5r4").hasClass('player2') && $('#5r5').hasClass('player2') && $('#5r6').hasClass('player2')){
      alert("Congratulations, " + player2 + " has won!");



      //row 6 vertical p1
      if ($("#6r1").hasClass('player1') && $("#6r2").hasClass('player1') && $('#6r3').hasClass('player1') && $('#6r4').hasClass('player1')){
        alert("Congratulations, " + player1 + " has won!");
      } else if ($("#6r2").hasClass('player1') && $("#6r3").hasClass('player1') && $('#6r4').hasClass('player1') && $('#6r5').hasClass('player1')){
        alert("Congratulations, " + player1 + " has won!");
      } else if ($("#6r3").hasClass('player1') && $("#6r4").hasClass('player1') && $('#6r5').hasClass('player1') && $('#6r6').hasClass('player1')){
       alert("Congratulations, " + player1 + " has won!");



      //row 6 vertical p2
    } else if	($("#6r1").hasClass('player2') && $("#6r2").hasClass('player2') && $('#6r3').hasClass('player2') && $('#6r4').hasClass('player2')){
        alert("Congratulations, " + player2 + " has won!");
      } else if ($("#5r2").hasClass('player2') && $("#6r3").hasClass('player2') && $('#6r4').hasClass('player2') && $('#6r5').hasClass('player2')){
        alert("Congratulations, " + player2 + " has won!");
      } else if ($("#6r3").hasClass('player2') && $("#6r4").hasClass('player2') && $('#6r5').hasClass('player2') && $('#6r6').hasClass('player2')){
        alert("Congratulations, " + player2 + " has won!");













  		} else {
  			console.log("ya broke it")
  		}
  	}
  }
  }
  }
}
}})
