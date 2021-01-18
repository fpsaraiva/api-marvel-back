import { logRepo } from '../middlewares/logRequests';

class LogController {
  index(request, response) {
    return response.json({ logs: logRepo });
  }
}

export default new LogController();
