var m = 0;
var arrangments = [];


function getNextN(){
	m++;
	return (4*m)-1;
}

function getArrangement(n) {
	if (arrangments[n] && arrangments[n].length > 0) {
		return arrangments[n];
	}
	return arrangments[n] = arrange(n);
}

function arrange(n){
	var set = [];
	while (set.length/2 < n) {
		set.push(Math.ceil((set.length+1)/2));
	}
	console.log("Set: ", set);
}

console.log(getArrangement(getNextN()));
console.log("m: ", m);

