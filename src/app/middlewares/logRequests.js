/* eslint-disable no-plusplus */
export const logRepo = [];
let requestNumber = 1;

const logRequestsMiddleware = (request, response, next) => {
  const { method, url, ip } = request;

  const logLabel = `[${method.toUpperCase()} ${url} ${ip}]`;

  console.log(logLabel);
  logRepo.push(`Request #${requestNumber}: ${logLabel}`);
  requestNumber++;

  return next();
};

export default logRequestsMiddleware;
