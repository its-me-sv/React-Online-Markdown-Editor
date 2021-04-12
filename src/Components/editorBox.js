import React from 'react';
import '../index.css';

export default function EditorBox({updateState, content}){
	return (
		<div className="box">
			<div className="h2a blue">Editor</div>
			<textarea id="editor" onChange={updateState} value={content}></textarea>
		</div>
	);
};