import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast";
const language = "utf8";

const pathData = path.join(__dirname, "data/podcastData.json");

export const getPodcastData = 
  async(podcastName?:string):Promise<Podcast[]> => {
    const raw = fs.readFileSync(pathData, language);
    let jsonData = JSON.parse(raw);
    
    if(podcastName){
      jsonData = jsonData.filter(
        (podcast:Podcast) => podcast.podcastName === podcastName
      )
    }

    return jsonData;
  }
