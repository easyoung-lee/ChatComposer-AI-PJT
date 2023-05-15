import React, { useState } from "react";

function PostMusic() {
  const [producingMusic, setProducingMusic] = useState({
    title: null,
    tags: ["Happy", "Sad", "Energetic"],
    decription: null,
    genre: "2",
    beat: 100,
    created_at: 1684127895274,
    music_source:
      "https://chatcomposer.s3.ap-northeast-2.amazonaws.com/origin-music/703.7256216117561_2023-05-15audio.wav",
    mixed_music_request:
      '{"role":"user","content":"[instruement: piano]A good song to listen to on a rainy day"}',
    mixed_music_source:
      "https://chatcomposer.s3.ap-northeast-2.amazonaws.com/mixed-music/963.4884727691707_2023-05-15audio.mp3",
    cover_request: "asdfsdfasdf",
    cover_source:
      "https://chatcomposer.s3.ap-northeast-2.amazonaws.com/album/710.1714783313225_2023-05-15image.png",
  });

  const [title, setTitle] = useState("");
  const [decription, setDecription] = useState("");

  const onSubmitHandler = () => {};
  return (
    <div className="text-white">
      <div>
        <input
          className="text-slate-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          className="text-slate-600"
          value={decription}
          onChange={(e) => setDecription(e.target.value)}
          maxLength={160}
        ></textarea>
      </div>

      {title && decription ? (
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
