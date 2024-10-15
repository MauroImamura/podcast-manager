import {IncomingMessage, ServerResponse} from "http";
import {listEpisodes} from "../services/listEpisodesService";
import { filterEpisodes } from "../services/filterEpisodesService";
import { contentType } from "../utils/contentTypes";
import { podcastDto } from "../models/filterResponse";

export const getListEpisodes = 
  async (req:IncomingMessage, res:ServerResponse) => {
    let content = await listEpisodes();
    res.writeHead(content.statusCode, {"Content-Type": contentType.JSON});
    res.end(JSON.stringify(content.body))
  }

export const getFilterEpisodes = 
  async (req:IncomingMessage, res:ServerResponse) => {
    let content:podcastDto = await filterEpisodes(req.url);
    res.writeHead(content.statusCode, {"Content-Type": contentType.JSON});
    res.end(JSON.stringify(content.body))
  }