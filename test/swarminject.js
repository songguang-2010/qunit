// load testswarm agent
(function() {
	var url = location.search;
	url = decodeURIComponent( url.slice( url.indexOf( "swarmURL=" ) + 9 ) );
	if ( !url || url.indexOf( "http" ) !== 0 ) {
		return;
	}
	/*jshint evil:true */
	document.write(
		"<scr" + "ipt src='http://swarm.jquery.org/js/inject.js?" +
		( new Date() ).getTime() +
		"'></scr" + "ipt>"
	);
})();
