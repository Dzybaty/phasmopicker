import { firebaseDB } from '../firebase';

class FirebaseDataService {
  getSessionById(sessionId) {
    return firebaseDB.ref()
      .orderByChild('sessionId')
      .equalTo(sessionId)
      .once('value');
  }

  createSession(session) {
    return firebaseDB.ref().push(session);
  }

  updateSession(key, value) {
    return firebaseDB.ref().child(key).update(value);
  }

  removeSession(key) {
    return firebaseDB.ref().child(key).remove();
  }

  getRef() {
    return firebaseDB.ref();
  }
}

export default new FirebaseDataService();
