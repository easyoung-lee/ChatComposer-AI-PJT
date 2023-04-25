import { AtomEffect, atom, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

//Next.js에서 persistAtom을 쓰기 위한 구성
//https://stackoverflow.com/questions/68110629/nextjs-react-recoil-persist-values-in-local-storage-initial-page-load-in-wrong
const ssrCompletedState = atom({
  key: "SsrCompleted",
  default: false,
});

export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedState);
  return () => setSsrCompleted(true);
};

const { persistAtom } = recoilPersist();

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param));
};

//atom({key:, default:})로 새로운 아톰을 만들 수 있다.
// 이때 key는 각 아톰을 구별하는 고유한 식별자이다.
// default는 initial state를 의미한다.
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoListState = atom({
  key: "Todos",
  default: [] as Todo[],
  // effects_UNSTABLE: [persistAtom],
  effects_UNSTABLE: [persistAtomEffect],
});
