import { analytics } from './firebase';

const KEEP_ALIVE_INTERVAL = 25000;

const activityKeepAlive = () => {
  const runService = () => {
    setTimeout(() => {
      if (analytics) {
        analytics.logEvent('user_activity_keep_alive');
      }

      setTimeout(runService, KEEP_ALIVE_INTERVAL);
    }, KEEP_ALIVE_INTERVAL);
  };

  runService();
};

export default activityKeepAlive;
