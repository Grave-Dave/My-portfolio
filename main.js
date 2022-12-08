const navSection = document.querySelector('nav');
const nav = document.querySelector('.navbar');
const burgerBtn = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav__item ');
const allSection = document.querySelectorAll('section');
const contactSection = document.querySelector('.contact');
const contactItemsBox = document.querySelector('.contact__items');

const homeBtn = document.querySelector('.nav__home');
const aboutMeBtn = document.querySelector('.nav__about-me');
const contactBtn = document.querySelector('.nav__contact');
const projectsBtn = document.querySelector('.nav__projects');
const specialContactBtns = document.querySelectorAll('.header__media-boxes-link');

const aboutCards = document.querySelectorAll('.about-me__cards_card--first');
const aboutCards2 = document.querySelectorAll('.about-me__cards_card--second');
const firstBoxOptions = document.querySelectorAll('.first-box-option');
const infoBoxOne = document.querySelector('.about-me__box__active--first');
const infoBoxTwo = document.querySelector('.about-me__box--two__active--second');
const closeInfoBtn = document.querySelector('.fa-circle-xmark--one');
const closeInfoBtn2 = document.querySelector('.fa-circle-xmark--two');
const scrollTracker = document.querySelector('.scroll-tracker');

const footerYear = document.querySelector('.footer__year');
let navOpen = false;
// ----------------------------------------------------------
//
// const studies =
// 	'<i class="fa-solid fa-user-graduate"></i><p class="active-text">Z dobrymi wynikami ukończyłem studia inżynierskie na kierunku Inżynieria Środowiska na Uniwersytecie Przyrodniczym we Wrocławiu oraz magisterskie na Politechnice Wrocławskiej. Obrany przeze mnie kierunek studiów nauczył mnie wielu kompetencji wymaganych w zawodach o technicznych profilach.</p>';

// const experience =
// 	'<i class="fa-solid fa-helmet-safety"></i><p class="active-text">Po uzyskaniu dyplomu (mając już pierwsze doświadczenie, zdobyte w trakcie studiów, podczas pracy w biurze projektowym), pełniłem fukcję inżyniera na budowach takich jak: <strong>Budowa drogi S5 Wrocław - Trzebnica, budowa drogi S1 Dąbrowa Górnicza - Pyrzowice, budowa Zbiornika przeciwpowodziowego Racibórz.</strong></p>';

// const jobs =
// 	'<i class="fa-solid fa-building"></i><p class="active-text">Przez ponad sześć lat zdobywałem doświadczenie w dużych międzynarodowych organizacjach, takich jak:<strong> Astaldi SpA, Budimex SA, LG Energy Solution sp. z o.o. </strong></p>';

const grow =
	'<i class="fa-solid fa-arrow-up-right-dots"></i><p class="active-text">Z czasem zacząłem jednak coraz bardziej interesować się bardziej innowacyjnymi zawodami i szybko oraz skutecznie uczyłem się nowych technologii z branży IT</p>';

const skills =
	'<i class="fa-solid fa-user-tie"></i><p class="active-text">Wykształcenie na kierunku ścisłym oraz praca w zawodzie inżyniera pomogły mi zdobyć przydatne umiejętności i kompetencje, takie jak:  analityczne i abstrakcyjne myślenie, rozwiązywanie problemów czy praca w zespole</p>';

const fun =
	'<i class="fa-solid fa-face-smile"></i><p class="active-text">Nauka programowania daje mi mnóstwo satysfakcji. Chcę związać swoją przyszłość z branżą IT oraz w dalszym ciągu poszerzać swoje umiejętności i więdzę. </p>';

// ----------------------------------------------------------

const navShow = e => {
	if (e.target === nav) {
		nav.style.backgroundColor = '#5584AC';
		allNavItems.forEach(item => (item.style.opacity = '1'));
	}
};
const navHide = e => {
	if (e.target === nav) {
		nav.style.backgroundColor = '';
		allNavItems.forEach(item => (item.style.opacity = ''));
	}
	navBacklight();
};
const navExpand = () => {
	burgerBtn.classList.toggle('is-active');
	if (navOpen === false) {
		allNavItems.forEach(item => {
			item.classList.add('show');
			// item.style.display = 'block';
		});
		navOpen = true;
	} else {
		allNavItems.forEach(item => {
			item.classList.remove('show');
			navSection.style.top = '';
			// item.style.display = '';
		});
		navOpen = false;
	}
	changeMenuPosition();
};

