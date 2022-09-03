import db from './firebase'
import { collection , addDoc, query, orderBy, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const usersCollection = collection(db, "users");

export const addUser = async (data) => {
  let finalData = {
    ...data,
    'createdAt': new Date().getTime(),
    'updatedAt': new Date().getTime()
  }
  try {
    await addDoc(usersCollection, finalData);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const getUsersList = async (setData) => {
  const q = query(usersCollection, orderBy('updatedAt', 'desc'));
  onSnapshot(q, (snapshot) => {
    let data = []
    snapshot.forEach(doc => {
      var x = doc.data();
      data.push({ id: doc.id, ...x });
    });
    setData(data)
  });
}

export const updateUser = async (id, data) => {
  try {
    let finalData = {
      ...data,
      'updatedAt': new Date().getTime()
    }
    await updateDoc(doc(db, "users", id), finalData)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const deleteUser = async (id) => {
  try {
    await deleteDoc(doc(db, "users", id));
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
