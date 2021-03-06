import React from 'react';
import Highlighter from 'react-highlight-words';

const highlightedStyle = {
	background: '#ACCEA8',
	color: '#333',
};

interface Props {
	str: string;
	match: string[];
}

const HighlightMarkup: Comp<Props> = props => (
	<Highlighter
		highlightStyle={highlightedStyle}
		searchWords={props.match}
		textToHighlight={props.str}
	/>
);

export default HighlightMarkup;
