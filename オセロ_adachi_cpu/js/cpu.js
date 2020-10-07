//turn orange = 1,green = 2,red = 3,blue = 4
function choose(board,turn){
    let myturn;
    if (turn == 1 || turn == 3){
        myturn = [2,4];
    }else{
        myturn = [1,3];
    }
    var ret = 0;
	if(turn == PIECE_TYPE.ORANGE){
		othercolor=PIECE_TYPE.RED;
	}
	else if(turn == PIECE_TYPE.GREEN){
		othercolor=PIECE_TYPE.BLUE;
	}
	else if(turn == PIECE_TYPE.RED){
		othercolor=PIECE_TYPE.ORANGE
	}
	else if(turn == PIECE_TYPE.BLUE){
		othercolor=PIECE_TYPE.GREEN;
	}
	
	for (var dx = -1; dx <= 1; dx++) {
		for(var dy = -1; dy <= 1; dy++) {
			if (dx == 0 && dy == 0) {
				continue;
			}
		
			var nx = x + dx;
			var ny = y + dy;
			var n = 0;
			var m = [];
			while(board[nx][ny] != turn && board[nx][ny] != PIECE_TYPE.NONE && board[nx][ny] != PIECE_TYPE.WHITE) {
				m[n]=board[nx][ny];
				n++;
				nx += dx;
				ny += dy;
			}
			if(board[nx][ny] == PIECE_TYPE.NONE || board[nx][ny] == PIECE_TYPE.WHITE){
				nx-=dx;
				ny-=dy;
				}
			else{
				m[n]=board[nx][ny];
			}
			
			if (m.length > 1 && n > 0 && board[nx][ny] != PIECE_TYPE.NONE
			&& board[nx][ny] != PIECE_TYPE.WHITE) {
				if(m.indexOf(turn)>0){
					ret += m.indexOf(turn);
				}
				if(m.lastIndexOf(othercolor)>0){
					ret += m.lastIndexOf(othercolor);
				}
					
			}
		}
	}
	
	return ret;
}



function onehand(board,turn){
    let myturn;
    if (turn == 1 || turn == 3){
        myturn = [2,4];
    }else{
        myturn = [1,3];
    }

    console.log(board,turn);
    /* for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
            //白いマスの時
			if(board[i][j] = 5){

            }
		}
	} */
}

//
function steva(){

}