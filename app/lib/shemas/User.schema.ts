"use server";

import { Schema } from "mongoose";
import { mongoose } from "@/lib/db";


const UserSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		fullName: { type: String, required: true },
		password: { type: String, required: true },
		role: { type: String, required: true } // 'manager' | 'worker'
	},
	{
		timestamps: true,
	}
)
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;