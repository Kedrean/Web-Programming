import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCa8w8J0qNggE9SF-i7YSC2XRs6w2tFV3E",
    authDomain: "uiia-3ccd9.firebaseapp.com",
    projectId: "uiia-3ccd9",
    storageBucket: "uiia-3ccd9.firebasestorage.app",
    messagingSenderId: "1026150598344",
    appId: "1:1026150598344:web:333269dd92bff6f4ab07fd",
    measurementId: "G-CYVZ9MLQRZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
