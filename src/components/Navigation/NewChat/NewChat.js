import React from 'react';

const NewChat = () => {
	return (
		<button style = {{display: 'flex', background : 'none', backgroundColor : 'yellow', border : 'none', 
		outline : 'none', width : '40px', height : 'auto', cursor : 'pointer', marginRight : '10px'}}>
		<svg  width = '100%' height = '100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M416 
		277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" 
		stroke = 'yellow' stroke-width = '2%'/>
		</svg>
		</button>
	);
}

export default NewChat;