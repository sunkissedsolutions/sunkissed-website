/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


/*!
 * Bootstrap v3.3.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.0",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus","focus"==b.type)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.0",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.0",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.0",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.checkScrollbar=function(){this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return 0;var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.0",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.0",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)
}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);





/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);


// created by Minh Nguyen;
// version 1.05;

(function($) {
    
    // for zeptojs;
    $.isNumeric == null && ($.isNumeric = function(src) {
        return src != null && src.constructor === Number;
    });

    $.isFunction == null && ($.isFunction = function(src) {
        return src != null && src instanceof Function;
    });

    var $W = $(window);
    var $D = $(document);
    
    var layoutManager = {
        // default setting;
        defaultConfig: {
            animate: false,
            cellW: 100, // function(container) {return 100;}
            cellH: 100, // function(container) {return 100;}
            delay: 0, // slowdown active block;
            engine: 'giot', // 'giot' is a person name;
            fixSize: null, // resize + adjust = fill gap;
            //fixSize: 0, resize but keep ratio = no fill gap;
            //fixSize: 1, no resize + no adjust = no fill gap;
            gutterX: 15, // width spacing between blocks;
            gutterY: 15, // height spacing between blocks;
            keepOrder: false,
            selector: '> div',
            draggable: false,
            cacheSize: true, // caches the original size of block;
            rightToLeft: false,
            bottomToTop: false,
            onGapFound: function() {},
            onComplete: function() {},
            onResize: function() {},
            onBlockDrag: function() {},
            onBlockMove: function() {},
            onBlockDrop: function() {},
            onBlockReady: function() {},
            onBlockFinish: function() {},
            onBlockActive: function() {},
            onBlockResize: function() {}
        },
        plugin: {},
        totalGrid: 1,
        transition: false,
        loadBlock: function(item, setting) {
            var runtime = setting.runtime;
            var gutterX = runtime.gutterX;
            var gutterY = runtime.gutterY;
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;
            var block = null;
            var $item = $(item);
            var active = $item.data("active");
            var fixPos = $item.attr('data-position');
            var fixSize = parseInt($item.attr('data-fixSize'));
            var blockId = runtime.lastId++ + '-' + runtime.totalGrid;
            
            //ignore dragging block;
            if ($item.hasClass('fw-float')) return null;
            $item.attr({id: blockId, 'data-delay': item.index});

            //remove animation for speed render;
            if (setting.animate && this.transition) {
                this.setTransition(item, "");
            }

            isNaN(fixSize) && (fixSize = null);
            (fixSize == null) && (fixSize = setting.fixSize);
            var makeRound = (!fixSize) ? "round" : "ceil";
            // store original size;
           
            $item.attr('data-height') == null && $item.attr('data-height', $item.height());
            $item.attr('data-width') == null && $item.attr('data-width', $item.width());
            var height = 1 * $item.attr('data-height');
            var width = 1 * $item.attr('data-width');
            
            if (!setting.cacheSize) {
                item.style.width = "";
                width = $item.width();

                item.style.height = "";
                height = $item.height();
            }

            var col = !width ? 0 : Math[makeRound]((width + gutterX) / cellW);
            var row = !height ? 0 : Math[makeRound]((height + gutterY) / cellH);

            // estimate size;
            if (!fixSize && setting.cellH == 'auto') {
                $item.width(cellW * col - gutterX);
                item.style.height = "";
                height = $item.height();
                row = !height ? 0 : Math.round((height + gutterY) / cellH);
            }

            if (!fixSize && setting.cellW == 'auto') {
                $item.height(cellH * row - gutterY);
                item.style.width = "";
                width = $item.width();
                col = !width ? 0 : Math.round((width + gutterX) / cellW);
            }
            
            // for none resize block;
            if ((fixSize != null) && (col > runtime.limitCol || row > runtime.limitRow)) {
                block = null;
            } else {
                // get smallest width and smallest height of block;
                // using for image runtime;
                row && row < runtime.minHoB && (runtime.minHoB = row);
                col && col < runtime.minWoB && (runtime.minWoB = col);

                // get biggest width and biggest height of block;
                row > runtime.maxHoB && (runtime.maxHoB = row);
                col > runtime.maxWoB && (runtime.maxWoB = col);

                width == 0 && (col = 0);
                height == 0 && (row = 0);

                block = {
                    resize: false,
                    id: blockId,
                    width: col,
                    height: row,
                    fixSize: fixSize
                };

                // for fix position;
                if (fixPos) {
                    fixPos = fixPos.split("-");
                    block.y = 1 * fixPos[0];
                    block.x = 1 * fixPos[1];
                    block.width = fixSize != null ? col : Math.min(col, runtime.limitCol - block.x);
                    block.height = fixSize != null ? row : Math.min(row, runtime.limitRow - block.y);
                    var holeId = block.y + "-" + block.x + "-" + block.width + "-" + block.height;
                    if (active) {
                        runtime.holes[holeId] = {
                            id: block.id,
                            top: block.y,
                            left: block.x,
                            width: block.width,
                            height: block.height
                        };
                        this.setBlock(block, setting);
                    } else {
                        delete runtime.holes[holeId];
                    }
                    
                }
            }

            // for css animation;
            if ($item.attr("data-state") == null) {
                $item.attr("data-state", "init");
            } else {
                $item.attr("data-state", "move");
            }

            setting.onBlockReady.call(item, block, setting);

            return (fixPos && active) ? null : block;
        },
        setBlock: function(block, setting) {
            var runtime = setting.runtime;
            var gutterX = runtime.gutterX;
            var gutterY = runtime.gutterY;
            var height = block.height;
            var width = block.width;
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;
            var x = block.x;
            var y = block.y;

            if (setting.rightToLeft) {
                x = runtime.limitCol - x - width;
            }
            if (setting.bottomToTop) {
                y = runtime.limitRow - y - height;
            }

            var realBlock = {
                fixSize: block.fixSize,
                resize: block.resize,
                top: y * cellH,
                left: x  * cellW,
                width: cellW * width - gutterX,
                height: cellH * height - gutterY
            };
            
            realBlock.top = 1 * realBlock.top.toFixed(2);
            realBlock.left = 1 * realBlock.left.toFixed(2);
            realBlock.width = 1 * realBlock.width.toFixed(2);
            realBlock.height = 1 * realBlock.height.toFixed(2);

            //runtime.length += 1;
            block.id && (runtime.blocks[block.id] = realBlock);

            // for append feature;
            return realBlock;
        },
        showBlock: function(item, setting) {
            var runtime = setting.runtime;
            var method = setting.animate && !this.transition ? 'animate' : 'css';
            var block = runtime.blocks[item.id];
            var $item = $(item);
            var self = this;
            var start = $item.attr("data-state") != "move";
            var trans = start ? "width 0.5s, height 0.5s" : "top 0.5s, left 0.5s, width 0.5s, height 0.5s, opacity 0.5s";
            
            item.delay && clearTimeout(item.delay);
            //ignore dragging block;
            if ($item.hasClass('fw-float')) return;
            
            // kill the old transition;
            self.setTransition(item, "");
            item.style.position = "absolute";
            setting.onBlockActive.call(item, block, setting);
            
            function action() {
                // start to arrange;
                start && $item.attr("data-state", "start");
                // add animation by using css3 transition;
                if (setting.animate && self.transition) {
                    self.setTransition(item, trans);
                }

                // for hidden block;
                if (!block) {
                    //var position = $item.position(); <= make speed so slow;
                    var height = parseInt(item.style.height) || 0;
                    var width = parseInt(item.style.width) || 0;
                    var left = parseInt(item.style.left) || 0;
                    var top = parseInt(item.style.top) || 0;
                    $item[method]({
                        left: left + width / 2,
                        top: top + height / 2,
                        width: 0,
                        height: 0,
                        opacity: 0
                    });
                } else {
                    if (block.fixSize) {
                        block.height = 1 * $item.attr("data-height");
                        block.width = 1 * $item.attr("data-width");
                    }

                    $item["css"]({
                        opacity: 1,
                        width: block.width,
                        height: block.height
                    });

                    // for animating by javascript;
                    $item[method]({
                        top: block.top,
                        left: block.left
                    });

                    if ($item.attr('data-nested') != null) {
                        self.nestedGrid(item, setting);
                    }
                }

                runtime.length -= 1;

                setting.onBlockFinish.call(item, block, setting);

                runtime.length == 0 && setting.onComplete.call(item, block, setting);
            }

            block && block.resize && setting.onBlockResize.call(item, block, setting);
            
            setting.delay > 0 ? (item.delay = setTimeout(action, setting.delay * $item.attr("data-delay"))) : action(); 
        },
        nestedGrid: function(item, setting) {
            var innerWall, $item = $(item), runtime = setting.runtime;
            var gutterX = $item.attr("data-gutterX") || setting.gutterX;
            var gutterY = $item.attr("data-gutterY") || setting.gutterY;
            var method = $item.attr("data-method") || "fitZone";
            var nested = $item.attr('data-nested') || "> div";
            var cellH = $item.attr("data-cellH") || setting.cellH;
            var cellW = $item.attr("data-cellW") || setting.cellW;
            var block = runtime.blocks[item.id];
            
            if (block) {
                innerWall = new Freewall($item);
                innerWall.reset({
                    cellH: cellH,
                    cellW: cellW,
                    gutterX: 1 * gutterX,
                    gutterY: 1 * gutterY,
                    selector: nested,
                    cacheSize: false
                });

                switch (method) {
                    case "fitHeight":
                        innerWall[method](block.height);
                        break;
                    case "fitWidth":
                        innerWall[method](block.width);
                        break;
                    case "fitZone":
                        innerWall[method](block.width, block.height);
                        break;
                }
            }
        },
        adjustBlock: function(block, setting) {
            var runtime = setting.runtime;
            var gutterX = runtime.gutterX;
            var gutterY = runtime.gutterY;
            var $item = $("#" + block.id);
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;

            if (setting.cellH == 'auto') {
                $item.width(block.width * cellW - gutterX);
                $item[0].style.height = "";
                block.height = Math.round(($item.height() + gutterY) / cellH);
            }
        },
        adjustUnit: function(width, height, setting) {
            var gutterX = setting.gutterX;
            var gutterY = setting.gutterY;
            var runtime = setting.runtime;
            var cellW = setting.cellW;
            var cellH = setting.cellH;

            $.isFunction(cellW) && (cellW = cellW(width));
            cellW = 1 * cellW;
            !$.isNumeric(cellW) && (cellW = 1);
            
            $.isFunction(cellH) && (cellH = cellH(height));
            cellH = 1 * cellH;
            !$.isNumeric(cellH) && (cellH = 1);

            if ($.isNumeric(width)) {
                // adjust cell width via container;
                cellW < 1 && (cellW = cellW * width);

                // estimate total columns;
                var limitCol = Math.max(1, Math.floor(width / cellW));

                // adjust unit size for fit width;
                if (!$.isNumeric(gutterX)) {
                    gutterX = (width - limitCol * cellW) / Math.max(1, (limitCol - 1));
                    gutterX = Math.max(0, gutterX);
                }

                limitCol = Math.floor((width + gutterX) / cellW);
                runtime.cellW = (width + gutterX) / Math.max(limitCol, 1);
                runtime.cellS = runtime.cellW / cellW;
                runtime.gutterX = gutterX;
                runtime.limitCol = limitCol;
            } 

            if ($.isNumeric(height)) {
                // adjust cell height via container;
                cellH < 1 && (cellH = cellH * height);

                // estimate total rows;
                var limitRow = Math.max(1, Math.floor(height / cellH));

                // adjust size unit for fit height;
                if (!$.isNumeric(gutterY)) {
                    gutterY = (height - limitRow * cellH) / Math.max(1, (limitRow - 1));
                    gutterY = Math.max(0, gutterY);
                }

                limitRow = Math.floor((height + gutterY) / cellH);
                runtime.cellH = (height + gutterY) / Math.max(limitRow, 1);
                runtime.cellS = runtime.cellH / cellH;
                runtime.gutterY = gutterY;
                runtime.limitRow = limitRow;
            } 

            if (!$.isNumeric(width)) {
                // adjust cell width via cell height;
                cellW < 1 && (cellW = runtime.cellH);
                runtime.cellW = cellW != 1 ? cellW * runtime.cellS : 1;
                runtime.gutterX = gutterX;
                runtime.limitCol = 666666;
            }

            if (!$.isNumeric(height)) {
                // adjust cell height via cell width;
                cellH < 1 && (cellH = runtime.cellW);
                runtime.cellH = cellH != 1 ? cellH * runtime.cellS : 1;
                runtime.gutterY = gutterY;
                runtime.limitRow = 666666;
            }

            runtime.keepOrder = setting.keepOrder;
        },
        resetGrid: function(runtime) {
            runtime.blocks = {};
            runtime.length = 0;
            runtime.cellH = 0;
            runtime.cellW = 0;
            runtime.lastId = 1;
            runtime.matrix = {};
            runtime.totalCol = 0;
            runtime.totalRow = 0;
        },
        setDraggable: function(item, option) {
            var isTouch = false;
            var config = {
                startX: 0, //start clientX;
                startY: 0, 
                top: 0,
                left: 0,
                handle: null,
                onDrop: function() {},
                onDrag: function() {},
                onStart: function() {}
            };

            $(item).each(function() {
                var setting = $.extend({}, config, option);
                var handle = setting.handle || this;
                var ele = this;
                var $E = $(ele);
                var $H = $(handle);

                var posStyle = $E.css("position");
                posStyle != "absolute" && $E.css("position", "relative");
                

                function mouseDown(evt) {
                    evt.stopPropagation();
                    evt = evt.originalEvent;

                    if (evt.touches) {
                        isTouch = true;
                        evt = evt.changedTouches[0];
                    }

                    if (evt.button != 2 && evt.which != 3) {
                        setting.onStart.call(ele, evt);
                        
                        setting.startX = evt.clientX;
                        setting.startY = evt.clientY;
                        setting.top = parseInt($E.css("top")) || 0;
                        setting.left = parseInt($E.css("left")) || 0;
                        
                        $D.bind("mouseup touchend", mouseUp);
                        $D.bind("mousemove touchmove", mouseMove); 
                    }

                    return false;
                };
                
                        
                function mouseMove(evt) {
                    evt = evt.originalEvent;
                    isTouch && (evt = evt.changedTouches[0]);
                    
                    $E.css({
                        top: setting.top - (setting.startY - evt.clientY),
                        left: setting.left - (setting.startX - evt.clientX)
                    });
                    
                    setting.onDrag.call(ele, evt);
                };
                
                function mouseUp(evt) {
                    evt = evt.originalEvent;
                    isTouch && (evt = evt.changedTouches[0]);
        
                    setting.onDrop.call(ele, evt);

                    $D.unbind("mouseup touchend", mouseUp);
                    $D.unbind("mousemove touchmove", mouseMove);
                };

                // ignore drag drop on text field;
                $E.find("iframe, form, input, textarea, .ignore-drag")
                .each(function() {
                    $(this).on("touchstart mousedown", function(evt) {
                        evt.stopPropagation();
                    });
                });
                
                $D.unbind("mouseup touchend", mouseUp);
                $D.unbind("mousemove touchmove", mouseMove);
                $H.unbind("mousedown touchstart").bind("mousedown touchstart", mouseDown);

            });
        },
        setTransition: function(item, trans) {
            var style = item.style;
            var $item = $(item);
                
            // remove animation;
            if (!this.transition && $item.stop) {
                $item.stop();
            } else if (style.webkitTransition != null) {
                style.webkitTransition = trans;
            } else if (style.MozTransition != null) {
                style.MozTransition = trans;
            } else if (style.msTransition != null) {
                style.msTransition = trans;
            } else if (style.OTransition != null) {
                style.OTransition = trans;
            } else {
                style.transition = trans;
            }
        },
        getFreeArea: function(t, l, runtime) {
            var maxY = Math.min(t + runtime.maxHoB, runtime.limitRow);
            var maxX = Math.min(l + runtime.maxWoB, runtime.limitCol);
            var minX = maxX;
            var minY = maxY;
            var matrix = runtime.matrix;
            
            // find limit zone by horizon;
            for (var y = t; y < minY; ++y) {
                for (var x = l; x < maxX; ++x) {
                    if (matrix[y + '-' + x]) {
                        (l < x && x < minX) && (minX = x);
                    }
                }
            }
            
            // find limit zone by vertical;
            for (var y = t; y < maxY; ++y) {
                for (var x = l; x < minX; ++x) {
                    if (matrix[y + '-' + x]) {
                        (t < y && y < minY) && (minY = y);
                    }
                }
            }

            return {
                top: t,
                left: l,
                width: minX - l,
                height: minY - t
            };

        },
        setWallSize: function(runtime, container) {
            var totalRow = runtime.totalRow;
            var totalCol = runtime.totalCol;
            var gutterY = runtime.gutterY;
            var gutterX = runtime.gutterX;
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;
            var totalWidth = Math.max(0, cellW * totalCol - gutterX);
            var totalHeight = Math.max(0, cellH * totalRow - gutterY);
            
            container.attr({
                'data-total-col': totalCol,
                'data-total-row': totalRow,
                'data-wall-width': Math.ceil(totalWidth),
                'data-wall-height': Math.ceil(totalHeight)
            });

            if (runtime.limitCol < runtime.limitRow) {
                // do not set height with nesting grid;
                !container.attr("data-height") && container.height(Math.ceil(totalHeight));
            }
        }
    };

    

    var engine = {
        // Giot just a person name;
        giot: function(items, setting) {
            var runtime = setting.runtime,
                row = runtime.limitRow,
                col = runtime.limitCol,
                x = 0,
                y = 0,
                maxX = runtime.totalCol,
                maxY = runtime.totalRow,
                wall = {},
                holes = runtime.holes,
                block = null,
                matrix = runtime.matrix,
                bigLoop = Math.max(col, row),
                freeArea = null,
                misBlock = null,
                fitWidth = col < row ? 1 : 0,
                lastBlock = null,
                smallLoop = Math.min(col, row);
            
            // fill area with top, left, width, height;
            function fillMatrix(id, t, l, w, h) {
                for (var y = t; y < t + h;) {
                    for (var x = l; x < l + w;) {
                        matrix[y + '-' + x] = id;
                        ++x > maxX && (maxX = x);
                    }
                    ++y > maxY && (maxY = y);
                }
            }
            
            // set holes on the wall;
            for (var i in holes) {
                if (holes.hasOwnProperty(i)) {
                    fillMatrix(holes[i]["id"] || true, holes[i]['top'], holes[i]['left'], holes[i]['width'], holes[i]['height']);
                }
            }
            

            for (var b = 0; b < bigLoop; ++b) {
                if (!items.length) break;
                fitWidth ? (y = b) : (x = b);
                lastBlock = null;

                for (var s = 0; s < smallLoop; ++s) {
                    if (!items.length) break;
                    block = null;
                    fitWidth ? (x = s) : (y = s);
                    if (runtime.matrix[y + '-' + x]) continue;
                    freeArea = layoutManager.getFreeArea(y, x, runtime);

                    // trying resize last block to fit free area;
                    if (setting.fixSize == null) {
                        // resize near block to fill gap;
                        if (lastBlock && !fitWidth && runtime.minHoB > freeArea.height) {
                            lastBlock.height += freeArea.height;
                            lastBlock.resize = true;
                            fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
                            layoutManager.setBlock(lastBlock, setting);
                            continue;
                        } else if (lastBlock && fitWidth && runtime.minWoB > freeArea.width) {
                            lastBlock.width += freeArea.width;
                            lastBlock.resize = true;
                            fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
                            layoutManager.setBlock(lastBlock, setting);
                            continue;
                        }
                    }
                    
                    // get the next block to keep order;
                    if (runtime.keepOrder) {
                        block = items.shift();
                        block.resize = true;
                    } else {
                        // find a suitable block to fit gap;
                        for (var i = 0; i < items.length; ++i) {
                            if (items[i].height > freeArea.height) continue;
                            if (items[i].width > freeArea.width) continue;
                            block = items.splice(i, 1)[0];
                            break;
                        }

                        // trying resize the other block to fit gap;
                        if (block == null && setting.fixSize == null) {
                            // get other block fill to gap;
                            for (var i = 0; i < items.length; ++i) {
                                if (items[i]['fixSize'] != null) continue;
                                block = items.splice(i, 1)[0];
                                block.resize = true;
                                break;
                            }
                            
                        }
                    }

                    
                    if (block != null) {
                        // resize block with free area;
                        if (block.resize) {
                            if (fitWidth) {
                                block.width = freeArea.width;
                                if (setting.cellH == 'auto') {
                                    layoutManager.adjustBlock(block, setting);
                                }
                                // for fitZone;
                                block.height = Math.min(block.height, freeArea.height);
                            } else {
                                block.height = freeArea.height;
                                // for fitZone;
                                block.width = Math.min(block.width, freeArea.width);
                            }
                        }

                        wall[block.id] = {
                            id: block.id,
                            x: x,
                            y: y,
                            width: block.width,
                            height: block.height,
                            resize: block.resize,
                            fixSize: block.fixSize
                        };
                        
                        // keep success block for next round;
                        lastBlock = wall[block.id];

                        fillMatrix(lastBlock.id, lastBlock.y, lastBlock.x, lastBlock.width, lastBlock.height);
                        layoutManager.setBlock(lastBlock, setting);
                    } else {
                        // get expect area;
                        var misBlock = {
                            x: x,
                            y: y,
                            fixSize: 0
                        };
                        if (fitWidth) {
                            misBlock.width = freeArea.width;
                            misBlock.height = 0;
                            var lastX = x - 1;
                            var lastY = y;
                            
                            while (matrix[lastY + '-' + lastX]) {
                                matrix[lastY + '-' + x] = true;
                                misBlock.height += 1;
                                lastY += 1;
                            }
                        } else {
                            misBlock.height = freeArea.height;
                            misBlock.width = 0;
                            var lastY = y - 1;
                            var lastX = x;
                            
                            while (matrix[lastY + '-' + lastX]) {
                                matrix[y + '-' + lastX] = true;
                                misBlock.width += 1;
                                lastX += 1;
                            }
                        }
                        setting.onGapFound(layoutManager.setBlock(misBlock, setting), setting);
                    }
                }

            }

            runtime.matrix = matrix;
            runtime.totalRow = maxY;
            runtime.totalCol = maxX;
        }
    };



    function Freewall(selector) {
        
        var container = $(selector);
        if (container.css('position') == 'static') {
            container.css('position', 'relative');
        }
        var MAX = Number.MAX_VALUE;
        var klass = this;
        // increase the instance index;
        layoutManager.totalGrid += 1;

        var setting = $.extend({}, layoutManager.defaultConfig);
        var runtime = {
            arguments: null,
            blocks: {}, // store all items;
            events: {}, // store custome events;
            matrix: {},
            holes: {}, // forbidden zone;
            
            cellW: 0,
            cellH: 0, // unit adjust;
            cellS: 1, // unit scale;
            
            filter: '', // filter selector;
            lastId: 0,
            length: 0,

            maxWoB: 0, // max width of block;
            maxHoB: 0,
            minWoB: MAX, 
            minHoB: MAX, // min height of block;

            running: 0, // flag to check layout arranging;

            gutterX: 15, 
            gutterY: 15,

            totalCol: 0,
            totalRow: 0,

            limitCol: 666666, // maximum column; 
            limitRow: 666666,

            sortFunc: null,
            keepOrder: false
        };
        setting.runtime = runtime;
        runtime.totalGrid = layoutManager.totalGrid;
        
        // check browser support transition;
        var bodyStyle = document.body.style;
        if (!layoutManager.transition) {
            (bodyStyle.webkitTransition != null ||
            bodyStyle.MozTransition != null ||
            bodyStyle.msTransition != null ||
            bodyStyle.OTransition != null ||
            bodyStyle.transition != null) &&
            (layoutManager.transition = true);
        }
        

        function setDraggable(item) {
            
            var gutterX = runtime.gutterX;
            var gutterY = runtime.gutterY;
            var cellH = runtime.cellH;
            var cellW = runtime.cellW;
            var $item = $(item);
            var handle = $item.find($item.attr("data-handle"));
            layoutManager.setDraggable(item, {
                handle: handle[0],
                onStart: function(event) {
                    if (setting.animate && layoutManager.transition) {
                        layoutManager.setTransition(this, "");
                    }
                    $item.css('z-index', 9999).addClass('fw-float');
                    
                    setting.onBlockDrag.call(item, event);
                },
                onDrag: function(event, tracker) {
                    var position = $item.position();
                    var top = Math.round(position.top / cellH);
                    var left = Math.round(position.left / cellW);
                    var width = Math.round($item.width() / cellW);
                    var height = Math.round($item.height() / cellH);
                    top = Math.min(Math.max(0, top), runtime.limitRow - height);
                    left = Math.min(Math.max(0, left), runtime.limitCol - width);
                    klass.setHoles({top: top, left: left, width: width, height: height});
                    klass.refresh();

                    setting.onBlockMove.call(item, event);
                },
                onDrop: function(event) {
                    var position = $item.position();
                    var top = Math.round(position.top / cellH);
                    var left = Math.round(position.left / cellW);
                    var width = Math.round($item.width() / cellW);
                    var height = Math.round($item.height() / cellH);
                    top = Math.min(Math.max(0, top), runtime.limitRow - height);
                    left = Math.min(Math.max(0, left), runtime.limitCol - width);

                    $item.removeClass('fw-float');
                    $item.css({
                        zIndex: "auto",
                        top: top * cellH,
                        left: left * cellW
                    });
                    
                    //check old drag element;
                    var x, y, key, oldDropId;
                    for (y = 0; y < height; ++y) {
                        for (x = 0; x < width; ++x) {
                            key = (y + top) + "-" + (x + left);
                            oldDropId = runtime.matrix[key];
                            if (oldDropId && oldDropId != true) {
                                $("#" + oldDropId).removeAttr("data-position");
                            }
                        }
                    }
                    
                    runtime.holes = {};
                    
                    $item.attr({
                        "data-width": $item.width(),
                        "data-height": $item.height(),
                        "data-position": top + "-" + left
                    });

                    klass.refresh();

                    setting.onBlockDrop.call(item, event);
                }
            });
        }
        

        $.extend(klass, {
            
            addCustomEvent: function(name, func) {
                var events = runtime.events;
                name = name.toLowerCase();
                !events[name] && (events[name] = []);
                func.eid = events[name].length;
                events[name].push(func);
                return this;
            },

            appendBlock: function(items) {
                var allBlock = $(items).appendTo(container);
                var block = null;
                var activeBlock = [];
                
                if (runtime.arguments) {

                    if ($.isFunction(runtime.sortFunc)) {
                        allBlock.sort(runtime.sortFunc);
                    }

                    allBlock.each(function(index, item) {
                        item.index = ++index;
                        block = layoutManager.loadBlock(item, setting);
                        block && activeBlock.push(block);
                    });

                    engine[setting.engine](activeBlock, setting);
                    
                    layoutManager.setWallSize(runtime, container);
                    
                    runtime.length = allBlock.length;

                    allBlock.each(function(index, item) {
                        layoutManager.showBlock(item, setting);
                        if (setting.draggable || item.getAttribute('data-draggable')) {
                            setDraggable(item);
                        }
                    });
                }
            },
            /*
            add one or more blank area (hole) on layout;
            example:
                
                wall.appendHoles({
                    top: 10,
                    left: 36,
                    width: 2,
                    height: 6
                });

                wall.appendHoles([
                    {
                        top: 16,
                        left: 16,
                        width: 8,
                        height: 2
                    },
                    {
                        top: 10,
                        left: 36,
                        width: 2,
                        height: 6
                    }
                ]);

            */
            appendHoles: function(holes) {
                var newHoles = [].concat(holes), h = {}, i;
                for (i = 0; i < newHoles.length; ++i) {
                    h = newHoles[i];
                    runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height] = h;
                }
                return this;
            },

            container: container,

            destroy: function() {
                var allBlock = container.find(setting.selector).removeAttr('id'),
                    block = null,
                    activeBlock = [];

                allBlock.each(function(index, item) {
                    $item = $(item);
                    var width = 1 * $item.attr('data-width') || "";
                    var height = 1 * $item.attr('data-height') || "";
                    $item.width(width).height(height).css({
                        position: 'static'
                    });
                });
            },

            fillHoles: function(holes) {
                if (arguments.length == 0) {
                    runtime.holes = {};
                } else {
                    var newHoles = [].concat(holes), h = {}, i;
                    for (i = 0; i < newHoles.length; ++i) {
                        h = newHoles[i];
                        delete runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height];
                    }
                }
                return this;
            },

            filter: function(filter) {
                runtime.filter = filter;
                if (runtime.arguments) {
                    this.refresh();
                }
                return this;
            },

            fireEvent: function(name, object, setting) {
                var events = runtime.events;
                name = name.toLowerCase();
                if (events[name] && events[name].length) {
                    for (var i = 0; i < events[name].length; ++i) {
                        events[name][i].call(this, object, setting);
                    }
                }
                return this;
            },

            fitHeight: function(height) {

                var height = height ? height : container.height() || $W.height();
                
                this.fitZone('auto', height);

                runtime.arguments = arguments;
            },

            fitWidth: function(width) {

                var width = width ? width : container.width() || $W.width();
                
                this.fitZone(width, 'auto');

                runtime.arguments = arguments;
            },

            fitZone: function(width, height) {
                var allBlock = container.find(setting.selector).removeAttr('id'),
                    block = null,
                    activeBlock = [];

                height = height ? height : container.height() || $W.height();
                width = width ? width : container.width() || $W.width();
                
                runtime.arguments = arguments;
                
                layoutManager.resetGrid(runtime);
                
                layoutManager.adjustUnit(width, height, setting);

                if (runtime.filter) {
                    allBlock.data('active', 0);
                    allBlock.filter(runtime.filter).data('active', 1);
                } else {
                    allBlock.data('active', 1);
                }
                
                if ($.isFunction(runtime.sortFunc)) {
                    allBlock.sort(runtime.sortFunc);
                }

                allBlock.each(function(index, item) {
                    var $item = $(item);
                    item.index = ++index;
                    block = layoutManager.loadBlock(item, setting);
                    block && $item.data("active") && activeBlock.push(block);
                });

                klass.fireEvent('onGridReady', container, setting);

                engine[setting.engine](activeBlock, setting);
                
                layoutManager.setWallSize(runtime, container);
                
                klass.fireEvent('onGridArrange', container, setting);

                runtime.length = allBlock.length;
               
                allBlock.each(function(index, item) {
                    layoutManager.showBlock(item, setting);
                    if (setting.draggable || item.getAttribute('data-draggable')) {
                        setDraggable(item);
                    }
                });
            },

            /*
            set block with special position, the top and left are multiple of unit width/height;
            example:

                wall.fixPos({
                    top: 0,
                    left: 0,
                    block: $('.free')
                });
            */
            fixPos: function(option) {
                $(option.block).attr({'data-position': option.top + "-" + option.left});
                return this;
            },

            /*
            set block with special size, the width and height are multiple of unit width/height;
            example:

                wall.fixSize({
                    height: 5,
                    width: 2,
                    block: $('.free')
                });
            */
            fixSize: function(option) {
                option.height != null && $(option.block).attr({'data-height': option.height});
                option.width != null && $(option.block).attr({'data-width': option.width});
                return this;
            },

            prepend: function(items) {
                container.prepend(items);
                if (runtime.arguments) {
                    this.refresh();
                }
                return this;
            },

            refresh: function() {
                var params = arguments.length ? arguments : runtime.arguments;
                var oldArg = runtime.arguments;
                var method = oldArg ? oldArg.callee : this.fitWidth; 
                method.apply(this, Array.prototype.slice.call(params, 0));
                return this;
            },

            /*
            custom layout setting;
            example:

                wall.reset({
                    selector: '.brick',
                    animate: true,
                    cellW: 160,
                    cellH: 160,
                    delay: 50,
                    onResize: function() {
                        wall.fitWidth();
                    }
                });
            */
            reset: function(option) {
                $.extend(setting, option);
                return this;
            },
            
            /*
            create one or more blank area (hole) on layout;
            example:
                
                wall.setHoles({
                    top: 2,
                    left: 2,
                    width: 2,
                    height: 2
                });
            */
            
            setHoles: function(holes) {
                var newHoles = [].concat(holes), h = {}, i;
                runtime.holes = {};
                for (i = 0; i < newHoles.length; ++i) {
                    h = newHoles[i];
                    runtime.holes[h.top + "-" + h.left + "-" + h.width + "-" + h.height] = h;
                }
                return this;
            },
            /*
            sort items by using array sort function;
            example:

                wall.sortBy(function(itemA, itemB) {
                    return $(itemA).width() - $(itemB).width();
                });
            */
            sortBy: function(func) {
                runtime.sortFunc = func;
                if (runtime.arguments) {
                    this.refresh();
                }
                return this;
            },
            
            unFilter: function() {
                delete runtime.filter;
                this.refresh();
                return this;
            }
        });
        
        container.attr('data-min-width', Math.floor($W.width() / 80) * 80);
        // execute plugins;
        for (var i in layoutManager.plugin) {
            if (layoutManager.plugin.hasOwnProperty(i)) {
                layoutManager.plugin[i].call(klass, setting, container);
            }
        }

        // setup resize event;
        $W.resize(function() {
            if (runtime.running) return;
            runtime.running = 1;
            setTimeout(function() {
                runtime.running = 0;
                setting.onResize.call(klass, container);
            }, 122);
            container.attr('data-min-width', Math.floor($W.width() / 80) * 80);
        });
    };

    /*
    add default setting;
    example:

        Freewall.addConfig({
            offsetLeft: 0
        });
    */
    Freewall.addConfig = function(newConfig) {
        // add default setting;
        $.extend(layoutManager.defaultConfig, newConfig);    
    };
    

    /*
    support create new arrange algorithm;
    example:

        Freewall.createEngine({
            slice: function(items, setting) {
                // slice engine;
            }
        });
    */
    Freewall.createEngine = function(engineData) {
        // create new engine;
        $.extend(engine, engineData);
    };
    
    /*
    support create new plugin;
    example:
        
        Freewall.createPlugin({
            centering: function(setting, container) {
                console.log(this);
                console.log(setting);
            }
        })l
    */
    Freewall.createPlugin = function(pluginData) {
        // register new plugin;
        $.extend(layoutManager.plugin, pluginData);
    };

    /*
    support access helper function;
    example:

        Freewall.getMethod('setBlock')(block, setting);
    */
    Freewall.getMethod = function(method) {
        // get helper method;
        return layoutManager[method];
    };
    
    window.Freewall = window.freewall = Freewall;
 
})(window.Zepto || window.jQuery);


