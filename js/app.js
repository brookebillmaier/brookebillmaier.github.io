
$(() => {

// var row = 6;
// var column = 7;
//const $allColumns = ('#allcolumns');
//$allColumns.append('#C1, #C2, #C3, #C4, #C5, #C6, #C7');


	//
	// for (var i=0; i<=row; i++) {
	// 	for (var j=0 j<=column; j++){
	// 		const $circle = ('<div>').addClass('.circle');
	// 		$allColumns.append($circle);
	// 	}
	// }


	var placePiece = function (column, t) {
	var color = '';
		if (t == '1'){
			color = 'red'
		} else{
			color = 'black'
		}

			for (var i = 5; i < column.children().length; i--) {
				if (column.children().eq(i).hasClass('white')) {
					column.children().eq(i).removeClass('white')
					column.children().eq(i).addClass(color)
				}
			}
		}

		var turn = 1;

		//check turn
		$('#turn').text(turn);

		//set event listener for column divs
		//function will run on click
		$(#C1, #C2, #C3, #C4, #C5, #C6, #C7).on('click', function(){

		if (turn == 1){
			placePiece($(this), turn)
			//reset turn from 1 to 2
			turn = 2;
			$('#turn').text("Red Players turn!");

		}else if(turn == 2){
			placePiece($(this), turn)
			turn = 1;
			$('#turn').text("Black Players turn!");


			}
		});
});









//announce winner, reset game, back to original button




//


//})

//
