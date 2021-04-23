import { firebaseDB } from '../firebase';
import { generateTimestamp } from '../utils';

class FirebaseDataService {
  getSessionById(sessionId) {
    return firebaseDB.ref()
      .orderByChild('sessionId')
      .equalTo(sessionId)
      .once('value');
  }

  createSession(session) {
    return firebaseDB.ref().push({
      ...session,
      last_updated: generateTimestamp(),
    });
  }

  updateSession(key, value) {
    return firebaseDB.ref().child(key).update({
      ...value,
      last_updated: generateTimestamp(),
    });
  }

  removeSession(key) {
    return firebaseDB.ref().child(key).remove();
  }

  getRef() {
    return firebaseDB.ref();
  }
}

export default new FirebaseDataService();
