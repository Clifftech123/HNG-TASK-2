import mongoose from "mongoose";

const dbUrl = process.env.MONGO_URI || "mongodb://localhost/mydb";

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB error:", err);
});

export default db;
