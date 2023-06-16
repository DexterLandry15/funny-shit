function test(title, action, cover, color) {

	const titleDiv = document.querySelector('.title');
	const actionDiv = document.querySelector('.action');
	const bgDiv = document.querySelector('.bg');
	const coverDiv = document.querySelector('.cover');

	if (!cover) {
		coverDiv.style.display = 'none';
	} else {
		coverDiv.style.display = 'flex';
		coverDiv.img.src
	}

	titleDiv.innerText = title;
	actionDiv.innerText = action;

	switch(color) {
		case 'danger':
			bgDiv.style.backgroundColor = '#ef5d5d';
			break;
		case 'alert':
			bgDiv.style.backgroundColor = '#ecef5d';
			break;
		default:
			bgDiv.style.backgroundColor = '#1dd75e';
			break;
	}



	anime({
		targets: '.wrapper',

		keyframes: [
			{width: 340},
			{width: 0}
		],
		duration: 6000,
		easing: 'spring(1, 100, 100, 0)',

	})
	setTimeout( () => {
		anime({
			targets: '.black',
			width: 330,
			easing: 'spring(1, 100, 100, 0)',
			keyframes: [
				{width: 330},
				{width: 0}
			],
			duration: 4200,
		})
	}, 450);
  }