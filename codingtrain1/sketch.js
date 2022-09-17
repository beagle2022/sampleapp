let cirPath=[];
let triPath=[];
let spacing=10;

function polarToCartesian(r,angle){
	return createVector(r*cos(angle),r*sin(angle));
}

function setup() {
	createCanvas(400,400);
	angleMode(DEGREES);
	let radius=100;
	let startA=0;
	let endA=120;
	let start=polarToCartesian(radius,startA);
	let end=polarToCartesian(radius,endA);

	for(let a=startA;a<360;a+=spacing){
		let x=radius * cos(a);
		let y=radius * sin(a);
		let cv=polarToCartesian(radius,a);
		cirPath.push(cv);
		let amt=a/(endA-startA);
		let tv=p5.Vector.lerp(start,end,amt);
		triPath.push(tv);

		if(a%120===0){
			startA+=120;
			endA+=120;
			start=polarToCartesian(radius,startA);
			end=polarToCartesian(radius,endA);
		}	
	}




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