/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});



/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);


/*!
 * jQuery Form Plugin
 * version: 3.48.0-2013.12.28
 * Requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if ( els ) {
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form=' + formId + ']').get();
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
		else if (t == "file") {
			if (/MSIE/.test(navigator.userAgent)) {
				$(this).replaceWith($(this).clone(true));
			} else {
				$(this).val('');
			}
		}
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));


/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */
(function(a){a.extend(a.fn,{validate:function(b){if(!this.length){b&&b.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return}var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){if(a(this[0]).is("form"))return this.validate().form();var b=!0,c=a(this[0].form).validate();return this.each(function(){b&=c.element(this)}),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d=this[0];if(b){var e=a.data(d.form,"validator").settings,f=e.rules,g=a.validator.staticRules(d);switch(b){case"add":a.extend(g,a.validator.normalizeRule(c)),f[d.name]=g,c.messages&&(e.messages[d.name]=a.extend(e.messages[d.name],c.messages));break;case"remove":if(!c)return delete f[d.name],g;var h={};return a.each(c.split(/\s/),function(a,b){h[b]=g[b],delete g[b]}),h}}var i=a.validator.normalizeRules(a.extend({},a.validator.metadataRules(d),a.validator.classRules(d),a.validator.attributeRules(d),a.validator.staticRules(d)),d);if(i.required){var j=i.required;delete i.required,i=a.extend({required:j},i)}return i}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+b.value)},filled:function(b){return!!a.trim(""+b.value)},unchecked:function(a){return!a.checked}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return arguments.length===1?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),c)}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a,b){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function(a,b){!this.checkable(a)&&(a.name in this.submitted||!this.optional(a))&&this.element(a)},onkeyup:function(a,b){if(b.which===9&&this.elementValue(a)==="")return;(a.name in this.submitted||a===this.lastActive)&&this.element(a)},onclick:function(a,b){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){b.type==="radio"?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){b.type==="radio"?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function d(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,"");c.settings[d]&&c.settings[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var b=this.groups={};a.each(this.settings.groups,function(c,d){a.each(d.split(/\s/),function(a,d){b[d]=c})});var c=this.settings.rules;a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",d).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",d),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){b=this.validationTargetFor(this.clean(b)),this.lastElement=b,this.prepareElement(b),this.currentElements=a(b);var c=this.check(b)!==!1;return c?delete this.invalid[b.name]:this.invalid[b.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),c},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0;for(var c in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()===0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&a.grep(this.errorList,function(a){return a.element.name===b.name}).length===1&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.replace(" ",".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c=a(b).attr("type"),d=a(b).val();return c==="radio"||c==="checkbox"?a('input[name="'+a(b).attr("name")+'"]:checked').val():typeof d=="string"?d.replace(/\r/g,""):d},check:function(b){b=this.validationTargetFor(this.clean(b));var c=a(b).rules(),d=!1,e=this.elementValue(b),f;for(var g in c){var h={method:g,parameters:c[g]};try{f=a.validator.methods[g].call(this,e,b,h.parameters);if(f==="dependency-mismatch"){d=!0;continue}d=!1;if(f==="pending"){this.toHide=this.toHide.not(this.errorsFor(b));return}if(!f)return this.formatAndAdd(b,h),!1}catch(i){throw this.settings.debug&&window.console&&console.log("exception occured when checking element "+b.id+", check the '"+h.method+"' method",i),i}}if(d)return;return this.objectLength(c)&&this.successList.push(b),!0},customMetaMessage:function(b,c){if(!a.metadata)return;var d=this.settings.meta?a(b).metadata()[this.settings.meta]:a(b).metadata();return d&&d.messages&&d.messages[c]},customDataMessage:function(b,c){return a(b).data("msg-"+c.toLowerCase())||b.attributes&&a(b).attr("data-msg-"+c.toLowerCase())},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a];return undefined},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),this.customMetaMessage(b,c),!this.settings.ignoreTitle&&b.title||undefined,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;typeof d=="function"?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b;for(a=0;this.errorList[a];a++){var c=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message)}this.errorList.length&&(this.toShow=this.toShow.add(this.containers));if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.attr("generated")&&d.html(c)):(d=a("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(b),generated:!0}).addClass(this.settings.errorClass).html(c||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d,b)),this.toShow=this.toShow.add(d)},errorsFor:function(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")===c})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find('[name="'+b+'"]')},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a,b){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&this.pendingRequest===0&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&this.pendingRequest===0&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c={},d=a(b);for(var e in a.validator.methods){var f;e==="required"?(f=d.get(0).getAttribute(e),f===""&&(f=!0),f=!!f):f=d.attr(e),f?c[e]=f:d[0].getAttribute("type")===e&&(c[e]=!0)}return c.maxlength&&/-1|2147483647|524288/.test(c.maxlength)&&delete c.maxlength,c},metadataRules:function(b){if(!a.metadata)return{};var c=a.data(b.form,"validator").settings.meta;return c?a(b).metadata()[c]:a(b).metadata()},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1){delete b[d];return}if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=e.param!==undefined?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength","min","max"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){b[this]&&(b[this]=[Number(b[this][0]),Number(b[this][1])])}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b.messages&&delete b.messages,b},normalizeRule:function(b){if(typeof b=="string"){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=d!==undefined?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if(c.nodeName.toLowerCase()==="select"){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e=this.previousValue(c);this.settings.messages[c.name]||(this.settings.messages[c.name]={}),e.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=e.message,d=typeof d=="string"&&{url:d}||d;if(this.pending[c.name])return"pending";if(e.old===b)return e.valid;e.old=b;var f=this;this.startRequest(c);var g={};return g[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:g,success:function(d){f.settings.messages[c.name].remote=e.originalMessage;var g=d===!0||d==="true";if(g){var h=f.formSubmitted;f.prepareElement(c),f.formSubmitted=h,f.successList.push(c),delete f.invalid[c.name],f.showErrors()}else{var i={},j=d||f.defaultMessage(c,"remote");i[c.name]=e.message=a.isFunction(j)?j(b):j,f.invalid[c.name]=!0,f.showErrors(i)}e.valid=g,f.stopRequest(c,g)}},d)),"pending"},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c=0,d=0,e=!1;a=a.replace(/\D/g,"");for(var f=a.length-1;f>=0;f--){var g=a.charAt(f);d=parseInt(g,10),e&&(d*=2)>9&&(d-=9),c+=d,e=!e}return c%10===0},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()}}}),a.format=a.validator.format})(jQuery),function(a){var b={};if(a.ajaxPrefilter)a.ajaxPrefilter(function(a,c,d){var e=a.port;a.mode==="abort"&&(b[e]&&b[e].abort(),b[e]=d)});else{var c=a.ajax;a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return e==="abort"?(b[f]&&b[f].abort(),b[f]=c.apply(this,arguments)):c.apply(this,arguments)}}}(jQuery),function(a){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&a.each({focus:"focusin",blur:"focusout"},function(b,c){function d(b){return b=a.event.fix(b),b.type=c,a.event.handle.call(this,b)}a.event.special[c]={setup:function(){this.addEventListener(b,d,!0)},teardown:function(){this.removeEventListener(b,d,!0)},handler:function(b){var d=arguments;return d[0]=a.event.fix(b),d[0].type=c,a.event.handle.apply(this,d)}}}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);if(e.is(b))return d.apply(e,arguments)})}})}(jQuery)



/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:(Modernizr.csstransforms3d),isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);


/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
/*!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
*/


/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this);



