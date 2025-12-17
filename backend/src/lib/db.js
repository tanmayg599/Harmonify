import mongoose from "mongoose";
const MONGODB_URI="mongodb+srv://tanmayg0703_db_user:oG08vv5ywj6BCm0a@cluster0.ijwxjxo.mongodb.net/Harmonify?appName=Cluster0"

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(MONGODB_URI);
		console.log(`Connected to MongoDB ${conn.connection.host}`);
	} catch (error) {
		console.log("Failed to connect to MongoDB", error);
		process.exit(1); // 1 is failure, 0 is success
	}
};