import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcastController";
import {routes} from "./routes/routes";
import { httpMethod } from "./utils/httpMethods";

export const app = 
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const baseUrl = req.url?.split("?")[0];
    if(req.method === httpMethod.GET && baseUrl === routes.LIST){
      await getListEpisodes(req, res);
    }
    if(req.method === httpMethod.GET && baseUrl === routes.FILTER){
      await getFilterEpisodes(req, res);
    }
  };
