// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCiH25ru2t8--wujXPz4oLC08_pfCrK1i0",
  authDomain: "walle-7807d.firebaseapp.com",
  projectId: "walle-7807d",
  storageBucket: "walle-7807d.appspot.com",
  messagingSenderId: "567711925806",
  appId: "1:567711925806:web:52e524d20982d5aced81bf"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);