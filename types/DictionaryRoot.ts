import type Word from "./Word";

type DictionaryRoot = {
  // Semantic version of this project (not the dictionary itself)
  version: string;
  // Creation date of JMdict file, as it appears in a comment with format "JMdict created: YYYY-MM-DD" in the original XML file header
  dictDate: string;
  // Revisions of JMdict file, as they appear in comments before DOCTYPE in the original XML file header. These only contain actual version (e.g., "1.08"), not a full comment. Original comments also mention changes made, but this is omitted in the resulting JSON files
  dictRevisions: string[];
  // All tags: parts of speech, names of dialects, fields of application, etc. All those things are expressed as XML entities in the original file. Keys of this objects are tags per se, values are descriptions, slightly modified from the original file
  tags: object;
  words: Word[];
};

export default DictionaryRoot;
