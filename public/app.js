'use strict';
const learnjs = {};

learnjs.showView = function(hash) {
	const problemView = $('<div class="problem-view">').text('Coming soon!');
	$('.view-container').empty().append(problemView);
}
