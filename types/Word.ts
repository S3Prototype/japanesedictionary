import type Kanji from "./Kanji";
import type Kana from "./Kana";
import type Sense from "./Sense";

type Word = {
  id: string;
  // Kanji (and other non-kana) writings
  kanji: Kanji[];
  // Kana-only (with few exceptions) writings, typically considered as "readings", but these can be a word writings by themselves
  kana: Kana[];
  // Senses (translations + some related data) for this words
  sense: Sense[];
};

export default Word;
