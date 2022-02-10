import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const filesAtom = atom({
  key: "files",
  default: [],
  // effects_UNSTABLE: [persistAtom],
});

export const pFilesAtom = atom({
  key: "pFiles",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const frameAtom = atom({
  key: "frames",
  default: "classic",
  effects_UNSTABLE: [persistAtom],
});

export const LoginUserAtom = atom({
  key: "user",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
