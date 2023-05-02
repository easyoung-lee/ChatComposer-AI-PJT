import NoteRow from "../NoteRow";
import notesAtom from "../../../lib/store/notesAtom";
import { useRecoilValue } from "recoil";
import { PolySynth } from "tone";

const NotesView = () => {
  const synth = new PolySynth().toDestination();
  const notes = useRecoilValue(notesAtom);
  const noteTable = notes
    .filter((note) => note.isActive)
    .map((note, index) => (
      <NoteRow synth={synth} index={index} key={Math.random()} note={note} />
    ));
  return (
    //노트 갯수가 많을 때 스크롤 할 수 있도록
    <div className="flex-col border border-black rounded-lg bg-black w-full p-2 overflow-x-scroll">
      {noteTable}
    </div>
  );
};

export default NotesView;
