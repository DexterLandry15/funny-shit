function test() {
	anime({
		targets: '.green',

		keyframes: [
			{width: 340},
			{width: 0}
		],
		duration: 4000,
		easing: 'spring(1, 100, 100, 0)',

	})

	anime({
		targets: '.black',
		width: 330,
		easing: 'spring(1, 100, 100, 0)',
		keyframes: [
			{width: 330},
			{width: 0}
		],
		duration: 3300,
		delay: 150,
	})
  }