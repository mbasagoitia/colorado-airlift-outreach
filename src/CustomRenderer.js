import React from "react";
import ReactMarkdown from "react-markdown";

function MyCustomRenderer(props) {
    const { content } = props;
  
    const lines = content.split('\n');
  
    let isWithinParagraph = false;
    let output = [];
    let skipFrontMatter = false;
  
    for (let line of lines) {
      if (line.trim() === '---') {
        skipFrontMatter = !skipFrontMatter;
      } else if (!skipFrontMatter) {
        if (line.match(/\!\[.*\]\(.*\)/)) {
          // Check for lines containing image references
          const match = line.match(/\!\[.*\]\(([^)]+)\)/);
        if (match) {
        const imagePath = match[1]; // This captures only the image path
        output.push(<img key={output.length} src={imagePath} alt="Image" />);
        }
          isWithinParagraph = false;
        } else {
          const parts = line.split('{className="');
          if (parts.length > 1) {
            const [className, text] = parts[1].split('"}');
            output.push(
              <ReactMarkdown key={output.length} className={className} children={text} />
            );
            isWithinParagraph = false;
          } else {
            if (!isWithinParagraph) {
              output.push(<ReactMarkdown key={output.length} children={line} />);
            }
          }
        }
      }
    }
  
    return (
      <div className="markdown-content">
        {output}
      </div>
    );
  }
  

export default MyCustomRenderer;