/*! Superslides - v0.6.3-wip - 2013-12-17
* https://github.com/nicinabox/superslides
* Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(i,t){var n,e="superslides";n=function(n,e){this.options=t.extend({play:!1,animation_speed:600,animation_easing:"swing",animation:"slide",inherit_width_from:i,inherit_height_from:i,pagination:!0,hashchange:!1,scrollable:!0,elements:{preserve:".preserve",nav:".slides-navigation",container:".slides-container",pagination:".slides-pagination"}},e);var s=this,o=t("<div>",{"class":"slides-control"}),a=1;this.$el=t(n),this.$container=this.$el.find(this.options.elements.container);var r=function(){return a=s._findMultiplier(),s.$el.on("click",s.options.elements.nav+" a",function(i){i.preventDefault(),s.stop(),t(this).hasClass("next")?s.animate("next",function(){s.start()}):s.animate("prev",function(){s.start()})}),t(document).on("keyup",function(i){37===i.keyCode&&s.animate("prev"),39===i.keyCode&&s.animate("next")}),t(i).on("resize",function(){setTimeout(function(){var i=s.$container.children();s.width=s._findWidth(),s.height=s._findHeight(),i.css({width:s.width,left:s.width}),s.css.containers(),s.css.images()},10)}),s.options.hashchange&&t(i).on("hashchange",function(){var i,t=s._parseHash();i=s._upcomingSlide(t),i>=0&&i!==s.current&&s.animate(i)}),s.pagination._events(),s.start(),s},h={containers:function(){s.init?(s.$el.css({height:s.height}),s.$control.css({width:s.width*a,left:-s.width}),s.$container.css({})):(t("body").css({margin:0}),s.$el.css({position:"relative",overflow:"hidden",width:"100%",height:s.height}),s.$control.css({position:"relative",transform:"translate3d(0)",height:"100%",width:s.width*a,left:-s.width}),s.$container.css({display:"none",margin:"0",padding:"0",listStyle:"none",position:"relative",height:"100%"})),1===s.size()&&s.$el.find(s.options.elements.nav).hide()},images:function(){var i=s.$container.find("img").not(s.options.elements.preserve);i.removeAttr("width").removeAttr("height").css({"-webkit-backface-visibility":"hidden","-ms-interpolation-mode":"bicubic",position:"absolute",left:"0",top:"0","z-index":"-1","max-width":"none"}),i.each(function(){var i=s.image._aspectRatio(this),n=this;if(t.data(this,"processed"))s.image._scale(n,i),s.image._center(n,i);else{var e=new Image;e.onload=function(){s.image._scale(n,i),s.image._center(n,i),t.data(n,"processed",!0)},e.src=this.src}})},children:function(){var i=s.$container.children();i.is("img")&&(i.each(function(){if(t(this).is("img")){t(this).wrap("<div>");var i=t(this).attr("id");t(this).removeAttr("id"),t(this).parent().attr("id",i)}}),i=s.$container.children()),s.init||i.css({display:"none",left:2*s.width}),i.css({position:"absolute",overflow:"hidden",height:"100%",width:s.width,top:0,zIndex:0})}},c={slide:function(i,t){var n=s.$container.children(),e=n.eq(i.upcoming_slide);e.css({left:i.upcoming_position,display:"block"}),s.$control.animate({left:i.offset},s.options.animation_speed,s.options.animation_easing,function(){s.size()>1&&(s.$control.css({left:-s.width}),n.eq(i.upcoming_slide).css({left:s.width,zIndex:2}),i.outgoing_slide>=0&&n.eq(i.outgoing_slide).css({left:s.width,display:"none",zIndex:0})),t()})},fade:function(i,t){var n=this,e=n.$container.children(),s=e.eq(i.outgoing_slide),o=e.eq(i.upcoming_slide);o.css({left:this.width,opacity:0,display:"block"}).animate({opacity:1},n.options.animation_speed,n.options.animation_easing),i.outgoing_slide>=0?s.animate({opacity:0},n.options.animation_speed,n.options.animation_easing,function(){n.size()>1&&(e.eq(i.upcoming_slide).css({zIndex:2}),i.outgoing_slide>=0&&e.eq(i.outgoing_slide).css({opacity:1,display:"none",zIndex:0})),t()}):(o.css({zIndex:2}),t())}};c=t.extend(c,t.fn.superslides.fx);var d={_centerY:function(i){var n=t(i);n.css({top:(s.height-n.height())/2})},_centerX:function(i){var n=t(i);n.css({left:(s.width-n.width())/2})},_center:function(i){s.image._centerX(i),s.image._centerY(i)},_aspectRatio:function(i){if(!i.naturalHeight&&!i.naturalWidth){var t=new Image;t.src=i.src,i.naturalHeight=t.height,i.naturalWidth=t.width}return i.naturalHeight/i.naturalWidth},_scale:function(i,n){n=n||s.image._aspectRatio(i);var e=s.height/s.width,o=t(i);e>n?o.css({height:s.height,width:s.height/n}):o.css({height:s.width*n,width:s.width})}},l={_setCurrent:function(i){if(s.$pagination){var t=s.$pagination.children();t.removeClass("current"),t.eq(i).addClass("current")}},_addItem:function(i){var n=i+1,e=n,o=s.$container.children().eq(i),a=o.attr("id");a&&(e=a);var r=t("<a>",{href:"#"+e,text:e});r.appendTo(s.$pagination)},_setup:function(){if(s.options.pagination&&1!==s.size()){var i=t("<nav>",{"class":s.options.elements.pagination.replace(/^\./,"")});s.$pagination=i.appendTo(s.$el);for(var n=0;s.size()>n;n++)s.pagination._addItem(n)}},_events:function(){s.$el.on("click",s.options.elements.pagination+" a",function(i){i.preventDefault();var t,n=s._parseHash(this.hash);t=s._upcomingSlide(n,!0),t!==s.current&&s.animate(t,function(){s.start()})})}};return this.css=h,this.image=d,this.pagination=l,this.fx=c,this.animation=this.fx[this.options.animation],this.$control=this.$container.wrap(o).parent(".slides-control"),s._findPositions(),s.width=s._findWidth(),s.height=s._findHeight(),this.css.children(),this.css.containers(),this.css.images(),this.pagination._setup(),r()},n.prototype={_findWidth:function(){return t(this.options.inherit_width_from).width()},_findHeight:function(){return t(this.options.inherit_height_from).height()},_findMultiplier:function(){return 1===this.size()?1:3},_upcomingSlide:function(i,t){if(t&&!isNaN(i)&&(i-=1),/next/.test(i))return this._nextInDom();if(/prev/.test(i))return this._prevInDom();if(/\d/.test(i))return+i;if(i&&/\w/.test(i)){var n=this._findSlideById(i);return n>=0?n:0}return 0},_findSlideById:function(i){return this.$container.find("#"+i).index()},_findPositions:function(i,t){t=t||this,void 0===i&&(i=-1),t.current=i,t.next=t._nextInDom(),t.prev=t._prevInDom()},_nextInDom:function(){var i=this.current+1;return i===this.size()&&(i=0),i},_prevInDom:function(){var i=this.current-1;return 0>i&&(i=this.size()-1),i},_parseHash:function(t){return t=t||i.location.hash,t=t.replace(/^#/,""),t&&!isNaN(+t)&&(t=+t),t},size:function(){return this.$container.children().length},destroy:function(){return this.$el.removeData()},update:function(){this.css.children(),this.css.containers(),this.css.images(),this.pagination._addItem(this.size()),this._findPositions(this.current),this.$el.trigger("updated.slides")},stop:function(){clearInterval(this.play_id),delete this.play_id,this.$el.trigger("stopped.slides")},start:function(){var n=this;n.options.hashchange?t(i).trigger("hashchange"):this.animate(),this.options.play&&(this.play_id&&this.stop(),this.play_id=setInterval(function(){n.animate()},this.options.play)),this.$el.trigger("started.slides")},animate:function(t,n){var e=this,s={};if(!(this.animating||(this.animating=!0,void 0===t&&(t="next"),s.upcoming_slide=this._upcomingSlide(t),s.upcoming_slide>=this.size()))){if(s.outgoing_slide=this.current,s.upcoming_position=2*this.width,s.offset=-s.upcoming_position,("prev"===t||s.outgoing_slide>t)&&(s.upcoming_position=0,s.offset=0),e.size()>1&&e.pagination._setCurrent(s.upcoming_slide),e.options.hashchange){var o=s.upcoming_slide+1,a=e.$container.children(":eq("+s.upcoming_slide+")").attr("id");i.location.hash=a?a:o}e.$el.trigger("animating.slides",[s]),e.animation(s,function(){e._findPositions(s.upcoming_slide,e),"function"==typeof n&&n(),e.animating=!1,e.$el.trigger("animated.slides"),e.init||(e.$el.trigger("init.slides"),e.init=!0,e.$container.fadeIn("fast"))})}}},t.fn[e]=function(i,s){var o=[];return this.each(function(){var a,r,h;return a=t(this),r=a.data(e),h="object"==typeof i&&i,r||(o=a.data(e,r=new n(this,h))),"string"==typeof i&&(o=r[i],"function"==typeof o)?o=o.call(r,s):void 0}),o},t.fn[e].fx={}})(this,jQuery);


/*
 * Swiper 2.7.0
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: August 30, 2014
*/
var Swiper=function(a,b){"use strict";function c(a,b){return document.querySelectorAll?(b||document).querySelectorAll(a):jQuery(a,b)}function d(a){return"[object Array]"===Object.prototype.toString.apply(a)?!0:!1}function e(){var a=F-I;return b.freeMode&&(a=F-I),b.slidesPerView>C.slides.length&&!b.centeredSlides&&(a=0),0>a&&(a=0),a}function f(){function a(a){var c=new Image;c.onload=function(){"undefined"!=typeof C&&null!==C&&(void 0!==C.imagesLoaded&&C.imagesLoaded++,C.imagesLoaded===C.imagesToLoad.length&&(C.reInit(),b.onImagesReady&&C.fireCallback(b.onImagesReady,C)))},c.src=a}var d=C.h.addEventListener,e="wrapper"===b.eventTarget?C.wrapper:C.container;if(C.browser.ie10||C.browser.ie11?(d(e,C.touchEvents.touchStart,p),d(document,C.touchEvents.touchMove,q),d(document,C.touchEvents.touchEnd,r)):(C.support.touch&&(d(e,"touchstart",p),d(e,"touchmove",q),d(e,"touchend",r)),b.simulateTouch&&(d(e,"mousedown",p),d(document,"mousemove",q),d(document,"mouseup",r))),b.autoResize&&d(window,"resize",C.resizeFix),g(),C._wheelEvent=!1,b.mousewheelControl){if(void 0!==document.onmousewheel&&(C._wheelEvent="mousewheel"),!C._wheelEvent)try{new WheelEvent("wheel"),C._wheelEvent="wheel"}catch(f){}C._wheelEvent||(C._wheelEvent="DOMMouseScroll"),C._wheelEvent&&d(C.container,C._wheelEvent,j)}if(b.keyboardControl&&d(document,"keydown",i),b.updateOnImagesReady){C.imagesToLoad=c("img",C.container);for(var h=0;h<C.imagesToLoad.length;h++)a(C.imagesToLoad[h].getAttribute("src"))}}function g(){var a,d=C.h.addEventListener;if(b.preventLinks){var e=c("a",C.container);for(a=0;a<e.length;a++)d(e[a],"click",n)}if(b.releaseFormElements){var f=c("input, textarea, select",C.container);for(a=0;a<f.length;a++)d(f[a],C.touchEvents.touchStart,o,!0)}if(b.onSlideClick)for(a=0;a<C.slides.length;a++)d(C.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<C.slides.length;a++)d(C.slides[a],C.touchEvents.touchStart,l)}function h(){var a,d=C.h.removeEventListener;if(b.onSlideClick)for(a=0;a<C.slides.length;a++)d(C.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<C.slides.length;a++)d(C.slides[a],C.touchEvents.touchStart,l);if(b.releaseFormElements){var e=c("input, textarea, select",C.container);for(a=0;a<e.length;a++)d(e[a],C.touchEvents.touchStart,o,!0)}if(b.preventLinks){var f=c("a",C.container);for(a=0;a<f.length;a++)d(f[a],"click",n)}}function i(a){var b=a.keyCode||a.charCode;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)){if(37===b||39===b||38===b||40===b){for(var c=!1,d=C.h.getOffset(C.container),e=C.h.windowScroll().left,f=C.h.windowScroll().top,g=C.h.windowWidth(),h=C.h.windowHeight(),i=[[d.left,d.top],[d.left+C.width,d.top],[d.left,d.top+C.height],[d.left+C.width,d.top+C.height]],j=0;j<i.length;j++){var k=i[j];k[0]>=e&&k[0]<=e+g&&k[1]>=f&&k[1]<=f+h&&(c=!0)}if(!c)return}M?((37===b||39===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),39===b&&C.swipeNext(),37===b&&C.swipePrev()):((38===b||40===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),40===b&&C.swipeNext(),38===b&&C.swipePrev())}}function j(a){var c=C._wheelEvent,d=0;if(a.detail)d=-a.detail;else if("mousewheel"===c)if(b.mousewheelControlForceToAxis)if(M){if(!(Math.abs(a.wheelDeltaX)>Math.abs(a.wheelDeltaY)))return;d=a.wheelDeltaX}else{if(!(Math.abs(a.wheelDeltaY)>Math.abs(a.wheelDeltaX)))return;d=a.wheelDeltaY}else d=a.wheelDelta;else if("DOMMouseScroll"===c)d=-a.detail;else if("wheel"===c)if(b.mousewheelControlForceToAxis)if(M){if(!(Math.abs(a.deltaX)>Math.abs(a.deltaY)))return;d=-a.deltaX}else{if(!(Math.abs(a.deltaY)>Math.abs(a.deltaX)))return;d=-a.deltaY}else d=Math.abs(a.deltaX)>Math.abs(a.deltaY)?-a.deltaX:-a.deltaY;if(b.freeMode){var f=C.getWrapperTranslate()+d;if(f>0&&(f=0),f<-e()&&(f=-e()),C.setWrapperTransition(0),C.setWrapperTranslate(f),C.updateActiveSlide(f),0===f||f===-e())return}else(new Date).getTime()-U>60&&(0>d?C.swipeNext():C.swipePrev()),U=(new Date).getTime();return b.autoplay&&C.stopAutoplay(!0),a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function k(a){C.allowSlideClick&&(m(a),C.fireCallback(b.onSlideClick,C,a))}function l(a){m(a),C.fireCallback(b.onSlideTouch,C,a)}function m(a){if(a.currentTarget)C.clickedSlide=a.currentTarget;else{var c=a.srcElement;do{if(c.className.indexOf(b.slideClass)>-1)break;c=c.parentNode}while(c);C.clickedSlide=c}C.clickedSlideIndex=C.slides.indexOf(C.clickedSlide),C.clickedSlideLoopIndex=C.clickedSlideIndex-(C.loopedSlides||0)}function n(a){return C.allowLinks?void 0:(a.preventDefault?a.preventDefault():a.returnValue=!1,b.preventLinksPropagation&&"stopPropagation"in a&&a.stopPropagation(),!1)}function o(a){return a.stopPropagation?a.stopPropagation():a.returnValue=!1,!1}function p(a){if(b.preventLinks&&(C.allowLinks=!0),C.isTouched||b.onlyExternal)return!1;var c=a.target||a.srcElement;document.activeElement&&document.activeElement!==c&&document.activeElement.blur();var d="input select textarea".split(" ");if(b.noSwiping&&c&&s(c))return!1;if($=!1,C.isTouched=!0,Z="touchstart"===a.type,!Z&&"which"in a&&3===a.which)return!1;if(!Z||1===a.targetTouches.length){C.callPlugins("onTouchStartBegin"),!Z&&!C.isAndroid&&d.indexOf(c.tagName.toLowerCase())<0&&(a.preventDefault?a.preventDefault():a.returnValue=!1);var e=Z?a.targetTouches[0].pageX:a.pageX||a.clientX,f=Z?a.targetTouches[0].pageY:a.pageY||a.clientY;C.touches.startX=C.touches.currentX=e,C.touches.startY=C.touches.currentY=f,C.touches.start=C.touches.current=M?e:f,C.setWrapperTransition(0),C.positions.start=C.positions.current=C.getWrapperTranslate(),C.setWrapperTranslate(C.positions.start),C.times.start=(new Date).getTime(),H=void 0,b.moveStartThreshold>0&&(W=!1),b.onTouchStart&&C.fireCallback(b.onTouchStart,C,a),C.callPlugins("onTouchStartEnd")}}function q(a){if(C.isTouched&&!b.onlyExternal&&(!Z||"mousemove"!==a.type)){var c=Z?a.targetTouches[0].pageX:a.pageX||a.clientX,d=Z?a.targetTouches[0].pageY:a.pageY||a.clientY;if("undefined"==typeof H&&M&&(H=!!(H||Math.abs(d-C.touches.startY)>Math.abs(c-C.touches.startX))),"undefined"!=typeof H||M||(H=!!(H||Math.abs(d-C.touches.startY)<Math.abs(c-C.touches.startX))),H)return void(C.isTouched=!1);if(M){if(!b.swipeToNext&&c<C.touches.startX||!b.swipeToPrev&&c>C.touches.startX)return}else if(!b.swipeToNext&&d<C.touches.startY||!b.swipeToPrev&&d>C.touches.startY)return;if(a.assignedToSwiper)return void(C.isTouched=!1);if(a.assignedToSwiper=!0,b.preventLinks&&(C.allowLinks=!1),b.onSlideClick&&(C.allowSlideClick=!1),b.autoplay&&C.stopAutoplay(!0),!Z||1===a.touches.length){if(C.isMoved||(C.callPlugins("onTouchMoveStart"),b.loop&&(C.fixLoop(),C.positions.start=C.getWrapperTranslate()),b.onTouchMoveStart&&C.fireCallback(b.onTouchMoveStart,C)),C.isMoved=!0,a.preventDefault?a.preventDefault():a.returnValue=!1,C.touches.current=M?c:d,C.positions.current=(C.touches.current-C.touches.start)*b.touchRatio+C.positions.start,C.positions.current>0&&b.onResistanceBefore&&C.fireCallback(b.onResistanceBefore,C,C.positions.current),C.positions.current<-e()&&b.onResistanceAfter&&C.fireCallback(b.onResistanceAfter,C,Math.abs(C.positions.current+e())),b.resistance&&"100%"!==b.resistance){var f;if(C.positions.current>0&&(f=1-C.positions.current/I/2,C.positions.current=.5>f?I/2:C.positions.current*f),C.positions.current<-e()){var g=(C.touches.current-C.touches.start)*b.touchRatio+(e()+C.positions.start);f=(I+g)/I;var h=C.positions.current-g*(1-f)/2,i=-e()-I/2;C.positions.current=i>h||0>=f?i:h}}if(b.resistance&&"100%"===b.resistance&&(C.positions.current>0&&(!b.freeMode||b.freeModeFluid)&&(C.positions.current=0),C.positions.current<-e()&&(!b.freeMode||b.freeModeFluid)&&(C.positions.current=-e())),!b.followFinger)return;if(b.moveStartThreshold)if(Math.abs(C.touches.current-C.touches.start)>b.moveStartThreshold||W){if(!W)return W=!0,void(C.touches.start=C.touches.current);C.setWrapperTranslate(C.positions.current)}else C.positions.current=C.positions.start;else C.setWrapperTranslate(C.positions.current);return(b.freeMode||b.watchActiveIndex)&&C.updateActiveSlide(C.positions.current),b.grabCursor&&(C.container.style.cursor="move",C.container.style.cursor="grabbing",C.container.style.cursor="-moz-grabbin",C.container.style.cursor="-webkit-grabbing"),X||(X=C.touches.current),Y||(Y=(new Date).getTime()),C.velocity=(C.touches.current-X)/((new Date).getTime()-Y)/2,Math.abs(C.touches.current-X)<2&&(C.velocity=0),X=C.touches.current,Y=(new Date).getTime(),C.callPlugins("onTouchMoveEnd"),b.onTouchMove&&C.fireCallback(b.onTouchMove,C,a),!1}}}function r(a){if(H&&C.swipeReset(),!b.onlyExternal&&C.isTouched){C.isTouched=!1,b.grabCursor&&(C.container.style.cursor="move",C.container.style.cursor="grab",C.container.style.cursor="-moz-grab",C.container.style.cursor="-webkit-grab"),C.positions.current||0===C.positions.current||(C.positions.current=C.positions.start),b.followFinger&&C.setWrapperTranslate(C.positions.current),C.times.end=(new Date).getTime(),C.touches.diff=C.touches.current-C.touches.start,C.touches.abs=Math.abs(C.touches.diff),C.positions.diff=C.positions.current-C.positions.start,C.positions.abs=Math.abs(C.positions.diff);var c=C.positions.diff,d=C.positions.abs,f=C.times.end-C.times.start;5>d&&300>f&&C.allowLinks===!1&&(b.freeMode||0===d||C.swipeReset(),b.preventLinks&&(C.allowLinks=!0),b.onSlideClick&&(C.allowSlideClick=!0)),setTimeout(function(){"undefined"!=typeof C&&null!==C&&(b.preventLinks&&(C.allowLinks=!0),b.onSlideClick&&(C.allowSlideClick=!0))},100);var g=e();if(!C.isMoved&&b.freeMode)return C.isMoved=!1,b.onTouchEnd&&C.fireCallback(b.onTouchEnd,C,a),void C.callPlugins("onTouchEnd");if(!C.isMoved||C.positions.current>0||C.positions.current<-g)return C.swipeReset(),b.onTouchEnd&&C.fireCallback(b.onTouchEnd,C,a),void C.callPlugins("onTouchEnd");if(C.isMoved=!1,b.freeMode){if(b.freeModeFluid){var h,i=1e3*b.momentumRatio,j=C.velocity*i,k=C.positions.current+j,l=!1,m=20*Math.abs(C.velocity)*b.momentumBounceRatio;-g>k&&(b.momentumBounce&&C.support.transitions?(-m>k+g&&(k=-g-m),h=-g,l=!0,$=!0):k=-g),k>0&&(b.momentumBounce&&C.support.transitions?(k>m&&(k=m),h=0,l=!0,$=!0):k=0),0!==C.velocity&&(i=Math.abs((k-C.positions.current)/C.velocity)),C.setWrapperTranslate(k),C.setWrapperTransition(i),b.momentumBounce&&l&&C.wrapperTransitionEnd(function(){$&&(b.onMomentumBounce&&C.fireCallback(b.onMomentumBounce,C),C.callPlugins("onMomentumBounce"),C.setWrapperTranslate(h),C.setWrapperTransition(300))}),C.updateActiveSlide(k)}return(!b.freeModeFluid||f>=300)&&C.updateActiveSlide(C.positions.current),b.onTouchEnd&&C.fireCallback(b.onTouchEnd,C,a),void C.callPlugins("onTouchEnd")}G=0>c?"toNext":"toPrev","toNext"===G&&300>=f&&(30>d||!b.shortSwipes?C.swipeReset():C.swipeNext(!0)),"toPrev"===G&&300>=f&&(30>d||!b.shortSwipes?C.swipeReset():C.swipePrev(!0));var n=0;if("auto"===b.slidesPerView){for(var o,p=Math.abs(C.getWrapperTranslate()),q=0,r=0;r<C.slides.length;r++)if(o=M?C.slides[r].getWidth(!0,b.roundLengths):C.slides[r].getHeight(!0,b.roundLengths),q+=o,q>p){n=o;break}n>I&&(n=I)}else n=E*b.slidesPerView;"toNext"===G&&f>300&&(d>=n*b.longSwipesRatio?C.swipeNext(!0):C.swipeReset()),"toPrev"===G&&f>300&&(d>=n*b.longSwipesRatio?C.swipePrev(!0):C.swipeReset()),b.onTouchEnd&&C.fireCallback(b.onTouchEnd,C,a),C.callPlugins("onTouchEnd")}}function s(a){var c=!1;do a.className.indexOf(b.noSwipingClass)>-1&&(c=!0),a=a.parentElement;while(!c&&a.parentElement&&-1===a.className.indexOf(b.wrapperClass));return!c&&a.className.indexOf(b.wrapperClass)>-1&&a.className.indexOf(b.noSwipingClass)>-1&&(c=!0),c}function t(a,b){var c,d=document.createElement("div");return d.innerHTML=b,c=d.firstChild,c.className+=" "+a,c.outerHTML}function u(a,c,d){function e(){var f=+new Date,l=f-g;h+=i*l/(1e3/60),k="toNext"===j?h>a:a>h,k?(C.setWrapperTranslate(Math.ceil(h)),C._DOMAnimating=!0,window.setTimeout(function(){e()},1e3/60)):(b.onSlideChangeEnd&&("to"===c?d.runCallbacks===!0&&C.fireCallback(b.onSlideChangeEnd,C,j):C.fireCallback(b.onSlideChangeEnd,C,j)),C.setWrapperTranslate(a),C._DOMAnimating=!1)}var f="to"===c&&d.speed>=0?d.speed:b.speed,g=+new Date;if(C.support.transitions||!b.DOMAnimation)C.setWrapperTranslate(a),C.setWrapperTransition(f);else{var h=C.getWrapperTranslate(),i=Math.ceil((a-h)/f*(1e3/60)),j=h>a?"toNext":"toPrev",k="toNext"===j?h>a:a>h;if(C._DOMAnimating)return;e()}C.updateActiveSlide(a),b.onSlideNext&&"next"===c&&C.fireCallback(b.onSlideNext,C,a),b.onSlidePrev&&"prev"===c&&C.fireCallback(b.onSlidePrev,C,a),b.onSlideReset&&"reset"===c&&C.fireCallback(b.onSlideReset,C,a),("next"===c||"prev"===c||"to"===c&&d.runCallbacks===!0)&&v(c)}function v(a){if(C.callPlugins("onSlideChangeStart"),b.onSlideChangeStart)if(b.queueStartCallbacks&&C.support.transitions){if(C._queueStartCallbacks)return;C._queueStartCallbacks=!0,C.fireCallback(b.onSlideChangeStart,C,a),C.wrapperTransitionEnd(function(){C._queueStartCallbacks=!1})}else C.fireCallback(b.onSlideChangeStart,C,a);if(b.onSlideChangeEnd)if(C.support.transitions)if(b.queueEndCallbacks){if(C._queueEndCallbacks)return;C._queueEndCallbacks=!0,C.wrapperTransitionEnd(function(c){C.fireCallback(b.onSlideChangeEnd,c,a)})}else C.wrapperTransitionEnd(function(c){C.fireCallback(b.onSlideChangeEnd,c,a)});else b.DOMAnimation||setTimeout(function(){C.fireCallback(b.onSlideChangeEnd,C,a)},10)}function w(){var a=C.paginationButtons;if(a)for(var b=0;b<a.length;b++)C.h.removeEventListener(a[b],"click",y)}function x(){var a=C.paginationButtons;if(a)for(var b=0;b<a.length;b++)C.h.addEventListener(a[b],"click",y)}function y(a){for(var c,d=a.target||a.srcElement,e=C.paginationButtons,f=0;f<e.length;f++)d===e[f]&&(c=f);b.autoplay&&C.stopAutoplay(!0),C.swipeTo(c)}function z(){_=setTimeout(function(){b.loop?(C.fixLoop(),C.swipeNext(!0)):C.swipeNext(!0)||(b.autoplayStopOnLast?(clearTimeout(_),_=void 0):C.swipeTo(0)),C.wrapperTransitionEnd(function(){"undefined"!=typeof _&&z()})},b.autoplay)}function A(){C.calcSlides(),b.loader.slides.length>0&&0===C.slides.length&&C.loadSlides(),b.loop&&C.createLoop(),C.init(),f(),b.pagination&&C.createPagination(!0),b.loop||b.initialSlide>0?C.swipeTo(b.initialSlide,0,!1):C.updateActiveSlide(0),b.autoplay&&C.startAutoplay(),C.centerIndex=C.activeIndex,b.onSwiperCreated&&C.fireCallback(b.onSwiperCreated,C),C.callPlugins("onSwiperCreated")}if(!document.body.outerHTML&&document.body.__defineGetter__&&HTMLElement){var B=HTMLElement.prototype;B.__defineGetter__&&B.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}if(window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;d>c;c++)if(this[c]===a)return c;return-1}),(document.querySelectorAll||window.jQuery)&&"undefined"!=typeof a&&(a.nodeType||0!==c(a).length)){var C=this;C.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0},C.positions={start:0,abs:0,diff:0,current:0},C.times={start:0,end:0},C.id=(new Date).getTime(),C.container=a.nodeType?a:c(a)[0],C.isTouched=!1,C.isMoved=!1,C.activeIndex=0,C.centerIndex=0,C.activeLoaderIndex=0,C.activeLoopIndex=0,C.previousIndex=null,C.velocity=0,C.snapGrid=[],C.slidesGrid=[],C.imagesToLoad=[],C.imagesLoaded=0,C.wrapperLeft=0,C.wrapperRight=0,C.wrapperTop=0,C.wrapperBottom=0,C.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var D,E,F,G,H,I,J={eventTarget:"wrapper",mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:!0,simulateTouch:!0,followFinger:!0,shortSwipes:!0,longSwipesRatio:.5,moveStartThreshold:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,preventLinksPropagation:!1,noSwiping:!1,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelControlForceToAxis:!1,useCSS3Transforms:!0,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,loop:!1,loopAdditionalSlides:0,roundLengths:!1,calculateHeight:!1,cssWidthAndHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},swipeToPrev:!0,swipeToNext:!0,slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var K in J)if(K in b&&"object"==typeof b[K])for(var L in J[K])L in b[K]||(b[K][L]=J[K][L]);else K in b||(b[K]=J[K]);C.params=b,b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0),b.loop&&(b.resistance="100%");var M="horizontal"===b.mode,N=["mousedown","mousemove","mouseup"];C.browser.ie10&&(N=["MSPointerDown","MSPointerMove","MSPointerUp"]),C.browser.ie11&&(N=["pointerdown","pointermove","pointerup"]),C.touchEvents={touchStart:C.support.touch||!b.simulateTouch?"touchstart":N[0],touchMove:C.support.touch||!b.simulateTouch?"touchmove":N[1],touchEnd:C.support.touch||!b.simulateTouch?"touchend":N[2]};for(var O=C.container.childNodes.length-1;O>=0;O--)if(C.container.childNodes[O].className)for(var P=C.container.childNodes[O].className.split(/\s+/),Q=0;Q<P.length;Q++)P[Q]===b.wrapperClass&&(D=C.container.childNodes[O]);C.wrapper=D,C._extendSwiperSlide=function(a){return a.append=function(){return b.loop?a.insertAfter(C.slides.length-C.loopedSlides):(C.wrapper.appendChild(a),C.reInit()),a},a.prepend=function(){return b.loop?(C.wrapper.insertBefore(a,C.slides[C.loopedSlides]),C.removeLoopedSlides(),C.calcSlides(),C.createLoop()):C.wrapper.insertBefore(a,C.wrapper.firstChild),C.reInit(),a},a.insertAfter=function(c){if("undefined"==typeof c)return!1;var d;return b.loop?(d=C.slides[c+1+C.loopedSlides],d?C.wrapper.insertBefore(a,d):C.wrapper.appendChild(a),C.removeLoopedSlides(),C.calcSlides(),C.createLoop()):(d=C.slides[c+1],C.wrapper.insertBefore(a,d)),C.reInit(),a},a.clone=function(){return C._extendSwiperSlide(a.cloneNode(!0))},a.remove=function(){C.wrapper.removeChild(a),C.reInit()},a.html=function(b){return"undefined"==typeof b?a.innerHTML:(a.innerHTML=b,a)},a.index=function(){for(var b,c=C.slides.length-1;c>=0;c--)a===C.slides[c]&&(b=c);return b},a.isActive=function(){return a.index()===C.activeIndex?!0:!1},a.swiperSlideDataStorage||(a.swiperSlideDataStorage={}),a.getData=function(b){return a.swiperSlideDataStorage[b]},a.setData=function(b,c){return a.swiperSlideDataStorage[b]=c,a},a.data=function(b,c){return"undefined"==typeof c?a.getAttribute("data-"+b):(a.setAttribute("data-"+b,c),a)},a.getWidth=function(b,c){return C.h.getWidth(a,b,c)},a.getHeight=function(b,c){return C.h.getHeight(a,b,c)},a.getOffset=function(){return C.h.getOffset(a)},a},C.calcSlides=function(a){var c=C.slides?C.slides.length:!1;C.slides=[],C.displaySlides=[];for(var d=0;d<C.wrapper.childNodes.length;d++)if(C.wrapper.childNodes[d].className)for(var e=C.wrapper.childNodes[d].className,f=e.split(/\s+/),i=0;i<f.length;i++)f[i]===b.slideClass&&C.slides.push(C.wrapper.childNodes[d]);for(d=C.slides.length-1;d>=0;d--)C._extendSwiperSlide(C.slides[d]);c!==!1&&(c!==C.slides.length||a)&&(h(),g(),C.updateActiveSlide(),C.params.pagination&&C.createPagination(),C.callPlugins("numberOfSlidesChanged"))},C.createSlide=function(a,c,d){c=c||C.params.slideClass,d=d||b.slideElement;var e=document.createElement(d);return e.innerHTML=a||"",e.className=c,C._extendSwiperSlide(e)},C.appendSlide=function(a,b,c){return a?a.nodeType?C._extendSwiperSlide(a).append():C.createSlide(a,b,c).append():void 0},C.prependSlide=function(a,b,c){return a?a.nodeType?C._extendSwiperSlide(a).prepend():C.createSlide(a,b,c).prepend():void 0},C.insertSlideAfter=function(a,b,c,d){return"undefined"==typeof a?!1:b.nodeType?C._extendSwiperSlide(b).insertAfter(a):C.createSlide(b,c,d).insertAfter(a)},C.removeSlide=function(a){if(C.slides[a]){if(b.loop){if(!C.slides[a+C.loopedSlides])return!1;C.slides[a+C.loopedSlides].remove(),C.removeLoopedSlides(),C.calcSlides(),C.createLoop()}else C.slides[a].remove();return!0}return!1},C.removeLastSlide=function(){return C.slides.length>0?(b.loop?(C.slides[C.slides.length-1-C.loopedSlides].remove(),C.removeLoopedSlides(),C.calcSlides(),C.createLoop()):C.slides[C.slides.length-1].remove(),!0):!1},C.removeAllSlides=function(){for(var a=C.slides.length-1;a>=0;a--)C.slides[a].remove()},C.getSlide=function(a){return C.slides[a]},C.getLastSlide=function(){return C.slides[C.slides.length-1]},C.getFirstSlide=function(){return C.slides[0]},C.activeSlide=function(){return C.slides[C.activeIndex]},C.fireCallback=function(){var a=arguments[0];if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)"function"==typeof a[c]&&a[c](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);else"[object String]"===Object.prototype.toString.call(a)?b["on"+a]&&C.fireCallback(b["on"+a],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]):a(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},C.addCallback=function(a,b){var c,e=this;return e.params["on"+a]?d(this.params["on"+a])?this.params["on"+a].push(b):"function"==typeof this.params["on"+a]?(c=this.params["on"+a],this.params["on"+a]=[],this.params["on"+a].push(c),this.params["on"+a].push(b)):void 0:(this.params["on"+a]=[],this.params["on"+a].push(b))},C.removeCallbacks=function(a){C.params["on"+a]&&(C.params["on"+a]=null)};var R=[];for(var S in C.plugins)if(b[S]){var T=C.plugins[S](C,b[S]);T&&R.push(T)}C.callPlugins=function(a,b){b||(b={});for(var c=0;c<R.length;c++)a in R[c]&&R[c][a](b)},!C.browser.ie10&&!C.browser.ie11||b.onlyExternal||C.wrapper.classList.add("swiper-wp8-"+(M?"horizontal":"vertical")),b.freeMode&&(C.container.className+=" swiper-free-mode"),C.initialized=!1,C.init=function(a,c){var d=C.h.getWidth(C.container,!1,b.roundLengths),e=C.h.getHeight(C.container,!1,b.roundLengths);if(d!==C.width||e!==C.height||a){C.width=d,C.height=e;var f,g,h,i,j,k,l;I=M?d:e;var m=C.wrapper;if(a&&C.calcSlides(c),"auto"===b.slidesPerView){var n=0,o=0;b.slidesOffset>0&&(m.style.paddingLeft="",m.style.paddingRight="",m.style.paddingTop="",m.style.paddingBottom=""),m.style.width="",m.style.height="",b.offsetPxBefore>0&&(M?C.wrapperLeft=b.offsetPxBefore:C.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(M?C.wrapperRight=b.offsetPxAfter:C.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(M?(C.wrapperLeft=(I-this.slides[0].getWidth(!0,b.roundLengths))/2,C.wrapperRight=(I-C.slides[C.slides.length-1].getWidth(!0,b.roundLengths))/2):(C.wrapperTop=(I-C.slides[0].getHeight(!0,b.roundLengths))/2,C.wrapperBottom=(I-C.slides[C.slides.length-1].getHeight(!0,b.roundLengths))/2)),M?(C.wrapperLeft>=0&&(m.style.paddingLeft=C.wrapperLeft+"px"),C.wrapperRight>=0&&(m.style.paddingRight=C.wrapperRight+"px")):(C.wrapperTop>=0&&(m.style.paddingTop=C.wrapperTop+"px"),C.wrapperBottom>=0&&(m.style.paddingBottom=C.wrapperBottom+"px")),k=0;var p=0;for(C.snapGrid=[],C.slidesGrid=[],h=0,l=0;l<C.slides.length;l++){f=C.slides[l].getWidth(!0,b.roundLengths),g=C.slides[l].getHeight(!0,b.roundLengths),b.calculateHeight&&(h=Math.max(h,g));var q=M?f:g;if(b.centeredSlides){var r=l===C.slides.length-1?0:C.slides[l+1].getWidth(!0,b.roundLengths),s=l===C.slides.length-1?0:C.slides[l+1].getHeight(!0,b.roundLengths),t=M?r:s;if(q>I){if(b.slidesPerViewFit)C.snapGrid.push(k+C.wrapperLeft),C.snapGrid.push(k+q-I+C.wrapperLeft);else for(var u=0;u<=Math.floor(q/(I+C.wrapperLeft));u++)C.snapGrid.push(0===u?k+C.wrapperLeft:k+C.wrapperLeft+I*u);C.slidesGrid.push(k+C.wrapperLeft)}else C.snapGrid.push(p),C.slidesGrid.push(p);p+=q/2+t/2}else{if(q>I)if(b.slidesPerViewFit)C.snapGrid.push(k),C.snapGrid.push(k+q-I);else if(0!==I)for(var v=0;v<=Math.floor(q/I);v++)C.snapGrid.push(k+I*v);else C.snapGrid.push(k);else C.snapGrid.push(k);C.slidesGrid.push(k)}k+=q,n+=f,o+=g}b.calculateHeight&&(C.height=h),M?(F=n+C.wrapperRight+C.wrapperLeft,m.style.width=n+"px",m.style.height=C.height+"px"):(F=o+C.wrapperTop+C.wrapperBottom,m.style.width=C.width+"px",m.style.height=o+"px")}else if(b.scrollContainer)m.style.width="",m.style.height="",i=C.slides[0].getWidth(!0,b.roundLengths),j=C.slides[0].getHeight(!0,b.roundLengths),F=M?i:j,m.style.width=i+"px",m.style.height=j+"px",E=M?i:j;else{if(b.calculateHeight){for(h=0,j=0,M||(C.container.style.height=""),m.style.height="",l=0;l<C.slides.length;l++)C.slides[l].style.height="",h=Math.max(C.slides[l].getHeight(!0),h),M||(j+=C.slides[l].getHeight(!0));g=h,C.height=g,M?j=g:(I=g,C.container.style.height=I+"px")}else g=M?C.height:C.height/b.slidesPerView,b.roundLengths&&(g=Math.ceil(g)),j=M?C.height:C.slides.length*g;for(f=M?C.width/b.slidesPerView:C.width,b.roundLengths&&(f=Math.ceil(f)),i=M?C.slides.length*f:C.width,E=M?f:g,b.offsetSlidesBefore>0&&(M?C.wrapperLeft=E*b.offsetSlidesBefore:C.wrapperTop=E*b.offsetSlidesBefore),b.offsetSlidesAfter>0&&(M?C.wrapperRight=E*b.offsetSlidesAfter:C.wrapperBottom=E*b.offsetSlidesAfter),b.offsetPxBefore>0&&(M?C.wrapperLeft=b.offsetPxBefore:C.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(M?C.wrapperRight=b.offsetPxAfter:C.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(M?(C.wrapperLeft=(I-E)/2,C.wrapperRight=(I-E)/2):(C.wrapperTop=(I-E)/2,C.wrapperBottom=(I-E)/2)),M?(C.wrapperLeft>0&&(m.style.paddingLeft=C.wrapperLeft+"px"),C.wrapperRight>0&&(m.style.paddingRight=C.wrapperRight+"px")):(C.wrapperTop>0&&(m.style.paddingTop=C.wrapperTop+"px"),C.wrapperBottom>0&&(m.style.paddingBottom=C.wrapperBottom+"px")),F=M?i+C.wrapperRight+C.wrapperLeft:j+C.wrapperTop+C.wrapperBottom,parseFloat(i)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(m.style.width=i+"px"),parseFloat(j)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(m.style.height=j+"px"),k=0,C.snapGrid=[],C.slidesGrid=[],l=0;l<C.slides.length;l++)C.snapGrid.push(k),C.slidesGrid.push(k),k+=E,parseFloat(f)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(C.slides[l].style.width=f+"px"),parseFloat(g)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(C.slides[l].style.height=g+"px")}C.initialized?(C.callPlugins("onInit"),b.onInit&&C.fireCallback(b.onInit,C)):(C.callPlugins("onFirstInit"),b.onFirstInit&&C.fireCallback(b.onFirstInit,C)),C.initialized=!0}},C.reInit=function(a){C.init(!0,a)},C.resizeFix=function(a){C.callPlugins("beforeResizeFix"),C.init(b.resizeReInit||a),b.freeMode?C.getWrapperTranslate()<-e()&&(C.setWrapperTransition(0),C.setWrapperTranslate(-e())):(C.swipeTo(b.loop?C.activeLoopIndex:C.activeIndex,0,!1),b.autoplay&&(C.support.transitions&&"undefined"!=typeof _?"undefined"!=typeof _&&(clearTimeout(_),_=void 0,C.startAutoplay()):"undefined"!=typeof ab&&(clearInterval(ab),ab=void 0,C.startAutoplay()))),C.callPlugins("afterResizeFix")},C.destroy=function(){var a=C.h.removeEventListener,c="wrapper"===b.eventTarget?C.wrapper:C.container;C.browser.ie10||C.browser.ie11?(a(c,C.touchEvents.touchStart,p),a(document,C.touchEvents.touchMove,q),a(document,C.touchEvents.touchEnd,r)):(C.support.touch&&(a(c,"touchstart",p),a(c,"touchmove",q),a(c,"touchend",r)),b.simulateTouch&&(a(c,"mousedown",p),a(document,"mousemove",q),a(document,"mouseup",r))),b.autoResize&&a(window,"resize",C.resizeFix),h(),b.paginationClickable&&w(),b.mousewheelControl&&C._wheelEvent&&a(C.container,C._wheelEvent,j),b.keyboardControl&&a(document,"keydown",i),b.autoplay&&C.stopAutoplay(),C.callPlugins("onDestroy"),C=null},C.disableKeyboardControl=function(){b.keyboardControl=!1,C.h.removeEventListener(document,"keydown",i)},C.enableKeyboardControl=function(){b.keyboardControl=!0,C.h.addEventListener(document,"keydown",i)};var U=(new Date).getTime();if(C.disableMousewheelControl=function(){return C._wheelEvent?(b.mousewheelControl=!1,C.h.removeEventListener(C.container,C._wheelEvent,j),!0):!1},C.enableMousewheelControl=function(){return C._wheelEvent?(b.mousewheelControl=!0,C.h.addEventListener(C.container,C._wheelEvent,j),!0):!1},b.grabCursor){var V=C.container.style;V.cursor="move",V.cursor="grab",V.cursor="-moz-grab",V.cursor="-webkit-grab"}C.allowSlideClick=!0,C.allowLinks=!0;var W,X,Y,Z=!1,$=!0;C.swipeNext=function(a){!a&&b.loop&&C.fixLoop(),!a&&b.autoplay&&C.stopAutoplay(!0),C.callPlugins("onSwipeNext");var c=C.getWrapperTranslate(),d=c;if("auto"===b.slidesPerView){for(var f=0;f<C.snapGrid.length;f++)if(-c>=C.snapGrid[f]&&-c<C.snapGrid[f+1]){d=-C.snapGrid[f+1];break}}else{var g=E*b.slidesPerGroup;d=-(Math.floor(Math.abs(c)/Math.floor(g))*g+g)}return d<-e()&&(d=-e()),d===c?!1:(u(d,"next"),!0)},C.swipePrev=function(a){!a&&b.loop&&C.fixLoop(),!a&&b.autoplay&&C.stopAutoplay(!0),C.callPlugins("onSwipePrev");var c,d=Math.ceil(C.getWrapperTranslate());if("auto"===b.slidesPerView){c=0;for(var e=1;e<C.snapGrid.length;e++){if(-d===C.snapGrid[e]){c=-C.snapGrid[e-1];break}if(-d>C.snapGrid[e]&&-d<C.snapGrid[e+1]){c=-C.snapGrid[e];break}}}else{var f=E*b.slidesPerGroup;c=-(Math.ceil(-d/f)-1)*f}return c>0&&(c=0),c===d?!1:(u(c,"prev"),!0)},C.swipeReset=function(){C.callPlugins("onSwipeReset");{var a,c=C.getWrapperTranslate(),d=E*b.slidesPerGroup;-e()}if("auto"===b.slidesPerView){a=0;for(var f=0;f<C.snapGrid.length;f++){if(-c===C.snapGrid[f])return;if(-c>=C.snapGrid[f]&&-c<C.snapGrid[f+1]){a=C.positions.diff>0?-C.snapGrid[f+1]:-C.snapGrid[f];break}}-c>=C.snapGrid[C.snapGrid.length-1]&&(a=-C.snapGrid[C.snapGrid.length-1]),c<=-e()&&(a=-e())}else a=0>c?Math.round(c/d)*d:0,c<=-e()&&(a=-e());return b.scrollContainer&&(a=0>c?c:0),a<-e()&&(a=-e()),b.scrollContainer&&I>E&&(a=0),a===c?!1:(u(a,"reset"),!0)},C.swipeTo=function(a,c,d){a=parseInt(a,10),C.callPlugins("onSwipeTo",{index:a,speed:c}),b.loop&&(a+=C.loopedSlides);var f=C.getWrapperTranslate();if(!(a>C.slides.length-1||0>a)){var g;return g="auto"===b.slidesPerView?-C.slidesGrid[a]:-a*E,g<-e()&&(g=-e()),g===f?!1:(d=d===!1?!1:!0,u(g,"to",{index:a,speed:c,runCallbacks:d}),!0)}},C._queueStartCallbacks=!1,C._queueEndCallbacks=!1,C.updateActiveSlide=function(a){if(C.initialized&&0!==C.slides.length){C.previousIndex=C.activeIndex,"undefined"==typeof a&&(a=C.getWrapperTranslate()),a>0&&(a=0);var c;if("auto"===b.slidesPerView){if(C.activeIndex=C.slidesGrid.indexOf(-a),C.activeIndex<0){for(c=0;c<C.slidesGrid.length-1&&!(-a>C.slidesGrid[c]&&-a<C.slidesGrid[c+1]);c++);var d=Math.abs(C.slidesGrid[c]+a),e=Math.abs(C.slidesGrid[c+1]+a);C.activeIndex=e>=d?c:c+1}}else C.activeIndex=Math[b.visibilityFullFit?"ceil":"round"](-a/E);if(C.activeIndex===C.slides.length&&(C.activeIndex=C.slides.length-1),C.activeIndex<0&&(C.activeIndex=0),C.slides[C.activeIndex]){if(C.calcVisibleSlides(a),C.support.classList){var f;for(c=0;c<C.slides.length;c++)f=C.slides[c],f.classList.remove(b.slideActiveClass),C.visibleSlides.indexOf(f)>=0?f.classList.add(b.slideVisibleClass):f.classList.remove(b.slideVisibleClass);C.slides[C.activeIndex].classList.add(b.slideActiveClass)}else{var g=new RegExp("\\s*"+b.slideActiveClass),h=new RegExp("\\s*"+b.slideVisibleClass);for(c=0;c<C.slides.length;c++)C.slides[c].className=C.slides[c].className.replace(g,"").replace(h,""),C.visibleSlides.indexOf(C.slides[c])>=0&&(C.slides[c].className+=" "+b.slideVisibleClass);C.slides[C.activeIndex].className+=" "+b.slideActiveClass}if(b.loop){var i=C.loopedSlides;C.activeLoopIndex=C.activeIndex-i,C.activeLoopIndex>=C.slides.length-2*i&&(C.activeLoopIndex=C.slides.length-2*i-C.activeLoopIndex),C.activeLoopIndex<0&&(C.activeLoopIndex=C.slides.length-2*i+C.activeLoopIndex),C.activeLoopIndex<0&&(C.activeLoopIndex=0)
}else C.activeLoopIndex=C.activeIndex;b.pagination&&C.updatePagination(a)}}},C.createPagination=function(a){if(b.paginationClickable&&C.paginationButtons&&w(),C.paginationContainer=b.pagination.nodeType?b.pagination:c(b.pagination)[0],b.createPagination){var d="",e=C.slides.length,f=e;b.loop&&(f-=2*C.loopedSlides);for(var g=0;f>g;g++)d+="<"+b.paginationElement+' class="'+b.paginationElementClass+'"></'+b.paginationElement+">";C.paginationContainer.innerHTML=d}C.paginationButtons=c("."+b.paginationElementClass,C.paginationContainer),a||C.updatePagination(),C.callPlugins("onCreatePagination"),b.paginationClickable&&x()},C.updatePagination=function(a){if(b.pagination&&!(C.slides.length<1)){var d=c("."+b.paginationActiveClass,C.paginationContainer);if(d){var e=C.paginationButtons;if(0!==e.length){for(var f=0;f<e.length;f++)e[f].className=b.paginationElementClass;var g=b.loop?C.loopedSlides:0;if(b.paginationAsRange){C.visibleSlides||C.calcVisibleSlides(a);var h,i=[];for(h=0;h<C.visibleSlides.length;h++){var j=C.slides.indexOf(C.visibleSlides[h])-g;b.loop&&0>j&&(j=C.slides.length-2*C.loopedSlides+j),b.loop&&j>=C.slides.length-2*C.loopedSlides&&(j=C.slides.length-2*C.loopedSlides-j,j=Math.abs(j)),i.push(j)}for(h=0;h<i.length;h++)e[i[h]]&&(e[i[h]].className+=" "+b.paginationVisibleClass);b.loop?void 0!==e[C.activeLoopIndex]&&(e[C.activeLoopIndex].className+=" "+b.paginationActiveClass):e[C.activeIndex].className+=" "+b.paginationActiveClass}else b.loop?e[C.activeLoopIndex]&&(e[C.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass):e[C.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass}}}},C.calcVisibleSlides=function(a){var c=[],d=0,e=0,f=0;M&&C.wrapperLeft>0&&(a+=C.wrapperLeft),!M&&C.wrapperTop>0&&(a+=C.wrapperTop);for(var g=0;g<C.slides.length;g++){d+=e,e="auto"===b.slidesPerView?M?C.h.getWidth(C.slides[g],!0,b.roundLengths):C.h.getHeight(C.slides[g],!0,b.roundLengths):E,f=d+e;var h=!1;b.visibilityFullFit?(d>=-a&&-a+I>=f&&(h=!0),-a>=d&&f>=-a+I&&(h=!0)):(f>-a&&-a+I>=f&&(h=!0),d>=-a&&-a+I>d&&(h=!0),-a>d&&f>-a+I&&(h=!0)),h&&c.push(C.slides[g])}0===c.length&&(c=[C.slides[C.activeIndex]]),C.visibleSlides=c};var _,ab;C.startAutoplay=function(){if(C.support.transitions){if("undefined"!=typeof _)return!1;if(!b.autoplay)return;C.callPlugins("onAutoplayStart"),b.onAutoplayStart&&C.fireCallback(b.onAutoplayStart,C),z()}else{if("undefined"!=typeof ab)return!1;if(!b.autoplay)return;C.callPlugins("onAutoplayStart"),b.onAutoplayStart&&C.fireCallback(b.onAutoplayStart,C),ab=setInterval(function(){b.loop?(C.fixLoop(),C.swipeNext(!0)):C.swipeNext(!0)||(b.autoplayStopOnLast?(clearInterval(ab),ab=void 0):C.swipeTo(0))},b.autoplay)}},C.stopAutoplay=function(a){if(C.support.transitions){if(!_)return;_&&clearTimeout(_),_=void 0,a&&!b.autoplayDisableOnInteraction&&C.wrapperTransitionEnd(function(){z()}),C.callPlugins("onAutoplayStop"),b.onAutoplayStop&&C.fireCallback(b.onAutoplayStop,C)}else ab&&clearInterval(ab),ab=void 0,C.callPlugins("onAutoplayStop"),b.onAutoplayStop&&C.fireCallback(b.onAutoplayStop,C)},C.loopCreated=!1,C.removeLoopedSlides=function(){if(C.loopCreated)for(var a=0;a<C.slides.length;a++)C.slides[a].getData("looped")===!0&&C.wrapper.removeChild(C.slides[a])},C.createLoop=function(){if(0!==C.slides.length){C.loopedSlides="auto"===b.slidesPerView?b.loopedSlides||1:b.slidesPerView+b.loopAdditionalSlides,C.loopedSlides>C.slides.length&&(C.loopedSlides=C.slides.length);var a,c="",d="",e="",f=C.slides.length,g=Math.floor(C.loopedSlides/f),h=C.loopedSlides%f;for(a=0;g*f>a;a++){var i=a;if(a>=f){var j=Math.floor(a/f);i=a-f*j}e+=C.slides[i].outerHTML}for(a=0;h>a;a++)d+=t(b.slideDuplicateClass,C.slides[a].outerHTML);for(a=f-h;f>a;a++)c+=t(b.slideDuplicateClass,C.slides[a].outerHTML);var k=c+e+D.innerHTML+e+d;for(D.innerHTML=k,C.loopCreated=!0,C.calcSlides(),a=0;a<C.slides.length;a++)(a<C.loopedSlides||a>=C.slides.length-C.loopedSlides)&&C.slides[a].setData("looped",!0);C.callPlugins("onCreateLoop")}},C.fixLoop=function(){var a;C.activeIndex<C.loopedSlides?(a=C.slides.length-3*C.loopedSlides+C.activeIndex,C.swipeTo(a,0,!1)):("auto"===b.slidesPerView&&C.activeIndex>=2*C.loopedSlides||C.activeIndex>C.slides.length-2*b.slidesPerView)&&(a=-C.slides.length+C.activeIndex+C.loopedSlides,C.swipeTo(a,0,!1))},C.loadSlides=function(){var a="";C.activeLoaderIndex=0;for(var c=b.loader.slides,d=b.loader.loadAllSlides?c.length:b.slidesPerView*(1+b.loader.surroundGroups),e=0;d>e;e++)a+="outer"===b.loader.slidesHTMLType?c[e]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+e+'">'+c[e]+"</"+b.slideElement+">";C.wrapper.innerHTML=a,C.calcSlides(!0),b.loader.loadAllSlides||C.wrapperTransitionEnd(C.reloadSlides,!0)},C.reloadSlides=function(){var a=b.loader.slides,c=parseInt(C.activeSlide().data("swiperindex"),10);if(!(0>c||c>a.length-1)){C.activeLoaderIndex=c;var d=Math.max(0,c-b.slidesPerView*b.loader.surroundGroups),e=Math.min(c+b.slidesPerView*(1+b.loader.surroundGroups)-1,a.length-1);if(c>0){var f=-E*(c-d);C.setWrapperTranslate(f),C.setWrapperTransition(0)}var g;if("reload"===b.loader.logic){C.wrapper.innerHTML="";var h="";for(g=d;e>=g;g++)h+="outer"===b.loader.slidesHTMLType?a[g]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+g+'">'+a[g]+"</"+b.slideElement+">";C.wrapper.innerHTML=h}else{var i=1e3,j=0;for(g=0;g<C.slides.length;g++){var k=C.slides[g].data("swiperindex");d>k||k>e?C.wrapper.removeChild(C.slides[g]):(i=Math.min(k,i),j=Math.max(k,j))}for(g=d;e>=g;g++){var l;i>g&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],C.wrapper.insertBefore(l,C.wrapper.firstChild)),g>j&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],C.wrapper.appendChild(l))}}C.reInit(!0)}},A()}};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(a,b){"use strict";function c(h){if(h.target===f&&(a(e),e.params.queueEndCallbacks&&(e._queueEndCallbacks=!1),!b))for(d=0;d<g.length;d++)e.h.removeEventListener(f,g[d],c)}var d,e=this,f=e.wrapper,g=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(a)for(d=0;d<g.length;d++)e.h.addEventListener(f,g[d],c)},getWrapperTranslate:function(a){"use strict";var b,c,d,e,f=this.wrapper;return"undefined"==typeof a&&(a="horizontal"===this.params.mode?"x":"y"),this.support.transforms&&this.params.useCSS3Transforms?(d=window.getComputedStyle(f,null),window.WebKitCSSMatrix?e=new WebKitCSSMatrix("none"===d.webkitTransform?"":d.webkitTransform):(e=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),b=e.toString().split(",")),"x"===a&&(c=window.WebKitCSSMatrix?e.m41:parseFloat(16===b.length?b[12]:b[4])),"y"===a&&(c=window.WebKitCSSMatrix?e.m42:parseFloat(16===b.length?b[13]:b[5]))):("x"===a&&(c=parseFloat(f.style.left,10)||0),"y"===a&&(c=parseFloat(f.style.top,10)||0)),c||0},setWrapperTranslate:function(a,b,c){"use strict";var d,e=this.wrapper.style,f={x:0,y:0,z:0};3===arguments.length?(f.x=a,f.y=b,f.z=c):("undefined"==typeof b&&(b="horizontal"===this.params.mode?"x":"y"),f[b]=a),this.support.transforms&&this.params.useCSS3Transforms?(d=this.support.transforms3d?"translate3d("+f.x+"px, "+f.y+"px, "+f.z+"px)":"translate("+f.x+"px, "+f.y+"px)",e.webkitTransform=e.MsTransform=e.msTransform=e.MozTransform=e.OTransform=e.transform=d):(e.left=f.x+"px",e.top=f.y+"px"),this.callPlugins("onSetWrapperTransform",f),this.params.onSetWrapperTransform&&this.fireCallback(this.params.onSetWrapperTransform,this,f)},setWrapperTransition:function(a){"use strict";var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=a/1e3+"s",this.callPlugins("onSetWrapperTransition",{duration:a}),this.params.onSetWrapperTransition&&this.fireCallback(this.params.onSetWrapperTransition,this,a)},h:{getWidth:function(a,b,c){"use strict";var d=window.getComputedStyle(a,null).getPropertyValue("width"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetWidth-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),c?Math.ceil(e):e},getHeight:function(a,b,c){"use strict";if(b)return a.offsetHeight;var d=window.getComputedStyle(a,null).getPropertyValue("height"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetHeight-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),c?Math.ceil(e):e},getOffset:function(a){"use strict";var b=a.getBoundingClientRect(),c=document.body,d=a.clientTop||c.clientTop||0,e=a.clientLeft||c.clientLeft||0,f=window.pageYOffset||a.scrollTop,g=window.pageXOffset||a.scrollLeft;return document.documentElement&&!window.pageYOffset&&(f=document.documentElement.scrollTop,g=document.documentElement.scrollLeft),{top:b.top+f-d,left:b.left+g-e}},windowWidth:function(){"use strict";return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){"use strict";return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:void 0},windowScroll:function(){"use strict";return"undefined"!=typeof pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:void 0},addEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},removeEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)}},setTransform:function(a,b){"use strict";var c=a.style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=b},setTranslate:function(a,b){"use strict";var c=a.style,d={x:b.x||0,y:b.y||0,z:b.z||0},e=this.support.transforms3d?"translate3d("+d.x+"px,"+d.y+"px,"+d.z+"px)":"translate("+d.x+"px,"+d.y+"px)";c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=e,this.support.transforms||(c.left=d.x+"px",c.top=d.y+"px")},setTransition:function(a,b){"use strict";var c=a.style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){"use strict";return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){"use strict";var a=document.createElement("div").style;return"webkitPerspective"in a||"MozPerspective"in a||"OPerspective"in a||"MsPerspective"in a||"perspective"in a}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){"use strict";var a=document.createElement("div").style;return"transform"in a||"WebkitTransform"in a||"MozTransform"in a||"msTransform"in a||"MsTransform"in a||"OTransform"in a}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){"use strict";var a=document.createElement("div").style;return"transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"MsTransition"in a||"OTransition"in a}(),classList:function(){"use strict";var a=document.createElement("div");return"classList"in a}()},browser:{ie8:function(){"use strict";var a=-1;if("Microsoft Internet Explorer"===navigator.appName){var b=navigator.userAgent,c=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null!==c.exec(b)&&(a=parseFloat(RegExp.$1))}return-1!==a&&9>a}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}},(window.jQuery||window.Zepto)&&!function(a){"use strict";a.fn.swiper=function(b){var c;return this.each(function(d){var e=a(this);if(!e.data("swiper")){var f=new Swiper(e[0],b);d||(c=f),e.data("swiper",f)}}),c}}(window.jQuery||window.Zepto),"undefined"!=typeof module&&(module.exports=Swiper),"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});

