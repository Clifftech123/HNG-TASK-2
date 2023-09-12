import mongoose from "mongoose";

const isProduction = (): boolean => {
  if (process.env.NODE_ENV === "production") {
    return true;
  } else if (process.env.NODE_ENV === "development") {
    return false;
  } else {
    return false; // default case
  }
};

const connectToDatabase = async (): Promise<void> => {
  const dbUrl = process.env.DATABASE_URL || "mongodb://localhost/mydb";

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: !isProduction(),
  };

  try {
    await mongoose.connect(dbUrl, options);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.on("error", (err) => {
    console.error("MongoDB error:", err);
  });

  dbConnection.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });
};

export default connectToDatabase;
