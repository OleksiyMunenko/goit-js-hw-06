const form = document.querySelector('.login-form');

form.addEventListener('submit', handelSubmit);

function handelSubmit(e) {
	e.preventDefault();
	const {
		elements: { email, password },
	} = e.currentTarget;

	if (email.value === '' || password.value === "") {
		return alert("All forms mast be fill in!");
	}

	console.log({Email: email.value, Password: password.value});
	e.currentTarget.reset();
}
