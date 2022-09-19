let cirPath=[];
let triPath=[];
//let morPath=[];
let spacing=10;
let theta=0;


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
	for(let a=startA; a<360; a+=spacing){
		let cv=polarToCartesian(radius,a);
		cirPath.push(cv);
		let amt=(a%120)/(endA-startA);
		let tv=p5.Vector.lerp(start,end,amt);
		triPath.push(tv);
		console.log(a%120);

		if((a + spacing) % 120 === 0){
			console.log("oops");
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
	rotate(30);
	stroke(0);
	strokeWeight(4);
	noFill();
	let amt=(sin(theta)+1)/2;
	theta+=5;
	beginShape();
	for(i=0;i<cirPath.length;i++){

		let cv=cirPath[i];
		let tv=triPath[i];

		let x=lerp(cv.x,tv.x,amt);
		let y=lerp(cv.y,tv.y,amt);
		vertex(x,y);
	}



	//Circle
/* 	for(let i=0;i<cirPath.length;i++){
		let v=cirPath[i];
		vertex(v.x,v.y);
	} 

	//little points/* 
	for(i=0;i<triPath.length;i++){
		let v=triPath[i];
		ellipse(v.x,v.y,8);
	} */

	endShape(CLOSE);
	
/* 	//Triangle
	beginShape();
		for(let i=0;i<triPath.length;i++){
			let v=triPath[i];
			vertex(v.x,v.y);
		}

	endShape(CLOSE);
 */






}
