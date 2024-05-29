import { toast } from "react-toastify";

const byteSize = str => new Blob([str]).size;

const imagebase64 = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const data = new Promise((resolve,reject) => {
    reader.onload = () => {resolve(reader.result)}
    reader.onerror = (err) => reject(err)
  })
  return data
}

export const handleUploadImage = async (e) => {
  const file = e.target.files[0];
  if(byteSize(file) > 200000){
    return toast.warning("file size should be less than 300kb");
  }
  const image = await imagebase64(file);
  return image
}