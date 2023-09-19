import hljs from "highlight.js";
import { marked, type Tokens } from "marked";
import sanitizeHtml from "sanitize-html";

marked.use({
  extensions: [
    {
      name: "code",
      renderer(token) {
        const codeToken: Tokens.Code = token as Tokens.Code;
        const renderedCode = hljs.highlightAuto(codeToken.text, [
          "python",
          "java",
          "scala",
          "csharp",
          "c",
          "rust",
          "go",
          "typescript",
        ]);

        return `<pre><code class="hljs language-${renderedCode.language}">${renderedCode.value}</code></pre>`;
      },
    },
  ],
});

export function renderMarkdown(content: string) {
  const sanitizeOptions = {
    allowedAttributes: {
      code: ["class"],
      span: ["class"],
      a: ["href"],
    },
  };

  const renderedContent = marked.parse(content);

  // Make sure to sanitize the HTML. Who knows what the user or the bot, for that matter, may have added to the text area?!
  const sanitizedContent = sanitizeHtml(renderedContent, sanitizeOptions);

  // Append the copy button after sanitizing the content. Otherwise the button gets wiped.
  // We're stepping outside react here, because we're creating raw html.
  return sanitizedContent.replace(
    /<pre>/gi,
    "<pre><button class='button is-pulled-right is-small' onclick='window.smartassist.copyCode(this)'><i class=\"fa-solid fa-copy\"></i></button>",
  );
}
