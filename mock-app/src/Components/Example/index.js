import React from 'react';
import settings from '../../Settings/current';

export default function Example() {
	return (
		<div style={settings.main}>
			{{
				h1: (text) => <h1>{text}</h1>,
				h2: (text) => <h2>{text}</h2>,
				h3: (text) => <h3>{text}</h3>,
			}[settings.content.header.type](settings.content.header.content)}
			<input style={settings.textbox} />
		</div>
	);
}
