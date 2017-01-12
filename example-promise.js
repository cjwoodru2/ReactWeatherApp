// function getTempCallback (location, callback){
// 	callback(undefined, 78);
// 	callback('Invalid City');
// }

// getTempCallback('Charlotte', function(err, temp){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('success', temp);
// 	}
// })

// function getTempPromise (location) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(79);
// 			reject("City not found");
// 		}, 1000)
		
// 	});
// }

// getTempPromise("Charlotte").then (function(temp) {
// 	console.log("promise success", temp)
// }, function (err) {
// 	console.log("error", err);
// })

// Challenge area

function addPromise (a, b) {
	return new Promise(function(resolve, reject) {
		if (typeof a === "number" && typeof b === "number") {
			var sum = a+b;
			resolve(sum);
		} else {
			reject("Both items need ot be numbers");
		}
	});
}

addPromise(55, "lfs").then (function(sum) {
	console.log("Your sum is: ", sum)
}, function(err) {
	console.log("error");
})
