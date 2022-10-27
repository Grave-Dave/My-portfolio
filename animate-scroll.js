import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-tracker');

// timelines--------------------------------------------

const scrollTrackingTimeline = new ScrollTimeline({
	source: document.scrollingElement,
	orientation: 'block',
	scrollOffsets: [ CSS.percent(30),  CSS.percent(60)],
});


// scroll-tracker----------------------------

scrollTracker.animate(
	{
		transform: ['scaleX(0)', 'scaleX(1)'],
	},
	{
		duration: 1,
		timeline: scrollTrackingTimeline,
	}
);

