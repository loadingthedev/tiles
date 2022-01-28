import { atom } from "recoil";

export const filesAtom = atom({
  key: "files",
  default: [],
});

export const frameAtom = atom({
  key: "frames",
  default: "classic",
});