const navBacklight = () => {
	const currentSection = window.scrollY;
	allSection.forEach(section => {
		if (section.classList.contains('projects') && section.offsetTop <= currentSection + 300) {
			projectsBtn.style.opacity = '1';
		} else if (!section.classList.contains('projects') && section.offsetTop <= currentSection + 300) {
			projectsBtn.style.opacity = '';
		}
	});

	allSection.forEach(section => {
		if (section.classList.contains('about-me') && section.offsetTop <= currentSection + 300) {
			aboutMeBtn.style.opacity = '1';
		} else if (!section.classList.contains('about-me') && section.offsetTop <= currentSection + 300) {
			aboutMeBtn.style.opacity = '';
		}
	});

	allSection.forEach(section => {
		if (section.classList.contains('header-section') && section.offsetTop <= currentSection + 300) {
			homeBtn.style.opacity = '1';
		} else if (!section.classList.contains('header-section') && section.offsetTop <= currentSection + 300) {
			homeBtn.style.opacity = '';
		}
	});
	allSection.forEach(section => {
		if (section.classList.contains('contact') && section.offsetTop <= currentSection + 300) {
			contactBtn.style.opacity = '1';
		} else if (!section.classList.contains('contact') && section.offsetTop <= currentSection + 300) {
			contactBtn.style.opacity = '';
		}
	});
};

const changeMenuPosition = () => {
	if (window.scrollY >= 200 && navOpen === true) {
		nav.classList.add('vertical');
		navSection.style.top = '320px';
		// navSection.style.left = '7%';
	} else {
		nav.classList.remove('vertical');
		navSection.style.top = '';
		// navSection.style.left = '10%';
	}
};

// WAŻNE: showInfo sposób pierwszy (onclick)

const showInfo = id => {
	infoBoxOne.classList.add('visible');
	closeInfoBtn.classList.add('visible');

	firstBoxOptions.forEach(option => (option.style.display = 'none'));
	aboutCards.forEach(card => card.classList.remove('about-me__cards_card--active'));

	document.getElementById(id).style.display = 'flex';

	const currentActiveCard = document.querySelector(`[data-id=${id}]`);
	currentActiveCard.classList.add('about-me__cards_card--active');
};

// WAŻNE: showInfo2 sposób drugi (listener)

const showInfo2 = e => {
	infoBoxTwo.classList.add('visible');
	closeInfoBtn2.classList.add('visible');
	aboutCards2.forEach(card => card.classList.remove('about-me__cards_card--active2'));

	if (e.target.textContent.toLowerCase().includes('innowacyjny')) {
		infoBoxTwo.innerHTML = `${grow}`;
	} else if (e.target.textContent.toLowerCase().includes('kompetencje')) {
		infoBoxTwo.innerHTML = `${skills}`;
	} else if (e.target.textContent.toLowerCase().includes('pasja')) {
		infoBoxTwo.innerHTML = `${fun}`;
	}
	e.target.closest('div').classList.add('about-me__cards_card--active2');
};
const closeInfo = () => {
	infoBoxOne.classList.remove('visible');
	closeInfoBtn.classList.remove('visible');
	aboutCards.forEach(card => card.classList.remove('about-me__cards_card--active'));
};
const closeInfo2 = () => {
	infoBoxTwo.classList.remove('visible');
	closeInfoBtn2.classList.remove('visible');
	aboutCards2.forEach(card => card.classList.remove('about-me__cards_card--active2'));
};

const showContact = () => {
	contactSection.style.position = 'fixed';
};

const hideContact = () => {
	contactSection.style.position = '';
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const options = {
	threshold: 1,
};

const handleCards = entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle('show-card', entry.isIntersecting);
		if (entry.isIntersecting) cardObserver.unobserve(entry.target)
	});
};

const cardObserver = new IntersectionObserver(handleCards, options);
aboutCards.forEach(card => {
	cardObserver.observe(card);
});
aboutCards2.forEach(card => {
	cardObserver.observe(card);
});

// ----------------------------------------------------------

nav.addEventListener('mouseenter', navShow);
nav.addEventListener('mouseleave', navHide);
burgerBtn.addEventListener('click', navExpand);
allNavItems.forEach(item => {
	item.addEventListener('click', navExpand);
});
allNavItems.forEach(item => {
	item.addEventListener('click', hideContact);
});
// aboutCards.forEach(card => {
// 	card.addEventListener('click', showInfo);
// });
aboutCards2.forEach(card => {
	card.addEventListener('click', showInfo2);
});
closeInfoBtn.addEventListener('click', closeInfo);
closeInfoBtn2.addEventListener('click', closeInfo2);

specialContactBtns.forEach(btn => {
	btn.addEventListener('click', showContact);
});

window.addEventListener('click', e => (e.target === contactSection ? hideContact() : false));

window.addEventListener('click', e => (e.target === contactItemsBox ? hideContact() : false));

window.addEventListener('scroll', changeMenuPosition);
window.addEventListener('scroll', navBacklight);

handleCurrentYear();
