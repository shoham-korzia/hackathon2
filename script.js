const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '986200776bmsh27d8be49bf66832p114434jsn209eb590e355',
		'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
	}
};

fetch('https://unogs-unogs-v1.p.rapidapi.com/search/deleted', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));