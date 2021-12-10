import { analytics } from './firebase';

const keepAliveInterval = Number(process.env.REACT_APP_KEEP_ALIVE_INTERVAL) || 25000;

const activityKeepAlive = () => {
  const runService = () => {
    setTimeout(() => {
      if (analytics) {
        analytics.logEvent('user_activity_keep_alive');
      }

      setTimeout(runService, keepAliveInterval);
    }, keepAliveInterval);
  };

  runService();
};

export default activityKeepAlive;
