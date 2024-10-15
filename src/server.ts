import * as http from "http";
const port = process.env.PORT;
import { app } from "./app";

const server = http.createServer(app);

server.listen(port, 
  () => {console.log(`server up on port ${port}`)}
);