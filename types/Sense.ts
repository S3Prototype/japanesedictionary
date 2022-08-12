import type Tag from "./Tag";

type Sense = {
  // All parts of speech for this sense. Unlike the original dictionary file, this field is never empty/missing. In the original file, part-of-speech from earlier sense elements may apply to following elements, in which case latter don't have defined part-of-speech
  partOfSpeech: string[];
  // List of kanji writings within this word which this sense applies to. "*" means "all", empty array means "none"
  appliesToKanji: string[];
  // List of kana writings within this word which this sense applies to. "*" means "all", empty array means "none"
  appliesToKana: string[];
  // Xrefs to related words
  related: Xref[];
  // xrefs to antonyms of this word
  antonym: Xref[];
  // fields of application
  tags: Tag[];
  // dialects
  dialects: Tag[];
  // other related tags
  misc: Tag[];
  // other info
  info: string[];
  // source language info for borrowed words and wasei-eigo
  languageSource: LanguageSource[];
  // translations
  gloss: Gloss[];
};

type LanguageSource = {
  // language code from the ISO 639-2 standard
  lang: string;
  // indicates whether the sense element fully or partially describes the source word or phrase of the loanword
  full: boolean;
  // indicates that the Japanese word has been constructed from words in the source language, and not from an actual phrase in that language. See Wasei-eigo
  wasei: boolean;
  // text in the language defined by a lang element, or null
  text: string | null;
};

type Gloss = {
  // type of translation, one of "literal", "figurative", "explanation", or null. Most words have null values, meaning this attribute was absent in the original XML entry. The original documents do not describe the meaning of this attribute being absent.
  type: string | null;
  // language code from the ISO 639-2 standard
  lang: string;
  // a word or phrase
  text: string;
};

type Xref = [];

export default Sense;
