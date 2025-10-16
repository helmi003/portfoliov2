import Highlighter from "react-highlight-words";

const ParagraphHighliter = ({ title, search,  }) => (
    <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069' }}
        searchWords={[search || '']}
        autoEscape
        textToHighlight={title}
    />
);

export default ParagraphHighliter;