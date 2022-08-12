"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readDictionary_1 = require("../../utils/readDictionary");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const flexsearch_1 = require("flexsearch");
let dictionary;
const index = new flexsearch_1.Document({
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    dictionary = yield (0, readDictionary_1.getDictionary)();
    dictionary === null || dictionary === void 0 ? void 0 : dictionary.words.forEach((word) => {
        index.add({
            word,
            thing: word,
            misc: word,
        });
    });
    // const data = console.log("Result: ", JSON.stringify(data, null, 2));
}))();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const englishResult = yield index.searchAsync("男", { enrich: true });
    return res.send(JSON.stringify(englishResult, null, 2));
}));
