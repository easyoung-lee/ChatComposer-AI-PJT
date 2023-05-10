import { GenreMap, TagMap } from "../utils/GenreMap";
import { InstrumentsMap } from "../utils/InstrumentsMap";

export interface AlbumCoverType {
  member: {
    member_id: number;
    nickname: string;
  };
  music_id: number;
  title: string;
  genre: string;
  tags: string[];
  favorite_count: number;
  is_my_favorite: "y" | "n";
  create_at: number;
  cover_source: string;
}

export type GenreType = keyof typeof GenreMap;
export type InstrumentType = keyof typeof InstrumentsMap;
export type TagType = keyof typeof TagMap;

declare module ".*mp3";