/** Used Only For Touch Devices **/
$(document).ready(function() { 
	/* for touch devices: add class cs-hover to the figures when touching the items */
	if( Modernizr.touch ) {
		$( '.img-hover article:not(.generatedMoreLink) figure, .img-hover div figure').on( 'touchstart', function(e) {
			$('div', this).find( '.mask-over > a' ).on( 'touchstart', function(e) {
				e.stopPropagation();
			});
			$(this).toggleClass('cs-hover');
		});
	}
});



/*
 * Swiper Scrollbar 2.4.1
 * Scrollbar plugin for Swiper
 *
 * http://www.idangero.us/sliders/swiper/plugins/scrollbar.php
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: June 27, 2014
*/
Swiper.prototype.plugins.scrollbar = function (swiper, params) {

    var enabled = params && params.container;
    if (!enabled) return;

    /*=========================
      Default Parameters
      ===========================*/
    var defaults = {
        hide : true,
        draggable : true,
        snapOnRelease: false,
        dragSize: undefined
    };

    params = params || {};
    for (var prop in defaults) {
        if (! (prop in params)) {
            params[prop] = defaults[prop];
        }
    }

    /*=========================
      Container
      ===========================*/
    if (!document.querySelectorAll) {
        if (!window.jQuery) return;
    }
    function $$(s) {
        return document.querySelectorAll ? document.querySelectorAll(s) : jQuery(s);
    }
    if (!(params.container.nodeType)) {
        if ($$(params.container).length === 0) return;
    }
    var container = (params.container.nodeType) ? params.container : $$(params.container)[0];

    /*=========================
      Default Vars
      ===========================*/
    var isH = swiper.params.mode === 'horizontal',
        track = container,
        trackWidth, trackHeight, divider, moveDivider, dragWidth, dragHeight, availWidth, availHeight, swiperMoveWidth, swiperMoveHeight;

    /*=========================
      Define Drag
      ===========================*/
    var drag = document.createElement('div');
    drag.className = 'swiper-scrollbar-drag';
    if (params.draggable) drag.className += ' swiper-scrollbar-cursor-drag';
    track.appendChild(drag);
    if (params.hide) track.style.opacity = 0;

    var te = swiper.touchEvents;
    /*=========================
      Draggable
      ===========================*/
    var dragStart, dragMove, dragEnd, setDragPosition;

    if (params.draggable) {
        var isTouched = false;
        dragStart = function (e) {
            isTouched = true;
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;

            setDragPosition(e);
            clearTimeout(timeout);

            swiper.setTransition(track, 0);
            track.style.opacity = 1;
            swiper.setWrapperTransition(100);
            swiper.setTransition(drag, 100);
            if (params.onScrollbarDrag) {
                params.onScrollbarDrag(swiper);
            }
        };

        dragMove = function (e) {
            if (!isTouched) return;
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            setDragPosition(e);
            swiper.setWrapperTransition(0);
            swiper.setTransition(track, 0);
            swiper.setTransition(drag, 0);
            if (params.onScrollbarDrag) {
                params.onScrollbarDrag(swiper);
            }
        };

        dragEnd = function (e) {
            isTouched = false;
            if (params.hide) {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    track.style.opacity = 0;
                    swiper.setTransition(track, 400);
                }, 1000);

            }
            if (params.snapOnRelease) {
                swiper.swipeReset();
            }
        };

        var lestenEl = swiper.support.touch ? track : document;
        swiper.h.addEventListener(track, te.touchStart, dragStart, false);
        swiper.h.addEventListener(lestenEl, te.touchMove, dragMove, false);
        swiper.h.addEventListener(lestenEl, te.touchEnd, dragEnd, false);

        setDragPosition = function (e) {
            var x = 0, y = 0;
            var position;
            if (isH) {
                var pageX = (e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX;
                x = (pageX) - swiper.h.getOffset(track).left - dragWidth / 2;
                if (x < 0) {
                    x = 0;
                }
                else if ((x + dragWidth) > trackWidth) {
                    x = trackWidth - dragWidth;
                }
            }
            else {
                var pageY = (e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                y = (pageY) - swiper.h.getOffset(track).top - dragHeight / 2;

                if (y < 0) {
                    y = 0;
                }
                else if ((y + dragHeight) > trackHeight) {
                    y = trackHeight - dragHeight;
                }
            }
            //Set Drag Position
            swiper.setTranslate(drag, {x: x, y: y});

            //Wrapper Offset
            var wrapX = -x / moveDivider;
            var wrapY = -y / moveDivider;
            swiper.setWrapperTranslate(wrapX, wrapY, 0);
            swiper.updateActiveSlide(isH ? wrapX : wrapY);
        };
    }

    function setScrollBars() {
        drag.style.width = '';
        drag.style.height = '';
        if (isH) {
            trackWidth = swiper.h.getWidth(track, true);
            if (params.dragSize && params.dragSize > 0) {
                dragWidth = params.dragSize;
                availWidth = trackWidth - dragWidth;
                swiperMoveWidth = swiper.h.getWidth(swiper.wrapper) + swiper.wrapperLeft + swiper.wrapperRight - swiper.width;
                moveDivider = availWidth / swiperMoveWidth;
            }
            else {
                divider = swiper.width / (swiper.h.getWidth(swiper.wrapper) + swiper.wrapperLeft + swiper.wrapperRight);
                moveDivider = divider * (trackWidth / swiper.width);
                dragWidth = trackWidth * divider;
            }
                
            drag.style.width = dragWidth + 'px';
        }
        else {
            trackHeight = swiper.h.getHeight(track, true);
            if (params.dragSize && params.dragSize > 0) {
                dragHeight = params.dragSize;
                availHeight = trackHeight - dragHeight;
                swiperMoveHeight = swiper.h.getHeight(swiper.wrapper) + swiper.wrapperTop + swiper.wrapperBottom - swiper.height;
                moveDivider = availHeight / swiperMoveHeight;
            }
            else {
                divider = swiper.height / (swiper.h.getHeight(swiper.wrapper) + swiper.wrapperTop + swiper.wrapperBottom);
                moveDivider = divider * (trackHeight / swiper.height);
                dragHeight = trackHeight * divider;
            }
            if (dragHeight > trackHeight) dragHeight = trackHeight;
            drag.style.height = dragHeight + 'px';
        }
        if (divider >= 1) {
            container.style.display = 'none';
        }
        else {
            container.style.display = '';
        }

    }
    var timeout;

    return {
        onFirstInit: function (args) {
            setScrollBars();
        },
        onInit: function (args) {
            setScrollBars();
        },

        onTouchMoveEnd: function (args) {
            if (params.hide) {
                clearTimeout(timeout);
                track.style.opacity = 1;
                swiper.setTransition(track, 200);
            }
        },

        onTouchEnd: function (args) {
            if (params.hide) {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    track.style.opacity = 0;
                    swiper.setTransition(track, 400);
                }, 1000);
            }
        },

        onSetWrapperTransform: function (pos) {
            var diff;
            if (isH) {
                var newLeft = pos.x * moveDivider;
                var newWidth = dragWidth;
                if (newLeft > 0) {
                    diff = newLeft;
                    newLeft = 0;
                    newWidth = dragWidth - diff;
                }
                else if ((-newLeft + dragWidth) > trackWidth) {
                    newWidth = trackWidth + newLeft;
                }

                swiper.setTranslate(drag, {x: -newLeft});
                drag.style.width = newWidth + 'px';
            }
            else {
                var newTop = pos.y * moveDivider;
                var newHeight = dragHeight;
                if (newTop > 0) {
                    diff = newTop;
                    newTop = 0;
                    newHeight = dragHeight - diff;
                }
                else if ((-newTop + dragHeight) > trackHeight) {
                    newHeight = trackHeight + newTop;
                }
                swiper.setTranslate(drag, {y: -newTop});
                drag.style.height = newHeight + 'px';
            }
            if (swiper.params.freeMode && params.hide) {
                clearTimeout(timeout);
                track.style.opacity = 1;
                timeout = setTimeout(function () {
                    track.style.opacity = 0;
                    swiper.setTransition(track, 400);
                }, 1000);
            }
        },
        onSetWrapperTransition: function (args) {
            swiper.setTransition(drag, args.duration);
        },
        onDestroy: function () {
            var lestenEl = swiper.support.touch ? track : document;
            swiper.h.removeEventListener(track, te.touchStart, dragStart, false);
            swiper.h.removeEventListener(lestenEl, te.touchMove, dragMove, false);
            swiper.h.removeEventListener(lestenEl, te.touchEnd, dragEnd, false);
        }
    };
};



