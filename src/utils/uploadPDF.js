import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadPDF = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `bills/${file.name}`);

  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};
