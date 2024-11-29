import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('db conectada');

    } catch (error) {
        console.log(error.message);
    }
}

export default conectarDB;