const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://b6fb24cb4c8c37:702be0f5@us-cdbr-east-03.cleardb.com/heroku_a79dfbc72e06757?reconnect=true
const dbConfigHeroku = {
	host: "jtb9ia3h1pgevwb1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "xhjzilr3xyqdg09f",
	password: "rjztgrrd19j0ko4g",
	database: "f86spfgaljkekjlu",
	multipleStatements: false,
	reconnect: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "database1",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		