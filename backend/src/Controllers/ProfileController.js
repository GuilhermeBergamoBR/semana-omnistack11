const connection = require('../database/connection.js')

module.exports = {
  async index(request, response){
    const ong_id = request.headers.authorization; // o id da ong que está logada
    const incidents = await connection('incidents').where('ong_id', ong_id); // me traga todos os casos que da ong que esta logada
    return response.json(incidents);
  }
}