import {v2 as cloudinary} from "cloudinary";
import fs from "fs"; // Here fs is a file system it is default package in nodejs
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath) => {
  try{
    if (!filePath) return null
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto"
    })
    // file has been uploaded successfully
    console.log("File has been uploaded successfully", response.url)
    return response

  } catch (error) {
    fs.unlinkSync(filePath) //remove the locally saved temporary file as the upload operation got failed
    console.log("Error while uploading file on cloudinary", error.message)
    return null
  }
}

// export {uploadOnCloudinary}
export default uploadOnCloudinary