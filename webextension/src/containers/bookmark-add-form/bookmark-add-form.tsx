import React from 'react';
import { Just } from 'purify-ts/Maybe';
import BookmarkForm from 'Components/bookmark-form';

interface Props {
	onClose(): void;
	onSubmit(bookmark: LocalBookmark): void;
	display: boolean;
	defaultTitle: LocalBookmark['title'];
	defaultUrl: LocalBookmark['url'];
}

const BookmarkAddForm: Comp<Props> = props => (
	<>
		{props.display && (
			<BookmarkForm
				bookmark={Just({
					title: props.defaultTitle,
					url: props.defaultUrl,
				})}
				onClose={props.onClose}
				onSubmit={props.onSubmit}
			/>
		)}
	</>
);

export default BookmarkAddForm;