/*!
 *
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}var mejs=mejs||{};mejs.version="2.16.2",mejs.meIndex=0,mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube","application/x-mpegURL"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo","video/x-vimeo"]}]},mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");return b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>',b.firstChild.href},getScriptPath:function(a){for(var b,c,d,e,f,g,h=0,i="",j="",k=document.getElementsByTagName("script"),l=k.length,m=a.length;l>h;h++){for(e=k[h].src,c=e.lastIndexOf("/"),c>-1?(g=e.substring(c+1),f=e.substring(0,c+1)):(g=e,f=""),b=0;m>b;b++)if(j=a[b],d=g.indexOf(j),d>-1){i=f;break}if(""!==i)break}return i},secondsToTimeCode:function(a,b,c,d){"undefined"==typeof c?c=!1:"undefined"==typeof d&&(d=25);var e=Math.floor(a/3600)%24,f=Math.floor(a/60)%60,g=Math.floor(a%60),h=Math.floor((a%1*d).toFixed(3)),i=(b||e>0?(10>e?"0"+e:e)+":":"")+(10>f?"0"+f:f)+":"+(10>g?"0"+g:g)+(c?":"+(10>h?"0"+h:h):"");return i},timeCodeToSeconds:function(a,b,c,d){"undefined"==typeof c?c=!1:"undefined"==typeof d&&(d=25);var e=a.split(":"),f=parseInt(e[0],10),g=parseInt(e[1],10),h=parseInt(e[2],10),i=0,j=0;return c&&(i=parseInt(e[3])/d),j=3600*f+60*g+h+i},convertSMPTEtoSeconds:function(a){if("string"!=typeof a)return!1;a=a.replace(",",".");var b=0,c=-1!=a.indexOf(".")?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++)d=1,e>0&&(d=Math.pow(60,e)),b+=Number(a[e])*d;return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);b&&/object|embed/i.test(b.nodeName)&&(mejs.MediaFeatures.isIE?(b.style.display="none",function(){4==b.readyState?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))},removeObjectInIE:function(a){var b=document.getElementById(a);if(b){for(var c in b)"function"==typeof b[c]&&(b[c]=null);b.parentNode.removeChild(b)}}},mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];return b[1]=b[1]||0,b[2]=b[2]||0,c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?!0:!1},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e,f,g,h=[0,0,0];if("undefined"!=typeof this.nav.plugins&&"object"==typeof this.nav.plugins[a]){if(e=this.nav.plugins[a].description,e&&("undefined"==typeof this.nav.mimeTypes||!this.nav.mimeTypes[b]||this.nav.mimeTypes[b].enabledPlugin))for(h=e.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split("."),f=0;f<h.length;f++)h[f]=parseInt(h[f].match(/\d+/),10)}else if("undefined"!=typeof window.ActiveXObject)try{g=new ActiveXObject(c),g&&(h=d(g))}catch(i){}return h}},mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[],c=a.GetVariable("$version");return c&&(c=c.split(" ")[1].split(","),b=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]),b}),mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(a,b,c,d){for(;a.isVersionSupported(b[0]+"."+b[1]+"."+b[2]+"."+b[3]);)b[c]+=d;b[c]-=d};return c(a,b,0,1),c(a,b,1,1),c(a,b,2,1e4),c(a,b,2,1e3),c(a,b,2,100),c(a,b,2,10),c(a,b,2,1),c(a,b,3,1),b}),mejs.MediaFeatures={init:function(){var a,b,c=this,d=document,e=mejs.PluginDetector.nav,f=mejs.PluginDetector.ua.toLowerCase(),g=["source","track","audio","video"];c.isiPad=null!==f.match(/ipad/i),c.isiPhone=null!==f.match(/iphone/i),c.isiOS=c.isiPhone||c.isiPad,c.isAndroid=null!==f.match(/android/i),c.isBustedAndroid=null!==f.match(/android 2\.[12]/),c.isBustedNativeHTTPS="https:"===location.protocol&&(null!==f.match(/android [12]\./)||null!==f.match(/macintosh.* version.* safari/)),c.isIE=-1!=e.appName.toLowerCase().indexOf("microsoft")||null!==e.appName.toLowerCase().match(/trident/gi),c.isChrome=null!==f.match(/chrome/gi),c.isChromium=null!==f.match(/chromium/gi),c.isFirefox=null!==f.match(/firefox/gi),c.isWebkit=null!==f.match(/webkit/gi),c.isGecko=null!==f.match(/gecko/gi)&&!c.isWebkit&&!c.isIE,c.isOpera=null!==f.match(/opera/gi),c.hasTouch="ontouchstart"in window,c.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(a=0;a<g.length;a++)b=document.createElement(g[a]);c.supportsMediaTag="undefined"!=typeof b.canPlayType||c.isBustedAndroid;try{b.canPlayType("video/mp4")}catch(h){c.supportsMediaTag=!1}c.hasSemiNativeFullScreen="undefined"!=typeof b.webkitEnterFullscreen,c.hasNativeFullscreen="undefined"!=typeof b.requestFullscreen,c.hasWebkitNativeFullScreen="undefined"!=typeof b.webkitRequestFullScreen,c.hasMozNativeFullScreen="undefined"!=typeof b.mozRequestFullScreen,c.hasMsNativeFullScreen="undefined"!=typeof b.msRequestFullscreen,c.hasTrueNativeFullScreen=c.hasWebkitNativeFullScreen||c.hasMozNativeFullScreen||c.hasMsNativeFullScreen,c.nativeFullScreenEnabled=c.hasTrueNativeFullScreen,c.hasMozNativeFullScreen?c.nativeFullScreenEnabled=document.mozFullScreenEnabled:c.hasMsNativeFullScreen&&(c.nativeFullScreenEnabled=document.msFullscreenEnabled),c.isChrome&&(c.hasSemiNativeFullScreen=!1),c.hasTrueNativeFullScreen&&(c.fullScreenEventName="",c.hasWebkitNativeFullScreen?c.fullScreenEventName="webkitfullscreenchange":c.hasMozNativeFullScreen?c.fullScreenEventName="mozfullscreenchange":c.hasMsNativeFullScreen&&(c.fullScreenEventName="MSFullscreenChange"),c.isFullScreen=function(){return c.hasMozNativeFullScreen?d.mozFullScreen:c.hasWebkitNativeFullScreen?d.webkitIsFullScreen:c.hasMsNativeFullScreen?null!==d.msFullscreenElement:void 0},c.requestFullScreen=function(a){c.hasWebkitNativeFullScreen?a.webkitRequestFullScreen():c.hasMozNativeFullScreen?a.mozRequestFullScreen():c.hasMsNativeFullScreen&&a.msRequestFullscreen()},c.cancelFullScreen=function(){c.hasWebkitNativeFullScreen?document.webkitCancelFullScreen():c.hasMozNativeFullScreen?document.mozCancelFullScreen():c.hasMsNativeFullScreen&&document.msExitFullscreen()}),c.hasSemiNativeFullScreen&&f.match(/mac os x 10_5/i)&&(c.hasNativeFullScreen=!1,c.hasSemiNativeFullScreen=!1)}},mejs.MediaFeatures.init(),mejs.HtmlMediaElement={pluginType:"native",isFullScreen:!1,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if("string"==typeof a)this.src=a;else{var c,d;for(c=0;c<a.length;c++)if(d=a[c],this.canPlayType(d.type)){this.src=d.src;break}}},setVideoSize:function(a,b){this.width=a,this.height=b}},mejs.PluginMediaElement=function(a,b,c){this.id=a,this.pluginType=b,this.src=c,this.events={},this.attributes={}},mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:!1,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:!0,ended:!1,seeking:!1,duration:0,error:null,tagName:"",muted:!1,volume:1,currentTime:0,play:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.playVideo():this.pluginApi.playMedia(),this.paused=!1)},load:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType||this.pluginApi.loadMedia(),this.paused=!1)},pause:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia(),this.paused=!0)},stop:function(){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.stopVideo():this.pluginApi.stopMedia(),this.paused=!0)},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++)if(d=e[b],mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably";return""},positionFullscreenButton:function(a,b,c){null!=this.pluginApi&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){null!=this.pluginApi&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if("string"==typeof a)this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)),this.src=mejs.Utility.absolutizeUrl(a);else{var b,c;for(b=0;b<a.length;b++)if(c=a[b],this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)),this.src=mejs.Utility.absolutizeUrl(a);break}}},setCurrentTime:function(a){null!=this.pluginApi&&("youtube"==this.pluginType||"vimeo"==this.pluginType?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a),this.currentTime=a)},setVolume:function(a){null!=this.pluginApi&&(this.pluginApi.setVolume("youtube"==this.pluginType?100*a:a),this.volume=a)},setMuted:function(a){null!=this.pluginApi&&("youtube"==this.pluginType?(a?this.pluginApi.mute():this.pluginApi.unMute(),this.muted=a,this.dispatchEvent("volumechange")):this.pluginApi.setMuted(a),this.muted=a)},setVideoSize:function(a,b){this.pluginElement&&this.pluginElement.style&&(this.pluginElement.style.width=a+"px",this.pluginElement.style.height=b+"px"),null!=this.pluginApi&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.setFullscreen(!0)},exitFullScreen:function(){null!=this.pluginApi&&this.pluginApi.setFullscreen&&this.setFullscreen(!1)},addEventListener:function(a,b){this.events[a]=this.events[a]||[],this.events[a].push(b)},removeEventListener:function(a,b){if(!a)return this.events={},!0;var c=this.events[a];if(!c)return!0;if(!b)return this.events[a]=[],!0;for(var d=0;d<c.length;d++)if(c[d]===b)return this.events[a].splice(d,1),!0;return!1},dispatchEvent:function(a){var b,c,d=this.events[a];if(d)for(c=Array.prototype.slice.call(arguments,1),b=0;b<d.length;b++)d[b].apply(this,c)},hasAttribute:function(a){return a in this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){return this.hasAttribute(a)?this.attributes[a]:""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id),mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)}},mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b,this.htmlMediaElements[a]=c},unregisterPluginElement:function(a){delete this.pluginMediaElements[a],delete this.htmlMediaElements[a]},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case"flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case"silverlight":b.pluginElement=document.getElementById(b.id),b.pluginApi=b.pluginElement.Content.MediaElementJS}null!=b.pluginApi&&b.success&&b.success(b,c)}},fireEvent:function(a,b,c){var d,e,f,g=this.pluginMediaElements[a];if(g){d={type:b,target:g};for(e in c)g[e]=c[e],d[e]=c[e];f=c.bufferedTime||0,d.target.buffered=d.buffered={start:function(){return 0},end:function(){return f},length:1},g.dispatchEvent(d.type,d)}}},mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:!1,httpsBasicAuthSite:!1,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:!1,enablePseudoStreaming:!1,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:.8,success:function(){},error:function(){}},mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)},mejs.HtmlMediaElementShim={create:function(a,b){var c,d,e=mejs.MediaElementDefaults,f="string"==typeof a?document.getElementById(a):a,g=f.tagName.toLowerCase(),h="audio"===g||"video"===g,i=f.getAttribute(h?"src":"href"),j=f.getAttribute("poster"),k=f.getAttribute("autoplay"),l=f.getAttribute("preload"),m=f.getAttribute("controls");for(d in b)e[d]=b[d];return i="undefined"==typeof i||null===i||""==i?null:i,j="undefined"==typeof j||null===j?"":j,l="undefined"==typeof l||null===l||"false"===l?"none":l,k=!("undefined"==typeof k||null===k||"false"===k),m=!("undefined"==typeof m||null===m||"false"===m),c=this.determinePlayback(f,e,mejs.MediaFeatures.supportsMediaTag,h,i),c.url=null!==c.url?mejs.Utility.absolutizeUrl(c.url):"","native"==c.method?(mejs.MediaFeatures.isBustedAndroid&&(f.src=c.url,f.addEventListener("click",function(){f.play()},!1)),this.updateNative(c,e,k,l)):""!==c.method?this.createPlugin(c,e,j,k,l,m):(this.createErrorMessage(c,e,j),this)},determinePlayback:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=[],r={method:"",url:"",htmlMediaElement:a,isVideo:"audio"!=a.tagName.toLowerCase()};if("undefined"!=typeof b.type&&""!==b.type)if("string"==typeof b.type)q.push({type:b.type,url:e});else for(f=0;f<b.type.length;f++)q.push({type:b.type[f],url:e});else if(null!==e)k=this.formatType(e,a.getAttribute("type")),q.push({type:k,url:e});else for(f=0;f<a.childNodes.length;f++)j=a.childNodes[f],1==j.nodeType&&"source"==j.tagName.toLowerCase()&&(e=j.getAttribute("src"),k=this.formatType(e,j.getAttribute("type")),p=j.getAttribute("media"),(!p||!window.matchMedia||window.matchMedia&&window.matchMedia(p).matches)&&q.push({type:k,url:e}));if(!d&&q.length>0&&null!==q[0].url&&this.getTypeFromFile(q[0].url).indexOf("audio")>-1&&(r.isVideo=!1),mejs.MediaFeatures.isBustedAndroid&&(a.canPlayType=function(a){return null!==a.match(/video\/(mp4|m4v)/gi)?"maybe":""}),mejs.MediaFeatures.isChromium&&(a.canPlayType=function(a){return null!==a.match(/video\/(webm|ogv|ogg)/gi)?"maybe":""}),!(!c||"auto"!==b.mode&&"auto_plugin"!==b.mode&&"native"!==b.mode||mejs.MediaFeatures.isBustedNativeHTTPS&&b.httpsBasicAuthSite===!0)){for(d||(o=document.createElement(r.isVideo?"video":"audio"),a.parentNode.insertBefore(o,a),a.style.display="none",r.htmlMediaElement=a=o),f=0;f<q.length;f++)if("video/m3u8"==q[f].type||""!==a.canPlayType(q[f].type).replace(/no/,"")||""!==a.canPlayType(q[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")||""!==a.canPlayType(q[f].type.replace(/m4a/,"mp4")).replace(/no/,"")){r.method="native",r.url=q[f].url;break}if("native"===r.method&&(null!==r.url&&(a.src=r.url),"auto_plugin"!==b.mode))return r}if("auto"===b.mode||"auto_plugin"===b.mode||"shim"===b.mode)for(f=0;f<q.length;f++)for(k=q[f].type,g=0;g<b.plugins.length;g++)for(l=b.plugins[g],m=mejs.plugins[l],h=0;h<m.length;h++)if(n=m[h],null==n.version||mejs.PluginDetector.hasPluginVersion(l,n.version))for(i=0;i<n.types.length;i++)if(k==n.types[i])return r.method=l,r.url=q[f].url,r;return"auto_plugin"===b.mode&&"native"===r.method?r:(""===r.method&&q.length>0&&(r.url=q[0].url),r)},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){a=a.split("?")[0];var b=a.substring(a.lastIndexOf(".")+1).toLowerCase();return(/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b)?"video":"audio")+"/"+this.getTypeFromExtension(b)},getTypeFromExtension:function(a){switch(a){case"mp4":case"m4v":case"m4a":return"mp4";case"webm":case"webma":case"webmv":return"webm";case"ogg":case"oga":case"ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=a.htmlMediaElement,e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=d.width+"px",e.style.height=d.height+"px"}catch(f){}e.innerHTML=b.customError?b.customError:""!==c?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>",d.parentNode.insertBefore(e,d),d.style.display="none",b.error(d)},createPlugin:function(a,b,c,d,e,f){var g,h,i,j=a.htmlMediaElement,k=1,l=1,m="me_"+a.method+"_"+mejs.meIndex++,n=new mejs.PluginMediaElement(m,a.method,a.url),o=document.createElement("div");n.tagName=j.tagName;for(var p=0;p<j.attributes.length;p++){var q=j.attributes[p];1==q.specified&&n.setAttribute(q.name,q.value)}for(h=j.parentNode;null!==h&&"body"!==h.tagName.toLowerCase()&&null!=h.parentNode;){if("p"===h.parentNode.tagName.toLowerCase()){h.parentNode.parentNode.insertBefore(h,h.parentNode);break}h=h.parentNode}switch(a.isVideo?(k=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:null!==j.getAttribute("width")?j.getAttribute("width"):b.defaultVideoWidth,l=b.pluginHeight>0?b.pluginHeight:b.videoHeight>0?b.videoHeight:null!==j.getAttribute("height")?j.getAttribute("height"):b.defaultVideoHeight,k=mejs.Utility.encodeUrl(k),l=mejs.Utility.encodeUrl(l)):b.enablePluginDebug&&(k=320,l=240),n.success=b.success,mejs.MediaPluginBridge.registerPluginElement(m,n,j),o.className="me-plugin",o.id=m+"_container",a.isVideo?j.parentNode.insertBefore(o,j):document.body.insertBefore(o,document.body.childNodes[0]),i=["id="+m,"isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+k,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+l,"pseudostreamstart="+b.pseudoStreamingStartQueryParam],null!==a.url&&i.push("flash"==a.method?"file="+mejs.Utility.encodeUrl(a.url):"file="+a.url),b.enablePluginDebug&&i.push("debug=true"),b.enablePluginSmoothing&&i.push("smoothing=true"),b.enablePseudoStreaming&&i.push("pseudostreaming=true"),f&&i.push("controls=true"),b.pluginVars&&(i=i.concat(b.pluginVars)),a.method){case"silverlight":o.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+m+'" name="'+m+'" width="'+k+'" height="'+l+'" class="mejs-shim"><param name="initParams" value="'+i.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';break;case"flash":mejs.MediaFeatures.isIE?(g=document.createElement("div"),o.appendChild(g),g.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+m+'" width="'+k+'" height="'+l+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+i.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'):o.innerHTML='<embed id="'+m+'" name="'+m+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+i.join("&")+'" width="'+k+'" height="'+l+'" scale="default"class="mejs-shim"></embed>';break;case"youtube":var r;-1!=a.url.lastIndexOf("youtu.be")?(r=a.url.substr(a.url.lastIndexOf("/")+1),-1!=r.indexOf("?")&&(r=r.substr(0,r.indexOf("?")))):r=a.url.substr(a.url.lastIndexOf("=")+1),youtubeSettings={container:o,containerId:o.id,pluginMediaElement:n,pluginId:m,videoId:r,height:l,width:k},mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case"vimeo":var s=m+"_player";if(n.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1),o.innerHTML='<iframe src="//player.vimeo.com/video/'+n.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+s+'" width="'+k+'" height="'+l+'" frameborder="0" class="mejs-shim" id="'+s+'" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',"function"==typeof $f){var t=$f(o.childNodes[0]);t.addEvent("ready",function(){function a(a,b,c,d){var e={type:c,target:b};"timeupdate"==c&&(b.currentTime=e.currentTime=d.seconds,b.duration=e.duration=d.duration),b.dispatchEvent(e.type,e)}$.extend(t,{playVideo:function(){t.api("play")},stopVideo:function(){t.api("unload")},pauseVideo:function(){t.api("pause")},seekTo:function(a){t.api("seekTo",a)},setVolume:function(a){t.api("setVolume",a)},setMuted:function(a){a?(t.lastVolume=t.api("getVolume"),t.api("setVolume",0)):(t.api("setVolume",t.lastVolume),delete t.lastVolume)}}),t.addEvent("play",function(){a(t,n,"play"),a(t,n,"playing")}),t.addEvent("pause",function(){a(t,n,"pause")}),t.addEvent("finish",function(){a(t,n,"ended")}),t.addEvent("playProgress",function(b){a(t,n,"timeupdate",b)}),n.pluginElement=o,n.pluginApi=t,mejs.MediaPluginBridge.initPlugin(m)})}else console.warn("You need to include froogaloop for vimeo to work")}return j.style.display="none",j.removeAttribute("autoplay"),n},updateNative:function(a,b){var c,d=a.htmlMediaElement;for(c in mejs.HtmlMediaElement)d[c]=mejs.HtmlMediaElement[c];return b.success(d,d),d}},mejs.YouTubeApi={isIframeStarted:!1,isIframeLoaded:!1,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="//www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b),this.isIframeStarted=!0}},iframeQueue:[],enqueueIframe:function(a){this.isLoaded?this.createIframe(a):(this.loadIframeApi(),this.iframeQueue.push(a))},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c,mejs.MediaPluginBridge.initPlugin(a.pluginId),setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(a){mejs.YouTubeApi.handleStateChange(a.data,c,b)}}})},createEvent:function(a,b,c){var d={type:c,target:b};if(a&&a.getDuration){b.currentTime=d.currentTime=a.getCurrentTime(),b.duration=d.duration=a.getDuration(),d.paused=b.paused,d.ended=b.ended,d.muted=a.isMuted(),d.volume=a.getVolume()/100,d.bytesTotal=a.getVideoBytesTotal(),d.bufferedBytes=a.getVideoBytesLoaded();var e=d.bufferedBytes/d.bytesTotal*d.duration;d.target.buffered=d.buffered={start:function(){return 0},end:function(){return e},length:1}}b.dispatchEvent(d.type,d)},iFrameReady:function(){for(this.isLoaded=!0,this.isIframeLoaded=!0;this.iframeQueue.length>0;){var a=this.iframeQueue.pop();this.createIframe(a)}},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=a;var b,c="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";mejs.MediaFeatures.isIE?(b=document.createElement("div"),a.container.appendChild(b),b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'):a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c,mejs.MediaPluginBridge.initPlugin(a),c.cueVideoById(b.videoId);var e=b.containerId+"_callback";window[e]=function(a){mejs.YouTubeApi.handleStateChange(a,c,d)},c.addEventListener("onStateChange",e),setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250),mejs.YouTubeApi.createEvent(c,d,"canplay")},handleStateChange:function(a,b,c){switch(a){case-1:c.paused=!0,c.ended=!0,mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=!1,c.ended=!0,mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=!1,c.ended=!1,mejs.YouTubeApi.createEvent(b,c,"play"),mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=!0,c.ended=!1,mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress");break;case 5:}}},window.mejs=mejs,window.MediaElement=mejs.MediaElement,function(a,b){"use strict";var c={locale:{language:b.i18n&&b.i18n.locale.language||"",strings:b.i18n&&b.i18n.locale.strings||{}},ietf_lang_regex:/^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,methods:{}};c.getLanguage=function(){var a=c.locale.language||window.navigator.userLanguage||window.navigator.language;return c.ietf_lang_regex.exec(a)?a:null},"undefined"!=typeof mejsL10n&&(c.locale.language=mejsL10n.language),c.methods.checkPlain=function(a){var b,c,d={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};a=String(a);for(b in d)d.hasOwnProperty(b)&&(c=new RegExp(b,"g"),a=a.replace(c,d[b]));return a},c.methods.t=function(a,b){return c.locale.strings&&c.locale.strings[b.context]&&c.locale.strings[b.context][a]&&(a=c.locale.strings[b.context][a]),c.methods.checkPlain(a)},c.t=function(a,b){if("string"==typeof a&&a.length>0){var d=c.getLanguage();return b=b||{context:d},c.methods.t(a,b)}throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."}},b.i18n=c}(document,mejs),function(a){"use strict";"undefined"!=typeof mejsL10n&&(a[mejsL10n.language]=mejsL10n.strings)}(mejs.i18n.locale.strings);



/*!
 *
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
"undefined"!=typeof jQuery?mejs.$=jQuery:"undefined"!=typeof ender&&(mejs.$=ender),function(a){mejs.MepDefaults={poster:"",showPosterWhenEnded:!1,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return.05*a.duration},defaultSeekForwardInterval:function(a){return.05*a.duration},setDimensions:!0,audioWidth:-1,audioHeight:-1,startVolume:.8,loop:!1,autoRewind:!0,enableAutosize:!0,alwaysShowHours:!1,showTimecodeFrameCount:!1,framesPerSecond:25,autosizeProgress:!0,alwaysShowControls:!1,hideVideoControlsOnLoad:!1,clickToPlayPause:!0,iPadUseNativeControls:!1,iPhoneUseNativeControls:!1,AndroidUseNativeControls:!1,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:!0,enableKeyboard:!0,pauseOtherPlayers:!0,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?a.play():a.pause()}},{keys:[38],action:function(a,b){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.min(b.volume+.1,1);b.setVolume(c)}},{keys:[40],action:function(a,b){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.max(b.volume-.1,0);b.setVolume(c)}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){"undefined"!=typeof a.enterFullScreen&&(a.isFullScreen?a.exitFullScreen():a.enterFullScreen())}},{keys:[77],action:function(a){a.container.find(".mejs-volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer()),a.setMuted(a.media.muted?!1:!0)}}]},mejs.mepIndex=0,mejs.players={},mejs.MediaElementPlayer=function(b,c){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(b,c);var d=this;return d.$media=d.$node=a(b),d.node=d.media=d.$media[0],"undefined"!=typeof d.node.player?d.node.player:(d.node.player=d,"undefined"==typeof c&&(c=d.$node.data("mejsoptions")),d.options=a.extend({},mejs.MepDefaults,c),d.id="mep_"+mejs.mepIndex++,mejs.players[d.id]=d,d.init(),d)},mejs.MediaElementPlayer.prototype={hasFocus:!1,controlsAreVisible:!0,init:function(){var b=this,c=mejs.MediaFeatures,d=a.extend(!0,{},b.options,{success:function(a,c){b.meReady(a,c)},error:function(a){b.handleError(a)}}),e=b.media.tagName.toLowerCase();if(b.isDynamic="audio"!==e&&"video"!==e,b.isVideo=b.isDynamic?b.options.isVideo:"audio"!==e&&b.options.isVideo,c.isiPad&&b.options.iPadUseNativeControls||c.isiPhone&&b.options.iPhoneUseNativeControls)b.$media.attr("controls","controls"),c.isiPad&&null!==b.media.getAttribute("autoplay")&&b.play();else if(c.isAndroid&&b.options.AndroidUseNativeControls);else{b.$media.removeAttr("controls");var f=mejs.i18n.t(b.isVideo?"Video Player":"Audio Player");if(b.container=a('<span class="mejs-offscreen">'+f+'</span><div id="'+b.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'" tabindex="0" role="application" aria-label="'+f+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media).focus(function(){if(!b.controlsAreVisible){b.showControls(!0);var a=b.container.find(".mejs-playpause-button > button");a.focus()}}),b.container.addClass((c.isAndroid?"mejs-android ":"")+(c.isiOS?"mejs-ios ":"")+(c.isiPad?"mejs-ipad ":"")+(c.isiPhone?"mejs-iphone ":"")+(b.isVideo?"mejs-video ":"mejs-audio ")),c.isiOS){var g=b.$media.clone();b.container.find(".mejs-mediaelement").append(g),b.$media.remove(),b.$node=b.$media=g,b.node=b.media=g[0]}else b.container.find(".mejs-mediaelement").append(b.$media);b.controls=b.container.find(".mejs-controls"),b.layers=b.container.find(".mejs-layers");var h=b.isVideo?"video":"audio",i=h.substring(0,1).toUpperCase()+h.substring(1);b.width=b.options[h+"Width"]>0||b.options[h+"Width"].toString().indexOf("%")>-1?b.options[h+"Width"]:""!==b.media.style.width&&null!==b.media.style.width?b.media.style.width:null!==b.media.getAttribute("width")?b.$media.attr("width"):b.options["default"+i+"Width"],b.height=b.options[h+"Height"]>0||b.options[h+"Height"].toString().indexOf("%")>-1?b.options[h+"Height"]:""!==b.media.style.height&&null!==b.media.style.height?b.media.style.height:null!==b.$media[0].getAttribute("height")?b.$media.attr("height"):b.options["default"+i+"Height"],b.setPlayerSize(b.width,b.height),d.pluginWidth=b.width,d.pluginHeight=b.height}mejs.MediaElement(b.$media[0],d),"undefined"!=typeof b.container&&b.controlsAreVisible&&b.container.trigger("controlsshown")},showControls:function(a){var b=this;a="undefined"==typeof a||a,b.controlsAreVisible||(a?(b.controls.css("visibility","visible").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0,b.container.trigger("controlsshown")}),b.container.find(".mejs-control").css("visibility","visible").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0})):(b.controls.css("visibility","visible").css("display","block"),b.container.find(".mejs-control").css("visibility","visible").css("display","block"),b.controlsAreVisible=!0,b.container.trigger("controlsshown")),b.setControlsSize())},hideControls:function(b){var c=this;b="undefined"==typeof b||b,!c.controlsAreVisible||c.options.alwaysShowControls||c.keyboardAction||(b?(c.controls.stop(!0,!0).fadeOut(200,function(){a(this).css("visibility","hidden").css("display","block"),c.controlsAreVisible=!1,c.container.trigger("controlshidden")}),c.container.find(".mejs-control").stop(!0,!0).fadeOut(200,function(){a(this).css("visibility","hidden").css("display","block")})):(c.controls.css("visibility","hidden").css("display","block"),c.container.find(".mejs-control").css("visibility","hidden").css("display","block"),c.controlsAreVisible=!1,c.container.trigger("controlshidden")))},controlsTimer:null,startControlsTimer:function(a){var b=this;a="undefined"!=typeof a?a:1500,b.killControlsTimer("start"),b.controlsTimer=setTimeout(function(){b.hideControls(),b.killControlsTimer("hide")},a)},killControlsTimer:function(){var a=this;null!==a.controlsTimer&&(clearTimeout(a.controlsTimer),delete a.controlsTimer,a.controlsTimer=null)},controlsEnabled:!0,disableControls:function(){var a=this;a.killControlsTimer(),a.hideControls(!1),this.controlsEnabled=!1},enableControls:function(){var a=this;a.showControls(!1),a.controlsEnabled=!0},meReady:function(b,c){var d,e,f=this,g=mejs.MediaFeatures,h=c.getAttribute("autoplay"),i=!("undefined"==typeof h||null===h||"false"===h);if(!f.created){if(f.created=!0,f.media=b,f.domNode=c,!(g.isAndroid&&f.options.AndroidUseNativeControls||g.isiPad&&f.options.iPadUseNativeControls||g.isiPhone&&f.options.iPhoneUseNativeControls)){f.buildposter(f,f.controls,f.layers,f.media),f.buildkeyboard(f,f.controls,f.layers,f.media),f.buildoverlays(f,f.controls,f.layers,f.media),f.findTracks();for(d in f.options.features)if(e=f.options.features[d],f["build"+e])try{f["build"+e](f,f.controls,f.layers,f.media)}catch(j){}f.container.trigger("controlsready"),f.setPlayerSize(f.width,f.height),f.setControlsSize(),f.isVideo&&(mejs.MediaFeatures.hasTouch?f.$media.bind("touchstart",function(){f.controlsAreVisible?f.hideControls(!1):f.controlsEnabled&&f.showControls(!1)}):(f.clickToPlayPauseCallback=function(){f.options.clickToPlayPause&&(f.media.paused?f.play():f.pause())},f.media.addEventListener("click",f.clickToPlayPauseCallback,!1),f.container.bind("mouseenter mouseover",function(){f.controlsEnabled&&(f.options.alwaysShowControls||(f.killControlsTimer("enter"),f.showControls(),f.startControlsTimer(2500)))}).bind("mousemove",function(){f.controlsEnabled&&(f.controlsAreVisible||f.showControls(),f.options.alwaysShowControls||f.startControlsTimer(2500))}).bind("mouseleave",function(){f.controlsEnabled&&(f.media.paused||f.options.alwaysShowControls||f.startControlsTimer(1e3))})),f.options.hideVideoControlsOnLoad&&f.hideControls(!1),i&&!f.options.alwaysShowControls&&f.hideControls(),f.options.enableAutosize&&f.media.addEventListener("loadedmetadata",function(a){f.options.videoHeight<=0&&null===f.domNode.getAttribute("height")&&!isNaN(a.target.videoHeight)&&(f.setPlayerSize(a.target.videoWidth,a.target.videoHeight),f.setControlsSize(),f.media.setVideoSize(a.target.videoWidth,a.target.videoHeight))},!1)),b.addEventListener("play",function(){var a;for(a in mejs.players){var b=mejs.players[a];b.id==f.id||!f.options.pauseOtherPlayers||b.paused||b.ended||b.pause(),b.hasFocus=!1}f.hasFocus=!0},!1),f.media.addEventListener("ended",function(){if(f.options.autoRewind)try{f.media.setCurrentTime(0),window.setTimeout(function(){a(f.container).find(".mejs-overlay-loading").parent().hide()},20)}catch(b){}f.media.pause(),f.setProgressRail&&f.setProgressRail(),f.setCurrentRail&&f.setCurrentRail(),f.options.loop?f.play():!f.options.alwaysShowControls&&f.controlsEnabled&&f.showControls()},!1),f.media.addEventListener("loadedmetadata",function(){f.updateDuration&&f.updateDuration(),f.updateCurrent&&f.updateCurrent(),f.isFullScreen||(f.setPlayerSize(f.width,f.height),f.setControlsSize())},!1),f.container.focusout(function(b){if(b.relatedTarget){var c=a(b.relatedTarget);f.keyboardAction&&0===c.parents(".mejs-container").length&&(f.keyboardAction=!1,f.hideControls(!0))}}),setTimeout(function(){f.setPlayerSize(f.width,f.height),f.setControlsSize()},50),f.globalBind("resize",function(){f.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||f.setPlayerSize(f.width,f.height),f.setControlsSize()}),"youtube"==f.media.pluginType&&f.options.autoplay&&f.container.find(".mejs-overlay-play").hide()}i&&"native"==b.pluginType&&f.play(),f.options.success&&("string"==typeof f.options.success?window[f.options.success](f.media,f.domNode,f):f.options.success(f.media,f.domNode,f))}},handleError:function(a){var b=this;b.controls.hide(),b.options.error&&b.options.error(a)},setPlayerSize:function(b,c){var d=this;if(!d.options.setDimensions)return!1;if("undefined"!=typeof b&&(d.width=b),"undefined"!=typeof c&&(d.height=c),d.height.toString().indexOf("%")>0||"100%"===d.$node.css("max-width")||d.$node[0].currentStyle&&"100%"===d.$node[0].currentStyle.maxWidth){var e=function(){return d.isVideo?d.media.videoWidth&&d.media.videoWidth>0?d.media.videoWidth:null!==d.media.getAttribute("width")?d.media.getAttribute("width"):d.options.defaultVideoWidth:d.options.defaultAudioWidth}(),f=function(){return d.isVideo?d.media.videoHeight&&d.media.videoHeight>0?d.media.videoHeight:null!==d.media.getAttribute("height")?d.media.getAttribute("height"):d.options.defaultVideoHeight:d.options.defaultAudioHeight}(),g=d.container.parent().closest(":visible").width(),h=d.container.parent().closest(":visible").height(),i=d.isVideo||!d.options.autosizeProgress?parseInt(g*f/e,10):f;isNaN(i)&&(i=h),"body"===d.container.parent()[0].tagName.toLowerCase()&&(g=a(window).width(),i=a(window).height()),i&&g&&(d.container.width(g).height(i),d.$media.add(d.container.find(".mejs-shim")).width("100%").height("100%"),d.isVideo&&d.media.setVideoSize&&d.media.setVideoSize(g,i),d.layers.children(".mejs-layer").width("100%").height("100%"))}else d.container.width(d.width).height(d.height),d.layers.children(".mejs-layer").width(d.width).height(d.height);var j=d.layers.find(".mejs-overlay-play"),k=j.find(".mejs-overlay-button");j.height(d.container.height()-d.controls.height()),k.css("margin-top","-"+(k.height()/2-d.controls.height()/2).toString()+"px")},setControlsSize:function(){var b=this,c=0,d=0,e=b.controls.find(".mejs-time-rail"),f=b.controls.find(".mejs-time-total"),g=(b.controls.find(".mejs-time-current"),b.controls.find(".mejs-time-loaded"),e.siblings()),h=g.last(),i=null;if(b.container.is(":visible")&&e.length&&e.is(":visible")){b.options&&!b.options.autosizeProgress&&(d=parseInt(e.css("width"),10)),0!==d&&d||(g.each(function(){var b=a(this);"absolute"!=b.css("position")&&b.is(":visible")&&(c+=a(this).outerWidth(!0))}),d=b.controls.width()-c-(e.outerWidth(!0)-e.width()));do e.width(d),f.width(d-(f.outerWidth(!0)-f.width())),"absolute"!=h.css("position")&&(i=h.position(),d--);while(null!==i&&i.top>0&&d>0);b.setProgressRail&&b.setProgressRail(),b.setCurrentRail&&b.setCurrentRail()}},buildposter:function(b,c,d,e){var f=this,g=a('<div class="mejs-poster mejs-layer"></div>').appendTo(d),h=b.$media.attr("poster");""!==b.options.poster&&(h=b.options.poster),h?f.setPoster(h):g.hide(),e.addEventListener("play",function(){g.hide()},!1),b.options.showPosterWhenEnded&&b.options.autoRewind&&e.addEventListener("ended",function(){g.show()},!1)},setPoster:function(b){var c=this,d=c.container.find(".mejs-poster"),e=d.find("img");0===e.length&&(e=a('<img width="100%" height="100%" />').appendTo(d)),e.attr("src",b),d.css({"background-image":"url("+b+")"})},buildoverlays:function(b,c,d,e){var f=this;if(b.isVideo){var g=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(d),h=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(d),i=a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(d).bind("click",function(){f.options.clickToPlayPause&&e.paused&&e.play()});e.addEventListener("play",function(){i.hide(),g.hide(),c.find(".mejs-time-buffering").hide(),h.hide()},!1),e.addEventListener("playing",function(){i.hide(),g.hide(),c.find(".mejs-time-buffering").hide(),h.hide()},!1),e.addEventListener("seeking",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("seeked",function(){g.hide(),c.find(".mejs-time-buffering").hide()},!1),e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||i.show()},!1),e.addEventListener("waiting",function(){g.show(),c.find(".mejs-time-buffering").show()},!1),e.addEventListener("loadeddata",function(){g.show(),c.find(".mejs-time-buffering").show(),mejs.MediaFeatures.isAndroid&&(e.canplayTimeout=window.setTimeout(function(){if(document.createEvent){var a=document.createEvent("HTMLEvents");return a.initEvent("canplay",!0,!0),e.dispatchEvent(a)}},300))},!1),e.addEventListener("canplay",function(){g.hide(),c.find(".mejs-time-buffering").hide(),clearTimeout(e.canplayTimeout)},!1),e.addEventListener("error",function(){g.hide(),c.find(".mejs-time-buffering").hide(),h.show(),h.find("mejs-overlay-error").html("Error loading this resource")},!1),e.addEventListener("keydown",function(a){f.onkeydown(b,e,a)},!1)}},buildkeyboard:function(b,c,d,e){var f=this;f.container.keydown(function(){f.keyboardAction=!0}),f.globalBind("keydown",function(a){return f.onkeydown(b,e,a)}),f.globalBind("click",function(c){b.hasFocus=0!==a(c.target).closest(".mejs-container").length})},onkeydown:function(a,b,c){if(a.hasFocus&&a.options.enableKeyboard)for(var d=0,e=a.options.keyActions.length;e>d;d++)for(var f=a.options.keyActions[d],g=0,h=f.keys.length;h>g;g++)if(c.keyCode==f.keys[g])return"function"==typeof c.preventDefault&&c.preventDefault(),f.action(a,b,c.keyCode),!1;return!0},findTracks:function(){var b=this,c=b.$media.find("track");b.tracks=[],c.each(function(c,d){d=a(d),b.tracks.push({srclang:d.attr("srclang")?d.attr("srclang").toLowerCase():"",src:d.attr("src"),kind:d.attr("kind"),label:d.attr("label")||"",entries:[],isLoaded:!1})})},changeSkin:function(a){this.container[0].className="mejs-container "+a,this.setPlayerSize(this.width,this.height),this.setControlsSize()},play:function(){this.load(),this.media.play()},pause:function(){try{this.media.pause()}catch(a){}},load:function(){this.isLoaded||this.media.load(),this.isLoaded=!0},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){var a,b,c=this;for(a in c.options.features)if(b=c.options.features[a],c["clean"+b])try{c["clean"+b](c)}catch(d){}c.isDynamic?c.$node.insertBefore(c.container):(c.$media.prop("controls",!0),c.$node.clone().insertBefore(c.container).show(),c.$node.remove()),"native"!==c.media.pluginType&&c.media.remove(),delete mejs.players[c.id],"object"==typeof c.container&&c.container.remove(),c.globalUnbind(),delete c.node.player}},function(){function b(b,d){var e={d:[],w:[]};return a.each((b||"").split(" "),function(a,b){var f=b+"."+d;0===f.indexOf(".")?(e.d.push(f),e.w.push(f)):e[c.test(b)?"w":"d"].push(f)}),e.d=e.d.join(" "),e.w=e.w.join(" "),e}var c=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,d,e){var f=this;c=b(c,f.id),c.d&&a(document).bind(c.d,d,e),c.w&&a(window).bind(c.w,d,e)},mejs.MediaElementPlayer.prototype.globalUnbind=function(c,d){var e=this;c=b(c,e.id),c.d&&a(document).unbind(c.d,d),c.w&&a(window).unbind(c.w,d)}}(),"undefined"!=typeof a&&(a.fn.mediaelementplayer=function(b){return this.each(b===!1?function(){var b=a(this).data("mediaelementplayer");b&&b.remove(),a(this).removeData("mediaelementplayer")}:function(){a(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,b))}),this},a(document).ready(function(){a(".mejs-player").mediaelementplayer()})),window.MediaElementPlayer=mejs.MediaElementPlayer}(mejs.$),function(a){a.extend(mejs.MepDefaults,{playText:mejs.i18n.t("Play"),pauseText:mejs.i18n.t("Pause")}),a.extend(MediaElementPlayer.prototype,{buildplaypause:function(b,c,d,e){function f(a){"play"===a?(i.removeClass("mejs-play").addClass("mejs-pause"),j.attr({title:h.pauseText,"aria-label":h.pauseText})):(i.removeClass("mejs-pause").addClass("mejs-play"),j.attr({title:h.playText,"aria-label":h.playText}))}var g=this,h=g.options,i=a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+g.id+'" title="'+h.playText+'" aria-label="'+h.playText+'"></button></div>').appendTo(c).click(function(a){return a.preventDefault(),e.paused?e.play():e.pause(),!1}),j=i.find("button");f("pse"),e.addEventListener("play",function(){f("play")},!1),e.addEventListener("playing",function(){f("play")},!1),e.addEventListener("pause",function(){f("pse")},!1),e.addEventListener("paused",function(){f("pse")},!1)}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{stopText:"Stop"}),a.extend(MediaElementPlayer.prototype,{buildstop:function(b,c,d,e){{var f=this;a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+f.id+'" title="'+f.options.stopText+'" aria-label="'+f.options.stopText+'"></button></div>').appendTo(c).click(function(){e.paused||e.pause(),e.currentTime>0&&(e.setCurrentTime(0),e.pause(),c.find(".mejs-time-current").width("0px"),c.find(".mejs-time-handle").css("left","0px"),c.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)),c.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)),d.find(".mejs-poster").show())})}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{progessHelpText:mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")}),a.extend(MediaElementPlayer.prototype,{buildprogress:function(b,c,d,e){a('<div class="mejs-time-rail"><a href="javascript:void(0);" class="mejs-time-total mejs-time-slider"><span class="mejs-offscreen">'+this.options.progessHelpText+'</span><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></a></div>').appendTo(c),c.find(".mejs-time-buffering").hide();var f=this,g=c.find(".mejs-time-total"),h=c.find(".mejs-time-loaded"),i=c.find(".mejs-time-current"),j=c.find(".mejs-time-handle"),k=c.find(".mejs-time-float"),l=c.find(".mejs-time-float-current"),m=c.find(".mejs-time-slider"),n=function(a){var b,c=g.offset(),d=g.outerWidth(!0),f=0,h=0,i=0;b=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageX:a.pageX,e.duration&&(b<c.left?b=c.left:b>d+c.left&&(b=d+c.left),i=b-c.left,f=i/d,h=.02>=f?0:f*e.duration,o&&h!==e.currentTime&&e.setCurrentTime(h),mejs.MediaFeatures.hasTouch||(k.css("left",i),l.html(mejs.Utility.secondsToTimeCode(h)),k.show()))},o=!1,p=!1,q=0,r=!1,s=b.options.autoRewind,t=function(){var a=e.currentTime,b=mejs.i18n.t("Time Slider"),c=mejs.Utility.secondsToTimeCode(a),d=e.duration;m.attr({"aria-label":b,"aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":a,"aria-valuetext":c,role:"slider",tabindex:0})},u=function(){var a=new Date;a-q>=1e3&&e.play()};m.bind("focus",function(){b.options.autoRewind=!1}),m.bind("blur",function(){b.options.autoRewind=s}),m.bind("keydown",function(a){new Date-q>=1e3&&(r=e.paused);var b=a.keyCode,c=e.duration,d=e.currentTime;switch(b){case 37:d-=1;break;case 39:d+=1;break;case 38:d+=Math.floor(.1*c);break;case 40:d-=Math.floor(.1*c);break;case 36:d=0;break;case 35:d=c;break;case 10:return void(e.paused?e.play():e.pause());case 13:return void(e.paused?e.play():e.pause());default:return}return d=0>d?0:d>=c?c:Math.floor(d),q=new Date,r||e.pause(),d<e.duration&&!r&&setTimeout(u,1100),e.setCurrentTime(d),a.preventDefault(),a.stopPropagation(),!1}),g.bind("mousedown touchstart",function(a){(1===a.which||0===a.which)&&(o=!0,n(a),f.globalBind("mousemove.dur touchmove.dur",function(a){n(a)}),f.globalBind("mouseup.dur touchend.dur",function(){o=!1,k.hide(),f.globalUnbind(".dur")}))}).bind("mouseenter",function(){p=!0,f.globalBind("mousemove.dur",function(a){n(a)}),mejs.MediaFeatures.hasTouch||k.show()}).bind("mouseleave",function(){p=!1,o||(f.globalUnbind(".dur"),k.hide())}),e.addEventListener("progress",function(a){b.setProgressRail(a),b.setCurrentRail(a)},!1),e.addEventListener("timeupdate",function(a){b.setProgressRail(a),b.setCurrentRail(a),t(a)},!1),f.loaded=h,f.total=g,f.current=i,f.handle=j},setProgressRail:function(a){var b=this,c=void 0!==a?a.target:b.media,d=null;c&&c.buffered&&c.buffered.length>0&&c.buffered.end&&c.duration?d=c.buffered.end(0)/c.duration:c&&void 0!==c.bytesTotal&&c.bytesTotal>0&&void 0!==c.bufferedBytes?d=c.bufferedBytes/c.bytesTotal:a&&a.lengthComputable&&0!==a.total&&(d=a.loaded/a.total),null!==d&&(d=Math.min(1,Math.max(0,d)),b.loaded&&b.total&&b.loaded.width(b.total.width()*d))},setCurrentRail:function(){var a=this;if(void 0!==a.media.currentTime&&a.media.duration&&a.total&&a.handle){var b=Math.round(a.total.width()*a.media.currentTime/a.media.duration),c=b-Math.round(a.handle.outerWidth(!0)/2);a.current.width(b),a.handle.css("left",c)}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"}),a.extend(MediaElementPlayer.prototype,{buildcurrent:function(b,c,d,e){var f=this;a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">'+(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(c),f.currenttime=f.controls.find(".mejs-currenttime"),e.addEventListener("timeupdate",function(){b.updateCurrent()},!1)},buildduration:function(b,c,d,e){var f=this;c.children().last().find(".mejs-currenttime").length>0?a(f.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(f.options.duration>0?mejs.Utility.secondsToTimeCode(f.options.duration,f.options.alwaysShowHours||f.media.duration>3600,f.options.showTimecodeFrameCount,f.options.framesPerSecond||25):(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(c.find(".mejs-time")):(c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"),a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(f.options.duration>0?mejs.Utility.secondsToTimeCode(f.options.duration,f.options.alwaysShowHours||f.media.duration>3600,f.options.showTimecodeFrameCount,f.options.framesPerSecond||25):(b.options.alwaysShowHours?"00:":"")+(b.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(c)),f.durationD=f.controls.find(".mejs-duration"),e.addEventListener("timeupdate",function(){b.updateDuration()},!1)},updateCurrent:function(){var a=this;a.currenttime&&a.currenttime.html(mejs.Utility.secondsToTimeCode(a.media.currentTime,a.options.alwaysShowHours||a.media.duration>3600,a.options.showTimecodeFrameCount,a.options.framesPerSecond||25))},updateDuration:function(){var a=this;a.container.toggleClass("mejs-long-video",a.media.duration>3600),a.durationD&&(a.options.duration>0||a.media.duration)&&a.durationD.html(mejs.Utility.secondsToTimeCode(a.options.duration>0?a.options.duration:a.media.duration,a.options.alwaysShowHours,a.options.showTimecodeFrameCount,a.options.framesPerSecond||25))}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),allyVolumeControlText:mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),hideVolumeOnTouchDevices:!0,audioVolume:"horizontal",videoVolume:"vertical"}),a.extend(MediaElementPlayer.prototype,{buildvolume:function(b,c,d,e){if(!mejs.MediaFeatures.isAndroid&&!mejs.MediaFeatures.isiOS||!this.options.hideVolumeOnTouchDevices){var f=this,g=f.isVideo?f.options.videoVolume:f.options.audioVolume,h="horizontal"==g?a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+f.id+'" title="'+f.options.muteText+'" aria-label="'+f.options.muteText+'"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">'+f.options.allyVolumeControlText+'</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c):a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+f.id+'" title="'+f.options.muteText+'" aria-label="'+f.options.muteText+'"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">'+f.options.allyVolumeControlText+'</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c),i=f.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),j=f.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),k=f.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),l=f.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),m=function(a,b){if(!i.is(":visible")&&"undefined"==typeof b)return i.show(),m(a,!0),void i.hide();a=Math.max(0,a),a=Math.min(a,1),0===a?h.removeClass("mejs-mute").addClass("mejs-unmute"):h.removeClass("mejs-unmute").addClass("mejs-mute");var c=j.position();if("vertical"==g){var d=j.height(),e=d-d*a;l.css("top",Math.round(c.top+e-l.height()/2)),k.height(d-e),k.css("top",c.top+e)}else{var f=j.width(),n=f*a;l.css("left",Math.round(c.left+n-l.width()/2)),k.width(Math.round(n))}},n=function(a){var b=null,c=j.offset();if("vertical"===g){var d=j.height(),f=(parseInt(j.css("top").replace(/px/,""),10),a.pageY-c.top);if(b=(d-f)/d,0===c.top||0===c.left)return}else{var h=j.width(),i=a.pageX-c.left;b=i/h}b=Math.max(0,b),b=Math.min(b,1),m(b),e.setMuted(0===b?!0:!1),e.setVolume(b)},o=!1,p=!1;h.hover(function(){i.show(),p=!0},function(){p=!1,o||"vertical"!=g||i.hide()});var q=function(){var a=Math.floor(100*e.volume);i.attr({"aria-label":mejs.i18n.t("volumeSlider"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a,"aria-valuetext":a+"%",role:"slider",tabindex:0})};i.bind("mouseover",function(){p=!0}).bind("mousedown",function(a){return n(a),f.globalBind("mousemove.vol",function(a){n(a)}),f.globalBind("mouseup.vol",function(){o=!1,f.globalUnbind(".vol"),p||"vertical"!=g||i.hide()}),o=!0,!1}).bind("keydown",function(a){var b=a.keyCode,c=e.volume;switch(b){case 38:c+=.1;break;case 40:c-=.1;break;default:return!0}return o=!1,m(c),e.setVolume(c),!1}).bind("blur",function(){i.hide()}),h.find("button").click(function(){e.setMuted(!e.muted)}),h.find("button").bind("focus",function(){i.show()}),e.addEventListener("volumechange",function(a){o||(e.muted?(m(0),h.removeClass("mejs-mute").addClass("mejs-unmute")):(m(e.volume),h.removeClass("mejs-unmute").addClass("mejs-mute"))),q(a)},!1),f.container.is(":visible")&&(m(b.options.startVolume),0===b.options.startVolume&&e.setMuted(!0),"native"===e.pluginType&&e.setVolume(b.options.startVolume))}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{usePluginFullScreen:!0,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")}),a.extend(MediaElementPlayer.prototype,{isFullScreen:!1,isNativeFullScreen:!1,isInIframe:!1,buildfullscreen:function(b,c,d,e){if(b.isVideo){if(b.isInIframe=window.location!=window.parent.location,mejs.MediaFeatures.hasTrueNativeFullScreen){var f=function(){b.isFullScreen&&(mejs.MediaFeatures.isFullScreen()?(b.isNativeFullScreen=!0,b.setControlsSize()):(b.isNativeFullScreen=!1,b.exitFullScreen()))};b.globalBind(mejs.MediaFeatures.fullScreenEventName,f)}var g=this,h=(b.container,a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+g.id+'" title="'+g.options.fullscreenText+'" aria-label="'+g.options.fullscreenText+'"></button></div>').appendTo(c));if("native"===g.media.pluginType||!g.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)h.click(function(){var a=mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||b.isFullScreen;a?b.exitFullScreen():b.enterFullScreen()});else{var i=null,j=function(){var a,b=document.createElement("x"),c=document.documentElement,d=window.getComputedStyle;return"pointerEvents"in b.style?(b.style.pointerEvents="auto",b.style.pointerEvents="x",c.appendChild(b),a=d&&"auto"===d(b,"").pointerEvents,c.removeChild(b),!!a):!1}();if(j&&!mejs.MediaFeatures.isOpera){var k,l,m=!1,n=function(){if(m){for(var a in o)o[a].hide();h.css("pointer-events",""),g.controls.css("pointer-events",""),g.media.removeEventListener("click",g.clickToPlayPauseCallback),m=!1}},o={},p=["top","left","right","bottom"],q=function(){var a=h.offset().left-g.container.offset().left,b=h.offset().top-g.container.offset().top,c=h.outerWidth(!0),d=h.outerHeight(!0),e=g.container.width(),f=g.container.height();for(k in o)o[k].css({position:"absolute",top:0,left:0});o.top.width(e).height(b),o.left.width(a).height(d).css({top:b}),o.right.width(e-a-c).height(d).css({top:b,left:a+c}),o.bottom.width(e).height(f-d-b).css({top:b+d})};for(g.globalBind("resize",function(){q()}),k=0,l=p.length;l>k;k++)o[p[k]]=a('<div class="mejs-fullscreen-hover" />').appendTo(g.container).mouseover(n).hide();h.on("mouseover",function(){if(!g.isFullScreen){var a=h.offset(),c=b.container.offset();e.positionFullscreenButton(a.left-c.left,a.top-c.top,!1),h.css("pointer-events","none"),g.controls.css("pointer-events","none"),g.media.addEventListener("click",g.clickToPlayPauseCallback);for(k in o)o[k].show();q(),m=!0}}),e.addEventListener("fullscreenchange",function(){g.isFullScreen=!g.isFullScreen,g.isFullScreen?g.media.removeEventListener("click",g.clickToPlayPauseCallback):g.media.addEventListener("click",g.clickToPlayPauseCallback),n()}),g.globalBind("mousemove",function(a){if(m){var b=h.offset();(a.pageY<b.top||a.pageY>b.top+h.outerHeight(!0)||a.pageX<b.left||a.pageX>b.left+h.outerWidth(!0))&&(h.css("pointer-events",""),g.controls.css("pointer-events",""),m=!1)
}})}else h.on("mouseover",function(){null!==i&&(clearTimeout(i),delete i);var a=h.offset(),c=b.container.offset();e.positionFullscreenButton(a.left-c.left,a.top-c.top,!0)}).on("mouseout",function(){null!==i&&(clearTimeout(i),delete i),i=setTimeout(function(){e.hideFullscreenButton()},1500)})}b.fullscreenBtn=h,g.globalBind("keydown",function(a){(mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||g.isFullScreen)&&27==a.keyCode&&b.exitFullScreen()})}},cleanfullscreen:function(a){a.exitFullScreen()},containerSizeTimeout:null,enterFullScreen:function(){var b=this;if("native"===b.media.pluginType||!mejs.MediaFeatures.isFirefox&&!b.options.usePluginFullScreen){if(a(document.documentElement).addClass("mejs-fullscreen"),normalHeight=b.container.height(),normalWidth=b.container.width(),"native"===b.media.pluginType)if(mejs.MediaFeatures.hasTrueNativeFullScreen)mejs.MediaFeatures.requestFullScreen(b.container[0]),b.isInIframe&&setTimeout(function d(){if(b.isNativeFullScreen){var c=window.devicePixelRatio||1,e=.002,f=c*a(window).width(),g=screen.width,h=Math.abs(g-f),i=g*e;h>i?b.exitFullScreen():setTimeout(d,500)}},500);else if(mejs.MediaFeatures.hasSemiNativeFullScreen)return void b.media.webkitEnterFullscreen();if(b.isInIframe){var c=b.options.newWindowCallback(this);if(""!==c){if(!mejs.MediaFeatures.hasTrueNativeFullScreen)return b.pause(),void window.open(c,b.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");setTimeout(function(){b.isNativeFullScreen||(b.pause(),window.open(c,b.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no"))},250)}}b.container.addClass("mejs-container-fullscreen").width("100%").height("100%"),b.containerSizeTimeout=setTimeout(function(){b.container.css({width:"100%",height:"100%"}),b.setControlsSize()},500),"native"===b.media.pluginType?b.$media.width("100%").height("100%"):(b.container.find(".mejs-shim").width("100%").height("100%"),b.media.setVideoSize(a(window).width(),a(window).height())),b.layers.children("div").width("100%").height("100%"),b.fullscreenBtn&&b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"),b.setControlsSize(),b.isFullScreen=!0,b.container.find(".mejs-captions-text").css("font-size",screen.width/b.width*1*100+"%"),b.container.find(".mejs-captions-position").css("bottom","45px")}},exitFullScreen:function(){var b=this;return clearTimeout(b.containerSizeTimeout),"native"!==b.media.pluginType&&mejs.MediaFeatures.isFirefox?void b.media.setFullscreen(!1):(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||b.isFullScreen)&&mejs.MediaFeatures.cancelFullScreen(),a(document.documentElement).removeClass("mejs-fullscreen"),b.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight),"native"===b.media.pluginType?b.$media.width(normalWidth).height(normalHeight):(b.container.find(".mejs-shim").width(normalWidth).height(normalHeight),b.media.setVideoSize(normalWidth,normalHeight)),b.layers.children("div").width(normalWidth).height(normalHeight),b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"),b.setControlsSize(),b.isFullScreen=!1,b.container.find(".mejs-captions-text").css("font-size",""),void b.container.find(".mejs-captions-position").css("bottom",""))}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{speeds:["2.00","1.50","1.25","1.00","0.75"],defaultSpeed:"1.00",speedChar:"x"}),a.extend(MediaElementPlayer.prototype,{buildspeed:function(b,c,d,e){var f=this;if("native"==f.media.pluginType){var g=null,h=null,i='<div class="mejs-button mejs-speed-button"><button type="button">'+f.options.defaultSpeed+f.options.speedChar+'</button><div class="mejs-speed-selector"><ul>';-1===a.inArray(f.options.defaultSpeed,f.options.speeds)&&f.options.speeds.push(f.options.defaultSpeed),f.options.speeds.sort(function(a,b){return parseFloat(b)-parseFloat(a)});for(var j=0,k=f.options.speeds.length;k>j;j++)i+='<li><input type="radio" name="speed" value="'+f.options.speeds[j]+'" id="'+f.options.speeds[j]+'" '+(f.options.speeds[j]==f.options.defaultSpeed?" checked":"")+' /><label for="'+f.options.speeds[j]+'" '+(f.options.speeds[j]==f.options.defaultSpeed?' class="mejs-speed-selected"':"")+">"+f.options.speeds[j]+f.options.speedChar+"</label></li>";i+="</ul></div></div>",g=a(i).appendTo(c),h=g.find(".mejs-speed-selector"),playbackspeed=f.options.defaultSpeed,h.on("click",'input[type="radio"]',function(){var b=a(this).attr("value");playbackspeed=b,e.playbackRate=parseFloat(b),g.find("button").html("test"+b+f.options.speedChar),g.find(".mejs-speed-selected").removeClass("mejs-speed-selected"),g.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")}),h.height(g.find(".mejs-speed-selector ul").outerHeight(!0)+g.find(".mejs-speed-translations").outerHeight(!0)).css("top",-1*h.height()+"px")}}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),hideCaptionsButtonWhenEmpty:!0,toggleCaptionsButtonWhenOnlyOne:!1,slidesSelector:""}),a.extend(MediaElementPlayer.prototype,{hasChapters:!1,buildtracks:function(b,c,d,e){if(0!==b.tracks.length){var f,g=this;if(g.domNode.textTracks)for(f=g.domNode.textTracks.length-1;f>=0;f--)g.domNode.textTracks[f].mode="hidden";b.chapters=a('<div class="mejs-chapters mejs-layer"></div>').prependTo(d).hide(),b.captions=a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" role="log" aria-live="assertive" aria-atomic="false"><span class="mejs-captions-text"></span></div></div>').prependTo(d).hide(),b.captionsText=b.captions.find(".mejs-captions-text"),b.captionsButton=a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+g.id+'" title="'+g.options.tracksText+'" aria-label="'+g.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+b.id+'_captions" id="'+b.id+'_captions_none" value="none" checked="checked" /><label for="'+b.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(c);var h=0;for(f=0;f<b.tracks.length;f++)"subtitles"==b.tracks[f].kind&&h++;for(g.options.toggleCaptionsButtonWhenOnlyOne&&1==h?b.captionsButton.on("click",function(){lang=null===b.selectedTrack?b.tracks[0].srclang:"none",b.setTrack(lang)}):(b.captionsButton.on("mouseenter focusin",function(){a(this).find(".mejs-captions-selector").css("visibility","visible")}).on("click","input[type=radio]",function(){lang=this.value,b.setTrack(lang)}),b.captionsButton.on("mouseleave focusout",function(){a(this).find(".mejs-captions-selector").css("visibility","hidden")})),b.options.alwaysShowControls?b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):b.container.bind("controlsshown",function(){b.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||b.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")}),b.trackToLoad=-1,b.selectedTrack=null,b.isLoadingTrack=!1,f=0;f<b.tracks.length;f++)"subtitles"==b.tracks[f].kind&&b.addTrackButton(b.tracks[f].srclang,b.tracks[f].label);b.loadNextTrack(),e.addEventListener("timeupdate",function(){b.displayCaptions()},!1),""!==b.options.slidesSelector&&(b.slidesContainer=a(b.options.slidesSelector),e.addEventListener("timeupdate",function(){b.displaySlides()},!1)),e.addEventListener("loadedmetadata",function(){b.displayChapters()},!1),b.container.hover(function(){b.hasChapters&&(b.chapters.css("visibility","visible"),b.chapters.fadeIn(200).height(b.chapters.find(".mejs-chapter").outerHeight()))},function(){b.hasChapters&&!e.paused&&b.chapters.fadeOut(200,function(){a(this).css("visibility","hidden"),a(this).css("display","block")})}),null!==b.node.getAttribute("autoplay")&&b.chapters.css("visibility","hidden")}},setTrack:function(a){var b,c=this;if("none"==a)c.selectedTrack=null,c.captionsButton.removeClass("mejs-captions-enabled");else for(b=0;b<c.tracks.length;b++)if(c.tracks[b].srclang==a){null===c.selectedTrack&&c.captionsButton.addClass("mejs-captions-enabled"),c.selectedTrack=c.tracks[b],c.captions.attr("lang",c.selectedTrack.srclang),c.displayCaptions();break}},loadNextTrack:function(){var a=this;a.trackToLoad++,a.trackToLoad<a.tracks.length?(a.isLoadingTrack=!0,a.loadTrack(a.trackToLoad)):(a.isLoadingTrack=!1,a.checkForTracks())},loadTrack:function(b){var c=this,d=c.tracks[b],e=function(){d.isLoaded=!0,c.enableTrackButton(d.srclang,d.label),c.loadNextTrack()};a.ajax({url:d.src,dataType:"text",success:function(a){d.entries="string"==typeof a&&/<tt\s+xml/gi.exec(a)?mejs.TrackFormatParser.dfxp.parse(a):mejs.TrackFormatParser.webvtt.parse(a),e(),"chapters"==d.kind&&c.media.addEventListener("play",function(){c.media.duration>0&&c.displayChapters(d)},!1),"slides"==d.kind&&c.setupSlides(d)},error:function(){c.loadNextTrack()}})},enableTrackButton:function(b,c){var d=this;""===c&&(c=mejs.language.codes[b]||b),d.captionsButton.find("input[value="+b+"]").prop("disabled",!1).siblings("label").html(c),d.options.startLanguage==b&&a("#"+d.id+"_captions_"+b).prop("checked",!0).trigger("click"),d.adjustLanguageBox()},addTrackButton:function(b,c){var d=this;""===c&&(c=mejs.language.codes[b]||b),d.captionsButton.find("ul").append(a('<li><input type="radio" name="'+d.id+'_captions" id="'+d.id+"_captions_"+b+'" value="'+b+'" disabled="disabled" /><label for="'+d.id+"_captions_"+b+'">'+c+" (loading)</label></li>")),d.adjustLanguageBox(),d.container.find(".mejs-captions-translations option[value="+b+"]").remove()},adjustLanguageBox:function(){var a=this;a.captionsButton.find(".mejs-captions-selector").height(a.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0)+a.captionsButton.find(".mejs-captions-translations").outerHeight(!0))},checkForTracks:function(){var a=this,b=!1;if(a.options.hideCaptionsButtonWhenEmpty){for(i=0;i<a.tracks.length;i++)if("subtitles"==a.tracks[i].kind){b=!0;break}b||(a.captionsButton.hide(),a.setControlsSize())}},displayCaptions:function(){if("undefined"!=typeof this.tracks){var a,b=this,c=b.selectedTrack;if(null!==c&&c.isLoaded){for(a=0;a<c.entries.times.length;a++)if(b.media.currentTime>=c.entries.times[a].start&&b.media.currentTime<=c.entries.times[a].stop)return b.captionsText.html(c.entries.text[a]).attr("class","mejs-captions-text "+(c.entries.times[a].identifier||"")),void b.captions.show().height(0);b.captions.hide()}else b.captions.hide()}},setupSlides:function(a){var b=this;b.slides=a,b.slides.entries.imgs=[b.slides.entries.text.length],b.showSlide(0)},showSlide:function(b){if("undefined"!=typeof this.tracks&&"undefined"!=typeof this.slidesContainer){var c=this,d=c.slides.entries.text[b],e=c.slides.entries.imgs[b];"undefined"==typeof e||"undefined"==typeof e.fadeIn?c.slides.entries.imgs[b]=e=a('<img src="'+d+'">').on("load",function(){e.appendTo(c.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()}):e.is(":visible")||e.is(":animated")||e.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if("undefined"!=typeof this.slides){var a,b=this,c=b.slides;for(a=0;a<c.entries.times.length;a++)if(b.media.currentTime>=c.entries.times[a].start&&b.media.currentTime<=c.entries.times[a].stop)return void b.showSlide(a)}},displayChapters:function(){var a,b=this;for(a=0;a<b.tracks.length;a++)if("chapters"==b.tracks[a].kind&&b.tracks[a].isLoaded){b.drawChapters(b.tracks[a]),b.hasChapters=!0;break}},drawChapters:function(b){var c,d,e=this,f=0,g=0;for(e.chapters.empty(),c=0;c<b.entries.times.length;c++)d=b.entries.times[c].stop-b.entries.times[c].start,f=Math.floor(d/e.media.duration*100),(f+g>100||c==b.entries.times.length-1&&100>f+g)&&(f=100-g),e.chapters.append(a('<div class="mejs-chapter" rel="'+b.entries.times[c].start+'" style="left: '+g.toString()+"%;width: "+f.toString()+'%;"><div class="mejs-chapter-block'+(c==b.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+b.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(b.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(b.entries.times[c].stop)+"</span></div></div>")),g+=f;e.chapters.find("div.mejs-chapter").click(function(){e.media.setCurrentTime(parseFloat(a(this).attr("rel"))),e.media.paused&&e.media.play()}),e.chapters.show()}}),mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",fl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}},mejs.TrackFormatParser={webvtt:{pattern_timecode:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(b){for(var c,d,e,f=0,g=mejs.TrackFormatParser.split2(b,/\r?\n/),h={text:[],times:[]};f<g.length;f++){if(c=this.pattern_timecode.exec(g[f]),c&&f<g.length){for(f-1>=0&&""!==g[f-1]&&(e=g[f-1]),f++,d=g[f],f++;""!==g[f]&&f<g.length;)d=d+"\n"+g[f],f++;d=a.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),h.text.push(d),h.times.push({identifier:e,start:0===mejs.Utility.convertSMPTEtoSeconds(c[1])?.2:mejs.Utility.convertSMPTEtoSeconds(c[1]),stop:mejs.Utility.convertSMPTEtoSeconds(c[3]),settings:c[5]})}e=""}return h}},dfxp:{parse:function(b){b=a(b).filter("tt");var c,d,e=0,f=b.children("div").eq(0),g=f.find("p"),h=b.find("#"+f.attr("style")),i={text:[],times:[]};if(h.length){var j=h.removeAttr("id").get(0).attributes;if(j.length)for(c={},e=0;e<j.length;e++)c[j[e].name.split(":")[1]]=j[e].value}for(e=0;e<g.length;e++){var k,l={start:null,stop:null,style:null};if(g.eq(e).attr("begin")&&(l.start=mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("begin"))),!l.start&&g.eq(e-1).attr("end")&&(l.start=mejs.Utility.convertSMPTEtoSeconds(g.eq(e-1).attr("end"))),g.eq(e).attr("end")&&(l.stop=mejs.Utility.convertSMPTEtoSeconds(g.eq(e).attr("end"))),!l.stop&&g.eq(e+1).attr("begin")&&(l.stop=mejs.Utility.convertSMPTEtoSeconds(g.eq(e+1).attr("begin"))),c){k="";for(var m in c)k+=m+":"+c[m]+";"}k&&(l.style=k),0===l.start&&(l.start=.2),i.times.push(l),d=a.trim(g.eq(e).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),i.text.push(d),0===i.times.start&&(i.times.start=2)}return i}},split2:function(a,b){return a.split(b)}},3!="x\n\ny".split(/\n/gi).length&&(mejs.TrackFormatParser.split2=function(a,b){var c,d=[],e="";for(c=0;c<a.length;c++)e+=a.substring(c,c+1),b.test(e)&&(d.push(e.replace(b,"")),e="");return d.push(e),d})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){return"undefined"==typeof a.enterFullScreen?null:mejs.i18n.t(a.isFullScreen?"Turn off Fullscreen":"Go Fullscreen")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return mejs.i18n.t(a.media.muted?"Unmute":"Mute")},click:function(a){a.setMuted(a.media.muted?!1:!0)}},{isSeparator:!0},{render:function(){return mejs.i18n.t("Download Video")},click:function(a){window.location.href=a.media.currentSrc}}]}),a.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(b){b.contextMenu=a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide(),b.container.bind("contextmenu",function(a){return b.isContextMenuEnabled?(a.preventDefault(),b.renderContextMenu(a.clientX-1,a.clientY-1),!1):void 0}),b.container.bind("click",function(){b.contextMenu.hide()}),b.contextMenu.bind("mouseleave",function(){b.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},isContextMenuEnabled:!0,enableContextMenu:function(){this.isContextMenuEnabled=!0},disableContextMenu:function(){this.isContextMenuEnabled=!1},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer(),a.contextMenuTimer=setTimeout(function(){a.hideContextMenu(),a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;null!=a&&(clearTimeout(a),delete a,a=null)},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(b,c){for(var d=this,e="",f=d.options.contextMenuItems,g=0,h=f.length;h>g;g++)if(f[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var i=f[g].render(d);null!=i&&(e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+1e6*Math.random()+'">'+i+"</div>")}d.contextMenu.empty().append(a(e)).css({top:c,left:b}).show(),d.contextMenu.find(".mejs-contextmenu-item").each(function(){var b=a(this),c=parseInt(b.data("itemindex"),10),e=d.options.contextMenuItems[c];"undefined"!=typeof e.show&&e.show(b,d),b.click(function(){"undefined"!=typeof e.click&&e.click(d),d.contextMenu.hide()})}),setTimeout(function(){d.killControlsTimer("rev3")},100)}})}(mejs.$),function(a){a.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")}),a.extend(MediaElementPlayer.prototype,{buildpostroll:function(b,c,d){var e=this,f=e.container.find('link[rel="postroll"]').attr("href");"undefined"!=typeof f&&(b.postroll=a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+e.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide(),e.media.addEventListener("ended",function(){a.ajax({dataType:"html",url:f,success:function(a){d.find(".mejs-postroll-layer-content").html(a)}}),b.postroll.show()},!1))}})}(mejs.$);








/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.YTPlayer.src.js                                                                                                                  _
 _ last modified: 01/07/15 19.35                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/
var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
		if( ytp.YTAPIReady ) return;
		ytp.YTAPIReady = true;
		jQuery( document ).trigger( "YTAPIReady" );
}

var getYTPVideoID = function( url ) {
		var videoID, playlistID;
		if( url.indexOf( "youtu.be" ) > 0 ) {
				videoID = url.substr( url.lastIndexOf( "/" ) + 1, url.length );
				playlistID = videoID.indexOf( "?list=" ) > 0 ? videoID.substr( videoID.lastIndexOf( "=" ), videoID.length ) : null;
				videoID = playlistID ? videoID.substr( 0, videoID.lastIndexOf( "?" ) ) : videoID;
		} else if( url.indexOf( "http" ) > -1 ) {
				videoID = url.match( /[\\?&]v=([^&#]*)/ )[ 1 ];
				playlistID = url.indexOf( "list=" ) > 0 ? url.match( /[\\?&]list=([^&#]*)/ )[ 1 ] : null;
		} else {
				videoID = url.length > 15 ? null : url;
				playlistID = videoID ? null : url;
		}
		return {
				videoID: videoID,
				playlistID: playlistID
		};
};

( function( jQuery, ytp ) {

		jQuery.mbYTPlayer = {
				name: "jquery.mb.YTPlayer",
				version: "2.9.4",
				build: "{{ build }}",
				author: "Matteo Bicocchi",
				apiKey: "",
				defaults: {
						containment: "body",
						ratio: "auto", // "auto", "16/9", "4/3"
						videoURL: null,
						playlistURL: null,
						startAt: 0,
						stopAt: 0,
						autoPlay: true,
						vol: 50, // 1 to 100
						addRaster: false,
						opacity: 1,
						quality: "default", //or “small”, “medium”, “large”, “hd720”, “hd1080”, “highres”
						mute: false,
						loop: true,
						showControls: true,
						showAnnotations: false,
						showYTLogo: true,
						stopMovieOnBlur: true,
						realfullscreen: true,
						gaTrack: true,
						optimizeDisplay: true,
						onReady: function( player ) {}
				},
				/* @fontface icons */
				controls: {
						play: "P",
						pause: "p",
						mute: "M",
						unmute: "A",
						onlyYT: "O",
						showSite: "R",
						ytLogo: "Y"
				},
				locationProtocol: "https:",
				/**
				 *
				 * @param options
				 * @returns [players]
				 */
				buildPlayer: function( options ) {
						return this.each( function() {
								var YTPlayer = this;
								var $YTPlayer = jQuery( YTPlayer );
								YTPlayer.loop = 0;
								YTPlayer.opt = {};
								YTPlayer.state = {};
								YTPlayer.filtersEnabled = true;
								YTPlayer.filters = {
										grayscale: {
												value: 0,
												unit: "%"
										},
										hue_rotate: {
												value: 0,
												unit: "deg"
										},
										invert: {
												value: 0,
												unit: "%"
										},
										opacity: {
												value: 0,
												unit: "%"
										},
										saturate: {
												value: 0,
												unit: "%"
										},
										sepia: {
												value: 0,
												unit: "%"
										},
										brightness: {
												value: 0,
												unit: "%"
										},
										contrast: {
												value: 0,
												unit: "%"
										},
										blur: {
												value: 0,
												unit: "px"
										}
								};
								$YTPlayer.addClass( "mb_YTPlayer" );
								var property = $YTPlayer.data( "property" ) && typeof $YTPlayer.data( "property" ) == "string" ? eval( '(' + $YTPlayer.data( "property" ) + ')' ) : $YTPlayer.data( "property" );
								if( typeof property != "undefined" && typeof property.vol != "undefined" ) property.vol = property.vol === 0 ? property.vol = 1 : property.vol;
								jQuery.extend( YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property );
								if( !YTPlayer.hasChanged ) {
										YTPlayer.defaultOpt = {};
										jQuery.extend( YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property );
								}
								YTPlayer.isRetina = ( window.retina || window.devicePixelRatio > 1 );
								var isIframe = function() {
										var isIfr = false;
										try {
												if( self.location.href != top.location.href ) isIfr = true;
										} catch( e ) {
												isIfr = true;
										}
										return isIfr;
								};
								YTPlayer.canGoFullScreen = !( jQuery.browser.msie || jQuery.browser.opera || isIframe() );
								if( !YTPlayer.canGoFullScreen ) YTPlayer.opt.realfullscreen = false;
								if( !$YTPlayer.attr( "id" ) ) $YTPlayer.attr( "id", "video_" + new Date().getTime() );
								var playerID = "mbYTP_" + YTPlayer.id;
								YTPlayer.isAlone = false;
								YTPlayer.hasFocus = true;
								var videoID = this.opt.videoURL ? getYTPVideoID( this.opt.videoURL ).videoID : $YTPlayer.attr( "href" ) ? getYTPVideoID( $YTPlayer.attr( "href" ) ).videoID : false;
								var playlistID = this.opt.videoURL ? getYTPVideoID( this.opt.videoURL ).playlistID : $YTPlayer.attr( "href" ) ? getYTPVideoID( $YTPlayer.attr( "href" ) ).playlistID : false;
								YTPlayer.videoID = videoID;
								YTPlayer.playlistID = playlistID;
								YTPlayer.opt.showAnnotations = ( YTPlayer.opt.showAnnotations ) ? '0' : '3';
								var playerVars = {
										'autoplay': 0,
										'modestbranding': 1,
										'controls': 0,
										'showinfo': 0,
										'rel': 0,
										'enablejsapi': 1,
										'version': 3,
										'playerapiid': playerID,
										'origin': '*',
										'allowfullscreen': true,
										'wmode': 'transparent',
										'iv_load_policy': YTPlayer.opt.showAnnotations
								};
								if( document.createElement( 'video' ).canPlayType ) jQuery.extend( playerVars, {
										'html5': 1
								} );
								if( jQuery.browser.msie && jQuery.browser.version < 9 ) this.opt.opacity = 1;
								var playerBox = jQuery( "<div/>" ).attr( "id", playerID ).addClass( "playerBox" );
								var overlay = jQuery( "<div/>" ).css( {
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%"
								} ).addClass( "YTPOverlay" );
								YTPlayer.isSelf = YTPlayer.opt.containment == "self";
								YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery( this ) : jQuery( YTPlayer.opt.containment );
								YTPlayer.isBackground = YTPlayer.opt.containment.get( 0 ).tagName.toLowerCase() == "body";
								if( YTPlayer.isBackground && ytp.backgroundIsInited ) return;
								var isPlayer = YTPlayer.opt.containment.is( jQuery( this ) );
								YTPlayer.canPlayOnMobile = isPlayer && jQuery( this ).children().length === 0;
								if( !isPlayer ) {
										$YTPlayer.hide();
								} else {
										YTPlayer.isPlayer = true;
								}
								if( jQuery.browser.mobile && !YTPlayer.canPlayOnMobile ) {
										$YTPlayer.remove();
										return;
								}
								var wrapper = jQuery( "<div/>" ).addClass( "mbYTP_wrapper" ).attr( "id", "wrapper_" + playerID );
								wrapper.css( {
										position: "absolute",
										zIndex: 0,
										minWidth: "100%",
										minHeight: "100%",
										left: 0,
										top: 0,
										overflow: "hidden",
										opacity: 0
								} );
								playerBox.css( {
										position: "absolute",
										zIndex: 0,
										width: "100%",
										height: "100%",
										top: 0,
										left: 0,
										overflow: "hidden"
								} );
								wrapper.append( playerBox );
								YTPlayer.opt.containment.children().not( "script, style" ).each( function() {
										if( jQuery( this ).css( "position" ) == "static" ) jQuery( this ).css( "position", "relative" );
								} );
								if( YTPlayer.isBackground ) {
										jQuery( "body" ).css( {
												boxSizing: "border-box"
										} );
										wrapper.css( {
												position: "fixed",
												top: 0,
												left: 0,
												zIndex: 0
										} );
										$YTPlayer.hide();
								} else if( YTPlayer.opt.containment.css( "position" ) == "static" ) YTPlayer.opt.containment.css( {
										position: "relative"
								} );
								YTPlayer.opt.containment.prepend( wrapper );
								YTPlayer.wrapper = wrapper;
								playerBox.css( {
										opacity: 1
								} );
								if( !jQuery.browser.mobile ) {
										playerBox.after( overlay );
										YTPlayer.overlay = overlay;
								}
								if( !YTPlayer.isBackground ) {
										overlay.on( "mouseenter", function() {
												if( YTPlayer.controlBar ) YTPlayer.controlBar.addClass( "visible" );
										} ).on( "mouseleave", function() {
												if( YTPlayer.controlBar ) YTPlayer.controlBar.removeClass( "visible" );
										} )
								}
								if( !ytp.YTAPIReady ) {
										jQuery( "#YTAPI" ).remove();
										var tag = jQuery( "<script></script>" ).attr( {
												"src": jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
												"id": "YTAPI"
										} );
										jQuery( "head" ).prepend( tag );
								} else {
										setTimeout( function() {
												jQuery( document ).trigger( "YTAPIReady" );
										}, 100 )
								}
								jQuery( document ).on( "YTAPIReady", function() {
										if( ( YTPlayer.isBackground && ytp.backgroundIsInited ) || YTPlayer.isInit ) return;
										if( YTPlayer.isBackground ) {
												ytp.backgroundIsInited = true;
										}
										YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? ( YTPlayer.isBackground ? true : false ) : YTPlayer.opt.autoPlay;
										YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
										jQuery.mbYTPlayer.getDataFromAPI( YTPlayer );
										jQuery( YTPlayer ).on( "YTPChanged", function() {
												if( YTPlayer.isInit ) return;
												YTPlayer.isInit = true;
												//if is mobile && isPlayer fallback to the default YT player
												if( jQuery.browser.mobile && YTPlayer.canPlayOnMobile ) {
														// Try to adjust the player dimention
														if( YTPlayer.opt.containment.outerWidth() > jQuery( window ).width() ) {
																YTPlayer.opt.containment.css( {
																		maxWidth: "100%"
																} );
																var h = YTPlayer.opt.containment.outerWidth() * .6;
																YTPlayer.opt.containment.css( {
																		maxHeight: h
																} );
														}
														new YT.Player( playerID, {
																videoId: YTPlayer.videoID.toString(),
																height: '100%',
																width: '100%',
																events: {
																		'onReady': function( event ) {
																				YTPlayer.player = event.target;
																				playerBox.css( {
																						opacity: 1
																				} );
																				YTPlayer.wrapper.css( {
																						opacity: 1
																				} );
																		}
																}
														} );
														return;
												}
												new YT.Player( playerID, {
														videoId: YTPlayer.videoID.toString(),
														playerVars: playerVars,
														events: {
																'onReady': function( event ) {
																		YTPlayer.player = event.target;
																		if( YTPlayer.isReady ) return;
																		YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? false : true;
																		YTPlayer.playerEl = YTPlayer.player.getIframe();
																		$YTPlayer.optimizeDisplay();
																		YTPlayer.videoID = videoID;
																		jQuery( window ).on( "resize.YTP", function() {
																				$YTPlayer.optimizeDisplay();
																		} );
																		jQuery.mbYTPlayer.checkForState( YTPlayer );
																		// Trigger state events
																		var YTPEvent = jQuery.Event( "YTPUnstarted" );
																		YTPEvent.time = YTPlayer.player.time;
																		if( YTPlayer.canTrigger ) jQuery( YTPlayer ).trigger( YTPEvent );
																},
																/**
																 *
																 * @param event
																 *
																 * -1 (unstarted)
																 * 0 (ended)
																 * 1 (playing)
																 * 2 (paused)
																 * 3 (buffering)
																 * 5 (video cued).
																 *
																 *
																 */
																'onStateChange': function( event ) {
																		if( typeof event.target.getPlayerState != "function" ) return;
																		var state = event.target.getPlayerState();
																		if( YTPlayer.state == state ) return;
																		YTPlayer.state = state;
																		var eventType;
																		switch( state ) {
																				case -1: //------------------------------------------------ unstarted
																						eventType = "YTPUnstarted";
																						break;
																				case 0: //------------------------------------------------ ended
																						eventType = "YTPEnd";
																						break;
																				case 1: //------------------------------------------------ play
																						eventType = "YTPStart";
																						if( YTPlayer.controlBar ) YTPlayer.controlBar.find( ".mb_YTPPlaypause" ).html( jQuery.mbYTPlayer.controls.pause );
																						if( typeof _gaq != "undefined" && eval( YTPlayer.opt.gaTrack ) ) _gaq.push( [ '_trackEvent', 'YTPlayer', 'Play', ( YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString() ) ] );
																						if( typeof ga != "undefined" && eval( YTPlayer.opt.gaTrack ) ) ga( 'send', 'event', 'YTPlayer', 'play', ( YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString() ) );
																						break;
																				case 2: //------------------------------------------------ pause
																						eventType = "YTPPause";
																						if( YTPlayer.controlBar ) YTPlayer.controlBar.find( ".mb_YTPPlaypause" ).html( jQuery.mbYTPlayer.controls.play );
																						break;
																				case 3: //------------------------------------------------ buffer
																						YTPlayer.player.setPlaybackQuality( YTPlayer.opt.quality );
																						eventType = "YTPBuffering";
																						if( YTPlayer.controlBar ) YTPlayer.controlBar.find( ".mb_YTPPlaypause" ).html( jQuery.mbYTPlayer.controls.play );
																						break;
																				case 5: //------------------------------------------------ cued
																						eventType = "YTPCued";
																						break;
																				default:
																						break;
																		}
																		// Trigger state events
																		var YTPEvent = jQuery.Event( eventType );
																		YTPEvent.time = YTPlayer.player.time;
																		if( YTPlayer.canTrigger ) jQuery( YTPlayer ).trigger( YTPEvent );
																},
																/**
																 *
																 * @param e
																 */
																'onPlaybackQualityChange': function( e ) {
																		var quality = e.target.getPlaybackQuality();
																		var YTPQualityChange = jQuery.Event( "YTPQualityChange" );
																		YTPQualityChange.quality = quality;
																		jQuery( YTPlayer ).trigger( YTPQualityChange );
																},
																/**
																 *
																 * @param err
																 */
																'onError': function( err ) {
																		if( err.data == 150 ) {
																				console.log( "Embedding this video is restricted by Youtube." );
																				if( YTPlayer.isPlayList ) jQuery( YTPlayer ).playNext();
																		}
																		if( err.data == 2 && YTPlayer.isPlayList ) jQuery( YTPlayer ).playNext();
																		if( typeof YTPlayer.opt.onError == "function" ) YTPlayer.opt.onError( $YTPlayer, err );
																}
														}
												} );
										} );
								} )
						} );
				},
				/**
				 *
				 * @param YTPlayer
				 */
				getDataFromAPI: function( YTPlayer ) {
						YTPlayer.videoData = jQuery.mbStorage.get( "YYTPlayer_data_" + YTPlayer.videoID );
						jQuery( YTPlayer ).off( "YTPData.YTPlayer" ).on( "YTPData.YTPlayer", function() {
								if( YTPlayer.hasData ) {

										if( YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ) {
												var bgndURL = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
												YTPlayer.opt.containment.css( {
														background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
														backgroundSize: "cover"
												} );
												YTPlayer.opt.backgroundUrl = bgndURL;
										}
								}
						} );

						if( YTPlayer.videoData ) {

								setTimeout( function() {
										YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
										YTPlayer.dataReceived = true;
										jQuery( YTPlayer ).trigger( "YTPChanged" );
										var YTPData = jQuery.Event( "YTPData" );
										YTPData.prop = {};
										for( var x in YTPlayer.videoData ) YTPData.prop[ x ] = YTPlayer.videoData[ x ];
										jQuery( YTPlayer ).trigger( YTPData );
								}, 500 );

								YTPlayer.hasData = true;
						} else if( jQuery.mbYTPlayer.apiKey ) {
								// Get video info from API3 (needs api key)
								// snippet,player,contentDetails,statistics,status
								jQuery.getJSON( jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + YTPlayer.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function( data ) {
										YTPlayer.dataReceived = true;
										jQuery( YTPlayer ).trigger( "YTPChanged" );

										function parseYTPlayer_data( data ) {
												YTPlayer.videoData = {};
												YTPlayer.videoData.id = YTPlayer.videoID;
												YTPlayer.videoData.channelTitle = data.channelTitle;
												YTPlayer.videoData.title = data.title;
												YTPlayer.videoData.description = data.description.length < 400 ? data.description : data.description.substring( 0, 400 ) + " ...";
												YTPlayer.videoData.aspectratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
												YTPlayer.opt.ratio = YTPlayer.videoData.aspectratio;
												YTPlayer.videoData.thumb_max = data.thumbnails.maxres ? data.thumbnails.maxres.url : null;
												YTPlayer.videoData.thumb_high = data.thumbnails.high ? data.thumbnails.high.url : null;
												YTPlayer.videoData.thumb_medium = data.thumbnails.medium ? data.thumbnails.medium.url : null;
												jQuery.mbStorage.set( "YYTPlayer_data_" + YTPlayer.videoID, YTPlayer.videoData );
										}
										parseYTPlayer_data( data.items[ 0 ].snippet );
										YTPlayer.hasData = true;
										var YTPData = jQuery.Event( "YTPData" );
										YTPData.prop = {};
										for( var x in YTPlayer.videoData ) YTPData.prop[ x ] = YTPlayer.videoData[ x ];
										jQuery( YTPlayer ).trigger( YTPData );
								} );
						} else {
								setTimeout( function() {
										jQuery( YTPlayer ).trigger( "YTPChanged" );
								}, 50 );
								if( YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ) {
										var bgndURL = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + YTPlayer.videoID + "/hqdefault.jpg";
										YTPlayer.opt.containment.css( {
												background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
												backgroundSize: "cover"
										} );
										YTPlayer.opt.backgroundUrl = bgndURL;
								}
								YTPlayer.videoData = null;
								YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
						}
						if( YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ) {
								YTPlayer.loading = jQuery( "<div/>" ).addClass( "loading" ).html( "Loading" ).hide();
								jQuery( YTPlayer ).append( YTPlayer.loading );
								YTPlayer.loading.fadeIn();
						}
				},
				/**
				 *
				 */
				removeStoredData: function() {
						jQuery.mbStorage.remove();
				},
				/**
				 *
				 * @returns {*|YTPlayer.videoData}
				 */
				getVideoData: function() {
						var YTPlayer = this.get( 0 );
						return YTPlayer.videoData;
				},
				/**
				 *
				 * @returns {*|YTPlayer.videoID|boolean}
				 */
				getVideoID: function() {
						var YTPlayer = this.get( 0 );
						return YTPlayer.videoID || false;
				},
				/**
				 *
				 * @param quality
				 */
				setVideoQuality: function( quality ) {
						var YTPlayer = this.get( 0 );
						if( !jQuery.browser.chrome ) YTPlayer.player.setPlaybackQuality( quality );
				},
				/**
				 * @param videos
				 * @param shuffle
				 * @param callback
				 * @returns {jQuery.mbYTPlayer}
				 */
				playlist: function( videos, shuffle, callback ) {
						var $YTPlayer = this;
						var YTPlayer = $YTPlayer.get( 0 );
						YTPlayer.isPlayList = true;
						if( shuffle ) videos = jQuery.shuffle( videos );
						if( !YTPlayer.videoID ) {
								YTPlayer.videos = videos;
								YTPlayer.videoCounter = 0;
								YTPlayer.videoLength = videos.length;
								jQuery( YTPlayer ).data( "property", videos[ 0 ] );
								jQuery( YTPlayer ).mb_YTPlayer();
						}
						if( typeof callback == "function" ) jQuery( YTPlayer ).on( "YTPChanged", function() {
								callback( YTPlayer );
						} );
						jQuery( YTPlayer ).on( "YTPEnd", function() {
								jQuery( YTPlayer ).playNext();
						} );
						return $YTPlayer;
				},
				/**
				 *
				 * @returns {jQuery.mbYTPlayer}
				 */
				playNext: function() {
						var YTPlayer = this.get( 0 );
						YTPlayer.videoCounter++;
						if( YTPlayer.videoCounter >= YTPlayer.videoLength ) YTPlayer.videoCounter = 0;
						jQuery( YTPlayer ).changeMovie( YTPlayer.videos[ YTPlayer.videoCounter ] );
						return this;
				},
				/**
				 *
				 * @returns {jQuery.mbYTPlayer}
				 */
				playPrev: function() {
						var YTPlayer = this.get( 0 );
						YTPlayer.videoCounter--;
						if( YTPlayer.videoCounter < 0 ) YTPlayer.videoCounter = YTPlayer.videoLength - 1;
						jQuery( YTPlayer ).changeMovie( YTPlayer.videos[ YTPlayer.videoCounter ] );
						return this;
				},
				/**
				 *
				 * @param opt
				 */
				changeMovie: function( opt ) {
						var YTPlayer = this.get( 0 );
						YTPlayer.opt.startAt = 0;
						YTPlayer.opt.stopAt = 0;
						YTPlayer.opt.mute = true;
						YTPlayer.hasData = false;
						YTPlayer.hasChanged = true;
						if( opt ) jQuery.extend( YTPlayer.opt, YTPlayer.defaultOpt, opt );
						YTPlayer.videoID = getYTPVideoID( YTPlayer.opt.videoURL ).videoID;
						jQuery( YTPlayer.playerEl ).CSSAnimate( {
								opacity: 0
						}, 200, function() {
								jQuery( YTPlayer ).YTPGetPlayer().cueVideoByUrl( encodeURI( jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + YTPlayer.videoID ), 1, YTPlayer.opt.quality );
								jQuery.mbYTPlayer.checkForState( YTPlayer );
								jQuery( YTPlayer ).optimizeDisplay();
								jQuery.mbYTPlayer.getDataFromAPI( YTPlayer );
								return this;
						} );
				},
				/**
				 *
				 * @returns {player}
				 */
				getPlayer: function() {
						return jQuery( this ).get( 0 ).player;
				},
				playerDestroy: function() {
						var YTPlayer = this.get( 0 );
						ytp.YTAPIReady = false;
						ytp.backgroundIsInited = false;
						YTPlayer.isInit = false;
						YTPlayer.videoID = null;
						var playerBox = YTPlayer.wrapper;
						playerBox.remove();
						jQuery( "#controlBar_" + YTPlayer.id ).remove();
						clearInterval( YTPlayer.checkForStartAt );
						clearInterval( YTPlayer.getState );
						return this;
				},
				/**
				 *
				 * @param real
				 * @returns {jQuery.mbYTPlayer}
				 */
				fullscreen: function( real ) {
						var YTPlayer = this.get( 0 );
						if( typeof real == "undefined" ) real = YTPlayer.opt.realfullscreen;
						real = eval( real );
						var controls = jQuery( "#controlBar_" + YTPlayer.id );
						var fullScreenBtn = controls.find( ".mb_OnlyYT" );
						var videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
						//var videoWrapper = YTPlayer.wrapper;
						if( real ) {
								var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
								jQuery( document ).off( fullscreenchange ).on( fullscreenchange, function() {
										var isFullScreen = RunPrefixMethod( document, "IsFullScreen" ) || RunPrefixMethod( document, "FullScreen" );
										if( !isFullScreen ) {
												YTPlayer.isAlone = false;
												fullScreenBtn.html( jQuery.mbYTPlayer.controls.onlyYT );
												jQuery( YTPlayer ).YTPSetVideoQuality( YTPlayer.opt.quality );
												videoWrapper.removeClass( "fullscreen" );
												videoWrapper.CSSAnimate( {
														opacity: YTPlayer.opt.opacity
												}, 500 );
												videoWrapper.css( {
														zIndex: 0
												} );
												if( YTPlayer.isBackground ) {
														jQuery( "body" ).after( controls );
												} else {
														YTPlayer.wrapper.before( controls );
												}
												jQuery( window ).resize();
												jQuery( YTPlayer ).trigger( "YTPFullScreenEnd" );
										} else {
												jQuery( YTPlayer ).YTPSetVideoQuality( "default" );
												jQuery( YTPlayer ).trigger( "YTPFullScreenStart" );
										}
								} );
						}
						if( !YTPlayer.isAlone ) {
								function hideMouse() {
										YTPlayer.overlay.css( {
												cursor: "none"
										} );
								}
								jQuery( document ).on( "mousemove.YTPlayer", function( e ) {
										YTPlayer.overlay.css( {
												cursor: "auto"
										} );
										clearTimeout( YTPlayer.hideCursor );
										if( !jQuery( e.target ).parents().is( ".mb_YTPBar" ) ) YTPlayer.hideCursor = setTimeout( hideMouse, 3000 );
								} );
								hideMouse();
								if( real ) {
										videoWrapper.css( {
												opacity: 0
										} );
										videoWrapper.addClass( "fullscreen" );
										launchFullscreen( videoWrapper.get( 0 ) );
										setTimeout( function() {
												videoWrapper.CSSAnimate( {
														opacity: 1
												}, 1000 );
												YTPlayer.wrapper.append( controls );
												jQuery( YTPlayer ).optimizeDisplay();
												YTPlayer.player.seekTo( YTPlayer.player.getCurrentTime() + .1, true );
										}, 500 )
								} else videoWrapper.css( {
										zIndex: 10000
								} ).CSSAnimate( {
										opacity: 1
								}, 1000 );
								fullScreenBtn.html( jQuery.mbYTPlayer.controls.showSite );
								YTPlayer.isAlone = true;
						} else {
								jQuery( document ).off( "mousemove.YTPlayer" );
								YTPlayer.overlay.css( {
										cursor: "auto"
								} );
								if( real ) {
										cancelFullscreen();
								} else {
										videoWrapper.CSSAnimate( {
												opacity: YTPlayer.opt.opacity
										}, 500 );
										videoWrapper.css( {
												zIndex: 0
										} );
								}
								fullScreenBtn.html( jQuery.mbYTPlayer.controls.onlyYT );
								YTPlayer.isAlone = false;
						}

						function RunPrefixMethod( obj, method ) {
								var pfx = [ "webkit", "moz", "ms", "o", "" ];
								var p = 0,
										m, t;
								while( p < pfx.length && !obj[ m ] ) {
										m = method;
										if( pfx[ p ] == "" ) {
												m = m.substr( 0, 1 ).toLowerCase() + m.substr( 1 );
										}
										m = pfx[ p ] + m;
										t = typeof obj[ m ];
										if( t != "undefined" ) {
												pfx = [ pfx[ p ] ];
												return( t == "function" ? obj[ m ]() : obj[ m ] );
										}
										p++;
								}
						}

						function launchFullscreen( element ) {
								RunPrefixMethod( element, "RequestFullScreen" );
						}

						function cancelFullscreen() {
								if( RunPrefixMethod( document, "FullScreen" ) || RunPrefixMethod( document, "IsFullScreen" ) ) {
										RunPrefixMethod( document, "CancelFullScreen" );
								}
						}
						return this;
				},
				/**
				 *
				 * @returns {jQuery.mbYTPlayer}
				 */
				toggleLoops: function() {
						var YTPlayer = this.get( 0 );
						var data = YTPlayer.opt;
						if( data.loop == 1 ) {
								data.loop = 0;
						} else {
								if( data.startAt ) {
										YTPlayer.player.seekTo( data.startAt );
								} else {
										YTPlayer.player.playVideo();
								}
								data.loop = 1;
						}
						return this;
				},
				/**
				 *
				 * @returns {jQuery.mbYTPlayer}
				 */
				play: function() {
						var YTPlayer = this.get( 0 );
						if( !YTPlayer.isReady ) return;
						var controls = jQuery( "#controlBar_" + YTPlayer.id );
						var playBtn = controls.find( ".mb_YTPPlaypause" );
						playBtn.html( jQuery.mbYTPlayer.controls.pause );
						YTPlayer.player.playVideo();
						YTPlayer.wrapper.CSSAnimate( {
								opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
						}, 2000 );
						jQuery( YTPlayer.playerEl ).CSSAnimate( {
								opacity: 1
						}, 1000 );
						jQuery( YTPlayer ).css( "background-image", "none" );
						return this;
				},
				/**
				 *
				 * @param callback
				 * @returns {jQuery.mbYTPlayer}
				 */
				togglePlay: function( callback ) {
						var YTPlayer = this.get( 0 );
						if( YTPlayer.state == 1 ) this.YTPPause();
						else this.YTPPlay();
						if( typeof callback == "function" ) {
								callback( YTPlayer.state );
						}
						return this;
				},
				/**
				 *
				 * @returns {jQuery.mbYTPlayer}
				 */
				stop: function() {
						var YTPlayer = this.get( 0 );
						var controls = jQuery( "#controlBar_" + YTPlayer.id );
						var playBtn = controls.find( ".mb_YTPPlaypause" );
						playBtn.html( jQuery.mbYTPlayer.controls.play );
						YTPlayer.player.stopVideo();
						return this;
				},
				/**
				 *
				 * @returns {jQuery.mbYTPlayer}
				 */
				pause: function() {
						var YTPlayer = this.get( 0 );
						var controls = jQuery( "#controlBar_" + YTPlayer.id );
						var playBtn = controls.find( ".mb_YTPPlaypause" );
						playBtn.html( jQuery.mbYTPlayer.controls.play );
						YTPlayer.player.pauseVideo();
						return this;
				},
				/**
				 *
				 * @param val
				 * @returns {jQuery.mbYTPlayer}
				 */
				seekTo: function( val ) {
						var YTPlayer = this.get( 0 );
						YTPlayer.player.seekTo( val, true );
						return this;
				},
				/**
				 *
				 * @param val
				 * @returns {jQuery.mbYTPlayer}
				 */
				setVolume: function( val ) {
						var YTPlayer = this.get( 0 );
						if( !val && !YTPlayer.opt.vol && YTPlayer.player.getVolume() == 0 ) jQuery( YTPlayer ).YTPUnmute();
						else if( ( !val && YTPlayer.player.getVolume() > 0 ) || ( val && YTPlayer.opt.vol == val ) ) {
								if( !YTPlayer.isMute ) jQuery( YTPlayer ).YTPMute();
								else jQuery( YTPlayer ).YTPUnmute();
						} else {
								YTPlayer.opt.vol = val;
								YTPlayer.player.setVolume( YTPlayer.opt.vol );
								if( YTPlayer.volumeBar && YTPlayer.volumeBar.length ) YTPlayer.volumeBar.updateSliderVal( val )
						}
						return this;
				},
				/**
				 *
				 * @returns {jQuery.mbYTPlayer}
				 */
				mute: function() {
						var YTPlayer = this.get( 0 );
						if( YTPlayer.isMute ) return;
						YTPlayer.player.mute();
						YTPlayer.isMute = true;
						YTPlayer.player.setVolume( 0 );
						if( YTPlayer.volumeBar && YTPlayer.volumeBar.length && YTPlayer.volumeBar.width() > 10 ) {
								YTPlayer.volumeBar.updateSliderVal( 0 );
						}
						var controls = jQuery( "#controlBar_" + YTPlayer.id );
						var muteBtn = controls.find( ".mb_YTPMuteUnmute" );
						muteBtn.html( jQuery.mbYTPlayer.controls.unmute );
						jQuery( YTPlayer ).addClass( "isMuted" );
						if( YTPlayer.volumeBar && YTPlayer.volumeBar.length ) YTPlayer.volumeBar.addClass( "muted" );
						var YTPEvent = jQuery.Event( "YTPMuted" );
						YTPEvent.time = YTPlayer.player.time;
						if( YTPlayer.canTrigger ) jQuery( YTPlayer ).trigger( YTPEvent );
						return this;
				},
				/**
				 *
				 * @returns {jQuery.mbYTPlayer}
				 */
				unmute: function() {
						var YTPlayer = this.get( 0 );
						if( !YTPlayer.isMute ) return;
						YTPlayer.player.unMute();
						YTPlayer.isMute = false;
						YTPlayer.player.setVolume( YTPlayer.opt.vol );
						if( YTPlayer.volumeBar && YTPlayer.volumeBar.length ) YTPlayer.volumeBar.updateSliderVal( YTPlayer.opt.vol > 10 ? YTPlayer.opt.vol : 10 );
						var controls = jQuery( "#controlBar_" + YTPlayer.id );
						var muteBtn = controls.find( ".mb_YTPMuteUnmute" );
						muteBtn.html( jQuery.mbYTPlayer.controls.mute );
						jQuery( YTPlayer ).removeClass( "isMuted" );
						if( YTPlayer.volumeBar && YTPlayer.volumeBar.length ) YTPlayer.volumeBar.removeClass( "muted" );
						var YTPEvent = jQuery.Event( "YTPUnmuted" );
						YTPEvent.time = YTPlayer.player.time;
						if( YTPlayer.canTrigger ) jQuery( YTPlayer ).trigger( YTPEvent );
						return this;
				},
				/**
				 *
				 * @param filter
				 * @param value
				 * @returns {jQuery.mbYTPlayer}
				 */
				applyFilter: function( filter, value ) {
						var YTPlayer = this.get( 0 );
						YTPlayer.filters[ filter ].value = value;
						if( YTPlayer.filtersEnabled ) this.YTPEnableFilters();
						return this;
				},
				/**
				 *
				 * @param filters
				 * @returns {jQuery.mbYTPlayer}
				 */
				applyFilters: function( filters ) {
						var YTPlayer = this.get( 0 );
						this.on( "YTPReady", function() {
								for( var key in filters ) {
										YTPlayer.filters[ key ].value = filters[ key ];
										jQuery( YTPlayer ).YTPApplyFilter( key, filters[ key ] );
								}
								jQuery( YTPlayer ).trigger( "YTPFiltersApplied" );
						} );
						return this;
				},
				/**
				 *
				 * @param filter
				 * @param value
				 * @returns {*}
				 */
				toggleFilter: function( filter, value ) {
						return this.each( function() {
								var YTPlayer = this;
								if( !YTPlayer.filters[ filter ].value ) YTPlayer.filters[ filter ].value = value;
								else YTPlayer.filters[ filter ].value = 0;
								if( YTPlayer.filtersEnabled ) jQuery( this ).YTPEnableFilters();
						} )
						return this;
				},
				/**
				 *
				 * @param callback
				 * @returns {*}
				 */
				toggleFilters: function( callback ) {
						return this.each( function() {
								var YTPlayer = this;
								if( YTPlayer.filtersEnabled ) {
										jQuery( YTPlayer ).trigger( "YTPDisableFilters" );
										jQuery( YTPlayer ).YTPDisableFilters();
								} else {
										jQuery( YTPlayer ).YTPEnableFilters();
										jQuery( YTPlayer ).trigger( "YTPEnableFilters" );
								}
								if( typeof callback == "function" ) callback( YTPlayer.filtersEnabled );
						} )
				},
				/**
				 *
				 * @returns {*}
				 */
				disableFilters: function() {
						return this.each( function() {
								var YTPlayer = this;
								var iframe = jQuery( YTPlayer.playerEl );
								iframe.css( "-webkit-filter", "" );
								iframe.css( "filter", "" );
								YTPlayer.filtersEnabled = false;
						} )
				},
				/**
				 *
				 * @returns {*}
				 */
				enableFilters: function() {
						return this.each( function() {
								var YTPlayer = this;
								var iframe = jQuery( YTPlayer.playerEl );
								var filterStyle = "";
								for( var key in YTPlayer.filters ) {
										if( YTPlayer.filters[ key ].value ) filterStyle += key.replace( "_", "-" ) + "(" + YTPlayer.filters[ key ].value + YTPlayer.filters[ key ].unit + ") ";
								}
								iframe.css( "-webkit-filter", filterStyle );
								iframe.css( "filter", filterStyle );
								YTPlayer.filtersEnabled = true;
						} )
						return this;
				},
				/**
				 *
				 * @param filter
				 * @param callback
				 * @returns {*}
				 */
				removeFilter: function( filter, callback ) {
						return this.each( function() {
								if( typeof filter == "function" ) {
										callback = filter;
										filter = null;
								}
								var YTPlayer = this;
								if( !filter )
										for( var key in YTPlayer.filters ) {
												jQuery( this ).YTPApplyFilter( key, 0 );
												if( typeof callback == "function" ) callback( key );
										} else {
												jQuery( this ).YTPApplyFilter( filter, 0 );
												if( typeof callback == "function" ) callback( filter );
										}
						} );
						return this;
				},
				/**
				 *
				 * @returns {{totalTime: number, currentTime: number}}
				 */
				manageProgress: function() {
						var YTPlayer = this.get( 0 );
						var controls = jQuery( "#controlBar_" + YTPlayer.id );
						var progressBar = controls.find( ".mb_YTPProgress" );
						var loadedBar = controls.find( ".mb_YTPLoaded" );
						var timeBar = controls.find( ".mb_YTPseekbar" );
						var totW = progressBar.outerWidth();
						var currentTime = Math.floor( YTPlayer.player.getCurrentTime() );
						var totalTime = Math.floor( YTPlayer.player.getDuration() );
						var timeW = ( currentTime * totW ) / totalTime;
						var startLeft = 0;
						var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;
						loadedBar.css( {
								left: startLeft,
								width: loadedW + "%"
						} );
						timeBar.css( {
								left: 0,
								width: timeW
						} );
						return {
								totalTime: totalTime,
								currentTime: currentTime
						};
				},
				/**
				 *
				 * @param YTPlayer
				 */
				buildControls: function( YTPlayer ) {
						var data = YTPlayer.opt;
						// @data.printUrl: is deprecated; use data.showYTLogo
						data.showYTLogo = data.showYTLogo || data.printUrl;
						if( jQuery( "#controlBar_" + YTPlayer.id ).length ) return;
						YTPlayer.controlBar = jQuery( "<span/>" ).attr( "id", "controlBar_" + YTPlayer.id ).addClass( "mb_YTPBar" ).css( {
								whiteSpace: "noWrap",
								position: YTPlayer.isBackground ? "fixed" : "absolute",
								zIndex: YTPlayer.isBackground ? 10000 : 1000
						} ).hide();
						var buttonBar = jQuery( "<div/>" ).addClass( "buttonBar" );
						/* play/pause button*/
						var playpause = jQuery( "<span>" + jQuery.mbYTPlayer.controls.play + "</span>" ).addClass( "mb_YTPPlaypause ytpicon" ).click( function() {
								if( YTPlayer.player.getPlayerState() == 1 ) jQuery( YTPlayer ).YTPPause();
								else jQuery( YTPlayer ).YTPPlay();
						} );
						/* mute/unmute button*/
						var MuteUnmute = jQuery( "<span>" + jQuery.mbYTPlayer.controls.mute + "</span>" ).addClass( "mb_YTPMuteUnmute ytpicon" ).click( function() {
								if( YTPlayer.player.getVolume() == 0 ) {
										jQuery( YTPlayer ).YTPUnmute();
								} else {
										jQuery( YTPlayer ).YTPMute();
								}
						} );
						/* volume bar*/
						var volumeBar = jQuery( "<div/>" ).addClass( "mb_YTPVolumeBar" ).css( {
								display: "inline-block"
						} );
						YTPlayer.volumeBar = volumeBar;
						/* time elapsed */
						var idx = jQuery( "<span/>" ).addClass( "mb_YTPTime" );
						var vURL = data.videoURL ? data.videoURL : "";
						if( vURL.indexOf( "http" ) < 0 ) vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL;
						var movieUrl = jQuery( "<span/>" ).html( jQuery.mbYTPlayer.controls.ytLogo ).addClass( "mb_YTPUrl ytpicon" ).attr( "title", "view on YouTube" ).on( "click", function() {
								window.open( vURL, "viewOnYT" )
						} );
						var onlyVideo = jQuery( "<span/>" ).html( jQuery.mbYTPlayer.controls.onlyYT ).addClass( "mb_OnlyYT ytpicon" ).on( "click", function() {
								jQuery( YTPlayer ).YTPFullscreen( data.realfullscreen );
						} );
						var progressBar = jQuery( "<div/>" ).addClass( "mb_YTPProgress" ).css( "position", "absolute" ).click( function( e ) {
								timeBar.css( {
										width: ( e.clientX - timeBar.offset().left )
								} );
								YTPlayer.timeW = e.clientX - timeBar.offset().left;
								YTPlayer.controlBar.find( ".mb_YTPLoaded" ).css( {
										width: 0
								} );
								var totalTime = Math.floor( YTPlayer.player.getDuration() );
								YTPlayer.goto = ( timeBar.outerWidth() * totalTime ) / progressBar.outerWidth();
								YTPlayer.player.seekTo( parseFloat( YTPlayer.goto ), true );
								YTPlayer.controlBar.find( ".mb_YTPLoaded" ).css( {
										width: 0
								} );
						} );
						var loadedBar = jQuery( "<div/>" ).addClass( "mb_YTPLoaded" ).css( "position", "absolute" );
						var timeBar = jQuery( "<div/>" ).addClass( "mb_YTPseekbar" ).css( "position", "absolute" );
						progressBar.append( loadedBar ).append( timeBar );
						buttonBar.append( playpause ).append( MuteUnmute ).append( volumeBar ).append( idx );
						if( data.showYTLogo ) {
								buttonBar.append( movieUrl );
						}
						if( YTPlayer.isBackground || ( eval( YTPlayer.opt.realfullscreen ) && !YTPlayer.isBackground ) ) buttonBar.append( onlyVideo );
						YTPlayer.controlBar.append( buttonBar ).append( progressBar );
						if( !YTPlayer.isBackground ) {
								YTPlayer.controlBar.addClass( "inlinePlayer" );
								YTPlayer.wrapper.before( YTPlayer.controlBar );
						} else {
								jQuery( "body" ).after( YTPlayer.controlBar );
						}
						volumeBar.simpleSlider( {
								initialval: YTPlayer.opt.vol,
								scale: 100,
								orientation: "h",
								callback: function( el ) {
										if( el.value == 0 ) {
												jQuery( YTPlayer ).YTPMute();
										} else {
												jQuery( YTPlayer ).YTPUnmute();
										}
										YTPlayer.player.setVolume( el.value );
										if( !YTPlayer.isMute ) YTPlayer.opt.vol = el.value;
								}
						} );
				},
				/**
				 *
				 *
				 * */
				checkForState: function( YTPlayer ) {
						var interval = YTPlayer.opt.showControls ? 100 : 700;
						clearInterval( YTPlayer.getState );
						//Checking if player has been removed from scene
						if( !jQuery.contains( document, YTPlayer ) ) {
								jQuery( YTPlayer ).YTPPlayerDestroy();
								clearInterval( YTPlayer.getState );
								clearInterval( YTPlayer.checkForStartAt );
								return;
						}
						jQuery.mbYTPlayer.checkForStart( YTPlayer );
						YTPlayer.getState = setInterval( function() {
								var prog = jQuery( YTPlayer ).YTPManageProgress();
								var $YTPlayer = jQuery( YTPlayer );
								var data = YTPlayer.opt;
								var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0;
								var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
								stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;
								if( YTPlayer.player.time != prog.currentTime ) {
										var YTPEvent = jQuery.Event( "YTPTime" );
										YTPEvent.time = YTPlayer.player.time;
										jQuery( YTPlayer ).trigger( YTPEvent );
								}
								YTPlayer.player.time = prog.currentTime;
								if( YTPlayer.player.getVolume() == 0 ) $YTPlayer.addClass( "isMuted" );
								else $YTPlayer.removeClass( "isMuted" );
								if( YTPlayer.opt.showControls )
										if( prog.totalTime ) {
												YTPlayer.controlBar.find( ".mb_YTPTime" ).html( jQuery.mbYTPlayer.formatTime( prog.currentTime ) + " / " + jQuery.mbYTPlayer.formatTime( prog.totalTime ) );
										} else {
												YTPlayer.controlBar.find( ".mb_YTPTime" ).html( "-- : -- / -- : --" );
										}
								if( eval( YTPlayer.opt.stopMovieOnBlur ) )
										if( !document.hasFocus() ) {
												if( YTPlayer.state == 1 ) {
														YTPlayer.hasFocus = false;
														$YTPlayer.YTPPause();
												}
										} else if( document.hasFocus() && !YTPlayer.hasFocus && !( YTPlayer.state == -1 || YTPlayer.state == 0 ) ) {
										YTPlayer.hasFocus = true;
										$YTPlayer.YTPPlay();
								}
								if( YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ) {
										YTPlayer.controlBar.addClass( "compact" );
										YTPlayer.isCompact = true;
										if( !YTPlayer.isMute && YTPlayer.volumeBar ) YTPlayer.volumeBar.updateSliderVal( YTPlayer.opt.vol );
								} else if( YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact ) {
										YTPlayer.controlBar.removeClass( "compact" );
										YTPlayer.isCompact = false;
										if( !YTPlayer.isMute && YTPlayer.volumeBar ) YTPlayer.volumeBar.updateSliderVal( YTPlayer.opt.vol );
								}
								if( YTPlayer.player.getPlayerState() == 1 && ( parseFloat( YTPlayer.player.getDuration() - 1.5 ) < YTPlayer.player.getCurrentTime() || ( stopAt > 0 && parseFloat( YTPlayer.player.getCurrentTime() ) > stopAt ) ) ) {
										if( YTPlayer.isEnded ) return;
										YTPlayer.isEnded = true;
										setTimeout( function() {
												YTPlayer.isEnded = false
										}, 1000 );
										if( YTPlayer.isPlayList ) {
												clearInterval( YTPlayer.getState );
												var YTPEnd = jQuery.Event( "YTPEnd" );
												YTPEnd.time = YTPlayer.player.time;
												jQuery( YTPlayer ).trigger( YTPEnd );
												return;
										} else if( !data.loop ) {
												YTPlayer.player.pauseVideo();
												YTPlayer.wrapper.CSSAnimate( {
														opacity: 0
												}, 1000, function() {
														var YTPEnd = jQuery.Event( "YTPEnd" );
														YTPEnd.time = YTPlayer.player.time;
														jQuery( YTPlayer ).trigger( YTPEnd );
														YTPlayer.player.seekTo( startAt, true );
														if( !YTPlayer.isBackground ) {
																YTPlayer.opt.containment.css( {
																		background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
																		backgroundSize: "cover"
																} );
														}
												} );
										} else {

												startAt = startAt || 1;

												YTPlayer.player.pauseVideo();
												YTPlayer.player.seekTo( startAt, true );
												$YTPlayer.YTPPlay();

										}
								}
						}, interval );
				},
				/**
				 *
				 * */
				checkForStart: function( YTPlayer ) {
						var $YTPlayer = jQuery( YTPlayer );
						//Checking if player has been removed from scene
						if( !jQuery.contains( document, YTPlayer ) ) {
								jQuery( YTPlayer ).YTPPlayerDestroy();
								return
						}
						if( jQuery.browser.chrome ) YTPlayer.opt.quality = "default";
						YTPlayer.player.pauseVideo();
						jQuery( YTPlayer ).muteYTPVolume();
						jQuery( "#controlBar_" + YTPlayer.id ).remove();
						if( YTPlayer.opt.showControls ) jQuery.mbYTPlayer.buildControls( YTPlayer );
						if( YTPlayer.opt.addRaster ) {
								var classN = YTPlayer.opt.addRaster == "dot" ? "raster-dot" : "raster";
								YTPlayer.overlay.addClass( YTPlayer.isRetina ? classN + " retina" : classN );
						} else {
								YTPlayer.overlay.removeClass( function( index, classNames ) {
										// change the list into an array
										var current_classes = classNames.split( " " ),
												// array of classes which are to be removed
												classes_to_remove = [];
										jQuery.each( current_classes, function( index, class_name ) {
												// if the classname begins with bg add it to the classes_to_remove array
												if( /raster.*/.test( class_name ) ) {
														classes_to_remove.push( class_name );
												}
										} );
										classes_to_remove.push( "retina" );
										// turn the array back into a string
										return classes_to_remove.join( " " );
								} )
						}
						YTPlayer.checkForStartAt = setInterval( function() {
								jQuery( YTPlayer ).YTPMute();
								var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
								var canPlayVideo = ( YTPlayer.player.getVideoLoadedFraction() > startAt / YTPlayer.player.getDuration() );
								if( YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo ) {
										clearInterval( YTPlayer.checkForStartAt );
										YTPlayer.isReady = true;
										if( typeof YTPlayer.opt.onReady == "function" ) YTPlayer.opt.onReady( YTPlayer );
										var YTPready = jQuery.Event( "YTPReady" );
										jQuery( YTPlayer ).trigger( YTPready );
										YTPlayer.player.pauseVideo();
										if( !YTPlayer.opt.mute ) jQuery( YTPlayer ).YTPUnmute();
										YTPlayer.canTrigger = true;
										if( YTPlayer.opt.autoPlay ) {
												$YTPlayer.YTPPlay();
												$YTPlayer.css( "background-image", "none" );
												jQuery( YTPlayer.playerEl ).CSSAnimate( {
														opacity: 1
												}, 1000 );
												YTPlayer.wrapper.CSSAnimate( {
														opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
												}, 1000 );
										} else {
												YTPlayer.player.pauseVideo();
												if( !YTPlayer.isPlayer ) {
														jQuery( YTPlayer.playerEl ).CSSAnimate( {
																opacity: 1
														}, 1000 );
														YTPlayer.wrapper.CSSAnimate( {
																opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
														}, 1000 );
												}
										}
										if( YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ) {
												YTPlayer.loading.html( "Ready" );
												setTimeout( function() {
														YTPlayer.loading.fadeOut();


												}, 100 )
										}
										if( YTPlayer.controlBar ) YTPlayer.controlBar.slideDown( 1000 );
								} else {
										//YTPlayer.player.playVideo();
										if( startAt >= 0 ) YTPlayer.player.seekTo( startAt, true );
								}
						}, 1000 );
				},
				/**
				 *
				 * @param s
				 * @returns {string}
				 */
				formatTime: function( s ) {
						var min = Math.floor( s / 60 );
						var sec = Math.floor( s - ( 60 * min ) );
						return( min <= 9 ? "0" + min : min ) + " : " + ( sec <= 9 ? "0" + sec : sec );
				}
		};
		/**
		 *
		 * @returns {boolean}
		 */
		jQuery.fn.toggleVolume = function() {
				var YTPlayer = this.get( 0 );
				if( !YTPlayer ) return;
				if( YTPlayer.player.isMuted() ) {
						jQuery( YTPlayer ).YTPUnmute();
						return true;
				} else {
						jQuery( YTPlayer ).YTPMute();
						return false;
				}
		};
		/**
		 *
		 */
		jQuery.fn.optimizeDisplay = function() {
				var YTPlayer = this.get( 0 );
				var data = YTPlayer.opt;
				var playerBox = jQuery( YTPlayer.playerEl );
				var win = {};
				var el = YTPlayer.wrapper;
				win.width = el.outerWidth();
				win.height = el.outerHeight();
				var margin = 24;
				var overprint = 100;
				var vid = {};
				if( data.optimizeDisplay ) {
						vid.width = win.width + ( ( win.width * margin ) / 100 );
						vid.height = data.ratio == "16/9" ? Math.ceil( ( 9 * win.width ) / 16 ) : Math.ceil( ( 3 * win.width ) / 4 );
						vid.marginTop = -( ( vid.height - win.height ) / 2 );
						vid.marginLeft = -( ( win.width * ( margin / 2 ) ) / 100 );
						if( vid.height < win.height ) {
								vid.height = win.height + ( ( win.height * margin ) / 100 );
								vid.width = data.ratio == "16/9" ? Math.floor( ( 16 * win.height ) / 9 ) : Math.floor( ( 4 * win.height ) / 3 );
								vid.marginTop = -( ( win.height * ( margin / 2 ) ) / 100 );
								vid.marginLeft = -( ( vid.width - win.width ) / 2 );
						}
						vid.width += overprint;
						vid.height += overprint;
						vid.marginTop -= overprint / 2;
						vid.marginLeft -= overprint / 2;
				} else {
						vid.width = "100%";
						vid.height = "100%";
						vid.marginTop = 0;
						vid.marginLeft = 0;
				}
				playerBox.css( {
						width: vid.width,
						height: vid.height,
						marginTop: vid.marginTop,
						marginLeft: vid.marginLeft
				} );
		};
		/**
		 *
		 * @param arr
		 * @returns {Array|string|Blob|*}
		 *
		 */
		jQuery.shuffle = function( arr ) {
				var newArray = arr.slice();
				var len = newArray.length;
				var i = len;
				while( i-- ) {
						var p = parseInt( Math.random() * len );
						var t = newArray[ i ];
						newArray[ i ] = newArray[ p ];
						newArray[ p ] = t;
				}
				return newArray;
		};

		/* Exposed public method */
		jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
		jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer;
		jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID;
		jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie;
		jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy;

		jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play;
		jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay;
		jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop;
		jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause;
		jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo;

		jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist;
		jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext;
		jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev;

		jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute;
		jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute;
		jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume;
		jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume;

		jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData;
		jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen;
		jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops;
		jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
		jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress;

		jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter;
		jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters;
		jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter;
		jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters;
		jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter;
		jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters;
		jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters;


		/**
		 *
		 * @deprecated
		 *
		 **/
		jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
		jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
		jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
		jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
		jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
		jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
		jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
		jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
		jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls;
		jQuery.fn.playYTP = jQuery.mbYTPlayer.play;
		jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
		jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop;
		jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause;
		jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo;
		jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute;
		jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute;
		jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume;
		jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
		jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress;
		jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData;


} )( jQuery, ytp );
;
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.CSSAnimate.min.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/03/14 21.40
 *  *****************************************************************************
 */

