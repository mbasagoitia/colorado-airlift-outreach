import React from "react";
import ReactMarkdown from "react-markdown";

function MyCustomRenderer(props) {
    const { content } = props;

    const lines = content.split('\n');
    let isWithinParagraph = false;
    const output = [];

    for (let line of lines) {
        const parts = line.split('{className="');
        if (parts.length > 1) {
            const [className, text] = parts[1].split('"}');
            if (line.includes('![')) {
                // Handle images
                const imagePath = line.match(/\!\[.*\]\(([^)]+)\)/)[1];
                output.push(
                    <img key={output.length} src={imagePath} alt="Image" className={className} />
                );
            } else {
                // Handle other content
                output.push(
                    <ReactMarkdown key={output.length} className={className} children={text} />
                );
                isWithinParagraph = false;
            }
        } else {
            if (!isWithinParagraph) {
                output.push(<ReactMarkdown key={output.length} children={line} />);
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