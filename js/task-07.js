const inputFontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector('#text');

const onInputFontSize = event => {
	inputFontSize.renge = event.currentTarget.value;
	spanText.style.fontSize = `${event.target.value}px`;
};

inputFontSize.addEventListener('change', onInputFontSize);