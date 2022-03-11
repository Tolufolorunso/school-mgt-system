const http = require('http')

const app = require('./app')

const connectDB = require("./configs/connectDB");

const server = http.createServer(app)


const startServer = async () => {
  const PORT = process.env.PORT || 8000;
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("DB connection started...");
    server.listen(PORT, () =>
      console.log(`Server started on port ${PORT} and DB connected`)
    );
  } catch (error) {
    console.log(`ERROR OCCUR: ${error}`);
  }
};

startServer();