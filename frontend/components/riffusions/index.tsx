import React, { useEffect, useState } from "react";
import { GenreMapEntries } from "../../utils/GenreMap";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  canPostMusicState,
  musicalInstrumentsState,
  producingMusicState,
  trackAtomFamily,
  tracksInfoState,
} from "../../store/atoms";
import serverApi from "../../services/serverApi";
import { InstrumentsMapEntries } from "../../utils/InstrumentsMap";
import { toastAlert } from "../../utils/toastAlert";

function Riffusions() {
  // let [producingMusic, setProducingMusic] = useState({
  //   title: null,
  //   tags: ["Happy", "Sad", "Energetic"],
  //   decription: null,
  //   genre: "2",
  //   beat: 100,
  //   created_at: 1684127895274,
  //   music_source:
  //     "https://chatcomposer.s3.ap-northeast-2.amazonaws.com/origin-music/703.7256216117561_2023-05-15audio.wav",
  //   mixed_music_request: null,
  //   mixed_music_source: null,
  //   cover_request: "asdfsdfasdf",
  //   cover_source:
  //     "https://chatcomposer.s3.ap-northeast-2.amazonaws.com/album/710.1714783313225_2023-05-15image.png",
  // });
  const [producingMusic, setProducingMusic] =
    useRecoilState(producingMusicState);

  const setCanPost = useSetRecoilState(canPostMusicState);

  const [riffPrompt, setRiffPrompt] = useState("");
  const [instruementsArray, setInstruementsArray] = useRecoilState(
    musicalInstrumentsState,
  );
  const [tracksInfoArray, setTracksInfoArray] = useRecoilState(tracksInfoState);
  const [musicPrompt, setMusicPrompt] = useState("");
  const [mixedString, setMixedString] = useState("");
  const [mixedPrompt, setMixedPrompt] = useState("");
  const track0 = useRecoilValue(trackAtomFamily(0));
  const track1 = useRecoilValue(trackAtomFamily(1));
  const track2 = useRecoilValue(trackAtomFamily(2));
  const track3 = useRecoilValue(trackAtomFamily(3));

  useEffect(() => {
    [track0, track1, track2, track3].forEach((e, index) => {
      if (e.musical_instrument) {
        setInstruementsArray((prev) => {
          if (!prev[index]) {
            const newArray = [...prev];
            newArray[index] = InstrumentsMapEntries[e.musical_instrument][0];
            return newArray;
          } else return prev;
        });
        setTracksInfoArray((prev) => {
          if (!prev[index]) {
            const newArray = [...prev];
            newArray[index] = {
              request_description: e.request_description,
              response_description: e.response_description,
              transfer_date: e.transfer_date,
            };
            return newArray;
          } else return prev;
        });
      }
    });
  }, [track0, track1, track2, track3]);

  useEffect(() => {
    if (track0 && track0.request_description !== musicPrompt) {
      setMusicPrompt(track0.request_description);
    }
  }, [track0]);

  const onMixing = async () => {
    const data = {
      music_source: producingMusic.music_source,
      genre: GenreMapEntries[producingMusic.genre][0],
      moods: producingMusic.tags,
      instruements: instruementsArray,
      music_prompt: musicPrompt,
      riffusion_prompt: riffPrompt,
    };
    console.log(data);
    await serverApi
      .post("/produce/musics/riffusion", data)
      .then((res) => {
        setMixedString(res.data.mixed_music_wav);
      })
      .catch(async (err) => {
        const audio = new Audio("/dummy/riffusion/dummy.mp3"); // audio 객체 생성하기
        const response = await fetch(audio.src); // fetch API로 audio 객체의 URL을 blob으로 가져오기
        const blob = await response.blob(); // blob() 메서드로 응답을 blob으로 변환하기
        const reader = new FileReader(); // FileReader 객체 생성하기
        reader.readAsDataURL(blob); // blob을 base64로 읽기
        reader.onload = () => {
          console.log(reader.result);
          setMixedString(reader.result as string); // base64 문자열 저장하기
          setMixedPrompt(musicPrompt);
          setMusicPrompt("");
        };
        // };
      });
    toastAlert(`음악 생성 완료!`);
    /*
{
	music_source : "www.naver.com",
	genre : "Pop",
	moods : ["Happy","Sad","Energetic"],
	instruements : ["piano", "guitar-acoustic"],
	music_prompt : "[instruement: piano]Music that's good to listen to on a rainy day",
	riffusion_prompt: "언젠가부터 힙합은 안멋져",
}
    */
  };

  const getAudioBlob = async () => {
    const base64String = mixedString.replace("data:audio/mpeg;base64,", "");
    const byteArray = Buffer.from(base64String, "base64");
    const blob = new Blob([byteArray], { type: "audio/mpeg" }); // Blob 객체 생성
    const file = new File([blob], "audio.mp3", { type: "audio/mpeg" }); // File 객체 생성

    return file;
  };
  const onSubmitHandler = async () => {
    const formData = new FormData();

    const audioFile = await getAudioBlob();
    formData.append("file", audioFile);

    await serverApi
      .post("/produce/musics/mixed", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data.source);
        setProducingMusic((prev) => ({
          ...prev,
          mixed_music_source: res.data.source,
          mixed_music_request: mixedPrompt,
        }));
      });

    setCanPost(true);
    toastAlert(`음악 저장 완료!`);
    //   .post("/produce/cover", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((res) => {
    //     setProducingMusic((prev) => {
    //       return {
    //         ...prev,
    //         cover_source: res.data.source,
    //         cover_request: selectedImgPrompt,
    //       };
    //     });
    //   })
    //   .catch((err) => {
    //     if (selectedImgURL.startsWith("/")) {
    //       setProducingMusic((prev) => {
    //         return {
    //           ...prev,
    //           cover_source: selectedImgURL,
    //           cover_request: selectedImgPrompt,
    //         };
    //       });
    //     }
    //   });

    // const  mixed_music_source = await serverApi.post("/produce/musics/mixed", )
  };
  return (
    <div className="text-white">
      {JSON.stringify(instruementsArray)}
      {JSON.stringify(musicPrompt)}
      {mixedString}
      <div>
        <input
          className="text-slate-700"
          value={riffPrompt}
          onChange={(e) => setRiffPrompt(e.target.value)}
        />
        <button type="button" disabled={!riffPrompt} onClick={onMixing}>
          믹싱하기
        </button>
      </div>
      {mixedString ? (
        <>
          <audio src={mixedString} controls />
          <button onClick={onSubmitHandler}>저장하기</button>
        </>
      ) : (
        <></>
      )}
      {JSON.stringify(producingMusic)}
      <div>트랙인포</div>
      {JSON.stringify(tracksInfoArray)}
    </div>
  );
}

export default Riffusions;
