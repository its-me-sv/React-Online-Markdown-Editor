import React from 'react';
import '../index.css';
import marked from 'marked';

marked.setOptions({
  breaks: true
});
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

export default function PreviewBox({content}) {
	return (
		<div className="box">
			<div className="h2a orange">Previewer</div>
			<div id="preview" className="subBox" dangerouslySetInnerHTML={{__html: marked(content, { renderer: renderer })}} />
		</div>
	);
};