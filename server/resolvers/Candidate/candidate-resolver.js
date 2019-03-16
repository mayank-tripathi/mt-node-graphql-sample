async function getCandidates(root) {

    const { executeQuery } = require("../../helpers/dbHelper");
    const result = await executeQuery("select top 10 id, created_date, email from dbo.candidate (nolock)");
    
    return result;
}

module.exports = {
    allCandidates: getCandidates
};