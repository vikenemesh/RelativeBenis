// ==UserScript==
// @name		RelativeBenis
// @author		Chromegear
// @namespace	chromegear
// @include		*pr0gramm.com*
// @version		1.0
// @updateURL	https://github.com/Chromegear/RelativeBenis/raw/master/RelativeBenis.user.js
// @downloadURL	https://github.com/Chromegear/RelativeBenis/raw/master/RelativeBenis.user.js
// @copyright	2015+, Chromegear
// @description	Zeigt auf pr0gramm.com den prozentualen Anteil an Upvotes unter einem Bild an.
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

$(function() {
	p.View.Stream.Item = p.View.Stream.Item.extend({
		// Extend show()
		show: function(rowIndex, itemData, defaultHeight, jumpToComment) {
			this.parent(rowIndex, itemData, defaultHeight, jumpToComment);
			this._BenisInPercent();
		},
		// Extend vote()
		vote: function(ev, vote) {
			this.parent(ev, vote);
			this._BenisInPercent();
		},
		// Show score as percentage of upvotes of total vote count
		_BenisInPercent: function() {
			var total = this.data.item.up + this.data.item.down;
			var ratio_up = Math.round(this.data.item.up / total * 100);
			$('.item-vote .score').css('font-size', '36px');
			$('.item-vote .score').text(ratio_up + '%');
		}
	});
});

