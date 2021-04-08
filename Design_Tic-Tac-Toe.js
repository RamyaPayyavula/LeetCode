class TicTacToe {
		constructor(n) {
			if(!n) return null;
			this.b =  Array(n).fill(null).map(v=> new Array(n).fill(0));
			this.n = n;
			this.winner = 0;
		}

		move(row, col, player) {
			this.b[row][col] = player;
			return this.checkWinner(row,col,player);
		}

		dfs(row, col, player, r, c) {
			if (row >= this.n || row < 0 || col < 0 || col >= this.n 
				|| this.b[row][col] != player) return 0;
			return 1 + this.dfs(row + r, col + c, player, r, c);
		}

		checkWinner(row, col, player) {
		   if (this.winner) return this.winner;
			// Increments for directions (n = north, ne = north-east, etc.).
			let dirs = {n: [-1,0], ne:[-1,1], e:[0,1], se:[1,1], s:[1,0]};
			// Check all directions
			for (const dir in dirs) {
				let [r, c] = dirs[dir];
				let _r = -1*r, _c = -1*c; // opposite direction
				let a = this.dfs(row + r, col + c, player, r, c);
				let b = this.dfs(row + _r, col + _c, player, _r, _c) ;
				if (1 + a + b == this.n) this.winner = player;
			}
			return this.winner;
		}
}