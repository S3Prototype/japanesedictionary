import DictionaryRoot from "../../types/DictionaryRoot";
import { getDictionary } from "../../utils/readDictionary";
import express from "express";
import getEnglishWord from "./utils/getEnglishWord";
const router = express.Router();
export default router;
import { Document } from "flexsearch";

let dictionary: DictionaryRoot | undefined;
const index = new Document({
  document: {
    store: [
      // word
      "word:kanji:text",
      "word:kana:text",
      "word:sense:gloss[]:text",
      // tags
      "tags:kana:tags",
      "tags:kanji:tags",
      "tags:sense:tags",
      // misc
      "misc:kana:appliesToKanji",
      "misc:sense:partOfSpeech",
    ],
    id: "word:id",
    index: [
      // kanji
      "word:kanji:text",
      "word:kanji:tags",
      // kana
      "word:kana:text",
      // english translation
      "word:sense:gloss[]:text",
    ],
  },
});

(async () => {
  dictionary = await getDictionary();
  dictionary?.words.forEach((word) => {
    index.add({
      word,
      thing: word,
      misc: word,
    });
  });

  // const data = console.log("Result: ", JSON.stringify(data, null, 2));
})();

router.get("/", async (req: any, res: any) => {
  const englishResult = await index.searchAsync("男の子", { enrich: true });
  const finalResult = JSON.stringify(englishResult, null, 2);

  console.log(finalResult);
  return res.send(finalResult);
});
