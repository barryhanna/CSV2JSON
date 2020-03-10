const pasteBtn = document.getElementById('paste');
const convertBtn = document.getElementById('convert');
const csvInput = document.getElementById('csv');

pasteBtn.addEventListener('click', (e) => {
	e.stopPropagation();
	e.preventDefault();
	const clipboardData = navigator.clipboard.readText()
		.then(clipText => csvInput.value = clipText);
});

convertBtn.addEventListener('click', (e) => {
	const dataToConvert = csvInput.value;

});


function csvToJSON(csv = '') {
	let jsonString = '';
	jsonString += '[';
	const lines = csv.split('\n');
	lines.forEach(line => {
		// TODO 
		const items = line.split(',')
	});
	jsonString += ']';
}