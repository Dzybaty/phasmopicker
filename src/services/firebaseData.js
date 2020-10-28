import firebase from '../firebase';

class FirebaseDataService {
  getSessionById(sessionId) {
    return firebase.ref()
      .orderByChild('sessionId')
      .equalTo(sessionId)
      .once('value');
  }

  createSession(session) {
    return firebase.ref().push(session);
  }

  updateSession(key, value) {
    return firebase.ref().child(key).update(value);
  }

  removeSession(key) {
    return firebase.ref().child(key).remove();
  }

  getRef() {
    return firebase.ref();
  }
}

export default new FirebaseDataService();
