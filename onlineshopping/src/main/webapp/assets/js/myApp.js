$(function() {
	//solving menu active issue which high lights the selected tab in the menu
	
	switch (menu) {
	case 'About Us':
		$('#about').addClass('active');
		break;
	case 'Contact Us':
		$('#contact').addClass('active');
		break;


	default:
		$('#home').addClass('active');
		break;
	}
	
})