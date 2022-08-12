import type Tag from "./Tag";
type Kana = {
  // same as for kanji elements
  common: boolean;
  // kana-only writing, may only accidentally contain middle-dot and other punctuation-like characters
  text: string;
  // tags applied to this kana
  tags: Tag[];
  // list of kanji writings within this word which this kana version applies to. "*" means "all", empty array means "none"
  appliesToKanji: string[];
};

export default Kana;
