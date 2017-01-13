// var names = ['Mike', 'Chris', 'Steve'];

// // names.forEach(function (name) {
// // 	console.log('forEach', name)
// // })

// // // Defining and Arrows Function for an anonymous function:
// // names.forEach((name) => {
// // 	console.log('Arrow', name)
// // });

// // // Dont need to use curly braces when using and arrow function!
// // // If you are only doing one thing skip curly's
// // names.forEach((name) => console.log(name))

// // var returnMe = (name) => name + '!';
// // console.log(returnMe('Chris'));

// var person ={ 
// 	name: 'Chris',
// 	greet: function() {
// 		names.forEach((name) =>a {
// 			console.log(this.name + ' says hi to ' + name)
// 		})	;
// 	}
// }

// person.greet();

// Challenge Area

// // Standard
// function add (a, b) {
// 	return a+b;
// }

// Curly Arrow function
var add = (a, b) => {
	return a + b;
}


// Single line
// var add = (a, b) => (a+b);


console.log(add(1,3));
console.log(add(19,0));


