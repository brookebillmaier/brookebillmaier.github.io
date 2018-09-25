$(() => {


// var t = turn;
// turn = 1;
// 	var showcolor = '';
// 		if (t=='1') {
// 			showcolor = 'red2'
// 		} else {
// 			showcolor ='black2'
// 		}
// 	var showCoin = function(event) {
// 		$('#C1, #C2, #C3, #C4, #C5, #C6, #C7').on('mouseover', function(){
// 			console.log("hello")
// 		if (event.target.hasClass('column')) {
// 		event.target.removeClass('column')
// 		event.target.addClass(showcolor)
// 			}
// 		})
// 	}

		var dropCoin = function (column, t) {
			//column = "this" t = "turn"
			//empty string set for variable
			var classColor = '';
			if (t == '1'){
				classColor = 'red'
			} else{
				classColor = 'black'
			}
			for (var i = 5; i < column.children().length; i--) {

				if (column.children().eq(i).hasClass('white')) {
					column.children().eq(i).removeClass('white')
					column.children().eq(i).addClass(classColor)

					break;
				}
			}
		}
		//turn 1
		var turn = 1;

		//listening to span id="turn" for 1 or 2
		$('#turn').text("It\'s the Sun\'s turn!");

		//set event listener for column divs
		//function will run on click
		$('#C1, #C2, #C3, #C4, #C5, #C6, #C7').on('click', function(){

			if (turn == 1){
				//run dropCoin function
				dropCoin($(this), turn)
				//reset turn from 1 to 2
				turn = 2;
				$('#turn').text("It\'s Earth\'s turn!");
			}else if(turn == 2){
				dropCoin($(this), turn)
				turn = 1;
				$('#turn').text("It\'s Sun\'s turn!");
				}
			})


			var checkWinner = ()=> {
				if ($("#c1r1").hasClass('red') && $("#c1r2").hasClass('red')) {
					alert("yes it works");
				}
			}












		});
