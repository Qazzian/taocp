var assert = require('assert');

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
	var set = [],
		i,j,l, isValid;

		set.length = n*2;
		// For each number i in the series 1 -> n
		place(n, set);
		
		return set;
}

function place(n, set){
	var i=-1, j= i+n+1,
		l=set.length,
		copy = set.slice();

	do {
		i++; j++;

		if (j>=l) // It is not possible to fit the digits in the remaining space.
			return false;

		if (set[i] || set[j]) // The space has already been taken by another digit.
			continue;

		copy[i] = copy[j] = n;
		console.log("TRY: ", set);
		if (n===1) {
			copy.forEach(function(v, i){set[i]=v});
			return true;
		}

		if (place(n-1, copy)){
			copy.forEach(function(v,i){set[i]=v});
			return true;
		}
		else {
			copy = set.slice();
		}

	} while(true)

}

// Is the set as a whole valid
function testSet(set){
	var i,l, d, tested = [];
	for (i=0, l=set.length; i<l; i++) {
		d=parseInt(set[i], 10);
		if (!tested[d] && set[i+d+1] !== set[i]) {
			// console.log("Failed Match", i, (i+d+1), d, set);
			return false;
		}
		tested[d] = true;
	}
	return true;
}

/**
	UNIT TESTS
 **/
function runTests(){
	try {
		test_testSet();	
		console.log("Tests passed");
	}
	catch (error) {
		console.log('Test Failed\n', error);
	}
	
}


 function test_testSet(){
 	var tests = {
 		"312132": true,
 		"123123": false,
 		"231213": true,
 		"1233": false,
 		"112233": false

 	}
 	for (var i in tests) {
 		assert.equal(testSet(i), tests[i], "Test "+i);
 	}
 }


(function run(){
	runTests();
	var n = 3;
	console.log('\nSOLUTIONS:\n');
	while (n<5) {
		n = getNextN();
		console.log(n+':',getArrangement(n));
	}

	
})();

