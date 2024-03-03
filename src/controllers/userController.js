import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/userModel.js";
import uploadOnCloudinary from "../services/cloudinaryService.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req, res) => {
  // setups to create user
  // get user details from request body
  // validation of user
  // check if user already exists
  // check for images, check for avata
  // then upload on cloudinary
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return response
  
  const {userName, email, password, fullName} = req.body

  // one way of validation
  // if (fullName === ""){
  //   throw new ApiError(400, "Full name is required")
  // }

  // batter way of validation
  if([userName, fullName, email, password].some((field)=> field?.trim() === "")){
    throw new ApiError(400, "All fields are required")
  }

  // check user is present
  const existedUser = await User.findOne({$or: [{ userName }, { email }]})

  console.log("Email: ", email, existedUser)
  
  if (existedUser) {
    throw new ApiError(409, "User already exists")
  }

  const avatarLocalPath =  req.files?.avatar && req.files?.avatar[0]?.path
  const coverImageLocalPath = req.files?.coverImage && req.files?.coverImage[0]?.path

  console.log(coverImageLocalPath)
  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar file is required")
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if (!avatar){
    throw new ApiError(400, "Error while uploading avatar")
  }

  const user = await User.create({ fullName, avatar: avatar.url, coverImage: coverImage?.url || "", userName: userName.toLowerCase(), email, password })

  //here - denoted not request in the response
  const createdUser = await User.findById(user._id).select("-password -refreshToken")

  if (!user) {
    throw new ApiError(500, "Error while creating user")
  }
  return res.status(201).json( new ApiResponse(201, createdUser, "User registered successfully") )
})

export { registerUser }