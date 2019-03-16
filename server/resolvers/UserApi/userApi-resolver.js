 async function getUsers(root) {

    const { sendCall } = require("../../helpers/httpHelper");
    const _apiUrl = "http://www.mocky.io/v2/5c8d6cb4310000602c4c2698";

    const result = await sendCall("GET", _apiUrl);

    return result;
}

module.exports = {
    allUsers: getUsers
};