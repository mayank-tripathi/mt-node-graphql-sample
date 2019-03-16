const sql = require('mssql');
const config = require("../configurations/database");

function inputParams(name, type, value){
    this.name = name;
    this.type = type;
    this.value = value;
}
 
async function executeQuery(query, iParams) {
    try {
        let pool = await sql.connect(config);
        let result = null;

        if(iParams && iParams instanceof inputParams && query && typeof query === "string"){
            result = await pool.request()
                               .input(iParams.name, iParams.type, iParams.value)
                               .query(query)
        } else if(!(iParams instanceof inputParams) && query && typeof query === "string"){
            result = await pool.request()
                               .query(query);
        } else {
            console.log("Invalid query provided");
        }

        sql.close();

        return result.recordset;
    } catch (err) {
        console.log("Error occured in Query Executor:", err);
    }
}
 
sql.on('error', err => {
    console.log("Error in Database Helper:", err);
});

module.exports = {inputParams, executeQuery};