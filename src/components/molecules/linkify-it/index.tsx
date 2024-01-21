import React from "react";
import linkifyIt from "linkify-it";

interface Props {
  text: string;
}

const LinkifyIt: React.FC<Props> = ({ text }) => {
  const linkify = linkifyIt();
  const links = linkify.match(text);

  if (!links) {
    const textParts = text.split("\n").map((str) => <p>{str}</p>);
    return <>{textParts}</>;
  }

  const parts: JSX.Element[] = [];
  let currentIndex = 0;

  links.forEach((link) => {
    const { index, lastIndex, url } = link;

    if (index > currentIndex) {
      parts.push(
        <span key={currentIndex}>{text.substring(currentIndex, index)}</span>
      );
    }

    parts.push(
      <a key={index} href={url} target="_blank">
        {url}
      </a>
    );

    currentIndex = lastIndex;
  });

  if (currentIndex < text.length) {
    parts.push(<span key={currentIndex}>{text.substring(currentIndex)}</span>);
  }

  return <p>{parts}</p>;
};

export default LinkifyIt;
