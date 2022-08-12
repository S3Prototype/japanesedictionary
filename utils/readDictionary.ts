import fs from "fs";
import { promisify } from "util";
import type DictionaryRoot from "../types/DictionaryRoot";

const readFile = promisify(fs.readFile);

export const getDictionary = async (): Promise<DictionaryRoot | undefined> => {
  try {
    return JSON.parse(
      await readFile("./data/language-dictionary.json", "utf8")
    );
  } catch (err) {
    console.log("Error ", err);
  }
};
