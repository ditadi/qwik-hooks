import { getHighlighterCore } from "shiki/index.mjs";
import css from "shiki/langs/css.mjs";
import html from "shiki/langs/html.mjs";
import js from "shiki/langs/javascript.mjs";
import tsx from "shiki/langs/tsx.mjs";
import ts from "shiki/langs/typescript.mjs";
import vitesseDark from "shiki/themes/vitesse-dark.mjs";
import getWasm from "shiki/wasm";

export const highlighter = getHighlighterCore({
    themes: [
        // or a dynamic import if you want to do chunk splitting
        vitesseDark,
    ],
    langs: [html, css, js, ts, tsx],
    loadWasm: getWasm,
});
