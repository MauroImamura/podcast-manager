import { Podcast } from "./podcast";

export interface podcastDto{
  statusCode:number,
  body:Podcast[]
}