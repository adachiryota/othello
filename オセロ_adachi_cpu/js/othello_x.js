function finish(oC,rC,D1,T1,bC,gC,D2,T2){
	window.location.href = "result.html?" +oC+':'+rC+':'+D1+':'+T1+':'+bC+':'+gC+':'+D2+':'+T2;
	
}


var turn = 1;
function choiceC(number){
		if(number.value=='O' && turn == 3){
			turn=1;
		}else if(number.value=='G' && turn == 4){
			turn=2;
		}else if(number.value=='R' && turn == 1){
			turn=3;
		}else if(number.value=='B' && turn == 2){
			turn=4;
		}
		showBoard();
}
var BOARD_TYPE = {
        'WIDTH' :8,
        'HEIGHT':8,
};

var PIECE_TYPE = {
	'NONE'   : 0,
	'ORANGE'  : 1,
	'GREEN'  : 2,
	'RED'	 : 3,
	'BLUE'	 : 4,
	'WHITE'	 : 5,
	'MAX'	 : 6,
};

var board = [];
var stone;
var checkTurn = function(x, y, flip) {

	var ret = 0;
	var othercolor;
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
};


var Color;
var checkTurnOver = function(x, y, flip) {

	var ret = 0;
	var othercolor;
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
				ret += n;
				a = 0;
				
				
				if (flip) {
					nx = x + dx;
					ny = y + dy;
					if(m.indexOf(turn) > 0){
					while(a < m.indexOf(turn)) {
						board[nx][ny] = turn;
						console.log(m);
						a +=1;
						nx += dx;
						ny += dy;
					}
					}
					else if(m.lastIndexOf(othercolor)>=0){
						while(m.lastIndexOf(othercolor) > a) {
						a+=1;
						board[nx][ny] = turn;
						nx += dx;
						ny += dy;
					}
					}
					
					
				}
			}
		}
	}
	return ret;
};



var showBoard = function() {
	var result=document.getElementById("result");
	result.style.display="block";
	var ok=document.getElementById("ok");
	var hm = 0;
	for(var ny = 1; ny <= BOARD_TYPE.HEIGHT; ny++) {
		for(var nx = 1; nx <= BOARD_TYPE.WIDTH; nx++) {
			if(board[nx][ny] == PIECE_TYPE.WHITE){
				board[nx][ny] = PIECE_TYPE.NONE;
			}
			if (checkTurn(nx, ny, true) > 0 && board[nx][ny] == PIECE_TYPE.NONE){
				hm+=1;
				board[nx][ny] = PIECE_TYPE.WHITE;
			}
		}
	}
	if(hm==0){
		console.log("end");
		var result=document.getElementById("result");
		result.style.display="block";
		var ok=document.getElementById("ok");
		//location.reload();
		let nowO = document.getElementById("nowO").innerHTML.split(':')[1];
		let nowR = document.getElementById("nowR").innerHTML.split(':')[1];
		let nowD1 = document.getElementById("nowD1").innerHTML.split(':')[1];
		let nowT1 = document.getElementById("nowT1").innerHTML.split(':')[1];
		let nowB = document.getElementById("nowB").innerHTML.split(':')[1];
		let nowG = document.getElementById("nowG").innerHTML.split(':')[1];
		let nowD2 = document.getElementById("nowD2").innerHTML.split(':')[1];
		let nowT2 = document.getElementById("nowT2").innerHTML.split(':')[1];
		finish(nowO,nowR,nowD1,nowT1,nowB,nowG,nowD2,nowT2);
		//finish(document.getElementById("orangeC").innerText,document.getElementById("greenC").innerText,document.getElementById("redC").innerText,document.getElementById("blueC").innerText);
	}

	var b = document.getElementById("board");
	
	while(b.firstChild) {
		b.removeChild(b.firstChild);
	}
	
	for(var y = 1; y <= BOARD_TYPE.HEIGHT; y++) {
		for(var x = 1; x <= BOARD_TYPE.WIDTH; x++) {
			var cell = stone[board[x][y]].cloneNode(true);
			
			cell.style.left = ((x - 1) * 59) + "px"; 
			cell.style.top = ((y - 1) * 59) + "px"; 
			b.appendChild(cell);
			
			if (board[x][y] == PIECE_TYPE.NONE || board[x][y] == PIECE_TYPE.WHITE) {
				(function() {
					var _x = x;
					var _y = y;
					//alert("break point")
					cell.onclick = function() {
						if (checkTurnOver(_x, _y, true) > 0 & (board[_x][_y] == PIECE_TYPE.WHITE)) {
							console.log(checkTurnOver(_x, _y, true));
							console.log(turn);
							board[_x][_y] = turn;
							//showBoard();
							showNumber();
							turn = (turn + 1) % 5;
							console.log("turn = "+turn);
							if(turn == PIECE_TYPE.NONE){
								turn = 1;
							}
							//choose(board,turn);
							onehand(board,turn);
							
							showBoard();
							
						}
						
					};
					
				})();
			}
		}
	}
	
};

