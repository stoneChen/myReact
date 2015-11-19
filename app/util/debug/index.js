if (process.env.NODE_ENV === 'development') {
  window.localStorage.debug = 'app';
}
import debug from 'debug';

const logger = debug('app');

export default logger;