function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+jQuery/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":jQuery.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>jQuery.CSS.filters[b].max?jQuery.CSS.filters[b].max:c,jQuery.CSS.filters[b].unit),a[e+"filter"]+=d+"("+c+") ",delete a[b]}jQuery.support.CSStransition=function(){var a=document.body||document.documentElement,b=a.style;return void 0!==b.transition||void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.MsTransition||void 0!==b.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");for(var c in b){"transform"===c&&(b[jQuery.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[jQuery.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[jQuery.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]);var d="";"x"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]),"y"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b=[];for(var c in a)b.indexOf(c)<0&&b.push(uncamel(c));return b.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function o(){f.called=!0,f.CSSAIsRunning=!1,g.off(jQuery.CSS.transitionEnd+"."+f.id),clearTimeout(f.timeout),g.css(jQuery.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(f),"function"==typeof f.CSSqueue&&(f.CSSqueue(),f.CSSqueue=null)}var f=this,g=jQuery(this);f.id=f.id||"CSSA_"+(new Date).getTime();var h=h||{type:"noEvent"};if(f.CSSAIsRunning&&f.eventType==h.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return f.CSSqueue=function(){g.CSSAnimate(a,b,c,d,e)},void 0;if(f.CSSqueue=null,f.eventType=h.type,0!==g.length&&a){if(a=jQuery.normalizeCss(a),f.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var i in jQuery.fx.speeds){if(b==i){b=jQuery.fx.speeds[i];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),!jQuery.support.CSStransition){for(var j in a){if("transform"===j&&delete a[j],"filter"===j&&delete a[j],"transform-origin"===j&&delete a[j],"auto"===a[j]&&delete a[j],"x"===j){var k=a[j],l="left";a[l]=k,delete a[j]}if("y"===j){var k=a[j],l="top";a[l]=k,delete a[j]}("-ms-transform"===j||"-ms-filter"===j)&&delete a[j]}return g.delay(c).animate(a,b,e),void 0}var m={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};m[d]&&(d=m[d]),g.off(jQuery.CSS.transitionEnd+"."+f.id);var n=jQuery.CSS.getProp(a),p={};jQuery.extend(p,a),p[jQuery.CSS.sfx+"transition-property"]=n,p[jQuery.CSS.sfx+"transition-duration"]=b+"ms",p[jQuery.CSS.sfx+"transition-delay"]=c+"ms",p[jQuery.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){g.one(jQuery.CSS.transitionEnd+"."+f.id,o),g.css(p)},1),f.timeout=setTimeout(function(){return f.called||!e?(f.called=!1,f.CSSAIsRunning=!1,void 0):(g.css(jQuery.CSS.sfx+"transition",""),e.apply(f),f.CSSAIsRunning=!1,"function"==typeof f.CSSqueue&&(f.CSSqueue(),f.CSSqueue=null),void 0)},b+c+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(a){return this.each(function(){var b=jQuery(this),c=jQuery.normalizeCss(a);b.css(c)})};
;/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.min.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/03/14 21.43
 *  *****************************************************************************
 */

var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.simpleSlider.min.js                                                                                                              _
 _ last modified: 16/05/15 23.45                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

!function(a){/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());var c="ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch||!1;a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:c?"touchstart":"mousedown",end:c?"touchend":"mouseup",move:c?"touchmove":"mousemove"},init:function(b){return this.each(function(){var d=this,e=a(d);e.addClass("simpleSlider"),d.opt={},a.extend(d.opt,a.simpleSlider.defaults,b),a.extend(d.opt,e.data());var f="h"==d.opt.orientation?"horizontal":"vertical",g=a("<div/>").addClass("level").addClass(f);e.prepend(g),d.level=g,e.css({cursor:"default"}),"auto"==d.opt.scale&&(d.opt.scale=a(d).outerWidth()),e.updateSliderVal(),d.opt.readonly||(e.on(a.simpleSlider.events.start,function(a){c&&(a=a.changedTouches[0]),d.canSlide=!0,e.updateSliderVal(a),e.css({cursor:"col-resize"}),a.preventDefault(),a.stopPropagation()}),a(document).on(a.simpleSlider.events.move,function(b){c&&(b=b.changedTouches[0]),d.canSlide&&(a(document).css({cursor:"default"}),e.updateSliderVal(b),b.preventDefault(),b.stopPropagation())}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"}),d.canSlide=!1,e.css({cursor:"auto"})}))})},updateSliderVal:function(b){function g(a,b){return Math.floor(100*a/b)}var c=this,d=c.get(0);d.opt.initialval="number"==typeof d.opt.initialval?d.opt.initialval:d.opt.initialval(d);var e=a(d).outerWidth(),f=a(d).outerHeight();d.x="object"==typeof b?b.clientX+document.body.scrollLeft-c.offset().left:"number"==typeof b?b*e/d.opt.scale:d.opt.initialval*e/d.opt.scale,d.y="object"==typeof b?b.clientY+document.body.scrollTop-c.offset().top:"number"==typeof b?(d.opt.scale-d.opt.initialval-b)*f/d.opt.scale:d.opt.initialval*f/d.opt.scale,d.y=c.outerHeight()-d.y,d.scaleX=d.x*d.opt.scale/e,d.scaleY=d.y*d.opt.scale/f,d.outOfRangeX=d.scaleX>d.opt.scale?d.scaleX-d.opt.scale:d.scaleX<0?d.scaleX:0,d.outOfRangeY=d.scaleY>d.opt.scale?d.scaleY-d.opt.scale:d.scaleY<0?d.scaleY:0,d.outOfRange="h"==d.opt.orientation?d.outOfRangeX:d.outOfRangeY,d.value="undefined"!=typeof b?"h"==d.opt.orientation?d.x>=c.outerWidth()?d.opt.scale:d.x<=0?0:d.scaleX:d.y>=c.outerHeight()?d.opt.scale:d.y<=0?0:d.scaleY:"h"==d.opt.orientation?d.scaleX:d.scaleY,"h"==d.opt.orientation?d.level.width(g(d.x,e)+"%"):d.level.height(g(d.y,f)),"function"==typeof d.opt.callback&&d.opt.callback(d)}},a.fn.simpleSlider=a.simpleSlider.init,a.fn.updateSliderVal=a.simpleSlider.updateSliderVal}(jQuery);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.storage.min.js                                                                                                                   _
 _ last modified: 24/05/15 16.08                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

