import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

import * as firebaseStorage from "firebase/storage";



export const triggerLogin = (userEmail, userPassword) => {
  signInWithEmailAndPassword(getAuth(), userEmail, userPassword)
    .then(() => {
      console.log("LOGIN SUCCESS.");
    })
    .catch(() => {
      console.log("LOGIN FAILED!");
    });
}


export const getUserInfo = () => {
  return getAuth().currentUser;
}


export const createUserInfo = (userEmail, userPassword) => {
  createUserWithEmailAndPassword(getAuth(), userEmail, userPassword)
    .then(() => {
      console.log("SIGN UP SUCCESS.");
    })
    .catch(() => {
      console.log("SIGN UP FAILED!");
    }); 
}


export const signOutUserInfo = () => {
  signOut(getAuth())
    .then(() => {
      console.log("LOGOUT SUCCESS.");
    }).catch(() => {
      console.log("LOGOUT FAILED!");
    });
}


export const UpdateUserInfo = async (userObj, userImageInfo) => {
  const storage = firebaseStorage.getStorage();
  const storageRef = firebaseStorage.ref(storage, `userimages/${userObj.uid}`);
  const imageFile = userImageInfo;
  let imageURL = null;

  if (imageFile !== undefined) {
    firebaseStorage.uploadBytes(storageRef, imageFile)
    .then((snapshot) => {
      console.log("upload image: ", snapshot);
      firebaseStorage.getDownloadURL(storageRef);
    });
  }
  
  updateProfile(getAuth().currentUser, {
    displayName: userObj.displayName,
    photoURL: imageURL === undefined ? userObj.photoURL : imageURL,
  });
}