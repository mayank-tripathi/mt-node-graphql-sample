async function getCandidates(root) {

    const { executeQuery } = require("../../helpers/dbHelper");
    const result = await executeQuery("select id, name, email from candidate");
    
    return result;
}

function getResolvers() {
    return {
        Query: {
            allCandidates: getCandidates
        }
    };
}

module.exports = getResolvers();