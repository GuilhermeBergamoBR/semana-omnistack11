const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());
app.use(routes);
app.listen(3333);
/**
* Tipos de parâmetros
query param=> enviados na rota, após "?" e concatená-los com "&"
 route param=> utilizados para identificar recursos 
 request body => 
 */

/**
SQL=> MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL=> MongoDB, CouchDB, etc.
 */

 /**
 Driver: SELECT * FROM users
 Query Builder
*/