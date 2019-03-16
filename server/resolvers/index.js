const candidateResolvers = require("./Candidate/candidate-resolver");
const userResolvers = require("./UserApi/userApi-resolver");

module.exports = {
    Query: {...{}, ...candidateResolvers, ...userResolvers}
};