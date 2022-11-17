import express from "express";

import { usersRoutes } from "./routes/users.routes";
import swagger from "swagger-ui-express";
import swaggerConfig from "./swaggerConfig.json"
const app = express();

app.use(express.json());
app.use("/api-docs",swagger.serve,swagger.setup(swaggerConfig))
app.use("/users", usersRoutes);

export { app };