!function(a){a.mbCookie={set:function(a,b,c,d){b=JSON.stringify(b),c||(c=7),d=d?"; domain="+d:"";var f,e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),f="; expires="+e.toGMTString(),document.cookie=a+"="+b+f+"; path=/"+d},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return JSON.parse(e.substring(b.length,e.length))}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){b=JSON.stringify(b),localStorage.setItem(a,b)},get:function(a){return localStorage[a]?JSON.parse(localStorage[a]):null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);


/**
 * fullPage 2.4.7
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(a){a.fn.fullpage=function(c){function ha(){a("body").append('<div id="fp-nav"><ul></ul></div>');l=a("#fp-nav");l.css("color",c.navigationColor);l.addClass(c.navigationPosition);for(var b=0;b<a(".fp-section").length;b++){var d="";c.anchors.length&&(d=c.anchors[b]);var d='<li><a href="#'+d+'"><span></span></a>',e=c.navigationTooltips[b];void 0!=e&&""!=e&&(d+='<div class="fp-tooltip '+c.navigationPosition+'">'+e+"</div>");d+="</li>";l.find("ul").append(d)}}function J(){a(".fp-section").each(function(){var b=
a(this).find(".fp-slide");b.length?b.each(function(){w(a(this))}):w(a(this))});a.isFunction(c.afterRender)&&c.afterRender.call(this)}function K(){if(!c.autoScrolling||c.scrollBar){var b=a(window).scrollTop(),d=0,e=Math.abs(b-a(".fp-section").first().offset().top);a(".fp-section").each(function(c){var f=Math.abs(b-a(this).offset().top);f<e&&(d=c,e=f)});var f=a(".fp-section").eq(d)}if(!c.autoScrolling&&!f.hasClass("active")){A=!0;var g=a(".fp-section.active").index(".fp-section")+1,ia=B(f),h=f.data("anchor");
f.addClass("active").siblings().removeClass("active");m||(a.isFunction(c.onLeave)&&c.onLeave.call(this,g,f.index(".fp-section")+1,ia),a.isFunction(c.afterLoad)&&c.afterLoad.call(this,h,f.index(".fp-section")+1));C(h,0);c.anchors.length&&!m&&(q=h,location.hash=h);clearTimeout(L);L=setTimeout(function(){A=!1},100)}c.scrollBar&&(clearTimeout(M),M=setTimeout(function(){m||n(f)},1E3))}function N(b){return scrollable=b.find(".fp-slides").length?b.find(".fp-slide.active").find(".fp-scrollable"):b.find(".fp-scrollable")}
function x(b,d){if("down"==b)var c="bottom",f=a.fn.fullpage.moveSectionDown;else c="top",f=a.fn.fullpage.moveSectionUp;if(0<d.length)if(c="top"===c?!d.scrollTop():"bottom"===c?d.scrollTop()+1+d.innerHeight()>=d[0].scrollHeight:void 0,c)f();else return!0;else f()}function ja(b){var d=b.originalEvent;if(!O(b.target)){c.autoScrolling&&!c.scrollBar&&b.preventDefault();b=a(".fp-section.active");var e=N(b);m||t||(d=P(d),r=d.y,y=d.x,b.find(".fp-slides").length&&Math.abs(z-y)>Math.abs(s-r)?Math.abs(z-y)>
a(window).width()/100*c.touchSensitivity&&(z>y?a.fn.fullpage.moveSlideRight():a.fn.fullpage.moveSlideLeft()):c.autoScrolling&&!c.scrollBar&&Math.abs(s-r)>a(window).height()/100*c.touchSensitivity&&(s>r?x("down",e):r>s&&x("up",e)))}}function O(b,d){d=d||0;var e=a(b).parent();return d<c.normalScrollElementTouchThreshold&&e.is(c.normalScrollElements)?!0:d==c.normalScrollElementTouchThreshold?!1:O(e,++d)}function ka(b){b=P(b.originalEvent);s=b.y;z=b.x}function p(b){if(c.autoScrolling){b=window.event||
b;var d=Math.max(-1,Math.min(1,b.wheelDelta||-b.deltaY||-b.detail));c.scrollBar&&(b.preventDefault?b.preventDefault():b.returnValue=!1);b=a(".fp-section.active");b=N(b);m||(0>d?x("down",b):x("up",b));return!1}}function Q(b){var d=a(".fp-section.active").find(".fp-slides");if(d.length&&!t){var e=d.find(".fp-slide.active"),f=null,f="prev"===b?e.prev(".fp-slide"):e.next(".fp-slide");if(!f.length){if(!c.loopHorizontal)return;f="prev"===b?e.siblings(":last"):e.siblings(":first")}t=!0;u(d,f)}}function R(){a(".fp-slide.active").each(function(){D(a(this))})}
function n(b,d,e){var f=b.position();if("undefined"!==typeof f&&(d={element:b,callback:d,isMovementUp:e,dest:f,dtop:f.top,yMovement:B(b),anchorLink:b.data("anchor"),sectionIndex:b.index(".fp-section"),activeSlide:b.find(".fp-slide.active"),activeSection:a(".fp-section.active"),leavingSection:a(".fp-section.active").index(".fp-section")+1,localIsResizing:v},!(d.activeSection.is(b)&&!v||c.scrollBar&&a(window).scrollTop()===d.dtop))){if(d.activeSlide.length)var g=d.activeSlide.data("anchor"),h=d.activeSlide.index();
c.autoScrolling&&c.continuousVertical&&"undefined"!==typeof d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&(d.isMovementUp?a(".fp-section.active").before(d.activeSection.nextAll(".fp-section")):a(".fp-section.active").after(d.activeSection.prevAll(".fp-section").get().reverse()),k(a(".fp-section.active").position().top),R(),d.wrapAroundElements=d.activeSection,d.dest=d.element.position(),d.dtop=d.dest.top,d.yMovement=B(d.element));b.addClass("active").siblings().removeClass("active");
m=!0;"undefined"!==typeof d.anchorLink&&S(h,g,d.anchorLink);a.isFunction(c.onLeave)&&!d.localIsResizing&&c.onLeave.call(this,d.leavingSection,d.sectionIndex+1,d.yMovement);la(d);q=d.anchorLink;c.autoScrolling&&C(d.anchorLink,d.sectionIndex)}}function la(b){if(c.css3&&c.autoScrolling&&!c.scrollBar)T("translate3d(0px, -"+b.dtop+"px, 0px)",!0),setTimeout(function(){U(b)},c.scrollingSpeed);else{var d=ma(b);a(d.element).animate(d.options,c.scrollingSpeed,c.easing).promise().done(function(){U(b)})}}function ma(b){var a=
{};c.autoScrolling&&!c.scrollBar?(a.options={top:-b.dtop},a.element="."+V):(a.options={scrollTop:b.dtop},a.element="html, body");return a}function na(b){b.wrapAroundElements&&b.wrapAroundElements.length&&(b.isMovementUp?a(".fp-section:first").before(b.wrapAroundElements):a(".fp-section:last").after(b.wrapAroundElements),k(a(".fp-section.active").position().top),R())}function U(b){na(b);a.isFunction(c.afterLoad)&&!b.localIsResizing&&c.afterLoad.call(this,b.anchorLink,b.sectionIndex+1);setTimeout(function(){m=
!1;a.isFunction(b.callback)&&b.callback.call(this)},600)}function W(){if(!A){var b=window.location.hash.replace("#","").split("/"),a=b[0],b=b[1];if(a.length){var c="undefined"===typeof q,f="undefined"===typeof q&&"undefined"===typeof b&&!t;(a&&a!==q&&!c||f||!t&&E!=b)&&F(a,b)}}}function u(b,d){var e=d.position(),f=b.find(".fp-slidesContainer").parent(),g=d.index(),h=b.closest(".fp-section"),m=h.index(".fp-section"),l=h.data("anchor"),n=h.find(".fp-slidesNav"),k=d.data("anchor"),q=v;if(c.onSlideLeave){var p=
h.find(".fp-slide.active").index(),r;r=p==g?"none":p>g?"left":"right";q||"none"===r||a.isFunction(c.onSlideLeave)&&c.onSlideLeave.call(this,l,m+1,p,r)}d.addClass("active").siblings().removeClass("active");"undefined"===typeof k&&(k=g);c.loopHorizontal||(h.find(".fp-controlArrow.fp-prev").toggle(0!=g),h.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child")));h.hasClass("active")&&S(g,k,l);var s=function(){q||a.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(this,l,m+1,k,g);t=!1};c.css3?
(e="translate3d(-"+e.left+"px, 0px, 0px)",X(b.find(".fp-slidesContainer"),0<c.scrollingSpeed).css(Y(e)),setTimeout(function(){s()},c.scrollingSpeed,c.easing)):f.animate({scrollLeft:e.left},c.scrollingSpeed,c.easing,function(){s()});n.find(".active").removeClass("active");n.find("li").eq(g).find("a").addClass("active")}function Z(){$();if(G){if("text"!==a(document.activeElement).attr("type")){var b=a(window).height();Math.abs(b-H)>20*Math.max(H,b)/100&&(a.fn.fullpage.reBuild(!0),H=b)}}else clearTimeout(aa),
aa=setTimeout(function(){a.fn.fullpage.reBuild(!0)},500)}function $(){if(c.responsive){var b=g.hasClass("fp-responsive");a(window).width()<c.responsive?b||(a.fn.fullpage.setAutoScrolling(!1),a("#fp-nav").hide(),g.addClass("fp-responsive")):b&&(a.fn.fullpage.setAutoScrolling(!0),a("#fp-nav").show(),g.removeClass("fp-responsive"))}}function X(b,a){var e="all "+c.scrollingSpeed+"ms "+c.easingcss3;return a?(b.removeClass("fp-notransition"),b.css({"-webkit-transition":e,transition:e})):I(b)}function I(b){return b.addClass("fp-notransition")}
function oa(b,d){if(825>b||900>d){var c=Math.min(100*b/825,100*d/900).toFixed(2);a("body").css("font-size",c+"%")}else a("body").css("font-size","100%")}function C(b,d){c.menu&&(a(c.menu).find(".active").removeClass("active"),a(c.menu).find('[data-menuanchor="'+b+'"]').addClass("active"));c.navigation&&(a("#fp-nav").find(".active").removeClass("active"),b?a("#fp-nav").find('a[href="#'+b+'"]').addClass("active"):a("#fp-nav").find("li").eq(d).find("a").addClass("active"))}function B(b){var c=a(".fp-section.active").index(".fp-section");
b=b.index(".fp-section");return c==b?"none":c>b?"up":"down"}function w(b){b.css("overflow","hidden");var a=b.closest(".fp-section"),e=b.find(".fp-scrollable");if(e.length)var f=e.get(0).scrollHeight;else f=b.get(0).scrollHeight,c.verticalCentered&&(f=b.find(".fp-tableCell").get(0).scrollHeight);a=h-parseInt(a.css("padding-bottom"))-parseInt(a.css("padding-top"));f>a?e.length?e.css("height",a+"px").parent().css("height",a+"px"):(c.verticalCentered?b.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):
b.wrapInner('<div class="fp-scrollable" />'),b.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:a+"px",size:"10px",alwaysVisible:!0})):ba(b);b.css("overflow","")}function ba(b){b.find(".fp-scrollable").children().first().unwrap().unwrap();b.find(".slimScrollBar").remove();b.find(".slimScrollRail").remove()}function ca(b){b.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+da(b)+'px;" />')}function da(b){var a=h;if(c.paddingTop||c.paddingBottom)a=b,a.hasClass("fp-section")||
(a=b.closest(".fp-section")),b=parseInt(a.css("padding-top"))+parseInt(a.css("padding-bottom")),a=h-b;return a}function T(b,a){X(g,a);g.css(Y(b))}function F(b,c){"undefined"===typeof c&&(c=0);var e=isNaN(b)?a('[data-anchor="'+b+'"]'):a(".fp-section").eq(b-1);b===q||e.hasClass("active")?ea(e,c):n(e,function(){ea(e,c)})}function ea(b,a){if("undefined"!=typeof a){var c=b.find(".fp-slides"),f=c.find('[data-anchor="'+a+'"]');f.length||(f=c.find(".fp-slide").eq(a));f.length&&u(c,f)}}function pa(b,a){b.append('<div class="fp-slidesNav"><ul></ul></div>');
var e=b.find(".fp-slidesNav");e.addClass(c.slidesNavPosition);for(var f=0;f<a;f++)e.find("ul").append('<li><a href="#"><span></span></a></li>');e.css("margin-left","-"+e.width()/2+"px");e.find("li").first().find("a").addClass("active")}function S(b,a,e){var f="";c.anchors.length&&(b?("undefined"!==typeof e&&(f=e),"undefined"===typeof a&&(a=b),E=a,location.hash=f+"/"+a):("undefined"!==typeof b&&(E=a),location.hash=e))}function qa(){var b=document.createElement("p"),a,c={webkitTransform:"-webkit-transform",
OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(b,null);for(var f in c)void 0!==b.style[f]&&(b.style[f]="translate3d(1px,1px,1px)",a=window.getComputedStyle(b).getPropertyValue(c[f]));document.body.removeChild(b);return void 0!==a&&0<a.length&&"none"!==a}function fa(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function P(a){var c=[];window.navigator.msPointerEnabled?
(c.y=a.pageY,c.x=a.pageX):(c.y=a.touches[0].pageY,c.x=a.touches[0].pageX);return c}function D(b){var d=c.scrollingSpeed;a.fn.fullpage.setScrollingSpeed(0);u(b.closest(".fp-slides"),b);a.fn.fullpage.setScrollingSpeed(d)}function k(a){c.scrollBar?g.scrollTop(a):c.css3?T("translate3d(0px, -"+a+"px, 0px)",!1):g.css("top",-a)}function Y(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function ra(){k(0);a("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();a(".fp-section").css({height:"",
"background-color":"",padding:""});a(".fp-slide").css({width:""});g.css({height:"",position:"","-ms-touch-action":"","touch-action":""});a(".fp-section, .fp-slide").each(function(){ba(a(this));a(this).removeClass("fp-table active")});I(g);I(g.find(".fp-easing"));g.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){a(this).replaceWith(this.childNodes)});a("html, body").scrollTop(0)}c=a.extend({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],
slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,easing:"easeInQuart",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:".section",
slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},c);c.continuousVertical&&(c.loopTop||c.loopBottom)&&(c.continuousVertical=!1,console&&console.warn&&console.warn("Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));c.continuousVertical&&c.scrollBar&&(c.continuousVertical=!1,console&&console.warn&&console.warn("Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
a.fn.fullpage.setAutoScrolling=function(b){c.autoScrolling=b;b=a(".fp-section.active");c.autoScrolling&&!c.scrollBar?(a("html, body").css({overflow:"hidden",height:"100%"}),g.css({"-ms-touch-action":"none","touch-action":"none"}),b.length&&k(b.position().top)):(a("html, body").css({overflow:"visible",height:"initial"}),g.css({"-ms-touch-action":"","touch-action":""}),k(0),a("html, body").scrollTop(b.position().top))};a.fn.fullpage.setScrollingSpeed=function(a){c.scrollingSpeed=a};a.fn.fullpage.setMouseWheelScrolling=
function(a){a?document.addEventListener?(document.addEventListener("mousewheel",p,!1),document.addEventListener("wheel",p,!1)):document.attachEvent("onmousewheel",p):document.addEventListener?(document.removeEventListener("mousewheel",p,!1),document.removeEventListener("wheel",p,!1)):document.detachEvent("onmousewheel",p)};a.fn.fullpage.setAllowScrolling=function(b){if(b){if(a.fn.fullpage.setMouseWheelScrolling(!0),G||ga)MSPointer=fa(),a(document).off("touchstart "+MSPointer.down).on("touchstart "+
MSPointer.down,ka),a(document).off("touchmove "+MSPointer.move).on("touchmove "+MSPointer.move,ja)}else if(a.fn.fullpage.setMouseWheelScrolling(!1),G||ga)MSPointer=fa(),a(document).off("touchstart "+MSPointer.down),a(document).off("touchmove "+MSPointer.move)};a.fn.fullpage.setKeyboardScrolling=function(a){c.keyboardScrolling=a};a.fn.fullpage.moveSectionUp=function(){var b=a(".fp-section.active").prev(".fp-section");b.length||!c.loopTop&&!c.continuousVertical||(b=a(".fp-section").last());b.length&&
n(b,null,!0)};a.fn.fullpage.moveSectionDown=function(){var b=a(".fp-section.active").next(".fp-section");b.length||!c.loopBottom&&!c.continuousVertical||(b=a(".fp-section").first());b.length&&n(b,null,!1)};a.fn.fullpage.moveTo=function(b,c){var e="",e=isNaN(b)?a('[data-anchor="'+b+'"]'):a(".fp-section").eq(b-1);"undefined"!==typeof c?F(b,c):0<e.length&&n(e)};a.fn.fullpage.moveSlideRight=function(){Q("next")};a.fn.fullpage.moveSlideLeft=function(){Q("prev")};a.fn.fullpage.reBuild=function(b){v=!0;
var d=a(window).width();h=a(window).height();c.resize&&oa(h,d);a(".fp-section").each(function(){parseInt(a(this).css("padding-bottom"));parseInt(a(this).css("padding-top"));c.verticalCentered&&a(this).find(".fp-tableCell").css("height",da(a(this))+"px");a(this).css("height",h+"px");if(c.scrollOverflow){var b=a(this).find(".fp-slide");b.length?b.each(function(){w(a(this))}):w(a(this))}b=a(this).find(".fp-slides");b.length&&u(b,b.find(".fp-slide.active"))});a(".fp-section.active").position();d=a(".fp-section.active");
d.index(".fp-section")&&n(d);v=!1;a.isFunction(c.afterResize)&&b&&c.afterResize.call(this);a.isFunction(c.afterReBuild)&&!b&&c.afterReBuild.call(this)};var t=!1,G=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),ga="ontouchstart"in window||0<navigator.msMaxTouchPoints,g=a(this),h=a(window).height(),m=!1,v=!1,q,E,l,V="fullpage-wrapper";a.fn.fullpage.setAllowScrolling(!0);c.css3&&(c.css3=qa());a(this).length?(g.css({height:"100%",position:"relative"}),
g.addClass(V)):console.error("Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");a(c.sectionSelector).each(function(){a(this).addClass("fp-section")});a(c.slideSelector).each(function(){a(this).addClass("fp-slide")});c.navigation&&ha();a(".fp-section").each(function(b){var d=a(this),e=a(this).find(".fp-slide"),f=e.length;b||0!==a(".fp-section.active").length||a(this).addClass("active");a(this).css("height",h+"px");(c.paddingTop||c.paddingBottom)&&
a(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.sectionsColor[b]&&a(this).css("background-color",c.sectionsColor[b]);"undefined"!==typeof c.anchors[b]&&a(this).attr("data-anchor",c.anchors[b]);if(1<f){b=100*f;var g=100/f;e.wrapAll('<div class="fp-slidesContainer" />');e.parent().wrap('<div class="fp-slides" />');a(this).find(".fp-slidesContainer").css("width",b+"%");a(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');
"#fff"!=c.controlArrowColor&&(a(this).find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+c.controlArrowColor),a(this).find(".fp-controlArrow.fp-prev").css("border-color","transparent "+c.controlArrowColor+" transparent transparent"));c.loopHorizontal||a(this).find(".fp-controlArrow.fp-prev").hide();c.slidesNavigation&&pa(a(this),f);e.each(function(b){a(this).css("width",g+"%");c.verticalCentered&&ca(a(this))});d=d.find(".fp-slide.active");0==d.length?e.eq(0).addClass("active"):
D(d)}else c.verticalCentered&&ca(a(this))}).promise().done(function(){a.fn.fullpage.setAutoScrolling(c.autoScrolling);var b=a(".fp-section.active").find(".fp-slide.active");b.length&&(0!=a(".fp-section.active").index(".fp-section")||0==a(".fp-section.active").index(".fp-section")&&0!=b.index())&&D(b);c.fixedElements&&c.css3&&a(c.fixedElements).appendTo("body");c.navigation&&(l.css("margin-top","-"+l.height()/2+"px"),l.find("li").eq(a(".fp-section.active").index(".fp-section")).find("a").addClass("active"));
c.menu&&c.css3&&a(c.menu).closest(".fullpage-wrapper").length&&a(c.menu).appendTo("body");c.scrollOverflow?("complete"===document.readyState&&J(),a(window).on("load",J)):a.isFunction(c.afterRender)&&c.afterRender.call(this);$();b=window.location.hash.replace("#","").split("/")[0];if(b.length){var d=a('[data-anchor="'+b+'"]');!c.animateAnchor&&d.length&&(c.autoScrolling?k(d.position().top):(k(0),a("html, body").scrollTop(d.position().top)),C(b,null),a.isFunction(c.afterLoad)&&c.afterLoad.call(this,
b,d.index(".fp-section")+1),d.addClass("active").siblings().removeClass("active"))}a(window).on("load",function(){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&F(b,a)})});var L,M,A=!1;a(window).on("scroll",K);var s=0,z=0,r=0,y=0;a(window).on("hashchange",W);a(document).keydown(function(b){if(c.keyboardScrolling&&!m&&c.autoScrolling)switch(b.which){case 38:case 33:a.fn.fullpage.moveSectionUp();break;case 40:case 34:a.fn.fullpage.moveSectionDown();break;case 36:a.fn.fullpage.moveTo(1);
break;case 35:a.fn.fullpage.moveTo(a(".fp-section").length);break;case 37:a.fn.fullpage.moveSlideLeft();break;case 39:a.fn.fullpage.moveSlideRight()}});a(document).on("click touchstart","#fp-nav a",function(b){b.preventDefault();b=a(this).parent().index();n(a(".fp-section").eq(b))});a(document).on("click touchstart",".fp-slidesNav a",function(b){b.preventDefault();b=a(this).closest(".fp-section").find(".fp-slides");var c=b.find(".fp-slide").eq(a(this).closest("li").index());u(b,c)});c.normalScrollElements&&
(a(document).on("mouseenter",c.normalScrollElements,function(){a.fn.fullpage.setMouseWheelScrolling(!1)}),a(document).on("mouseleave",c.normalScrollElements,function(){a.fn.fullpage.setMouseWheelScrolling(!0)}));a(".fp-section").on("click touchstart",".fp-controlArrow",function(){a(this).hasClass("fp-prev")?a.fn.fullpage.moveSlideLeft():a.fn.fullpage.moveSlideRight()});a(window).resize(Z);var H=h,aa;a.fn.fullpage.destroy=function(b){a.fn.fullpage.setAutoScrolling(!1);a.fn.fullpage.setAllowScrolling(!1);
a.fn.fullpage.setKeyboardScrolling(!1);a(window).off("scroll",K).off("hashchange",W).off("resize",Z);a(document).off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",c.normalScrollElements).off("mouseout",c.normalScrollElements);a(".fp-section").off("click",".fp-controlArrow");b&&ra()}}})(jQuery);


