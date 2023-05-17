import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  coversState,
  producingMusicState,
  selectedCoverPromptState,
  selectedCoverState,
  trackAtomFamily,
} from "../../store/atoms";
import serverApi from "../../services/serverApi";
import axios from "axios";
import { toastAlert } from "../../utils/toastAlert";

function CoverGens() {
  const [coversArray, setCoversArray] = useRecoilState(coversState);
  const [selectedImgURL, setSelectedImgURL] =
    useRecoilState(selectedCoverState);
  const [selectedImgPrompt, setSelectedPrompt] = useRecoilState(
    selectedCoverPromptState,
  );
  const [isImageLoading, setIsImageLoading] = useState(false);
  const setProducingMusic = useSetRecoilState(producingMusicState);

  const retrieveCovers = async (coverRequest: string) => {
    const requestMessage = await axios
      .post("/api/papago", { message: coverRequest })
      .then((res) => res.data.message)
      .catch((err) => coverRequest);

    setIsImageLoading(true);
    const coverImageUrl = await serverApi
      .get(`/produce/cover?cover-request=${requestMessage}`)
      .then((res) => {
        const imageURL = `data:image/png;base64,${res.data.cover}`;
        // const byteArray = new Uint8Array(res.data.cover);
        // const blob = new Blob([byteArray], { type: "image/png" });
        // const imageURL = URL.createObjectURL(blob);
        // const image = new Image();
        // image.src = imageURL;
        // return Promise.reject("");
        return imageURL;
      })
      .catch((err) => {
        // const image = new Image();
        // image.src = `/dummy/covers/cover${
        //   Math.floor(Math.random() * 11) + 1
        // }.png`;
        // const imageURL = `/dummy/covers/cover${
        //   Math.floor(Math.random() * 11) + 1
        // }.png`;

        // return imageURL;
        return new Promise((resolve) => {
          setTimeout(() => {
            const imageURL = `/dummy/covers/cover${
              Math.floor(Math.random() * 11) + 1
            }.png`;
            resolve(imageURL);
          }, 1500); // 2초 후에 값을 반환
        });
      });
    setSelectedImgURL(coverImageUrl as string);
    setSelectedPrompt(coverRequest);
    setIsImageLoading(false);
    toastAlert(`앨범 커버 생성 완료!`);
    return coverImageUrl;
  };

  const [coverRequest, setCoverRequest] = useState("");
  const onRetrieveCovers = () => {
    if (!coverRequest) return;
    retrieveCovers(coverRequest).then((image) =>
      setCoversArray((prev) => [...prev, [image, coverRequest]]),
    );
    setCoverRequest("");
  };

  return (
    <div>
      {selectedImgURL ? (
        <>
          <img src={selectedImgURL} />
        </>
      ) : (
        <></>
      )}

      <input
        value={coverRequest}
        onChange={(e) => setCoverRequest(e.target.value)}
      />
      {isImageLoading ? (
        <div>생성중</div>
      ) : (
        <button onClick={onRetrieveCovers}>앨범 커버 생성하기</button>
      )}

      {coversArray.map(([url, prompt], index) => {
        return (
          <img
            key={index + url}
            src={url}
            onClick={() => {
              setSelectedImgURL(url);
              setSelectedPrompt(prompt);
            }}
          />
        );
      })}
    </div>
  );
}

export default CoverGens;
