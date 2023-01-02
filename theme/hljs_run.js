
// Adopted from https://github.com/dfinity/motoko/blob/master/doc/docusaurus/src/theme/CodeBlock/hljs_run.js
// Copied highlight.min.js from the custom download to theme/highlight.js thanks to
// https://github.com/rust-lang/mdBook/issues/1870#issuecomment-1368950881

registerMotoko();
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: ["motoko", "candid"],
});

// DIRTY HACK: Reload highlight.js again after language registration
// https://github.com/rust-lang/mdBook/issues/657#issuecomment-924556465
// highlight.js warns to the console before language registration
hljs.initHighlightingOnLoad();

function registerMotoko() {
  var string = {
    className: "string",
    variants: [
      {
        begin: /r(#*)"(.|\n)*?"\1(?!#)/,
      },
      {
        begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/,
      },
    ],
  };
  var number = {
    className: "number",
    variants: [
      {
        begin: "[+-]?\\b0[xX]([A-Fa-f0-9_]+)",
      },
      {
        begin: "[+-]?\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)",
      },
    ],
    relevance: 0,
  };
  hljs.registerLanguage("motoko", function (hljs) {
    return {
      name: "Motoko",
      aliases: ["mo"],
      keywords: {
        $pattern: "[a-zA-Z_]\\w*",
        keyword:
          "actor and await break case catch class" +
          " continue debug do else for func if in import" +
          " module not object or label let loop private" +
          " public return shared try throw query switch" +
          " type var while with stable flexible system debug_show assert ignore from_candid to_candid",
        literal: "true false null",
        built_in:
          "Any None Null Bool Int Int8 Int16 Int32 Int64" +
          " Nat Nat8 Nat16 Nat32 Nat64 Word8 Word16 Word32 Word64" +
          " Float Char Text Blob Error Principal" +
          " async",
      },
      illegal: "</",
      contains: [
        hljs.C_LINE_COMMENT_MODE,
        hljs.COMMENT("/\\*", "\\*/", {
          contains: ["self"],
        }),
        hljs.inherit(hljs.QUOTE_STRING_MODE, {
          begin: /b?"/,
          illegal: null,
        }),
        string,
        number,
        {
          className: "symbol",
          begin: "#" + hljs.UNDERSCORE_IDENT_RE,
        },
        {
          className: "function",
          beginKeywords: "func",
          end: "(\\(|<|=|{)",
          excludeEnd: true,
          contains: [hljs.UNDERSCORE_TITLE_MODE],
        },
        {
          className: "class",
          begin: "\\b(actor( class)?|module|object)\\b",
          keywords: "actor class module object",
          end: "(\\(|<|{)",
          contains: [hljs.UNDERSCORE_TITLE_MODE],
          illegal: "[\\w\\d]",
        },
        {
          className: "built_in",
          beginKeywords: "import type",
          end: "(;|$|=)",
          excludeEnd: true,
          contains: [
            hljs.QUOTE_STRING_MODE,
            hljs.C_LINE_COMMENT_MODE,
            hljs.COMMENT("/\\*", "\\*/", {
              contains: ["self"],
            }),
          ],
        },
      ],
    };
  });
  hljs.registerLanguage("candid", function (hljs) {
    return {
      name: "Candid",
      aliases: ["did"],
      keywords: {
        $pattern: "[a-zA-Z_]\\w*",
        keyword: "import service type",
        built_in:
          "opt vec record variant func blob principal" +
          " nat nat8 nat16 nat32 nat64 int int8 int16 int32 int64" +
          " float32 float64 bool text null reserved empty" +
          " oneway query",
      },
      illegal: "</",
      contains: [
        hljs.C_LINE_COMMENT_MODE,
        hljs.COMMENT("/\\*", "\\*/", {
          contains: ["self"],
        }),
        hljs.inherit(hljs.QUOTE_STRING_MODE, {
          begin: /b?"/,
          illegal: null,
        }),
        string,
        number,
      ],
    };
  });
}
