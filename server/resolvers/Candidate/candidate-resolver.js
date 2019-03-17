 async function getCandidates(root) {
    const { executeQuery } = require("../../helpers/dbHelper");
    const result =  await executeQuery("select top 48 id, created_date, email from dbo.candidate (nolock)");   
    return result;
}

function getCandidatesByEmail(root, cand_id) {
   const email = cand_id.email;
    const { executeQuery } = require("../../helpers/dbHelper");
    const result =  executeQuery("select id, created_date, email from dbo.candidate (nolock) where email='"+email+"'");   

    return result;
}

module.exports = {
    allCandidates: getCandidates,
    getCandidatesByEmail:getCandidatesByEmail
};