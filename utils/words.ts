import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

const getWords = async () => {
  try {
    return JSON.parse(
      await readFile("./data/language-dictionary.json", "utf8")
    );
  } catch (err) {
    console.log("Error ", err);
  }
};

export default getWords;
