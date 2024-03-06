import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { collection, addDoc, getDoc, doc, setDoc, deleteDoc } from "firebase/firestore"
import db from './firebaseConfig';
import { useEffect } from 'react';

export default function App() {
  // this CREATE data for databse in firestore database
  const addPeople = async () => {
    try {
      const docRef = await addDoc(collection(db, "people"), {
        name: "Jay Tullivan",
        occupation: "Bard of The People"
      })
      console.log("Document written with ID:", docRef.id)
    } catch (error) {
      console.error("Error writing document: ", error)
    }
  }
  // addPeople()

  // this READ data for databse in firestore database
  const getPoeple = async () => {
    const docRef = doc(db, "people", "24yYoeKJ4owhcLXtjT5M");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  // getPoeple()

  // this UPDATE data for databse in firestore database
  const setPeople = async () =>{
    await setDoc(doc(db, "people", "4bJaX2AtirtUTdY0eGTh"), {
      name: "Scott Iverson",
      occupation: "him"
    });
  }
  // setPeople()

  const deletePoeple = async () => {
    await deleteDoc(doc(db, "people", "A5cUu6qUzyKP84iJyILs"));
  }
  // deletePeople()


  // useEffect(() => {


  // }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.big_text}>Kena scam kau</Text>
      <Button title='Add people' onPress={() => addPeople()}></Button>
      <Button title='Read people' onPress={() => getPoeple()}></Button>
      <Button title='Update people' onPress={() => setPeople()}></Button>
      <Button title='Delet people' onPress={() => deletePoeple()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  big_text: {
    fontSize: 26
  }
});
