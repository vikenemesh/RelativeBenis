// ==UserScript==
// @name		RelativeBenis
// @author		Chromegear
// @namespace	chromegear
// @include		*pr0gramm.com*
// @version		1.2
// @updateURL	https://github.com/Chromegear/RelativeBenis/raw/master/RelativeBenis.user.js
// @downloadURL	https://github.com/Chromegear/RelativeBenis/raw/master/RelativeBenis.user.js
// @copyright	2015+, Chromegear, vikenzor
// @description	Zeigt auf pr0gramm.com den prozentualen Anteil an Upvotes unter einem Bild an.
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

$(function() {
	// Hook in _BenisInPercent for these functions:
	var extendables = [
		'show',
		'vote',
		'fav'
	];
	// This will be the Class definition we use to extend p.View.Stream.Item
	var extendor = {};
	
	// Dynamically build the Class definition
	extendables.forEach(function(funcname) {
		extendor[funcname] = function() {
			this.parent.apply(this, arguments);
			this._BenisInPercent();
		};
	});
	// Add in our own function
	extendor['_BenisInPercent'] = function() {
		var item = this.data.item
		var ratio_up = Math.round(item.up / (item.up + item.down) * 100);
		$('.item-vote .score')
			.css( 'font-size', '36px' )
			.text( ratio_up + '%' );
	};

	p.View.Stream.Item = p.View.Stream.Item.extend(extendor);
});

