import { ApiMock } from "../../src/utils/customApi";
// import Api from "../../src/utils/customApi"

interface CoverResponse {
  cover: Uint8Array;
}

export async function getCover(
  coverRequest: string,
): Promise<CoverResponse | undefined> {
  try {
    const response = await ApiMock.get(`/produce/cover?cover-request=${coverRequest}`, {
      responseType: "arraybuffer", // byte[]를 가져오기 위해 responseType을 지정
    });
    return {
      cover: new Uint8Array(response.data),
    };
  } catch (error) {
    console.error(error);
  }
}

interface PostCoverResponse {
  msg: string;
  cover_source?: string;
}

export async function postCover(
  coverFile: File,
): Promise<PostCoverResponse> {
  try {
    const formData = new FormData();
    formData.append('cover', coverFile);

    const response = await ApiMock.post<PostCoverResponse>(
      '/api/produce/cover',
      formData,
    );

    return {
      msg: response.data.msg,
      cover_source: response.data.cover_source,
    };
  } catch (error) {
    console.error(error);
    return {
      msg: '앨범 커버 저장에 실패했습니다.',
    };
  }
}