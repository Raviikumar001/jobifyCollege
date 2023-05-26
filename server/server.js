import express from "express"; 


const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({ msg: "Welcome!" });
  }); 

  const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
      app.listen(port, () => {
        console.log(`server is listening on port :${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();