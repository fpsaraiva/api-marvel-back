import apiMarvel from '../services/apiMarvel';

const auth_query =
  'ts=<timestamp>&apikey=<public_key>&hash=<md5_generated>';

class CharacterController {
  async index(request, response) {
    try {
      const { offset } = request.params;

      const charactersData = await apiMarvel.get(
        `/v1/public/characters?${auth_query}&limit=100&offset=${offset}`
      );

      return response.json({
        characters: charactersData.data.data.results,
        total: charactersData.data.data.total,
      });
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async show(request, response) {
    try {
      const { name } = request.params;

      const searchedCharacter = await apiMarvel.get(
        `/v1/public/characters?name=${name}&${auth_query}`
      );

      return response.json(searchedCharacter.data.data.results);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }
}

export default new CharacterController();
