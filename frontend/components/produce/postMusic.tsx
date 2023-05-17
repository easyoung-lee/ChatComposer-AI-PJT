import React, { useState } from "react";
import serverApi from "../../services/serverApi";
import axios from "axios";
import { toastAlert } from "../../utils/toastAlert";
import { useRecoilValue } from "recoil";
import {
  musicalInstrumentsState,
  producingMusicState,
  trackIdsState,
  tracksInfoState,
} from "../../store/atoms";
import { PromptType, TrackType } from "../../types/musics";

function PostMusic() {
  // const [producingMusic, setProducingMusic] = useState({
  //   title: null,
  //   tags: ["Happy", "Sad", "Energetic"],
  //   description: null,
  //   genre: "2",
  //   beat: 100,
  //   created_at: 1684127895274,
  //   music_source:
  //     "https://chatcomposer.s3.ap-northeast-2.amazonaws.com/origin-music/703.7256216117561_2023-05-15audio.wav",
  //   mixed_music_request:
  //     '{"role":"user","content":"[instruement: piano]A good song to listen to on a rainy day"}',
  //   mixed_music_source:
  //     "https://chatcomposer.s3.ap-northeast-2.amazonaws.com/mixed-music/963.4884727691707_2023-05-15audio.mp3",
  //   cover_request: "asdfsdfasdf",
  //   cover_source:
  //     "https://chatcomposer.s3.ap-northeast-2.amazonaws.com/album/710.1714783313225_2023-05-15image.png",
  // });
  const producingMusic = useRecoilValue(producingMusicState);
  // const trackIds = [["가", "나", "다"]];
  const trackIds = useRecoilValue(trackIdsState);
  // const musicalInstruments = ["Piano"];
  const musicalInstruments = useRecoilValue(musicalInstrumentsState);
  // const tracksInfo = [
  //   {
  //     request_description: "호놀눌눌루 리퀘스트",
  //     response_description: "호놀눌눌루 리퀘스트",
  //     transfer_date: 234235,
  //   },
  // ];
  const tracksInfo = useRecoilValue(tracksInfoState);

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  const onSubmitHandler = async () => {
    const data = {
      ...producingMusic,
      title: title,
      description: description,
      tracks: trackIds.map((e, i) => {
        return {
          midi_description: JSON.stringify(e),
          musical_instrument: musicalInstruments[i],
        };
      }),
      prompts: [...tracksInfo],
    };

    data.genre = Number(data.genre);

    const resultArray = await Promise.allSettled([
      serverApi
        .post("/musics", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err)),
      axios.post("/api/fe/musics", data),
    ]);
    toastAlert(`음악 등록 완료!`);

    /*
{
	"title": String,   //음악 제목
	"tags" : [String, ... ], // tag_name
	"description": String, //음악에 대한 설명(GPT가 만들수도 있음, 음악 이어하기 했을 때에는 강제로 출처가 표기되게)
	"genre" : Integer, //genre_id
	"beat": String,

	//아래의 두 배열의 같은 인덱스는 1:1로 연결될 트랙과 프롬프트이다.
	"tracks" : [//트랙의 배열		
		{
			"midi_description" : String, //음악을 재생하기 위한 midi 악보
			"musical_instrument" : String, //악기의 종류
		}, ...
	],
	"prompts" : [//프롬프트의 배열
		{
			"request_description": String, //사용자의 요청
			"response_description": String, //chatGPT의 응답
			"transfer_date": DateTime, //요청시간
		}, ...
	],

	//미디
	"music_source": String, //미디 원음 wav의 url

	//리퓨전
	"mixed_music_prompt": String, //리퓨전에 쓰인 프롬프트
	"mixed_music_source" : String, //리퓨전으로 합성된 wav의 url

	//앨범
	"cover_request": String, //앨범 커버 얻을 때 쓴 키워드
	"cover_source" : String, //앨범 커버 url
}


*/
  };
  return (
    <div className="text-pink-500">
      <div>
        <input
          className="text-slate-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          className="text-slate-600"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          maxLength={160}
        ></textarea>
      </div>

      {title && description ? (
        <button type="button" onClick={onSubmitHandler}>
          음악 등록하기
        </button>
      ) : (
        <div>음악 등록하기</div>
      )}
    </div>
  );
}

export default PostMusic;
