class Enemy {constructor (px,py,color) {
	this.px = px;
	this.py = py;
	this.color = color; 
}
draw(){
	canvas.ctx.beginPath();
	canvas.ctx.fillStyle = this.color
	canvas.ctx.arc(this.px * tileSize + (tileSize/2) ,this.py * tileSize + (tileSize/2), tileSize/2, 0, 360);
	canvas.ctx.fill();
}
update(){
	let possDeDepl = []
		px = Math.floor(this.px)
		py = Math.floor(this.py)
		console.log(px, py)
		if (possDeDepl == 0) {
			if (map[py][px-1] != 1) possDeDepl.push({x:px-1,y:py});

			if (map[py-1][px] != 1) possDeDepl.push({x:px,y:py-1});
			if (map[py+1][px] != 1) possDeDepl.push({x:px,y:py+1});

			if (map[py][px+1] != 1) possDeDepl.push({x:px+1,y:py});}

		console.log(this.color, possDeDepl)

possDeDepl = possDeDepl[getRandomInt(possDeDepl.length)]
	console.log(this.color,possDeDepl,Math.floor(this.px), Math.floor(this.py))

	let sauvegardeX = this.px 
	let sauvegardeY = this.py
	
	
	if (possDeDepl.x > Math.floor(this.px)) {
		this.px = this.px + 0.01
	}
		if (possDeDepl.x < Math.floor(this.px)) {
		this.px = this.px - 0.01
	}
	if (possDeDepl.y < Math.floor(this.py)) {
		this.py = this.py - 0.01
	}
	if (possDeDepl.y > Math.floor(this.py)) {
		this.py = this.py + 0.01
	}
	if (possDeDepl.x == Math.floor(this.px) || possDeDepl.y == Math.floor(this.py)) {this.px = sauvegardeX; this.py = sauvegardeY}










	var tileSiMovementX = map[Math.floor(sauvegardeY)][Math.floor(this.px)];
	var tileSiMovementY = map[Math.floor(this.py)][Math.floor(sauvegardeX)];

	if (tileSiMovementY == 1 ) {
  	this.py = sauvegardeY
	}			
  if (tileSiMovementX == 1) {						
    this.px = sauvegardeX;
	}
	if (this.px < 0) this.px = map.length;
	if (this.px > map.length) this.px = 0;
}}