var showNumber = function(){
	var orangeC=0;
	var greenC=0;
	var redC=0;
	var blueC=0;
	for(var y = 1; y <= BOARD_TYPE.HEIGHT; y++) {
		for(var x = 1; x <= BOARD_TYPE.WIDTH; x++) {
			if(board[x][y] == 1){
				orangeC++;
			}
			else if(board[x][y] == 2){
				greenC++;
			}
			else if(board[x][y] == 3){
				redC++;
			}
			else if(board[x][y] == 4){
				blueC++;
			}
		}
	}
	
	//盤面に表示
	var oC = document.getElementById("orangeC");
	oC.innerHTML=orangeC;
	var gC = document.getElementById("greenC");
	gC.innerHTML=greenC;
	var rC = document.getElementById("redC");
	rC.innerHTML=redC;
	var bC = document.getElementById("blueC");
	bC.innerHTML=blueC;

	let nowO = document.getElementById("nowO");
	nowO.innerHTML = nowO.innerHTML.split(':')[0] + ":" + (orangeC*5 + '');
	let nowR = document.getElementById("nowR");
	nowR.innerHTML = nowR.innerHTML.split(':')[0] + ":" + (redC*2 + '');
	let nowD1 = document.getElementById("nowD1");
	nowD1.innerHTML = nowD1.innerHTML.split(':')[0] + ":" + (Math.abs(orangeC - redC)*(-5) + '');
	let nowT1 = document.getElementById("nowT1");
	nowT1.innerHTML = nowT1.innerHTML.split(':')[0] + ":" + ((orangeC*5 + redC*2 + Math.abs(orangeC - redC)*(-5)) + '');

	let nowB = document.getElementById("nowB");
	nowB.innerHTML = nowB.innerHTML.split(':')[0] + ":" + (blueC*5 + '');
	let nowG = document.getElementById("nowG");
	nowG.innerHTML = nowG.innerHTML.split(':')[0] + ":" + (greenC*2 + '');
	let nowD2 = document.getElementById("nowD2");
	nowD2.innerHTML = nowD2.innerHTML.split(':')[0] + ":" + (Math.abs(blueC - greenC)*(-5) + '');
	let nowT2 = document.getElementById("nowT2");
	nowT2.innerHTML = nowT2.innerHTML.split(':')[0] + ":" + ((blueC*5 + greenC*2 + Math.abs(blueC - greenC)*(-5)) + '');
	
	
}

onload = function() {
	
	// 0:石無し, 1:黒, 2:白
	stone = [
		document.getElementById("cell"),
		document.getElementById("orange"),
		document.getElementById("green"),
		document.getElementById("red"),
		document.getElementById("blue"),
		document.getElementById("white")
	];
	
	// PIECE種別の凍結(念のため)
	Object.freeze(PIECE_TYPE);
	
	// 盤面を初期化
	for (var i = 0; i < 10; i++) {
		board[i] = [];
		for (var j = 0; j < 10; j++) {
			board[i][j] = PIECE_TYPE.NONE;
		}
	}
	
	// 黒白の初期配置
	board[4][5] = PIECE_TYPE.ORANGE;
	board[5][4] = PIECE_TYPE.RED;
	board[4][4] = PIECE_TYPE.GREEN;
	board[5][5] = PIECE_TYPE.BLUE;
	

	// 盤面表示
	showBoard();
	showNumber();
	
};