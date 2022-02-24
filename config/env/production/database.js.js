const {parse} = require ("pg-connection-string");
modeule.exports = ({ env }) =>{
const {host, port, database, user, password} = parse(env("DATABASE_URL))";

return {
	defaultConnection : "default",
	connections: {
	default:{
	connector: "bookshelf",
	settings:{
		client: "postgres",
		host,
		port,
		database,
		username: user,
		password,
		sll : {rejectUnauthorized: false}
		},
		options:{
		sll: false
		},
	},
	},
};
};
