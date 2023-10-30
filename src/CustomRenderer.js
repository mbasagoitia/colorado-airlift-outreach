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

        return (
            <div className="markdown-content">
                {output}
            </div>
        )
}

export default MyCustomRenderer;