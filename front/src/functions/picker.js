import * as ImagePicker from "expo-image-picker";
import firebase from "../utils/Firebase";

const uploadImage = async (uri, setImage) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase
    .storage()
    .ref()
    .child("images/" + uri);
  await ref.put(blob);
  return await ref
    .getDownloadURL()
    .then((downloadUrl) => setImage(downloadUrl))
    .catch((err) => console.log(err));
};

export default async (setImage) => {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  const picker = await ImagePicker.launchImageLibraryAsync();
  if (!permission.granted) return console.log("NO TENES PERMISOS");
  if (picker.cancelled) return console.log("Pickeo cancelado");
  setImage(picker.uri);
  uploadImage(picker.uri, setImage);
};
