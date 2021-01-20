import apiMarvel from '../services/apiMarvel';
import buildMarvelApiRoute from '../utils/index';

class CharacterController {
  async index(request, response) {
    try {
      const { offset } = request.query;
      const queries = {
        limit: 100,
        offset,
      };

      const url = buildMarvelApiRoute('/characters', queries);

      const { data } = await apiMarvel.get(url);

      return response.json({
        characters: data.data.results,
        total: data.data.total,
      });
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async show(request, response) {
    try {
      const { nameStartsWith } = request.query;
      const queries = {
        nameStartsWith,
      };

      const url = buildMarvelApiRoute('/characters', queries);

      const { data } = await apiMarvel.get(url);

      return response.json(data.data.results);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }
}

export default new CharacterController();
