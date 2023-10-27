import React from "react";
import ReactMarkdown from "react-markdown";

function MyCustomRenderer(props) {
        const { content } = props;

        const lines = content.split('\n');

        let isWithinParagraph = false;
        let output = [];

        for (let line of lines) {
            const parts = line.split('{className="');
            if (parts.length > 1) {
                const [className, text] = parts[1].split('"}');
                output.push(
                    <div key={output.length} className={className}>
                        <ReactMarkdown children={text} />
                    </div>
                );
                isWithinParagraph = false;
            } else {
                if (!isWithinParagraph) {
                    output.push(<div key={output.length}><ReactMarkdown children={line} /></div>);
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