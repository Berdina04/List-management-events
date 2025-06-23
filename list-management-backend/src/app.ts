import express from "express";
import cors from "cors";
import { db } from "./db";
import roomingListsRoutes from "./routes/roomingLists";
import initDataRoutes from "./routes/initData";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/rooming-lists", roomingListsRoutes);
app.use("/api/init-data", initDataRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await db.sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();