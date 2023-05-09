import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { GenreMapEntries, TagMapEntries } from "../../utils/GenreMap";
import { producingMusicState } from "../../store/atoms";

function NewTracks({ setTrackIds }) {
  const [genre, setGenre] = useState(null as number);
  const [tags, setTags] = useState([] as string[]);
  const [opacityClassName, setOpacityClassName] = useState("opacity-100");
  const setProducingMusic = useSetRecoilState(producingMusicState);

  const onGenreChange = (e) => {
    console.log(e.target.value);
    setGenre(e.target.value);
  };

  const onTagChange = (event, tag) => {
    if (event.target.checked && tags.length < 3) {
      setTags((prev) => [...prev, tag]);
    } else {
      setTags((prev) => prev.filter((e) => e !== tag));
    }
  };

  const onSubmitHandler = (e) => {
    if (genre === null) {
      return alert("장르를 선택해주세요.");
    }
    if (!tags.length) {
      return alert("태그를 선택해주세요");
    }
    //장르를 Atom에 반영하고, 투명해지면서 다음으로 넘어갑니다.
    setProducingMusic((prev) => {
      return { ...prev, genre, tags };
    });
    setOpacityClassName("opacity-0");
    setTimeout(() => setTrackIds([0]), 200);
  };
  return (
    <div
      className={`Container text-white h-full w-full transition-opacity duration-200 ${opacityClassName}`}
    >
      <div className="TracksContainer h-[90%] w-[90%] relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <form>
          <div className="GenreDropboxContainer">
            {/* https://devdojo.com/zoltan/tailwind-css-select */}
            <label
              htmlFor="genre"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              장르
            </label>
            <select
              id="genre"
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
              onChange={onGenreChange}
            >
              <option selected disabled className="hidden">
                장르를 선택하세요
              </option>
              {GenreMapEntries.map((element, index) => {
                return (
                  <option key={element[0] + index} value={index}>
                    {element[1]}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="TagsCheckboxContainer">
            {/* https://www.reddit.com/r/webdev/comments/rdyyys/i_built_a_library_of_components_with_dark_mode/ */}
            {/* https://flowbite.com/docs/components/dropdowns/ */}
            <div className="block mb-2 text-sm font-medium text-gray-400">
              태그
            </div>
            <div>태그는 3개까지 선택 가능합니다</div>
            <div className="w-full grid grid-cols-5 gap-2">
              {TagMapEntries.map((element, index) => {
                return (
                  // <div key={element[0] + index}>
                  <div
                    key={element[0] + index}
                    className="flex items-center bg-[#00000029] backdrop-blur-[10px] border border-gray-200 rounded dark:border-gray-700 text-center px-4 w-full"
                  >
                    <input
                      id={element[0] + index}
                      type="checkbox"
                      value={element[0]}
                      checked={tags.includes(element[0])}
                      onChange={(event) => onTagChange(event, element[0])}
                      name="bordered-checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-700 rounded focus:ring-blue-600 ring-2 border-gray-600"
                    />
                    <label
                      htmlFor={element[0] + index}
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-300"
                    >
                      {element[1]}
                    </label>
                  </div>
                  // </div>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            onClick={onSubmitHandler}
            className={!(genre !== null && tags.length) ? "opacity-50" : ""}
          >
            다음으로
          </button>
          <div className={!(genre !== null && tags.length) ? "" : "invisible"}>
            장르와 태그를 선택해주세요
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTracks;
