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

declare module ".*mp3";
