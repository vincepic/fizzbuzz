$(function(){
	console.log( "ready!" );
	var i = 0
	while(i !== 100){
		i++;
		if (i % 3 == 0 && i % 5 == 0){
			var fizzbuzz = "<p>fizzbuzz</p>"
			$("#docB").append(fizzbuzz);
		}
		else if (i % 3 == 0){
			var fizz = "<p>fizz</p>"
			$("#docB").append(fizz);
		}
		else if (i % 5 == 0){
			var buzz = "<p>buzz</p>"
			$("#docB").append(buzz);
		}
		else{
			var num = "<p>" + i + "</p>"
			$("#docB").append(num);
		}
	}
});