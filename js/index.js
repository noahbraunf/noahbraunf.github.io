$(document).ready(function() {
	$('#welcome').fadeTo(2000, 1.0);
	$('#my1').fadeTo(2000, 1.0);
	$('#welcome').mouseenter(function() {
		$('#welcome').animate({color: 'red'});
		$('#line1').animate({
			width: '100em'
		});
		$('#my1').animate({
			fontSize: '1.5em'
		});
	});
});