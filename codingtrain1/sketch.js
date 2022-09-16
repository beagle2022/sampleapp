let cirPath=[];
let triPath=[];
let spacing=10;
function setup() {
	createCanvas(400,400);
	angleMode(DEGREES);
	let radius=100;
	for(let a=0;a<120;a+=spacing){
		let x=radius * cos(a);
		let y=radius * sin(a);
		let v=createVector(x,y);
		cirPath.push(v);
	}

	let astart=0;
	let aend=120;
	let xs=radius * cos(astart);
	let ys=radius * sin(astart);
	let xe=radius * cos(aend);
	let ye=radius * sin(aend);

	triPath.push(createVector(xs,ys));
	triPath.push(createVector(xe,ye));


}

function draw() {
	// put drawing code here
	background(220);
	translate(width/2, height/2);
	stroke(0);
	noFill();
	beginShape();
	for(let i=0;i<cirPath.length;i++){
		let v=cirPath[i];
		vertex(v.x,v.y);
	}

	endShape();

	beginShape();
	for(let i=0;i<triPath.length;i++){
		let v=triPath[i];
		vertex(v.x,v.y);
	}

	endShape();







}
