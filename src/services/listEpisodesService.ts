import { podcastDto } from "../models/filterResponse";
import { getPodcastData } from "../repository/podcastRepository";
import { statusCode } from "../utils/statusCodes";

export const listEpisodes =
  async ():Promise<podcastDto> => {
    const content = await getPodcastData();
    const responseFormat:podcastDto = {
      statusCode: content.length > 0 ? statusCode.OK : statusCode.NOCONTENT,
      body: content
    }
    return responseFormat;
}