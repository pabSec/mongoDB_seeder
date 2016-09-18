var mongoose = require('mongoose');
var faker = require('faker');
mongoose.connect('172.17.0.2/test');

var User = mongoose.model('User', {name: String, avatar: String, trabajo:String, area:String});
//var person = new User({ name:"pablo"});

/*person.save(function (err){
	if (err) console.log(err);
	else console.log('Perfect!');
});*/

var personas = [];
for (var i=0; i<50; i++){
	var name = faker.name.findName();
	var image = faker.image.avatar();
	var job = faker.name.jobTitle();
	var jobArea = faker.name.jobArea();
	var persona = {
		name: name,
		avatar: image,
		trabajo: job,
		area: jobArea
	}	
	personas.push(persona);
}

User.create(personas, function(err, personas){
	if(err) console.log(err);
	else console.log('Done!');
});

