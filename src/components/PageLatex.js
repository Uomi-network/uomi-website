import React, { useState, useRef, useEffect } from "react";

export default function PageLatex({ latex, className }) {
  const [iframeSrc, setIframeSrc] = useState("");
  const [iframeHeight, setIframeHeight] = useState(0);
  const iframeRef = useRef();

  // set iframe height to its content height
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onMessage = (event) => {
      if (event.source !== iframe.contentWindow) return;
      if (event.data.type !== "height") return;
      setIframeHeight(event.data.height);
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    const currentBaseUrl = window.location.href.replace(window.location.hash, "");
    const baseUrl = currentBaseUrl.substring(0, currentBaseUrl.lastIndexOf("/"));
    const latexUrl = `${baseUrl}${latex}`;

    const iframeContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <meta charset="UTF-8">
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <meta http-equiv="content-language" content="en">
      <script src="https://cdn.jsdelivr.net/npm/latex.js/dist/latex.js"></script>
    </head>
    <body>
      <style>
        body {
          color: white;
          overflow-x: hidden;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        img {
          max-width: 100%;
          height: auto;
        }
        figcaption {
          text-align: center;
          font-size: 0.8em;
        }

        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid white;
          padding: 8px;
          text-align: left;
        }

        @media (max-width: 600px) {
          table {
            font-size: 0.8em;
          }
        }
      </style>
      <script>
        const replaceCustomComponents = (element) => {
          // Regex to find all texts between ***
          const re = /\\*\\*\\*[^*]+\\*\\*\\*/g;
          const matches = element.innerHTML.match(re);

          if (matches) {
            for (const match of matches) {
              // Remove the *** markers with { and } for JSON.parse
              const json = match.replace('***', '{').replace('***', '}');
              let obj;

              try {
                obj = JSON.parse(json);
              } catch (e) {
                console.error("Invalid JSON:", json);
                continue;
              }

              const type = obj.type;
              

              if (type === "picture") {
                const src = obj.src;
                const caption = obj.caption;
                const img = document.createElement("img");
                img.src = "${baseUrl}" + src;
                img.alt = caption;
                // Optionally, set a caption below the image
                const figure = document.createElement("figure");
                const figcaption = document.createElement("figcaption");
                figcaption.innerText = caption;
                figure.appendChild(img);
                figure.appendChild(figcaption);
                
                // Replace the match in innerHTML with the new element
                element.innerHTML = element.innerHTML.replace(match, figure.outerHTML);
              }

              if (type === "table") {
                const headers = obj.headers;
                const rows = obj.rows;

                const table = document.createElement("table");
                const thead = document.createElement("thead");
                const tbody = document.createElement("tbody");

                const theadRow = document.createElement("tr");
                for (const header of headers) {
                  const th = document.createElement("th");
                  th.innerText = header;
                  theadRow.appendChild(th);
                }
                thead.appendChild(theadRow);

                for (const row of rows) {
                  const tr = document.createElement("tr");
                  for (const cell of row) {
                    const td = document.createElement("td");
                    td.innerText = cell;
                    tr.appendChild(td);
                  }
                  tbody.appendChild(tr);
                }

                table.appendChild(thead);
                table.appendChild(tbody);

                // Replace the match in innerHTML with the new element
                element.innerHTML = element.innerHTML.replace(match, table.outerHTML);
              }
            }
          }
        };

        const onResize = () => {
          window.parent.postMessage({ type: "height", height: document.body.scrollHeight + 100 }, "*")
        }
        window.addEventListener("resize", onResize)

        const _ = async () => {
          var url = "${latexUrl}"
          var response = await fetch(url)
          var text = await response.text()
          var generator = new latexjs.HtmlGenerator({ hyphenate: false })
          generator = latexjs.parse(text, { generator: generator })
          document.head.appendChild(generator.stylesAndScripts("https://cdn.jsdelivr.net/npm/latex.js@0.12.4/dist/"))

          var viewer = document.getElementById("viewer")
          viewer.appendChild(generator.domFragment())
          replaceCustomComponents(viewer)
          onResize()
        }
        _()
      </script>
      <div id="viewer"></div>
    </body>
    </html>
    `

    const blob = new Blob([iframeContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    setIframeSrc(url);
  }, [latex]);

  return (
    <iframe
      className={`PageLatex w-full overflow-hidden ${className}`}
      style={{ height: iframeHeight, minHeight: '100vh', opacity: iframeHeight > 0 ? 1 : 0 }}
      ref={iframeRef}
      src={iframeSrc}
    />
  );
}