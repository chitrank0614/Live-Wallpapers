var api_url = 'http://127.0.0.1:8000/';
function makeAsyncGetRequest(path) {
	return new Promise(function (resolve, reject) {
		axios.get(api_url + path).then(
			(response) => {
				var returnObj = response.data;
				console.log('Async Get Request: ' + path);
				resolve(returnObj);
			},
			(error) => {
				reject(error);
			}
		);
	});
}

function makeAsyncPostRequest(path, queryObject) {
	return new Promise(function (resolve, reject) {
		axios.post(api_url + path, queryObject).then(
			(response) => {
				var returnObj = response.data;
				console.log('Async Post Request');
				resolve(returnObj);
			},
			(error) => {
				reject(error);
			}
		);
	});
}

function makeGetRequest(path) {
	axios.get(api_url + path).then(
		(response) => {
			var returnObj = response.data;
			return returnObj;
		},
		(error) => {
			return error;
		}
	);
}

function makePostRequest(path, queryObject) {
	axios.post(api_url + path, queryObject).then(
		(response) => {
			var returnObj = response.data;
			return returnObj;
		},
		(error) => {
			return error;
		}
	);
}

function makeAsyncPostMultiPartRequest(path, queryObject) {
	return new Promise(function (resolve, reject) {
		axios
			.post(api_url + path, queryObject, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			.then(
				(response) => {
					var returnObj = response;
					console.log('Async Post Request');
					resolve(returnObj);
				},
				(error) => {
					reject(error);
				}
			);
	});
}

function test() {
	window.alert('Chal Raha hai...');
}

function alert(message) {
	document.getElementById('modal-title').innerHTML = 'Message';
	document.getElementById('modal-body').innerHTML = message;
	document.getElementById('modal-footer').innerHTML = '';
	showModal();
}
function showModal() {
	document.querySelector('#show-modal').click();
}

function closeModal() {
	document.querySelector('.close').click();
}

function validURL(str) {
	var pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$',
		'i'
	); // fragment locator
	return !!pattern.test(str);
}
