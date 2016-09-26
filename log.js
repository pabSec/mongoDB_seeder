var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var faker = require('faker');
mongoose.connect('localhost/log');

//var User = mongoose.model('User', {name: String, avatar: String, trabajo:String, area:String});

var logSchema = new Schema({},{strict: false});
var log = mongoose.model('log', logSchema);

var pages = [
	'https://www.google.com',
	'https://www.youtube.com',
	'https://www.forocoches.com',
	'https://www.as.com',
	'https://www.facebook.com',
	'https://www.twitter.com',
	'https://www.reddit.com'
];

var ips = [	faker.internet.ip(), faker.internet.ip(), faker.internet.ip(), 
		faker.internet.ip(), faker.internet.ip(), faker.internet.ip(), 
		faker.internet.ip(), faker.internet.ip(), faker.internet.ip(), faker.internet.ip()];

var users = [ 	faker.internet.userName(), faker.internet.userName(), faker.internet.userName(), 
		faker.internet.userName(), faker.internet.userName(), faker.internet.userName(), 
		faker.internet.userName(), faker.internet.userName(), faker.internet.userName(), 
		faker.internet.userName(), faker.internet.userName(), faker.internet.userName(), 
		faker.internet.userName(), faker.internet.userName(), faker.internet.userName()];

var requests = ['GET','PUT','DELETE','POST'];

var status = ['200','201','404','401','500'];

var userAgents = ['safari','chrome','firefox','IE'];

var logEntries = [];

for (var i=0; i<5000; i++){
	var logEntry = {
		host: ips[Math.floor(Math.random() * (ips.length))],
		user: users[Math.floor(Math.random() * (users.length))],
		time: new Date(new Date().getTime() + i*15000000),
		path: pages[Math.floor(Math.random() * (pages.length))],
		request: requests[Math.floor(Math.random() * (requests.length))],
		status: status[Math.floor(Math.random() * (status.length))],
		response_size: Math.floor(Math.random() * (10000-220)+220),
		user_agent: userAgents[Math.floor(Math.random() * (userAgents.length))],
	}	
	logEntries.push(logEntry);
}

log.create(logEntries, function(err, logEntries){
	if(err) console.log(err);
	else {
		console.log('Done!');
		process.exit();
	}
});

