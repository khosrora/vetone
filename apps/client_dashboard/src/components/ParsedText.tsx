import React from "react";

const ParsedText = ({ content }: { content: string }) => {
  if (!content || typeof content !== "string") return null;

  const parts = content.split(/(\*\*\*|\*\*)/).map((part) => part.trim());

  const elements = [];
  let i = 0;

  while (i < parts.length) {
    const part = parts[i];

    if (part === "**") {
      const title = parts[i + 1] || "";
      elements.push(
        <h2 key={`h2-${i}`} className="section-title">
          {title}
        </h2>
      );
      i += 2;
    } else if (part === "***") {
      const subtitle = parts[i + 1] || "";
      elements.push(
        <h3 key={`h3-${i}`} className="subsection-title">
          {subtitle}
        </h3>
      );
      i += 2;
    } else {
      const lines = part!.split("\n").filter((line) => line.trim());
      for (const line of lines) {
        if (line.startsWith("*")) {
          const listItems = line
            .split("*")
            .map((item) => item.trim())
            .filter(Boolean);
          elements.push(
            <ul key={`ul-${i}`} className="bullet-list">
              {listItems.map((item, idx) => (
                <li key={`li-${i}-${idx}`}>{item}</li>
              ))}
            </ul>
          );
        } else {
          elements.push(
            <p key={`p-${i}`} className="paragraph">
              {line}
            </p>
          );
        }
      }
      i++;
    }
  }

  return <div className="parsed-text">{elements}</div>;
};

export default ParsedText;
