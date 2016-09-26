var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var faker = require('faker');
mongoose.connect('localhost/inventory');

var stockSchema = new Schema({},{strict: false});
var stock = mongoose.model('inventory', stockSchema);

var sizes = ['xs','s','m','l','xl'];
var colors = ['Azul','Rosa','Amarillo','Verde','Rojo','Morado','Blanco','Negro'];

function getRandom(min,max){return Math.random() * (max - min) + min;};

function makeStockUnit(){
	var stock = [];
        for (var i=0; i<getRandom(1,12); i++){
                var el = {size:sizes[Math.floor(Math.random() * (sizes.length))], color:colors[Math.floor(Math.random() * (colors.length))], cantidad:Math.floor( getRandom(1,120)) };
                stock.push(el);
        }

        var stockEntry = {
                item: faker.commerce.productName(),
                stock: stock
        }
	return stockEntry;
}


for (var i=0; i<16000; i++){
	stock.create(makeStockUnit(), function(err, stocks){
		if(err) console.log(err);
	});
}

console.log('Done!');

