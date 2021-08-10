import 'firebase/firestore'

import firebase from 'firebase'

import { secrets } from '../config'

const config = {
  apiKey: secrets.API_KEY,
  authDomain: secrets.AUTH_DOMAIN,
  projectId: secrets.PROJECT_ID,
  storageBucket: secrets.STORAGE_BUCKET,
  messagingSenderId: secrets.MESSAGING_SENDER_ID,
  appId: secrets.APP_ID
}

firebase.initializeApp(config)

export default firebase.firestore()