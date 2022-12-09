const scrollTracker = document.querySelector('.scroll-tracker');

const scrollTrack = () => {
	const scroll = window.scrollY;
	const height = document.body.offsetHeight - window.innerHeight;

	let width = 100 * (scroll / height);

	scrollTracker.style.width=`${width}%`

};

window.addEventListener('scroll', scrollTrack);