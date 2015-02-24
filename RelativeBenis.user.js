// ==UserScript==
// @name		RelativeBenis
// @author		Chromegear
// @namespace	chromegear
// @include		*pr0gramm.com*
// @version		0.2
// @updateURL	https://github.com/Chromegear/RelativeBenis/raw/master/RelativeBenis.user.js
// @downloadURL	https://github.com/Chromegear/RelativeBenis/raw/master/RelativeBenis.user.js
// @copyright	2015+, Chromegear
// @description	Zeigt auf pr0gramm.com den prozentualen Anteil an Upvotes unter einem Bild an.
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

$(function() {
	// Overwrite the "Class" with an extension of itself
	p.View.Stream.Item = p.View.Stream.Item.extend({
		template: tmpl_new,
		// Extend show()
		show: function(rowIndex, itemData, defaultHeight, jumpToComment) {
			this.parent(rowIndex, itemData, defaultHeight, jumpToComment);
			this._BenisInPercent();
		},
		// Extend vote(), update our details and bar
		vote: function(ev, vote) {
			this.parent(ev, vote);
			this._BenisInPercent();
		},
		_BenisInPercent: function() {
			var total = this.data.item.up + this.data.item.down;
			var ratio_up = Math.round(this.data.item.up / total * 100);
			$('.item-vote .score').css('font-size', '36px');
			$('.item-vote .score').text(ratio_up + '%');
		}
	});
});

