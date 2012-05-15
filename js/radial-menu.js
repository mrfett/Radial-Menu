// Javascript Document
function radialMenu() {
	placeRadialOptions();
	$('.radial_launcher').mousedown(function() {
		$(this).next().fadeIn();
	});
	$('.radial_launcher').mouseup(function() {
		$(this).next().fadeOut();
	});
	
	$('.radial_option').mouseup(function() {
		
		if (!$(this).hasClass('placeholder')) {
			$('.active').removeClass('active');
			$(this).addClass('active').parents('.radial_options').fadeOut();
			$('.radial_launcher').text($(this).text());
			$('#message').text("You chose " + $(this).text() + ".");	
		} else {
			$(this).parents('.radial_options').fadeOut();
		}
	});
}

function placeRadialOptions($options) {
	// Angle of area to show available options
	var $displayAngle = 180;
	console.log('Display Angle: ' + $displayAngle);

	$objects = $('.radial_options .radial_option');
	if ($displayAngle < 360) {
	var $optionCount = $objects.length - 1;
	} else {
		var $optionCount = $objects.length;
	}
	if ($optionCount < 0) {
		console.warn('No options found for radial menu. Options should be list items with the "radial_option" class.');
		return;
	} else {
		console.log('Total Objects: ' + $optionCount);
	}
	
	// Divide the available space by the number of options to get the angle between each option
	var $spacingAngle = ($displayAngle / $optionCount);
	console.log('Spacing Angle: ' + $spacingAngle);
	
	// How far from the center should the items be displayed
	var $distance = 80;		
	
	var $currentAngle = -180;
	console.log('Current Angle: ' + $currentAngle);
	$objects.each(function () {
		console.log($(this).text());
		console.log('Current Angle: ' + $currentAngle);
		var $xPosition = ($distance * Math.cos($currentAngle * Math.PI/180) + 10);
		var $yPosition = ($distance * Math.sin($currentAngle* Math.PI/180) + 10);
		console.log('Element Position: ' + $xPosition + " : " + $yPosition);
		$(this).css({'left' : ($xPosition + 'px'), 'top': ($yPosition + 'px')});
		
		$currentAngle += $spacingAngle;
	});
}