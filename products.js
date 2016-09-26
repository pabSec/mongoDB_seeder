var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var faker = require('faker');
mongoose.connect('localhost/commerceMulti');

//faker.locale = "es";

var prodSchema = new Schema({},{strict: false});
var prod = mongoose.model('commerce', prodSchema);

var sizes = ['xs','s','m','l','xl'];
var colors = ['Azul','Rosa','Amarillo','Verde','Rojo','Morado','Blanco','Negro'];

function getRandom(min,max){return Math.random() * (max - min) + min;};

function makeStockUnit(){
	var stock = [];
        for (var i=0; i<getRandom(1,5); i++){
                var el = {size:sizes[Math.floor(Math.random() * (sizes.length))], color:colors[Math.floor(Math.random() * (colors.length))], cantidad:Math.floor( getRandom(1,120)) };
                stock.push(el);
        }

        var stockEntry = {
                item: faker.commerce.productName(),
		cat: [faker.commerce.productAdjective(),faker.commerce.productAdjective(),faker.commerce.productAdjective(),faker.commerce.productAdjective()],
		mat: faker.commerce.productMaterial(),
                stock: stock,
		language: "english"
        }
	return stockEntry;
}


for (var i=0; i<100; i++){
	prod.create(makeStockUnit(), function(err, prods){
		if(err) console.log(err);
	});
}

console.log('Done!');

