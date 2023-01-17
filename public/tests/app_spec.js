describe('LearnJS', function() {
	it('can show a problem view', function() {
		console.log('window.location',  window.location.toString());
		console.log('location',  location.toString());
		learnjs.showView('#problem-1');
		expect($('.view-container .problem-view').length).toEqual(1);
	});
});
