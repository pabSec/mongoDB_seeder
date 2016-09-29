var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var faker = require('faker');
mongoose.connect('172.17.0.2/companyCars');

var userSchema = new Schema({},{strict: false});
var User = mongoose.model('User', userSchema);

var carSchema = new Schema({},{strict: false});
var Car = mongoose.model('Car', carSchema);

var marcas = ['Audi', 'BMW', 'Ferrari'];


var coches = [];
for (var i=0; i<100; i++){
	var coche = {
		matricula: Math.floor(Math.random() * (9999)),
		marca: marcas[Math.floor(Math.random() * (marcas.length))],
		anio: Math.floor(Math.random() * (2015-1995)+1995)
	}
	coches.push(coche);
}

Car.create(coches, function(err, coches){
	if(err) console.log(err);
	else{		
		var personas = [];
		for (var i=0; i<500; i++){

			var car = [];
		        for(var j=0;j<(Math.floor(Math.random() * (5-1)+1));j++){
        		        car.push(coches[Math.floor(Math.random() * (100))]._id)
       			}

		        var persona = {
		                name: faker.name.findName(),
		                avatar: faker.image.avatar(),
		                trabajo: faker.name.jobTitle(),
		                area: faker.name.jobArea(),
		                extraTime: faker.random.number(),
		                phone: faker.phone.phoneNumber(),
		                email: faker.internet.email(),
		                company: faker.company.companyName(),
				car: car
		        
			}
		        personas.push(persona);
			console.log(i);
		}
		User.create(personas, function(err, personas){
			if(err) {console.log(err);}
			else {
				console.log('Done!');
				process.exit();
			}
		});
	}
});

