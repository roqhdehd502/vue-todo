import { 
  getAuth,
  //onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  deleteUser,
} from "firebase/auth";

import * as firebaseStorage from "firebase/storage";



export const getUserInfo = () => {
  let userObj = getAuth().currentUser ? getAuth().currentUser : null;

  return userObj;
}


export const triggerLogin = (userEmail, userPassword) => {
  signInWithEmailAndPassword(getAuth(), userEmail, userPassword)
    .then(() => { console.log("LOGIN SUCCESS.") })
    .catch(() => { console.log("LOGIN FAILED!") });
}


export const signOutUserInfo = () => {
  signOut(getAuth())
    .then(() => { console.log("LOGOUT SUCCESS.") })
    .catch(() => { console.log("LOGOUT FAILED!") });
}


export const createUserInfo = (userEmail, userPassword) => {
  createUserWithEmailAndPassword(getAuth(), userEmail, userPassword)
    .then(() => { console.log("SIGN UP SUCCESS.") })
    .catch(() => { console.log("SIGN UP FAILED!") }); 
}


export const updateUserInfo = async (userObj, userImageInfo) => {
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
    photoURL: imageURL === undefined ? userObj.photoURL : imageURL
  });
}

export const updateUserPassword = (userEmail) => {
  getAuth().languageCode = 'ko';
  //getAuth().currentUser.email
  sendPasswordResetEmail(getAuth(), userEmail)
    .then(() => { console.log("UPDATE USER PASSWORD SEND SUCCESS.") })
    .catch((err) => { console.log("UPDATE USER PASSWORD SEND FAILD.", err) });
}


export const sendUserEmailVerify = () => {
  getAuth().languageCode = 'ko';
  sendEmailVerification(getAuth().currentUser)
    .then(() => { console.log("EMAIL VERIFICATION SEND SUCCESS.") })
    .catch(() => { console.log("EMAIL VERIFICATION SEND FAILD.") });
}


export const deleteUserInfo = () => {
  deleteUser(getAuth().currentUser)
    .then(() => { console.log("DELETE USER SUCCESS.") })
    .catch(() => { console.log("DELETE USER FAILED!") });
}