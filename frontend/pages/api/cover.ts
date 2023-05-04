import axios from "axios"


interface CoverRequest {
  coverRequest: string;
}

export async function getAlbumCover(coverRequest: string): Promise<Buffer> {
  const url = `/produce/cover`;
  const params: CoverRequest = { coverRequest };
  const response = await axios.get<ArrayBuffer>(url, { params, responseType: 'arraybuffer' });
  return Buffer.from(response.data);
}


export async function saveAlbumCover(cover: File): Promise<string> {
  const url = `/produce/cover`;
  const formData = new FormData();
  formData.append('cover', cover, cover.name); 
  const response = await axios.post(url, formData);
  return response.data.cover_source;
}
