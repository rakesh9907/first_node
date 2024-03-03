import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  fullName: { type: String, required: true, trim: true, index: true },
  avatar: { type: String, required: true},
  coverImage: { type: String, default: ""},
  watchHistroy: [{ type: Schema.Types.ObjectId, ref: "Video" }],
  password: { type: String, required: [true, "Please provide a password"] },
  refreshToken: { type: String }
}, { timestamps: true })


// Here we can not use arrow function in mongoose pre hooks because we want current context (data) so arrow function does not support this keyword
// userSchema.pre("save", async () => {})
// middleware or hooks
userSchema.pre("save", async function(next){
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

// Here we define model methods 
userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    { exiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  )
  // return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}

userSchema.methods.generateRefreshToken = function() {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFERES_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  )
}

const User = mongoose.model("User", userSchema)
export default User