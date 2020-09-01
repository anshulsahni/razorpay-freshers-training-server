const axios = require('axios');

const environment = require('../config/env');
const { rzpApiUrl } = require('./constants');

const makeRequestToRzpApi = async ({
  team,
  url,
  method,
  payload,
}) => {
  const { rzpKeyId, rzpKeySecret } = environment[team];
  const path = url.substring(url.indexOf('/', 5));

  const response = await axios({
    url: rzpApiUrl + path,
    method,
    data: payload,
    auth: {
      username: rzpKeyId,
      password: rzpKeySecret,
    },
  });

  return response.data;
};

const formRequestForRzp = async (request) => {
  try {
    const url = request.url;
    const payload = request.body;
    const team = request.params.team;
    const method=  request.method;

    return await makeRequestToRzpApi({
      team,
      url,
      method,
      payload,
    });
  } catch (e) {
    console.log({e})
    throw { statusCode: 400, error: 'Some Error occured' };
  }
}


module.exports = {
  makeRequestToRzpApi,
  formRequestForRzp,
};