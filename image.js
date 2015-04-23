/*\
title: $:/macros/welford/macros/spimg.js
type: application/javascript
module-type: macro

Creates a background image which can show only part of an image
\*/

(function(){

"use strict";

exports.name = "spimg";

exports.params = [
	{ name: "src" },
	{ name: "position" },
	{ name: "size" },
	{ name: "height" },
	{ name: "width" }
];

exports.run = function(src, position, size, height, width) {	
	//this.imageSource = src;
	this.imageSource = src;
	this.imageSource = this.getVariable("tv-get-export-image-link",{params: [{name: "src",value: src}],defaultValue: src});
	this.imageWidth = width || "100%";
	this.imageHeight = height || "200px";
	this.imagePosition= position || "0px 0px";
	this.imageSize = size || "cover";
	var output = [
		"<a href=\""+this.imageSource+"\">",
		"<span style=\"",
		"display:block;",
		"background-image: url('"+this.imageSource+"');",
		"background-size:"+this.imageSize+";",
		"background-repeat:no-repeat;",
		"width:"+this.imageWidth+";",
		"height:"+this.imageHeight+";",
		"background-position:"+this.imagePosition+";",
		"\">",
		"</span></a>"];
	return output.join("");
};

})();