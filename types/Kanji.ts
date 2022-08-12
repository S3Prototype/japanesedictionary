type Kanji = {
  // true if this particular spelling is common. This field combines all the *_pri fields from original files in a same way as [jisho.org][] and other on-line dictionaries do ("common" word markers). It gets rid of bunch of *_pri fields which are not typically used. Words marked with "news1", "ichi1", "spec1", "spec2", "gai1" in the original file are treated as common, which may or may not be true according other sources.
  common: boolean;
  // any non-kana-only writing, may contain kanji, kana, and some other characters
  text: string;
  // tags applied to this writing
  tags: string[];
};

export default Kanji;
