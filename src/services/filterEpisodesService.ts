import { IncomingMessage } from "http";
import { getPodcastData } from "../repository/podcastRepository";
import { podcastDto } from "../models/filterResponse";
import { statusCode } from "../utils/statusCodes";

export const filterEpisodes =
  async (rawUrl?:string):Promise<podcastDto> => {
    const queryString = decodeURI(rawUrl?.split("?p=")[1] ?? "");
    const content = await getPodcastData(queryString);
    const responseFormat:podcastDto = {
      statusCode: content.length > 0 ? statusCode.OK : statusCode.NOCONTENT,
      body: content
    }
    return responseFormat;
}