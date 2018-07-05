var APP = APP || {};

(function()
{
	"use strict";

	APP.Abstract = Class.extend(
	{
		defaults: {},

		init : function(options)
		{
			if(_.isUndefined(options))
                options = {};

            this.s = _.defaults(options,this.defaults);

			this.$ = {};
			this.events = {};
			this.loader = null;
			this.svg = null;
		},

		remove : function()
		{
			this.off();
			this.removeLoader();
			this.removeSvg();
		},

		/* ------------------------------------------------- */
		/* ---  loader */
		/* ------------------------------------------------- */
		addLoader : function($container,classCss)
		{
			this.removeLoader();
			this.loader = new APP.Loader({classCss : classCss},$container);
		},

		removeLoader : function()
		{
			if (this.loader !==null)
			{
				this.loader.remove();
				this.loader = null;
			}
		},

		/* ------------------------------------------------- */
		/* ---  initSvg */
		/* ------------------------------------------------- */
		initSvg : function($container,type)
		{
			var svgExist = $container.find("svg").length > 0;

			if(svgExist)
				this.svg = new APP.SvgManager({}, $container, type);
		},

		removeSvg : function()
		{
			if (this.svg !==null)
			{
				this.svg.remove();
				this.svg = null;
			}
		},

		/* ------------------------------------------------- */
		/* ---  stopTouchMove */
		/* ------------------------------------------------- */
		stopTouchMove : function($container)
		{
			if (CONF.s.isTouch)
			{
				$container.on("touchmove",function(event)
				{
					event.preventDefault();
					event.stopPropagation();
				});
			}
		},


		/* ------------------------------------------------- */
		/* ---  listenr */
		/* ------------------------------------------------- */
		on : function(name,f)
		{
			this.events[name] = new signals.Signal();
			this.events[name].add(f);
		},

		off : function(name,f)
		{
			if(f !== undefined)
			{
				this.events[name].remove(f);
				delete this.events[name];
			}
			else if( name !== undefined)
			{
				this.events[name].removeAll();
				delete this.events[name];
			}
			else
			{
				for(var n in this.events)
				{
					this.off(n);
				}
			}
		},

		trigger : function(name,obj)
		{
			if( this.events[name] === undefined )
				return;

			this.events[name].dispatch(obj);
		}
	});

})();

var APP = APP || {};

(function()
{
	"use strict";

	APP.Conf = Class.extend(
	{
		defaults : {
			section					: null,
			template				: null,
			env						: "production",
			baseUrl					: null,
			lng						: "fr",
			wording 				: null,
			modeExplorer 			: null, //Module Explorer -> preview : thumb, list, map
			isTouch					: Modernizr.touch,
			clickEvent				: (Modernizr.touch) ? 'touchstart' : 'click',
			downEvent				: (Modernizr.touch) ? 'touchstart' : 'mousedown',
			upEvent					: (Modernizr.touch) ? 'touchend' : 'mouseup',
			moveEvent				: (Modernizr.touch) ? 'touchmove' : 'mousemove',
			historyHtml5			: Modernizr.history,
			transitionEndOptions	: {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'transition': 'transitionend'
			},
			transition				: Modernizr.prefixed('transition'),
			transitionEnd			: {},
			transform				: Modernizr.prefixed('transform'),
			hasTransitions			: Modernizr.csstransitions,
			hasTransforms			: Modernizr.csstransforms,
			hasTransforms3d			: Modernizr.csstransforms3d,
			isIE					: window.navigator.userAgent.indexOf("MSIE"),
			isSafari            	: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
			isMobileTablet          : navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ? true : false,
			retina 					: (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)),
			WIDTH 					: 930,
			WIDTH_MIN				: 760,
			TEMPLATE_PAGE			: "page",
			TEMPLATE_TOOLS			: "tools",
			TEMPLATE_EXPLORER		: "explorer",
			TEMPLATE_JOURNEY		: "journey",
			TEMPLATE_POPIN			: "popin"
		},

		init : function(options)
		{
			this.s = _.defaults(options,this.defaults);
			this.s.transitionEnd = this.s.transitionEndOptions[this.s.transition];

			this.$ = {
				html		: $("html"),
				body		: $("body"),
				wrap		: $("#wrap"),
				main		: $("#main"),
				module		: $("#module"),
				tools		: $("#tools"),
				toolsBar	: $("#bar-tools"),
				footer		: $("footer"),
				header		: $("#wrap > header"),
				languages   : $("#languages"),
				popin       : $('#popin'),
				infoCookies : $("#infobar"),
				helpAccess 	: $("#help-accessibility"),
				win			: $(window),
				doc			: $(document)
			};

			videojs.options.flash.swf = this.s.baseUrl+"fileadmin/templates/swf/video-js.swf";
			this.initLog();
			this.initArray();
		},

		initArray : function()
		{
			Array.prototype.remove = function(from, to)
			{
				var rest = this.slice((to || from) + 1 || this.length);
				this.length = from < 0 ? this.length + from : from;
				return this.push.apply(this, rest);
			};
		},

		initLog : function()
		{
			var that = this;
			window.log = function(value)
			{
				 if(typeof console == "object" && that.s.env !=="production")
					 console.log(value);
			};
		}
	});
}());


var APP = APP || {};

(function()
{
	"use strict";

	APP.Header = APP.Abstract.extend(
	{
		defaults : {
			HEADER_HEIGHT_FOLDED	: 67,
			HEADER_HEIGHT 			: 180,
			SCROLL_MIN 				: 10,
			smenuIdOpen				: null,
			scrollTop 				: null,
			mvt 					: false
		},

		init : function(options)
		{
			var that = this;

			this._super(options);

			this.EVENT = {
				OPEN_TEMPLATE		: "openTemplate"
			};

			this.$.prehome 			= $("#prehome");

			this.$.container		= CONF.$.header;
			this.$.nav				= this.$.container.find("nav");
			this.$.smenus			= this.$.container.find("div.smenus");
			this.$.access			= this.$.container.find(".access");
			this.$.lng 				= this.$.container.find(".lng");
			this.$.lngMenu 			= this.$.container.find(".lng-menu");
			this.$.popinLanguages   = CONF.$.languages;

			this.nav 				= null;
			this.prehome 			= null;

			if (this.$.prehome.length)
				this.initPrehome();

			this.initNav();
			this.initClickTransition();
			this.initLogo();
			this.initLanguages();
			this.initLanguagesOpen();

			if(!CONF.s.isMobileTablet)
				this.initSvg(this.$.container);
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			if (this.prehome !==null) this.prehome.resize();
		},

		/* ------------------------------------------------- */
		/* ---  public removePrehome */
		/* ------------------------------------------------- */
		removePrehome : function()
		{
			if (this.prehome !== null)
			{
				this.prehome.remove();
				this.prehome = null;
				this.$.container.off(CONF.s.clickEvent);
			}
		},

		/* ------------------------------------------------- */
		/* ---  public hidePrehome */
		/* ------------------------------------------------- */
		hidePrehome : function()
		{
			if (this.prehome !== null)
			{
				this.prehome.hide();
			}
		},

		/* ------------------------------------------------- */
		/* ---  public updateHrefLng */
		/* ------------------------------------------------- */
		updateHrefLng : function(datas)
		{
			this.$.lngMenu.find(".switch-lng").each(function()
			{
				var $el = $(this);
				_.each(datas, function(value,key)
				{
					if (key==$el.data("lng"))
					{
						$el.attr("href",value);
					}
				});
			});
		},

		/* ------------------------------------------------- */
		/* ---  public update */
		/* ------------------------------------------------- */
		update : function()
		{
			if(this.$.lng.hasClass("expanded"))
				this.closeLanguage();
		},

		/* ------------------------------------------------- */
		/* ---  public scroll */
		/* ------------------------------------------------- */
		scroll : function(st)
		{
			if (this.prehome !==null)
			{
				this.prehome.scroll(st);

				if (this.s.mvt) return;
			}

			var h = (this.prehome !==null && !this.$.prehome.hasClass("hidden")) ? this.$.prehome.height() : 0;

			if (this.s.scrollTop !== null && Math.abs(this.s.scrollTop - st)>this.s.SCROLL_MIN)
				this.closeMenu();

			if(st - h>= this.s.HEADER_HEIGHT && !this.$.container.hasClass("fixed"))
			{
				if(this.$.lng.hasClass("expanded"))
					this.closeLanguage();

				this.showNavFixed();
			}
			else if (st - h< this.s.HEADER_HEIGHT  && this.$.container.hasClass("fixed") && !this.$.container.hasClass("closed"))
				this.hideNavFixed();
		},

		/* ------------------------------------------------- */
		/* ---  public hideSmenu */
		/* ------------------------------------------------- */
		hideSmenu : function()
		{
			$("#"+this.s.smenuIdOpen).off("keydown");
			$("#"+this.s.smenuIdOpen).addClass("hidden");
			this.$.nav.find("li a[data-smenu="+this.s.smenuIdOpen+"]").focus();

			this.s.smenuIdOpen = null;
			this.s.scrollTop = null;
			this.$.smenus.addClass("hidden");
			this.$.nav.find("li").removeClass('active');
		},

		/* ------------------------------------------------- */
		/* ---  init nav */
		/* ------------------------------------------------- */
		initNav : function()
		{
			var that = this;

			this.$.nav.on("click touchstart","a", function(event)
			{
				event.preventDefault();
			});

			this.$.nav.on("click touchstart","li", function(event)
			{
				event.preventDefault();
				event.stopPropagation();

				var $el		    = $(this),
					$a		    = $el.find("a"),
					smenuId     = $a.data("smenu"),
					$smenu	    = $("#"+smenuId),
					speed	    = 0.3;

				that.$.nav.find("li.active a").attr('aria-expanded',false);
				$el.siblings("li.active").removeClass("active");
				$el.toggleClass("active");

				if($smenu.hasClass("hidden"))
				{
					if (CONF.$.body.find(".mask-transition").length) return;

					that.s.scrollTop = CONF.$.doc.scrollTop();

					if (that.prehome !==null && that.s.scrollTop < that.$.prehome.height())
					{
						that.s.mvt = true;

						if(CONF.s.isMobileTablet)
						{
							that.$.container.trigger(CONF.s.clickEvent);
							that.openMenu(smenuId);
						}
						else
						{
							that.prehome.hide(function()
							{
								that.openMenu(smenuId);
							});
						}
					}
					else
					{
						that.openMenu(smenuId);
					}

					$a.attr('aria-expanded',true);
				}
				else
				{
					that.closeMenu();
					$a.attr('aria-expanded',false);
				}
			});

			var networks = this.$.container.find("li.ir").find("a.svg-anim");
			networks.each(function() {
				$(this).removeAttr("title");
			});
		},

		/* ------------------------------------------------- */
		/* ---  private openMenu */
		/* ------------------------------------------------- */
		openMenu : function(smenuId)
		{
			var that = this,
				speed 	= 0.3,
				$smenu	= $("#"+smenuId);

			if (this.s.smenuIdOpen !== null )
				$("#"+this.s.smenuIdOpen).addClass("hidden");

			if (this.$.smenus.hasClass("hidden"))
				this.$.smenus.removeClass("hidden").css({height:0});
			else
				speed = speed/2;

			$smenu.removeClass("hidden");

			TweenLite.to(this.$.smenus, speed, {height:$smenu.outerHeight()+"px", ease:Sine.easeInOut});
			TweenLite.fromTo($smenu, 0.15,
							{opacity:0},
							{opacity:1, ease:Sine.easeInOut,
								onComplete:function()
								{
									that.s.mvt = false;
								}
							});

			this.s.smenuIdOpen = smenuId;
			$smenu.find('li:eq(0) a').focus();


			var $last = $smenu.find('a').last();

			$smenu.on('keydown',function(event)
			{
				if($(event.target)[0].innerHTML==$last[0].innerHTML && event.keyCode===9)
				{
					
					that.hideSmenu();
				}
			});

		},

		/* ------------------------------------------------- */
		/* ---  private closeMenu */
		/* ------------------------------------------------- */
		closeMenu : function()
		{
			var that = this,
			 	speed = 0.25;

			this.s.scrollTop = null;
			TweenLite.to(that.$.smenus, speed, {height:0, ease:Sine.easeOut,
				onComplete:function()
				{
					that.hideSmenu();
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private show Nav position Fixed */
		/* ------------------------------------------------- */
		showNavFixed : function()
		{
			this.$.container.addClass("fixed");
			CONF.$.main.addClass("top");

			TweenLite.to(this.$.container, 0.4, {top:0, ease:Sine.easeInOut});
		},

		/* ------------------------------------------------- */
		/* ---  private hide Nav position Fixed */
		/* ------------------------------------------------- */
		hideNavFixed : function()
		{
			var that = this;
			this.$.container.addClass("closed");

			if (CONF.$.body.find(".mask-transition").length)
			{
				CONF.$.main.removeClass("top");
				that.$.container.removeAttr("style").removeClass("fixed").removeClass("closed");
			}
			else
			{
				TweenLite.to(this.$.container, 0.1, {top:-this.s.HEADER_HEIGHT_FOLDED +"px", ease:Sine.easeInOut,
					onComplete:function()
					{
						CONF.$.main.removeClass("top");
						that.$.container.removeAttr("style").removeClass("fixed").removeClass("closed");
					}
				});
			}
		},

		/* ------------------------------------------------- */
		/* ---  private initClick */
		/* ------------------------------------------------- */
		initClickTransition : function()
		{
			var that = this;

			this.$.container.find("a").each(function()
			{
				var $el = $(this);

				if ($el.attr("href")!=="#" && $el.attr("target")!=="_blank" && !$el.data("notransition") && $el.attr('data-smenu') === undefined )// SMILE - ADD ONE OTHER CONDITIONS
				{
					if (CONF.s.historyHtml5 || (!CONF.s.historyHtml5 && $el.data("template") && $el.data("template") != CONF.s.TEMPLATE_PAGE))				{
						$el.on("click",function(event)
						{
							
							/* event.preventDefault();
							event.stopPropagation();
							that.trigger(that.EVENT.OPEN_TEMPLATE,{href:$el.attr("href"),template:$el.data("template")}); */
							
							location.href=$el.attr("href");
						});
					}
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initLogo */
		/* ------------------------------------------------- */
		initLogo : function()
		{
			var that = this;
			this.$.container.find("a.logo").on("focusin", function(event)
			{
				event.preventDefault();

				if (that.prehome !==null)
					that.prehome.hide();
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initLanguages */
		/* ------------------------------------------------- */
		initLanguages : function()
		{
			var that = this;

			this.$.lng.on("click", function(event)
			{
				event.preventDefault();

				if(that.$.lng.hasClass("expanded"))
				{
					that.closeAnimateLanguages();

				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private closeAnimateLanguages */
		/* ------------------------------------------------- */
		closeAnimateLanguages : function()
		{
			var that = this,
				$liToHide = this.$.container.find(".facebook, .twitter");

			TweenLite.to(this.$.lngMenu, 0.25,{
				width: 0,
				ease: Quad.easeOut,
				delay: 0.2,
				onComplete : function()
				{
					TweenLite.to($liToHide, 0.3,{
						opacity: 1,
						ease: Quad.easeOut,
						onComplete: function()
						{
							TweenLite.to([that.$.access, that.$.lng], 0.2,{ left: 0,ease: Quad.easeOut });
							that.$.lng.removeClass("expanded");
							that.$.lng.find('button').attr("aria-expanded",false);
							var title = "";
							switch(document.documentElement.lang) {
								case "fr" : title += "Changer de langue";break;
								case "gb" : title += "Change Language";break;
								case "es" : title += "Cambiar idioma";break;
							}
							that.$.lng.find('a').attr("title",title);
						}
					});
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private closeLanguage */
		/* ------------------------------------------------- */
		closeLanguage : function()
		{
			var $liToHide = this.$.container.find(".facebook, .twitter"),
				$access = this.$.container.find(".access");

			this.$.lngMenu.css({width:0});
			$liToHide.css({opacity:1});
			this.$.access.css({left:0});
			this.$.lng.css({left:0}).removeClass("expanded");
		},

		/* ------------------------------------------------- */
		/* ---  private initLanguagesOpen */
		/* ------------------------------------------------- */
		initLanguagesOpen : function()
		{
			var that = this;

			this.$.lngMenu.on("click","li.more-lng", function(event)
			{
				event.preventDefault();
				event.stopPropagation();

				that.$.popinLanguages.removeClass("hidden");
				that.$.popinLanguages.attr("tabindex",-1);
				that.$.popinLanguages.find('button.close').focus();
				CONF.$.body.addClass("noscrolling");

				TweenLite.to(that.$.popinLanguages, 0.25,
				{
					opacity:1,
					ease: Quad.easeOut
				});
			});


			this.$.popinLanguages.on("click", "button.close", function(event)
			{
				event.preventDefault();
				that.$.lngMenu.find('li.more-lng button').focus();
				that.$.popinLanguages.addClass("hidden");
				CONF.$.body.removeClass("noscrolling");
			});

			this.$.popinLanguages.on("click", "li >button", function(event)
			{
				event.preventDefault();
				var $el = $(this),
					h = $el.height(),
					$parent = $el.closest("li"),
					$items = $el.closest("li").find("ul"),
					nb = $items.find("li").length;

				if (!$el.data("opened"))
				{
					$parent.css({height:h +($items.outerHeight())+"px"});
					$el.data("opened",true);
					$items.removeClass('invisible');
					$el.attr('aria-expanded',true);
				}
				else
				{
					$parent.css({height:h+"px"});
					$el.data("opened",false);
					$items.addClass('invisible');
					$el.attr('aria-expanded',false);
				}
			});

			var $lastButton = that.$.popinLanguages.find('button').last(),
			 	$lastA= that.$.popinLanguages.find('a').last();

			this.$.popinLanguages.on('keydown',function(event)
			{
				if (event.keyCode === 9)
				{
					if($(event.target)[0].innerHTML==$lastButton[0].innerHTML)
					{
						if ($lastButton.find('+ ul').hasClass('invisible'))
							that.$.popinLanguages.focus();
					}
					else if($(event.target)[0].innerHTML==$lastA[0].innerHTML)
					{
						that.$.popinLanguages.focus();
					}
				}
				else if (event.keyCode === 27)
				{
					that.$.popinLanguages.find('button.close').trigger('click');
					that.$.lngMenu.find('li.more-lng button').focus();
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private prehome  */
		/* ------------------------------------------------- */
		initPrehome : function()
		{
			var that = this;

			this.prehome = new APP.Prehome({},this.$.prehome);


			this.$.container.on(CONF.s.clickEvent,function()
			{
				if (that.prehome !== null)
				{
					if(CONF.s.isMobileTablet)
					{
						that.removePrehome();
						CONF.$.doc.scrollTop(0);
					}
					else
					{
						that.prehome.hide();
					}
				}
			});
		},
	});
 }());
var APP = APP || {};

(function()
{
	"use strict";

	APP.Footer = APP.Abstract.extend(
	{
		defaults : {
		},

		init : function(options)
		{
			var that = this;

			this._super(options);

			this.EVENT = {
				OPEN_TEMPLATE	: "openTemplate"
			};

			this.$.container = CONF.$.footer;

			if(!CONF.s.isMobileTablet)
				this.initSvg(this.$.container);

			this.stopTouchMove(this.$.container);
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{

		},

		/* ------------------------------------------------- */
		/* ---  public scroll */
		/* ------------------------------------------------- */
		scroll : function(st)
		{

		}
	});
 }());
var APP = APP || {};

(function()
{
	"use strict";

	APP.BarTools = APP.Abstract.extend(
	{
		defaults : {
			HEADER_HEIGHT		: 180,
			HEADER_MARGINBOTTOM : 80,
			mvt					: false
		},

		init : function(options)
		{
			var that = this;
			this.EVENT = {
				SHOW_PAGE 	: "showPage",
				CLOSE_PAGE 	: "closePage"
			};

			this._super(options);

			this.$.container = CONF.$.toolsBar;
			this.initNav();
			this.initClose();
			this.initHover();

			this.stopTouchMove(this.$.container);
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			var st = CONF.$.doc.scrollTop();

			if (!CONF.$.tools.hasClass("closed"))
				return;
			else
				this.scroll(st);
		},

		/* ------------------------------------------------- */
		/* ---  public scroll */
		/* ------------------------------------------------- */
		scroll : function(st)
		{
			var that = this;

			if (this.$.container.height() > this.$.container.find("ul").height()) return;

			CONF.$.tools.css({top:-80});
			var t = that.getPositionTop(st),
				speed = 0.25;

			TweenLite.to(that.$.container, speed, {top:t+"px",ease:Sine.easeOut,overwrite:true});
		},

		/* ------------------------------------------------- */
		/* ---  public update */
		/* ------------------------------------------------- */
		update : function(href)
		{
			this.$.container.find("a.close").attr("href",href);
		},

		/* ------------------------------------------------- */
		/* ---  public updateNav */
		/* ------------------------------------------------- */
		updateNav : function(page)
		{
			this.$.container.find("li").each(function() {
				$(this).find("a").removeAttr("title");
			});

			this.$.container.find("li").removeClass("active");
			this.$.container.find("li."+page).addClass("active");

			if (!this.$.container.hasClass("opened"))
				this.$.container.addClass("opened").removeAttr("style");

			var title = this.$.container.find("li.active").find("a").text();
			switch(document.documentElement.lang) {
				case "fr" : title += " - Panneau Actuel";break;
				case "gb" : title += " - Current Panel";break;
				case "es" : title += " - Panel Corriente";break;
			}
			this.$.container.find("li.active").find("a").attr('title',title);
		},

		/* ------------------------------------------------- */
		/* ---  public open */
		/* ------------------------------------------------- */
		open : function(obj)
		{
			var that = this;

			TweenLite.to(this.$.container, 0.25, {
				height		: "100%",
				top			: 0,
				ease		: Quad.easeIn,
				onComplete	: function()
				{
					that.trigger(that.EVENT.SHOW_PAGE,{href: obj.href});
					that.$.container.addClass("opened");
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  public close */
		/* ------------------------------------------------- */
		close : function(st)
		{
			var that = this,
				t = this.getPositionTop(st);

			this.$.container.find("li.active").find("a").removeAttr("title");

			this.$.container.find("li").removeClass("active");

			TweenLite.to(this.$.container, 0.3, {
				height		: this.$.container.find("ul").height()+"px",
				top			: t+"px",
				ease		: Quad.easeOut,
				onComplete	: function()
				{

					that.$.container.removeClass("opened");
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initNav */
		/* ------------------------------------------------- */
		initNav : function()
		{
			var that = this;

			this.$.container.find("li").each(function(event)
			{
				var $el = $(this);

				$el.on("click","a",function(event)
				{
					event.preventDefault();
					var $el = $(this);
/* that.open({href: $el.attr("href")}); */

location.href=$el.attr("href");
					/* if (!$el.parent().hasClass("active"))
					{
						that.$.container.find("li").removeClass("active");
						$el.parent().addClass("active");
						that.open({href: $el.attr("href")});
						window.alert("sometext");
					}
					else
					{
						that.$.container.find("a.close").trigger("click");
					} */
				});
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initClose */
		/* ------------------------------------------------- */
		initClose : function()
		{
			var that = this;

			this.$.container.on("click","a.close",function(event)
			{
				event.preventDefault();

				that.trigger(that.EVENT.CLOSE_PAGE,{href:$(this).attr("href")});
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initHover */
		/* ------------------------------------------------- */
		initHover : function()
		{
			var that = this,
				w = 60;

			this.$.container.find("li").on({
				mouseenter: function()
				{
					var $bar = $(this).find("span.bar");

					TweenLite.to($bar, 0.15, {left: 0,ease: Quad.easeOut});
				},
				mouseleave: function()
				{
					var $bar = $(this).find("span.bar");

					//if ($bar.position().left===0)
					{
						TweenLite.to($bar, 0.15,
						{
							left: w+"px",
							ease: Quad.easeOut,
							onComplete : function()
							{
								$bar.css({left: -w+"px"});
							}
						});
					//}
					//else
					//{
					//	TweenLite.to($bar, 0.15,
					//	{
					//		left: -w+"px",
					//		ease: Quad.easeOut
					//	});
					}
				}
			});
		},

		/* -------------------------------------------------
			private getPositionTop - return Number
		------------------------------------------------- */
		getPositionTop : function(st)
		{
			var $prehome = $("#prehome"),
				h = ($prehome.length && !$prehome.hasClass("hidden")) ? st + $prehome.height() - CONF.$.wrap.offset().top : st,
				t;

			if(h >= this.s.HEADER_HEIGHT && st>0)
			{
				t = CONF.$.win.height()/2 - this.$.container.find("ul").height()/2;
			}
			else
			{
				t = CONF.$.main.offset().top - st + this.s.HEADER_MARGINBOTTOM;
			}

			return t;
		}

	});
 }());
var APP = APP || {};

(function()
{
	"use strict";

	APP.InfoCookies = APP.Abstract.extend(
	{
		defaults : {

		},

		init : function(options)
		{
			var that = this;
			
			this._super(options);

			this.$.container = CONF.$.infoCookies;
		},

		/* ------------------------------------------------- */
		/* ---  public show */
		/* ------------------------------------------------- */
		show : function()
		{
			var that = this;

			TweenLite.to(this.$.container, 0.4, {
				top: 0,
				ease: Quad.easeOut,
				onComplete: function()
				{
					that.initClose();
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  public hide */
		/* ------------------------------------------------- */
		hide : function(event)
		{
			if(event)
				event.preventDefault();

			TweenLite.to(this.$.container, 0.4, { top: '-100%', ease: Quad.easeIn});
		},

		/* ------------------------------------------------- */
		/* ---  public initClose */
		/* ------------------------------------------------- */
		initClose : function()
		{
			this.$.container.off("click").on("click", ".close", $.proxy(this.hide, this));
		}
	});
 }());
var APP = APP || {};

(function()
{
	"use strict";

	APP.PageAbstract = APP.Abstract.extend(
	{
		defaults : {
			template		: null,
			section			: null,
			href			: null,
			documentTitle 	: null
		},

		init : function(options)
		{
			this._super(options);

			this.EVENT = {
				LOAD_PAGE			: "loadPage",
				REMOVE_PAGE			: "removePage",
				OPEN_TEMPLATE		: "openTemplate",
				SHOW_INFOCOOKIES 	: "showInfoCookies",
				UPDATE_URL 			: "updateUrl"
			};

			this.s.TRANSITION_SPEED =  0.6;
			this.s.TRANSITION_EASING = Quart.easeIn;
			this.s.TRANSITION_EASING2 = Quart.easeOut;

			this.$.container = $("#"+this.s.section);
		},

		/* ------------------------------------------------- */
		/* ---  public start */
		/* ------------------------------------------------- */
		start : function()
		{

		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
		},

		/* ------------------------------------------------- */
		/* ---  public remove */
		/* ------------------------------------------------- */
		remove : function()
		{
			this.$.container.remove();
			this._super();
		},

		/* ------------------------------------------------- */
		/* ---  public scroll */
		/* ------------------------------------------------- */
		scroll : function()
		{
			var $mask	= CONF.$.body.find(".mask-transition");

			if ($mask.length)
				CONF.$.doc.scrollTop(0);
		},


		/* ------------------------------------------------- */
		/* ---  public show */
		/* ------------------------------------------------- */
		show : function()
		{
			var that	= this,
				$mask	= $("<div class='mask-transition' />"),
				h		= 181,
				t		= CONF.$.win.height()-h;


			CONF.$.body.find('.mask-transition').remove();

			$mask	= $("<div class='mask-transition zindex' />");
			CONF.$.wrap.append($mask);

			$mask.css({top:h+"px",height:t+"px"});

			TweenLite.to($mask,this.s.TRANSITION_SPEED, {y:-t+"px",force3D:true,ease:this.s.TRANSITION_EASING2,onComplete:
				function()
				{
					$mask.remove();
					that.start();
					that.resize();
				}
			});


			if (CONF.$.header.hasClass("invisible"))
			{
				CONF.$.header.removeClass("invisible").css({opacity:0});
				TweenLite.to(CONF.$.header, 0.25, {opacity:1,delay:0.3});
			}
		},

		/* ------------------------------------------------- */
		/* ---  public hide */
		/* ------------------------------------------------- */
		hide : function(callback)
		{
			var that 	= this,
				h		= 181,
				t		= CONF.$.win.height(),
				$mask	= $("<div class='mask-transition' />");


			CONF.$.wrap.append($mask);
			$mask.css({top:t+"px",height:t+"px"});

			TweenLite.to($mask,this.s.TRANSITION_SPEED, {y:-t+"px",force3D:true,ease:this.s.TRANSITION_EASING,
				onComplete:function()
				{
					CONF.$.header.addClass("invisible");

					TweenLite.set(window, {scrollTo:{y:0}});
					that.addLoader($mask);

					if (CONF.$.header.hasClass("fixed"))
					{
						TweenLite.killTweensOf(CONF.$.header);

						CONF.$.main.removeClass("top");
						CONF.$.header.removeAttr("style").removeClass("fixed").removeClass("closed");
						callback();
					}
					else
					{
						callback();
					}
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  protected initClickTransition */
		/* ------------------------------------------------- */
		initClickTransition : function()
		{
			var that = this;
			/*
			this.$.container.on('click','a',function(event)
			{
				var $el = $(this),
					href = $el.attr("href"),
					template = $el.data("template"),
					len;

				if (!href) return;
				len = href.length;

				if (href!=="#" && href.substr(0,7) !=='mailto:' && href.substr(len-3) !=='pdf' && $el.attr("target")!=="_blank" && !$el.data("notransition"))
				{
					if (CONF.s.historyHtml5 || (!CONF.s.historyHtml5 && template && template != CONF.s.TEMPLATE_PAGE))
					{
						event.preventDefault();
						event.stopPropagation();
						//ne pas utiliser la variable HREF, href changé dynamiquement
						that.trigger(that.EVENT.OPEN_TEMPLATE,{href:$el.attr("href"),template:template});
					}
				}
			});
*/

			this.$.container.find("a").each(function()
			{
				var $el = $(this),
					href = $el.attr("href"),
					template = $el.data("template"),
					len = (href) ? href.length : 0;

				if (!href) return;

				if (href!=="#" && href.substr(0,7) !=='mailto:' && href.substr(len-3) !=='pdf' && $el.attr("target")!=="_blank" && !$el.data("notransition") && !$el.hasClass('scrollAnchor'))
				{
					if (CONF.s.historyHtml5 || (!CONF.s.historyHtml5 && template && template != CONF.s.TEMPLATE_PAGE))
					{
						$el.on("click",function(event)
						{

							event.preventDefault();
							event.stopPropagation();
							//ne pas utiliser la variable HREF, href changé dynamiquement
							that.trigger(that.EVENT.OPEN_TEMPLATE,{href:$el.attr("href"),template:template,$el:$el});
						});
					}
				}

				if ($el.hasClass('scrollAnchor')) {
					$el.click(function(event){
						var url = $.attr(this, 'href');
						var hash = url.substring(url.indexOf("#")+1);

						$('html, body').animate({
							scrollTop: $('#' + hash).offset().top - $('#header').innerHeight()
						}, 500);
						event.preventDefault();
					});
				}
			});

		}
	});

 }());





var APP = APP || {};

(function()
{
	"use strict";

	APP.SvgManager = APP.Abstract.extend(
	{
		defaults : {
			type : "normal"
		},

		init : function(options, $container, type)
		{
			this._super(options);

			this.$.container = $container;

			this.transitionEnd  = [];
			this.timer        	= [];

			this.initSvg();
		},



		/* ------------------------------------------------- */
		/* ---  private initSvg */
		/* ------------------------------------------------- */
		initSvg : function()
		{
			var that = this,
				$svg = this.$.container.find(".svg-anim");

			for(var i = 0,l=$svg.length; i < l; i++)
			{
				this.transitionEnd[i] = false;
				this.timer[i] = null;
			}

			if (CONF.s.isSafari) // fix bug safari - not value negative stroke-dashoffset
				$svg.find(".svg-1").attr("class","svg-1 inverse");


			$svg.on("mouseenter", function()
			{
				var $svg1 = $(this).find(".svg-1"),
					$svg2 = $(this).find(".svg-2"),
					index = $(this).index();

				if ($(this).hasClass("off")) return;

				that.transitionEnd[index] = false;

				$svg1.attr("class","svg-1 anim");

				$(this).one(CONF.s.transitionEnd, function()
				{
					that.transitionEnd[index] = true;
				});
			});

			$svg.on("mouseleave", function()
			{
				var $svg1 = $(this).find(".svg-1"),
					$svg2 = $(this).find(".svg-2"),
					index = $(this).index();

				if ($(this).hasClass("off")) return;
				$(this).off(CONF.s.transitionEnd);

				if (that.transitionEnd[index])
				{
					if (CONF.s.isSafari) // fix bug safari - not value negative stroke-dashoffset
						$svg1.attr("class","svg-1 inverse hidden");
					else
						$svg1.attr("class", "svg-1 hidden");

					$svg2.attr("class", "svg-2");

					that.timer[index] = setTimeout(function()
					{
						$svg2.attr("class", "svg-2 anim");

						that.timer[index] = setTimeout(function()
						{
							that.timer[index] = null;
							that.transitionEnd[index] = false;
							//$svg1.attr("class", "svg-1");

							if (CONF.s.isSafari) // fix bug safari - not value negative stroke-dashoffset
								$svg1.attr("class","svg-1 inverse");
							else
								$svg1.attr("class", "svg-1");

							$svg2.attr("class", "svg-2 hidden");
						}, 300);

					}, 20);
				}
				else
				{
					if (CONF.s.isSafari) // fix bug safari - not value negative stroke-dashoffset
						$svg1.attr("class", "svg-1 inverse");
					else
						$svg1.attr("class", "svg-1");

					$svg2.attr("class", "svg-2 hidden");
				}

			});
		}
	});
 }());


var APP = APP || {};

(function()
{
	"use strict";

	APP.PageEdito = APP.PageAbstract.extend(
	{
		defaults : {

		},

		init : function(options)
		{
			var that = this;

			this._super(options);

			this.$.edito 	  			= this.$.container.find("section.edito");
			this.$.diaporamaEdito 		= this.$.container.find("section.caroussel-expo");
			this.$.moreLinks    		= this.$.container.find("section.more-links");
			this.$.about    			= this.$.container.find("section.about");
			this.$.partners     		= this.$.container.find("section.partners");
			this.$.news      			= this.$.container.find("section.news");
			this.$.soon      			= this.$.container.find("section.soon");
			this.$.pastEvents 			= this.$.container.find("section.past-events");
			this.$.affiche 				= this.$.container.find("section.affiche");
			this.$.contact 				= this.$.container.find("section.contact");
			this.$.playerNotice 		= this.$.container.find("section.player-notice");
			this.$.map 					= this.$.container.find("section.map");
			this.$.chercheur 			= this.$.container.find("section.chercheurs");
			this.$.chercheurPortrait 	= this.$.container.find("section.chercheurs-portrait");
			this.$.chercheurInfos 		= this.$.container.find("section.chercheurs-infos");
			this.$.sectionFilter   		= this.$.container.find(".section-filter"); //SMILE ADD
			
			this.header 			= null;

			this.aComponents 		= [];

			this.initHeader();
			this.initComponents();
			this.initGreenWall();
			this.initClickTransition();
			this.trigger(this.EVENT.SHOW_INFOCOOKIES);
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			if (this.header !== null)
				this.header.resize();

			for (var i = 0, len = this.aComponents.length; i < len; i++)
			{
				this.aComponents[i].resize();
			}
		},

		/* ------------------------------------------------- */
		/* ---  public remove */
		/* ------------------------------------------------- */
		remove : function()
		{
			for (var i = 0, len = this.aComponents.length; i < len; i++)
			{
				this.aComponents[i].remove();
			}

			if (this.header !==null)
				this.header.remove();

			this._super();
		},

		/* ------------------------------------------------- */
		/* ---  private init header */
		/* ------------------------------------------------- */
		initHeader : function()
		{
			var that = this;
			this.header = new APP.HeaderInner({},this.$.container);
		},


		/* ------------------------------------------------- */
		/* ---  private initComponents */
		/* ------------------------------------------------- */
		initComponents : function()
		{
			if (this.$.edito.length)
				this.initEdito();

			if (this.$.diaporamaEdito.length)
				this.initDiaporamaEdito();

			if (this.$.partners.length)
				this.initPartners();

			if (this.$.moreLinks.length)
				this.initMoreLinks();

			if (this.$.news.length)
				this.initNews();

			if (this.$.soon.length)
				this.initSoon();

			if (this.$.pastEvents.length)
				this.initPastEvents();

			if (this.$.affiche.length)
				this.initAffiche();

			if (this.$.contact.length)
				this.initFormContact();

			if (this.$.playerNotice.length)
				this.initPlayerNotice();

			if (this.$.about.length)
				this.initAbout();

			if (this.$.map.length)
				this.initMap();

			if (this.$.chercheur.length)
				this.initChercheur();

			if (this.$.chercheurPortrait.length)
				this.initChercheurPortrait();

			if (this.$.chercheurInfos.length)
				this.initChercheurInfos();

            //SMILE ADD
			if (this.$.sectionFilter.length)
			    this.initSectionFilter();
		},



		/* ------------------------------------------------- */
		/* ---  private initEdito */
		/* ------------------------------------------------- */
		initEdito : function()
		{
			var that = this;

			this.$.edito.each(function()
			{
				var moreEdito = new APP.MoreEdito({},$(this));
				that.aComponents.push(moreEdito);
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initDiaporamaEdito */
		/* ------------------------------------------------- */
		initDiaporamaEdito : function()
		{
			var diaporamaEdito = new APP.DiaporamaEdito({},this.$.diaporamaEdito);
			this.aComponents.push(diaporamaEdito);
		},

		/* ------------------------------------------------- */
		/* ---  PRIVATE initPastEvents */
		/* ------------------------------------------------- */
		initPastEvents : function()
		{
			var pastEvents = new APP.PastEvents({}, this.$.pastEvents);
			this.aComponents.push(pastEvents);
		},

		/* ------------------------------------------------- */
		/* ---  PRIVATE initAffiche */
		/* ------------------------------------------------- */
		initAffiche : function()
		{
			var affiche = new APP.Affiche({}, this.$.affiche);
			this.aComponents.push(affiche);
		},

		/* ------------------------------------------------- */
		/* ---  PRIVATE initFormContact */
		/* ------------------------------------------------- */
		initFormContact : function()
		{
			var form = new APP.FormContact({},this.$.contact);
			this.aComponents.push(form);
		},

		/* ------------------------------------------------- */
		/* ---  private initNews */
		/* ------------------------------------------------- */
		initNews : function()
		{
			var news = new APP.News({},this.$.news);
			this.aComponents.push(news);
		},

		/* ------------------------------------------------- */
		/* ---  private initSoon */
		/* ------------------------------------------------- */
		initSoon : function()
		{
			var soon = new APP.News({},this.$.soon);
			this.aComponents.push(soon);
		},

		/* ------------------------------------------------- */
		/* ---  private initMoreLinks */
		/* ------------------------------------------------- */
		initMoreLinks : function()
		{
			var moreLinks = new APP.MoreLinks({},this.$.moreLinks);
			this.aComponents.push(moreLinks);
		},

		/* ------------------------------------------------- */
		/* ---  private initPartners */
		/* ------------------------------------------------- */
		initPartners : function()
		{
			var partners = new APP.Partners({},this.$.partners);
			this.aComponents.push(partners);
		},

		/* ------------------------------------------------- */
		/* ---  private initPlayerNotice */
		/* ------------------------------------------------- */
		initPlayerNotice : function()
		{
			var that = this,
				playerNotice = new APP.PlayerNotice({href:this.s.href},this.$.playerNotice);

			playerNotice.on(playerNotice.EVENT.UPDATE_URL,function(obj)
			{
				that.trigger(that.EVENT.UPDATE_URL,obj);
			});
			this.aComponents.push(playerNotice);
		},

		/* ------------------------------------------------- */
		/* ---  private initAbout */
		/* ------------------------------------------------- */
		initAbout : function()
		{
			var that = this;

			this.$.about.on("click keypress", function (event) {
				if (event.type == "click" || (event.keyCode == 13)) {
					event.preventDefault();
					that.$.about.find("a").click();
				}
			});

			this.$.about.on("mouseenter mouseleave", "a", function(event)
			{
				event.preventDefault();
				event.stopPropagation();

				if (CONF.$.html.hasClass('lt-ie9')) return;

				if (event.type=="mouseenter")
					$(this).parent().find("> button.arrow").trigger("mouseenter");
				else
					$(this).parent().find("> button.arrow").trigger("mouseleave");
			});

			this.$.about.on("mouseenter mouseleave", "> button.arrow", function(event)
			{
				event.preventDefault();
				event.stopPropagation();
			});

			if(!CONF.s.isMobileTablet)
				this.initSvg(this.$.about);
		},

		/* ------------------------------------------------- */
		/* ---  private map  */
		/* ------------------------------------------------- */
		initMap : function()
		{
			var that = this;
			this.map = new APP.Map({mapId : "gmap"},this.$.map);

			this.map.on(this.map.EVENT.LOAD_PAGE,function(obj)
			{
				that.trigger(that.EVENT.OPEN_TEMPLATE,obj);
			});

			this.map.resize();
		},

		/* ------------------------------------------------- */
		/* ---  private initChercheur */
		/* ------------------------------------------------- */
		initChercheur : function()
		{
			var that = this,
				chercheur = new APP.Chercheur({},this.$.chercheur);

			this.aComponents.push(chercheur);

			chercheur.on(chercheur.EVENT.OPEN_TEMPLATE,function(obj)
			{
				that.trigger(that.EVENT.OPEN_TEMPLATE,obj);
			});
		},

		initChercheurPortrait : function()
		{
			var chercheurPortrait = new APP.ChercheurPortrait({},this.$.chercheurPortrait);
			this.aComponents.push(chercheurPortrait);
		},

		initChercheurInfos : function()
		{
			var chercheurInfos = new APP.ChercheurInfos({},this.$.chercheurInfos);
			this.aComponents.push(chercheurInfos);
		},

		//SMILE ADD
		/* ------------------------------------------------- */
        /* ---  private initCategoryFilter */
        /* ------------------------------------------------- */
        initSectionFilter : function()
        {
            var filter = new APP.SectionFilter({sections: this.$.container.find("section.affiche, section.news")},this.$.sectionFilter);
            this.aComponents.push(filter);
        },
		
		/* ------------------------------------------------- */
		/* ---  private initGreenWall */
		/* ------------------------------------------------- */
		initGreenWall : function()
		{
			$(".greenwall").hide();
			$(".greenwall-button.white").parents('.greenwall-button-link').hide();

			var button = $('#edito .greenwall-button-link');

			if (button.length > 0) {
				/* if page contains powermail form, hide button */
				if ($('#edito .tx-powermail').length) {
					button.hide();
				}

				/* else init scroll event */
				else {
					$(document).on("scroll", function(){
						if(typeof $('#main').find("#edito").attr('id') !== 'undefined'){
							button.find('.greenwall-button').removeClass("floating");
							var buttonTopPosition = button.offset().top;

							/* add floating class */
							if($(document).scrollTop() > buttonTopPosition - 67){
								button.find('.greenwall-button').addClass("floating");
							}
						}
					});
				}
			}
		}
	});
 }());



var APP = APP || {};

(function()
{
	"use strict";

	APP.MoreEdito = APP.Abstract.extend(
	{
		defaults : {

		},

		init : function(options, $container)
		{
			var that = this;

			this._super(options);

			this.$.container = $container;
			this.$.more = this.$.container.find("div.more");

			this.scrollPane = null;
			this.aMedias = [];


			if (this.$.container.find('.scroll-pane').length)
				this.scrollPane = this.$.container.find('.scroll-pane').jScrollPane();

			if (this.$.more.length)
				this.initMore();

			this.initMedia();
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			if (this.scrollPane !== null)
				this.scrollPane.data("jsp").reinitialise();

			for (var i=0, len = this.aMedias.length; i<len;i++)
			{
				this.aMedias[i].resize();
			}
		},

		/* ------------------------------------------------- */
		/* ---  public remove */
		/* ------------------------------------------------- */
		remove : function()
		{
			for (var i=0, len = this.aMedias.length; i<len;i++)
			{
				this.aMedias[i].remove();
			}

			this._super();

		},

		/* ------------------------------------------------- */
		/* ---  private initMore */
		/* ------------------------------------------------- */
		initMore : function()
        {
            var that = this;

            //MODIF SMILE
            if($.trim(this.$.more.parent().find('article.closed div').html()).length === 0) {
                this.$.more.addClass("hidden");
            }
            //END MODIF SMILE

             this.$.more.on("click","button", function(event)
             {
                 event.preventDefault();

                 TweenLite.to(that.$.more, 0.3, {
                    opacity: 0,
                    ease: Quad.easeOut,
                    onComplete: function()
                    {
                        that.$.more.addClass("hidden");
                        //that.$.container.parent().find("section.edito.closed").removeClass("closed");
                        that.$.container.find("article.closed").removeClass("closed");
                    }
                });
             });
         },

 		/* ------------------------------------------------- */
		/* ---  private initMedia */
		/* ------------------------------------------------- */
 		initMedia : function()
 		{
 			var that = this;

 			this.$.container.find('.player-media').each(function()
 			{
 				var $el = $(this);

				if ($el.hasClass("audio-or-download"))
				{
					$el.find(".bt-play").one("click", function(){
						$el.find("audio").removeClass("hidden");
						that.initPlayerVideojs($el.find(".player-video-js"),"audio");
						$el.find(".legend").addClass("hidden");
					});
				}

				else
				{
					$el.on("click", function(event)
					{
						if (event.target.getAttribute('href') !== null)
							return;

						$el.off("click");

						if ($el.hasClass("video"))
						{
							$el.find(".wrap").addClass("hidden");
							$el.find("figure").addClass("hidden");

							$el.find("video").removeClass("hidden");
							that.initPlayerVideojs($el.find(".player-video-js"),"video");
						}
						else if ($el.hasClass("video-yt"))
						{
							that.initYoutubePlayer($el.find(".ctn-youtube"),$el.find(".player-video"));

							$el.find("figure").addClass("hidden");
							$el.find(".legend").addClass("hidden");
						}
						else if ($el.hasClass("audio"))
						{
							$el.find("audio").removeClass("hidden");
							that.initPlayerVideojs($el.find(".player-video-js"),"audio");
							$el.find(".legend").addClass("hidden");
						}
					});
				}

 			});
 		},

 		/* ------------------------------------------------- */
		/* ---  private initYoutubePlayer */
		/* ------------------------------------------------- */
		initYoutubePlayer : function ($container,$player)
		{
			var that = this;

			var playerVideo = new APP.YoutubePlayer(
				{
					id : $container.attr("id"),
					autoplay : true,
					videoId : $player.data("video-id")
				},$player
			);

			this.aMedias.push(playerVideo);
		},

		/* ------------------------------------------------- */
		/* ---  private initPlayerAudio */
		/* ------------------------------------------------- */
		initPlayerVideojs : function($player,type)
		{
			var id = (type=='video') ? $player.find('video').attr("id") : $player.find('audio').attr("id");

			var videoJsPlayer = new APP.VideoJsPlayer({id : id},$player);

			this.aMedias.push(videoJsPlayer);

			var $dlButton = $player.find('.bt-download');
			$player.find('.vjs-play-control').after($dlButton);
			$player.find('.vjs-default-skin .vjs-current-time').css({
				width: '2em'
			});
			$dlButton.addClass('playing');

		}

	});
 }());


var APP = APP || {};

(function()
{
	"use strict";

	APP.Affiche = APP.Abstract.extend(
	{
		defaults : {
			TOP_CAPTION : 260,
			maxStrLength : 35
		},

		init : function(options, $container)
		{
			var that = this;

			this._super(options);

			this.$.container =  $container;
			this.initEllipsis(this.s.maxStrLength);

			this.initAffiche();
			this.initClick();
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{

		},

		/* ------------------------------------------------- */
		/* ---  PRIVATE initAffiche */
		/* ------------------------------------------------- */
		initAffiche : function()
		{
			var that = this;

			this.$.container.find("article").each(function()
			{
				var $el = $(this),
					$categories = $el.find("div.categories"),
					$h3 = $el.find('h3'),
					$h4 = $el.find('h4'),
					$p = $el.find('p'),
					$bt = $el.find(".bt-green");

				if ($categories.length && $h4.length)
					$h4.addClass('hide');

				if ($p.length)
					$p.addClass('hide');


				$el.on('click','.ctn',function(event)
				{
					$bt.trigger('click');
				});
			});


			this.$.container.find("article.push figure").on({
				mouseleave : function(event)
				{
					event.preventDefault();

					var $el = $(this),
						$caption = $el.find("figcaption"),
						$categories = $el.find("div.categories"),
						$h3 = $el.find("h3"),
						$h4 = $el.find('h4'),
						$bt = $el.find(".bt-green");

					if ($categories.length) $h4.addClass("hide");

					TweenLite.to($bt, 0.2, {opacity: 0, ease: Expo.easeOut});
					TweenLite.to($caption, 0.2, {top: that.s.TOP_CAPTION, ease: Expo.easeOut,
						onComplete:function()
						{
							$h3.html($h3.data("crop-title"));
						}
					});
				},
				mouseenter : function(event)
				{
					event.preventDefault();
					var $el = $(this),
						$caption = $el.find("figcaption"),
						$categories = $el.find("div.categories"),
						$h3 = $el.find("h3"),
						$h4 = $el.find('h4'),
						$bt = $el.find(".bt-green");

					$h3.html($h3.data("full-title"));

					if ($categories.length) $h4.removeClass("hide");

					TweenLite.to($bt, 0.2, {opacity: 1, ease: Expo.easeOut});
					TweenLite.to($caption, 0.2, {top: $el.height() - $caption.outerHeight(), ease: Expo.easeOut});
				},

				focusin : function()
				{
					$(this).trigger("mouseenter");
				}
			});

			this.$.container.find("article.push-big").on({
				mouseleave : function(event)
				{
					event.preventDefault();
					event.stopPropagation();
					var $el = $(this),
						$caption = $el.find("div.caption"),
						$categories = $el.find("div.categories"),
						$h3 = $el.find("h3"),
						$h4 = $el.find('h4'),
						$p = $el.find('p'),
						$bt = $el.find(".bt-green");

					if ($categories.length) $h4.addClass("hide");

					if ($p.length) $p.addClass('hide');

					TweenLite.to($bt, 0.2, {opacity: 0, ease: Expo.easeOut});
					TweenLite.to($caption, 0.2, {top: that.s.TOP_CAPTION, ease:Expo.easeOut,
						onComplete:function()
						{
							$h3.html($h3.data("crop-title"));
						}
					});
				},

				mouseenter : function(event)
				{
					event.preventDefault();
					event.stopPropagation();
					var $el = $(this),
						$caption = $el.find("div.caption"),
						$categories = $el.find("div.categories"),
						$h3 = $el.find("h3"),
						$h4 = $el.find('h4'),
						$p = $el.find('p'),
						$bt = $el.find(".bt-green");

					$h3.html($h3.data("full-title"));
					if ($categories.length) $h4.removeClass("hide");

					if ($p.length) $p.removeClass('hide');

					TweenLite.to($bt, 0.2, {opacity: 1, ease: Expo.easeOut});
					TweenLite.to($caption, 0.2, {top: $el.height() - $caption.outerHeight(), ease:Expo.easeOut});
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initEllipsis */
		/* ------------------------------------------------- */
		initEllipsis : function(maxStrLength)
		{
			var that = this;

			_.each(this.$.container.find('h3'), function(el, index)
			{
				var el_html = $(el).html(),
					el_length = el_html.length;

				$(el).data("full-title",el_html);

				if(el_length > maxStrLength)
				{
					// Break the string
					var string_break = el_html.substr(0, maxStrLength);

					// Split the string and delete the cut word
					string_break = string_break.split(" ");
					string_break.pop();

					var final_string = string_break.join(" ") + '&nbsp;...';
					$(el).data("crop-title",final_string);
					// Append it
					$(el).html(final_string);
				}
				else
				{
					$(el).data("crop-title",el_html);
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initClick */
		/* ------------------------------------------------- */
		initClick : function()
		{
			this.$.container.on("click","span.arrow",function(event)
			{
				event.preventDefault();
				event.stopPropagation();
				$(this).parents(".ctn").find("a").trigger("click");
			});
		}
	});
 }());
var APP = APP || {};

(function()
{
	"use strict";

	APP.HeaderInner = APP.Abstract.extend(
	{
		defaults : {

		},

		init : function(options,$container)
		{
			var that = this;

			this._super(options);

			this.EVENT = {
			};

			this.$.container	= $container;
			this.$.header		= this.$.container.find("div.header-inner");
			this.$.breadcrumb 	= this.$.container.find('div.breadcrumb');
			this.$.titles 		= this.$.header.find(".titles");

			this.initHeader();
			this.initBreadCrumb();
			this.initShare();
			this.initLoad();


		},

		remove:function()
		{
			this.$.breadcrumb.off('keydown');
			this._super();
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			var ww = CONF.$.win.width(),
				margin = CONF.$.toolsBar.width(),
				maxWidth = ww - 2*margin;

			if (maxWidth>1100) maxWidth = 1100;
			else if (maxWidth<CONF.s.WIDTH_MIN - 2*margin) maxWidth = CONF.s.WIDTH_MIN - 2*margin;

			this.$.titles.css({'max-width':maxWidth+'px'});

			//---- resize title
			this.$.titles.removeClass("medium").removeClass("small").removeClass("xsmall");

			if (this.$.titles.height()>this.$.header.height()*0.6 ||  this.$.titles.find('h1').outerWidth() > maxWidth)
				this.$.titles.addClass("medium");

			if (this.$.titles.height()>this.$.header.height()*0.6 || this.$.titles.find('h1').outerWidth() > maxWidth)
				this.$.titles.removeClass("medium").addClass("small");

			if (this.$.titles.height()>this.$.header.height()*0.6 || this.$.titles.find('h1').outerWidth() > maxWidth)
				this.$.titles.removeClass("medium").removeClass("small").addClass("xsmall");



			if (!CONF.s.hasTransforms)
			{
				var t = Math.floor(this.$.header.height()/2 - this.$.titles.height()/2);
				this.$.titles.css({top:t+"px"});
			}

			//---- resize ASIDE
			var $ul = this.$.breadcrumb.find('ol'),
				i = 1;

			while ($ul.height()>this.$.breadcrumb.height() || $ul.width()>this.$.breadcrumb.width()-75)
			{
				this.$.breadcrumb.find('li:eq('+i+') a').attr('title',this.$.breadcrumb.find('li:eq('+i+') a').html()+'...');
			    this.$.breadcrumb.find('li:eq('+i+') a').html('...');
			    i++;
			}

		},

		/* ------------------------------------------------- */
		/* ---  private header */
		/* ------------------------------------------------- */
		initHeader : function()
		{
			var that = this;
			this.$.header.on("click","button.arrow",function(event)
			{
				event.preventDefault();
				event.stopPropagation();
				TweenLite.to(window, 0.4, {scrollTo:{y:that.$.breadcrumb.offset().top-that.$.breadcrumb.outerHeight()},ease:Sine.easeOut});
			});


			this.$.header.on("click",function(event)
			{
				$(this).find('button.arrow').trigger('click');
			});

		},

		/* ------------------------------------------------- */
		/* ---  private initBreadCrumb */
		/* ------------------------------------------------- */
		initBreadCrumb : function()
		{
			var that = this;

			this.$.breadcrumb.find(">ol >li").on({
				mouseenter : function()
				{
					var $allEl = $(this).parents("ol").find(">li").not($(this)).not(".share");
					TweenLite.to($allEl, 0.2, {opacity: 0.4,ease: Quad.easeIn});
				},

				mouseleave : function()
				{
					var $allEl = $(this).parents("ol").find(">li").not($(this)).not(".share");
					TweenLite.to($allEl, 0.2, {opacity: 1,ease: Quad.easeOut,clearProps:'opacity'});
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initShare */
		/* ------------------------------------------------- */
		initShare : function()
		{
			var that = this,
				$share = this.$.breadcrumb.find("li.share");

			this.$.breadcrumb.find("li.share > button").on("click", function(event)
			{
				event.preventDefault();
				var $el =$(this);

				if ($el.closest('li').hasClass('close'))
				{
					$el.attr('aria-expanded',false);
					$el.find('+ul').attr('aria-hidden',true);
				}
				else
				{
					$el.attr('aria-expanded',true);
					$el.find('+ul').attr('aria-hidden',false);
				}

				$(this).closest('li').toggleClass("close");
			});

			this.$.breadcrumb.on('keydown',function(event)
			{
				if ($share.hasClass('close') && event.keyCode === 27)
				{
					$share.find(" > button").trigger("click");
				}
			});
		},


		/* ------------------------------------------------- */
		/* ---  private initLoad */
		/* ------------------------------------------------- */
		initLoad : function()
		{
			var that = this,
				$img = this.$.header.find("img"),
				blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

				$img.on("load",function()
				{
					$img.addClass("show");

				}).each(function()
				{
			        if (this.complete || this.complete === undefined)
			        {
			            var src = this.src;
			            this.src = blank;
			            this.src = src;
			        }
				});
		}
	});
 }());



var APP = APP || {};

(function()
{
	"use strict";

	APP.ToolsAbstract = APP.Abstract.extend(
	{
		defaults : {
			template		: null,
			section			: null,
			href			: null,
			documentTitle 	: null,
			easing			: null
		},

		init : function(options)
		{
			this._super(options);

			this.EVENT = {
				LOAD_PAGE		: "loadPage",
				REMOVE_PAGE		: "removePage",
				CLOSE_PAGE		: "closePage",
				UPDATE_URL 		: "updateUrl",
				HIDE_PREHOME 	: "hidePrehome"
			};

			this.ajaxExplorer 			= null;
			this.popinDetailsExplorer 	= null;

			this.s.easing = (CONF.s.hasTransforms3d) ? "cubic-bezier(0.450, 0.050, 0.350, 1)" : Quint.easeInOut;
			this.s.BAR_WIDTH = 60;

			this.$.container = $("#"+this.s.section);

		},

		/* ------------------------------------------------- */
		/* ---  public start */
		/* ------------------------------------------------- */
		start : function()
		{
			//override
			var page = $("main.container-page").find("div.content-page").find("div[id^='c']");
			if(page.length == 0)
			{
				$("main.container-page").find("div.content-page").remove();
			}

			var prehome = $('body').find("div.prehome");
			if (prehome.length > 0)
			{
				prehome.remove();
			}
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			this.$.container.css({width : CONF.$.win.width() - CONF.$.toolsBar.width()+"px"});
		},

		/* ------------------------------------------------- */
		/* ---  public remove */
		/* ------------------------------------------------- */
		remove : function()
		{
			this._super();
			this.$.container.remove();
		},

		/* ------------------------------------------------- */
		/* ---  public show */
		/* ------------------------------------------------- */
		show : function()
		{
			var that = this;
			that.resize();

			TweenLite.fromTo(this.$.container,0.2,
				{opacity:0},
				{opacity:1,onComplete:function()
					{
						that.start();
						that.resize();
					}
				});
		},

		/* ------------------------------------------------- */
		/* ---  public hide */
		/* ------------------------------------------------- */
		hide : function(callback)
		{
			TweenLite.to(this.$.container,0.2, {opacity:0,
				onComplete:function()
				{
					callback();
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  public slideLeft */
		/* ------------------------------------------------- */
		slideLeft : function()
		{
			var that	= this,
				props	= {},
				l		= -CONF.$.win.width() + CONF.$.toolsBar.width(),
				speed	= 0.45;

			this.$.container.removeClass("hidden");
			CONF.$.tools.removeClass("closed").css({left:CONF.$.win.width()-CONF.$.toolsBar.width()+"px",right:"auto"});
			CONF.$.wrap.addClass("scrolling");
			CONF.$.body.addClass("noscrolling");


			if (CONF.$.header.hasClass("fixed"))
			{
				var h = ($("#prehome").length && !$("#prehome").hasClass("hidden")) ? $("#prehome").height() : 0;
				CONF.$.header.addClass("scrolling");

				if (CONF.s.hasTransforms3d)
					CONF.$.header.css({top:CONF.$.doc.scrollTop() - h+"px"});
			}

			that.resize();

			if (CONF.s.hasTransforms3d)
			{
				props[CONF.s.transition + "-timing-function"] = this.s.easing;
				props[CONF.s.transition + "-property"] = "transform";
				props[CONF.s.transition + "-delay"] = "0s";
				props[CONF.s.transition + "-duration"] = speed+"s";
				props[CONF.s.transform] = "translate3d("+l+"px,0,0)";

				CONF.$.tools.css(props).one(CONF.s.transitionEnd,
					function()
					{
						that.endSlideLeft();
					}
				);

				props = {};
				props[CONF.s.transition + "-timing-function"] = this.s.easing;
				props[CONF.s.transition + "-property"] = "transform";
				props[CONF.s.transition + "-delay"] = "0s";
				props[CONF.s.transition + "-duration"] = (speed+0.1)+"s";
				props[CONF.s.transform] = "translate3d(-200px,0,0)";

				CONF.$.wrap.css(props);
			}
			else
			{
				TweenLite.to(CONF.$.tools, speed,{
					left: 0,
					ease: Quad.easeInOut,
					onComplete : function()
					{
						that.endSlideLeft();
					}
				});

				TweenLite.to(CONF.$.wrap, speed,{
					left: -200,
					delay: 0.1,
					ease: Quad.easeInOut
				});
			}
		},

		endSlideLeft : function()
		{
			var $elToHide = CONF.$.main.find(".infoBox");

			if ($("#prehome").length)
				this.trigger(this.EVENT.HIDE_PREHOME);

			//	$("#prehome").addClass("hidden");

			CONF.$.tools.removeAttr("style");
			CONF.$.wrap.addClass("invisible");

			if($elToHide.length)
				$elToHide.addClass("hidden");

			this.start();
			this.resize();
		},

		/* ------------------------------------------------- */
		/* ---  public slideRight */
		/* ------------------------------------------------- */
		slideRight : function(scrollTop)
		{
			var that	= this,
				props	= {},
				l		= 0,
				speed	= 0.45;

			CONF.$.wrap.removeClass("invisible")
						.removeClass("scrolling");

			CONF.$.body.removeClass("noscrolling");
			CONF.$.header.removeClass("scrolling");


			if (CONF.$.header.hasClass("fixed"))
				CONF.$.header.css({top:-CONF.$.header.height()+"px"});

			TweenLite.set(window, {scrollTo:{y:scrollTop}});

			l = CONF.$.win.width() - CONF.$.toolsBar.width();

			if (CONF.s.hasTransforms3d)
			{
				props[CONF.s.transition + "-timing-function"] = this.s.easing;
				props[CONF.s.transition + "-property"] = "transform";
				props[CONF.s.transition + "-duration"] = speed+"s";
				props[CONF.s.transform] = "translate3d("+l+"px,0,0)";

				CONF.$.tools.css(props).one(CONF.s.transitionEnd,
					function()
					{
						that.endSlideRight();
					}
				);

				props = {};
				props[CONF.s.transition + "-timing-function"] = "ease-out";
				props[CONF.s.transition + "-property"] = "transform";
				props[CONF.s.transition + "-duration"] = (speed-0.1)+"s";
				props[CONF.s.transform] = "translate3d(0,0,0)";

				CONF.$.wrap.css(props);
			}
			else
			{
				TweenLite.to(CONF.$.tools, speed,{
					left: l,
					ease: Quad.easeInOut,
					onComplete: function()
					{
						if (CONF.$.header.hasClass("fixed"))
							TweenLite.to(CONF.$.header,0.2, {top:0});
					}
				});

				TweenLite.to(CONF.$.wrap, speed,{
					left: 0,
					delay: 0.1,
					ease: Quad.easeInOut,
					onComplete: function()
					{
						that.endSlideRight();
					}
				});
			}
		},

		endSlideRight : function()
		{
			var $elToHide = CONF.$.main.find(".infoBox");

			CONF.$.tools.removeAttr("style")
						.addClass("closed");

			this.$.container.addClass("hidden");
			CONF.$.wrap.removeAttr("style");
			CONF.$.main.removeAttr("style");

			if($elToHide.length)
				$elToHide.removeClass("hidden");

			if (CONF.$.header.hasClass("fixed"))
				TweenLite.to(CONF.$.header,0.2, {top:0});
		},



		/* -------------------------------------------------------------------------------------------------

			GESTION AFFICHAGE POPIN DETAILS-EXPLORER (Search and Plan)

		---------------------------------------------------------------------------------------------------- */


		/* ------------------------------------------------- */
		/* ---  protected createPopinExplorerDetails */
		/* ------------------------------------------------- */
		createPopinExplorerDetails : function(status)
		{
			this.$.popinDetailsExplorer = $("<div class='explorer-popin-details origin-search "+status+"' />");
			CONF.$.body.append(this.$.popinDetailsExplorer);
		},

		/* ------------------------------------------------- */
		/* ---  protected loadExplorerDetails */
		/* ------------------------------------------------- */
		loadExplorerDetails : function(href)
		{
			var that = this;
			this.addLoader(CONF.$.tools);

			this.trigger(this.EVENT.UPDATE_URL,{href:href});
			if(this.ajaxExplorer) this.ajaxExplorer.abort();

			this.ajaxExplorer = $.ajax({
				type		: "GET",
				url			: href,
				data		: "format=json&popin-details=true&origin="+this.s.section,
				dataType	: "json",
				success		: function(datas)
				{
					APP.Helper.tagAnalytics(href);
					that.removeLoader();
					that.$.popinDetailsExplorer.append(datas.html);
					that.initExplorerDetails(datas);
				},
				error: function(errorLog)
				{
					log("errorLog : "+errorLog);
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  protected initExplorerDetails */
		/* ------------------------------------------------- */
		initExplorerDetails : function(datas)
		{
			var that = this;

			that.popinDetailsExplorer = new APP.ExplorerPopinDetails({barWidth:this.s.BAR_WIDTH},that.$.popinDetailsExplorer,that.$.container);
			that.popinDetailsExplorer.on(that.popinDetailsExplorer.EVENT.END_CLOSE,function(obj)
			{
				that.trigger(that.EVENT.UPDATE_URL,obj);
				that.$.popinDetailsExplorer.addClass("hidden").removeAttr('style');
				that.removeExplorerDetails();
			});

			that.popinDetailsExplorer.on(that.popinDetailsExplorer.EVENT.LOAD_PAGE,function(obj)
			{
				that.removeExplorerDetails();
				that.createPopinExplorerDetails("");
				that.$.popinDetailsExplorer.css({left:that.s.BAR_WIDTH+"px"});
				that.loadExplorerDetails(obj.href);
			});
		},

		/* ------------------------------------------------- */
		/* ---  protected removeExplorerDetails */
		/* ------------------------------------------------- */
		removeExplorerDetails : function()
		{
			if (this.popinDetailsExplorer !==null)
			{
				this.popinDetailsExplorer.remove();
				this.popinDetailsExplorer = null;
				this.$.popinDetailsExplorer.remove();
				this.$.popinDetailsExplorer =null;
			}
		}
	});
 }());







var APP = APP || {};

(function()
{
	"use strict";

	APP.MediasComponentAbstract = APP.Abstract.extend(
	{
		defaults : {

		},

		init : function(options, $container,type)
		{
			this._super(options);

			this.$.container 		= $container;
			this.$.resultsContainer = this.$.container.find('.results-container');
			this.$.mediaCtnRight    = this.$.container.find('.medias-ctn-right');
			this.$.mediaCtnleft    = this.$.container.find('.medias-ctn-left');
			this.$.overlayMedia		= this.$.mediaCtnRight.find('.media-overlay');
			this.$.filters = this.$.mediaCtnleft.find('.filters');

			this.scrollPane 		= null;
			this.filters 			= null;
			this.ajax 				= null;
			this.type 				= type;
			this.currentPage = null;
			this.nbPages = null;
			this.flag = true;

			this.initFilters();
			this.initResults();
		},

		/* ------------------------------------------------- */
		/* ---  public start */
		/* ------------------------------------------------- */
		start : function()
		{
			this.initLoadImg();
			this.initLoadCanvas();

			if(!CONF.s.isMobileTablet)
				this.initSvg(this.$.container);
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			var ww = CONF.$.win.width(),
				$img = null,
				$canvas = null;

			if (this.$.overlayMedia.length)
			{
				$img = this.$.overlayMedia.find('img');
				$canvas = this.$.overlayMedia.find('canvas.canvas_3d');

				if ($img.width()>0)
				{
					this.resizeImg($img);
				}

				if ($canvas.height()>0)
				{
					this.resizeCanvas($canvas);
				}
			}

			this.resetScrollPane();
		},

		/* ------------------------------------------------- */
		/* ---  protected reset */
		/* ------------------------------------------------- */
		reset : function()
		{
			this.$.overlayMedia	= this.$.mediaCtnRight.find('.media-overlay');
		},

		/* ------------------------------------------------- */
		/* ---  PRIVATE resizeImg */
		/* ------------------------------------------------- */
		resizeImg : function($img)
		{
			var ww = this.$.overlayMedia.width(),
				wh = this.$.overlayMedia.height(),
				iw = $img.width(),
				ih = $img.height(),
				rw = wh / ww,
				ri = ih / iw,
				w,h,mLeft,mTop;

			if (rw > ri)
			{
				$img.addClass('full-h');
			}
			else
			{
				$img.removeClass('full-h');
			}
		},

		/* ------------------------------------------------- */
		/* ---  PRIVATE resizeCanvas */
		/* ------------------------------------------------- */
		resizeCanvas : function($canvas)
		{
			var ww = this.$.mediaCtnRight.width(),
				wh = this.$.mediaCtnRight.height(),
				$textVizua = this.$.overlayMedia.find('.scroll-3d');

			$canvas.attr('height', (wh/2));
			this.resizeTextVizua($textVizua, (wh/2));
		},

		/* ------------------------------------------------- */
		/* ---  PRIVATE resizeTextVizua */
		/* ------------------------------------------------- */
		resizeTextVizua : function($textVizua, heightCanvas)
		{
			$textVizua.css('height', this.$.mediaCtnRight.height() - heightCanvas + 'px');
		},

		/* ------------------------------------------------- */
		/* ---  public remove */
		/* ------------------------------------------------- */
		remove : function()
		{
			this._super();
		},

		/* ------------------------------------------------- */
		/* ---  public clearMedia */
		/* ------------------------------------------------- */
		clearMedia : function()
		{
			//inherit
		},

		/* ------------------------------------------------- */
		/* ---  private LoadImg */
		/* ------------------------------------------------- */
		initLoadImg : function()
		{
			var that = this,
				$img = this.$.overlayMedia.find("img");

			//log("initLoadImg : "+$img.attr("src"));

			if ($img.width()===0)
			{
				$img.one("load",function()
				{
					that.$.overlayMedia.find(".icon-play").removeClass("hidden");
					$img.addClass("visible");
					that.resizeImg($img);
				});
			}
			else
			{
				this.$.overlayMedia.find(".icon-play").removeClass("hidden");
				$img.addClass("visible");
				that.resizeImg($img);
			}
		},

		/* ------------------------------------------------- */
		/* ---  private LoadCanvas */
		/* ------------------------------------------------- */
		initLoadCanvas : function()
		{
			var that = this,
				$canvas = this.$.overlayMedia.find("canvas.canvas_3d");

			if($canvas.height() > 0) {
				that.resizeCanvas($canvas);
			}
		},

		/* ------------------------------------------------- */
		/* ---  private initFilters */
		/* ------------------------------------------------- */
		initFilters : function()
		{
			var that = this;

			this.filters = new APP.MediasFilters({}, this.$.resultsContainer, this.$.container.find(".filters"));

			this.filters.on(this.filters.EVENT.END_FILTER,function()
			{
				that.scrollPane = null;
				that.flag = true;
				that.$.resultsContainer = that.$.mediaCtnleft.find('.results-container');
				that.resetScrollPane();
				that.initResults();
			});
		},

		/* ------------------------------------------------- */
		/* ---  private initResults */
		/* ------------------------------------------------- */
		initResults : function ()
		{
			var that = this;

			this.nbPages = this.$.resultsContainer.data('nbPages');
			this.currentPage = 1;

			this.$.resultsContainer.on("click", "a", function(event)
			{
				event.preventDefault();
				var $el = $(this);

				that.$.resultsContainer.find("li.active").removeClass("active");
				$el.parent().addClass("active");

				that.clearMedia();
				that.loadResult($el);
			});

			this.$.container.on("click", "a.push", function(event)
			{
				event.preventDefault();
				var $el = $(this);

				that.$.resultsContainer.find("li.active").removeClass("active");

				that.clearMedia();
				that.loadResult($el);
			});

			this.$.resultsContainer.on('scroll', $.proxy(this.scrollResults, this));
		},

		/* ------------------------------------------------- */
		/* ---  private scrollResults */
		/* ------------------------------------------------- */
		scrollResults : function(event)
		{
			if(this.scrollPane) {
				var api = this.scrollPane.data("jsp");

				if(api.getPercentScrolledY() == 1 && this.flag) {
					this.flag = false;
					this.loadResults();
				}
			}
		},

		/* ------------------------------------------------- */
		/* ---  private loadResults */
		/* ------------------------------------------------- */
		loadResults : function()
		{
			var that = this,
				$type = that.$.filters.find(".item-select.type select").val(),
				$year = that.$.filters.find(".item-select.year select").val();

			if(this.currentPage != this.nbPages) {
				this.addLoader(this.$.resultsContainer);

				this.ajax = $.ajax({
					type        : 'GET',
					url         : $(location).attr('href'),
					data        : "mediaPage="+(this.currentPage+1)+"&mediaCategory="+($type)+"&mediaYear="+($year)
				});

				$.when( this.ajax ).then(function(data) {
					var items = $(data).find('.results-container ul').html();
					that.removeLoader();
					that.$.resultsContainer.find('ul').append(items);
					that.currentPage = that.currentPage + 1;

					that.resetScrollPane();
					that.flag = true;
				});
			}
		},

		/* ------------------------------------------------- */
		/* ---  protected loadResult */
		/* ------------------------------------------------- */
		loadResult : function($el)
		{
			var that = this,
				promise = this.hideResultsContainer();

			this.addLoader(this.$.mediaCtnRight);

			if(this.ajax) this.ajax.abort();

			this.ajax = $.ajax({
				type 		: "GET",
				url 		: $el.attr('href'),
				data 		: "format=json&results=true&type="+this.type,
				dataType 	: 'json'
			});

			$.when(promise, this.ajax).then(function(animResult, data)
			{
				that.displayResults(data[0].html);
			});
		},

		hideResultsContainer : function()
		{
			var dfd = new $.Deferred();

			TweenLite.to(this.$.mediaCtnRight, 0.2, {opacity:0,
				onComplete:function()
				{
					dfd.resolve();
				}
			});

			return dfd.promise();
		},

		displayResults : function(data)
		{
			this.removeLoader();
			this.$.mediaCtnRight.empty().append(data);
			this.showResultsContainer();
		},

		showResultsContainer : function()
		{
			TweenLite.set(this.$.mediaCtnRight, {scrollTo:{y:0}});
			TweenLite.set(this.$.container, {scrollTo:{y:0}});

			TweenLite.to(this.$.mediaCtnRight, 0.3, {opacity:1});
			this.reset();
			this.start();
		},

		/* ------------------------------------------------- */
		/* ---  private resetScrollPane */
		/* ------------------------------------------------- */
		resetScrollPane : function()
		{
			var filtersHeight =  this.$.resultsContainer.position().top;

			this.$.resultsContainer.css({
				height: this.$.container.height() - filtersHeight - 50
			});

			if(this.scrollPane !== null)
				this.scrollPane.data('jsp').reinitialise();
			else
				this.scrollPane = this.$.resultsContainer.jScrollPane();
		}
	});
 }());


var APP = APP || {};

(function()
{
	"use strict";

	APP.JourneyAbstract = APP.Abstract.extend(
	{
		defaults : {
			template		: null,
			section			: null,
			href			: null,
			documentTitle	: null,
			scrollTop 		: 0
		},

		init : function(options)
		{
			this._super(options);

			this.EVENT = {
				REMOVE_PAGE			: "removePage",
				CLOSE_PAGE			: "closePage",
				LOAD_PAGE			: "loadPage",
				UPDATE_URL 			: "updateUrl"
			};

			this.$.navBottom	= CONF.$.module.find("div.journey-nav");
			this.$.zoom 		= CONF.$.module.find("div.journey-zoom");
			this.$.popinList	= CONF.$.module.find("div.journey-popin-list");
			this.$.container	= $("#"+this.s.section);
			this.$.tutorial		= this.$.navBottom.find("div.tutorial");

			this.navBottom  	= null;
			this.popinList 		= null;
		},

		/* ------------------------------------------------- */
		/* ---  public start */
		/* ------------------------------------------------- */
		start : function()
		{
			if (this.$.navBottom.length)
			{
				this.initNavBottom();
				if (this.$.container.find('button.arrow-play').length > 0)
				{
					this.$.container.find('button.arrow-play').focus();
				}
			}
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			if (this.popinList !== null)
				this.popinList.resize();

			this.$.container.css({height:CONF.$.win.height() - this.$.navBottom.height()+"px"});
		},

		/* ------------------------------------------------- */
		/* ---  public remove */
		/* ------------------------------------------------- */
		remove : function()
		{
			this._super();

			if (this.navBottom !==null)
				this.navBottom.remove();

			if (this.popinList !==null)
				this.popinList.remove();
			else
				this.$.popinList.remove();

			if (CONF.$.module.find("div.intro").length)
				CONF.$.module.find("div.intro").remove();

			this.$.container.remove();
		},

		/* ------------------------------------------------- */
		/* ---  public scale */
		/* ------------------------------------------------- */
		show : function()
		{
			var that = this;

			this.s.scrollTop = CONF.$.doc.scrollTop();

			this.$.container.css({opacity:0});
			this.$.navBottom.css({opacity:0});
			this.resize();

			TweenLite.to(CONF.$.module,0.4,
				{opacity:1,delay:0.2,width:"100%",height:"100%",top:0,left:0,ease: Quad.easeOut,
					onComplete:function()
					{
						CONF.$.module.addClass("dark");
						TweenLite.to([that.$.container,that.$.navBottom],0.3,{opacity:1});
						CONF.$.wrap.addClass("hidden");
						CONF.$.tools.addClass('hidden');
						CONF.$.body.addClass("noscrolling");
						that.start();
						that.resize();
					}
				});
		},


		/* ------------------------------------------------- */
		/* ---  public close */
		/* ------------------------------------------------- */
		close : function()
		{
			var that = this;

			CONF.$.wrap.removeClass("invisible hidden");
			CONF.$.body.removeClass("noscrolling");
			CONF.$.tools.removeClass('hidden');

			TweenLite.set(window, {scrollTo:{y:this.s.scrollTop}});

			TweenLite.to(CONF.$.module, 0.25,{opacity:0,onComplete:
				function()
				{
					CONF.$.module.addClass("hidden").removeAttr("style");
					that.trigger(that.EVENT.REMOVE_PAGE);
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  public fadeIn */
		/* ------------------------------------------------- */
		fadeIn : function()
		{
			var that = this;
			that.resize();
			that.removeLoader();

			TweenLite.fromTo(this.$.container,0.35,
				{opacity:0},
				{opacity:1,onComplete:function()
					{
						that.start();
						that.resize();
					}
				});
		},

		/* ------------------------------------------------- */
		/* ---  public fadeOut */
		/* ------------------------------------------------- */
		fadeOut : function(callback)
		{

			TweenLite.to(this.$.container,0.2, {opacity:0,
				onComplete:function()
				{
					callback();
				}
			});

		},

		/* ------------------------------------------------- */
		/* ---  private initNavBottom */
		/* ------------------------------------------------- */
		initNavBottom : function()
		{
			var that = this;

			this.navBottom = new APP.JourneyNavBottom({},this.$.navBottom);
			this.navBottom.on(this.navBottom.EVENT.LOAD_PAGE,function(obj)
			{
				if (that.$.popinList.length)
				{
					if (that.popinList === null)
						that.loadList(obj.href);
					else if (that.$.popinList.hasClass("hidden"))
						that.popinList.show();
					else
					{
						that.popinList.close(function()
						{
							that.trigger(that.EVENT.UPDATE_URL,{href:that.s.href});
							that.$.popinList.addClass("hidden").removeAttr('style');
						});
					}
				}
			});

			this.navBottom.on(this.navBottom.EVENT.CLOSE_PAGE,function(obj)
			{
				that.trigger(that.EVENT.CLOSE_PAGE,obj);
			});

			this.navBottom.on(this.navBottom.EVENT.SHOW_THUMBS,function(obj)
			{
				if (that.$.thumbs && that.$.thumbs.length)
					that.showNavThumbs();
			});
		},

		/* -------------------------------------------------------------------------------------------------

			GESTION DU LOADING AJAX POPIN LIST DES PARCOURS

		---------------------------------------------------------------------------------------------------- */
		loadList : function(href)
		{
			var that = this;
			this.addLoader(CONF.$.module);

			this.trigger(this.EVENT.UPDATE_URL,{href:href});
			if(this.ajax) this.ajax.abort();

			this.ajax = $.ajax({
				type		: "GET",
				url			: href,
				data		: "format=json&popin-list=true",
				dataType	: "json",
				success		: function(datas)
				{
					APP.Helper.tagAnalytics(href);
					that.removeLoader();
					that.$.popinList.append(datas.html);
					that.initList(datas);
				},
				error: function(errorLog)
				{
					log("errorLog : "+errorLog);
				}
			});
		},

		initList : function(datas)
		{
			var that = this;

			that.popinList = new APP.JourneyPopinIndex({},that.$.popinList,this.$.container);

			that.popinList.on(that.popinList.EVENT.LOAD_PAGE,function(obj)
			{
				that.$.container.remove();
				that.addLoader(CONF.$.module);

				that.popinList.close(function()
				{
					that.trigger(that.EVENT.LOAD_PAGE,obj);
					that.$.popinList.addClass("hidden").removeAttr('style');

				});

			});
		}

	});
 }());




var APP = APP || {};

(function()
{
	"use strict";

	APP.JourneyNavThumbs = APP.Abstract.extend(
	{
		defaults : {
			nbItems : 0,
			pxStartTouch : 0,
			pxEndTouch : 0
		},

		init : function(options,$container)
		{
			var that = this;

			this.EVENT = {
				CHANGE_SLIDE : 'changeSlide'
			};

			this._super(options);

			this.$.container	= $container;
			this.$.content    	= this.$.container.find("ul");
			this.$.items 		= this.$.content.find("li");

			this.s.nbItems = this.$.items.length;
			this.$.content.css({width : (this.$.items.width() * this.s.nbItems) +"px"});
			this.initMenu();
		},

		/* ------------------------------------------------- */
		/* ---  public show */
		/* ------------------------------------------------- */
		show : function(index)
		{
			var $item = this.$.items.eq(index),
				ww = CONF.$.win.width(),
				l = -$item.offset().left - $item.width()/2 + ww/2,
				w = ww - this.$.content.width();

			 //MODIF SMILE
            if(this.$.content.width() > ww)
            {
                l = -$item.offset().left - $item.width()/2 + ww/2;

                if (l>0) l =0;
				else if (l< w) l = w;

				this.slideDiaporama(l,0);
            }
            //MODIF SMILE END



			this.$.container.addClass("show");
		},

		/* ------------------------------------------------- */
		/* ---  public hide */
		/* ------------------------------------------------- */
		hide : function()
		{
			this.$.container.removeClass("show");
			this.$.items.removeClass("over");
		},

		/* ------------------------------------------------- */
		/* ---  public update */
		/* ------------------------------------------------- */
		update : function(index)
		{
			this.$.items.removeClass("on");
			this.$.items.eq(index-1).addClass("on");
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			this.$.content.css({left:0});
		},

		/* ------------------------------------------------- */
		/* ---  private initMenu */
		/* ------------------------------------------------- */
		initMenu : function()
		{
			var that = this;

			this.$.container.on("mouseleave",function()
			{
				that.hide();
			});

			this.$.container.on("click mouseover mouseout focusin","li",function(event)
			{
				if (event.type=="mouseover" || event.type=="focusin")
				{
					if (!CONF.s.isMobileTablet)
					{
						that.$.items.removeClass("over");
						$(this).addClass("over");
					}

					if (event.type==='focusin' && !that.$.container.hasClass("show"))
					{
						that.show(0);
					}
				}
				else if (event.type=="mouseout")
				{
					if (!CONF.s.isMobileTablet)
						$(this).removeClass("over");
				}
				else
				{
					event.preventDefault();
					event.stopPropagation();

					if (Math.abs(that.s.pxStartTouch - that.s.pxEndTouch)<2)
						that.trigger(that.EVENT.CHANGE_SLIDE,{index : $(this).index()+1});
				}

			});

			if (CONF.s.isMobileTablet)
			{
				this.initSwipe();
			}
			else
			{
				this.$.container.on("mousemove",function(event)
				{
					var e = event.originalEvent,
						px = event.pageX,
						l = that.$.content.offset().left,
						w = that.$.content.width(),
						ww = CONF.$.win.width();

					if (that.$.content.width() > CONF.$.win.width())
					{
						if(l<0 && px < ww*0.2)
							that.slideDiaporama(0);
						else if (l> ww - w && px > ww*0.8)
							that.slideDiaporama(ww-w);
					}
				});
			}
		},

		/* ------------------------------------------------- */
		/* ---  private slideDiaporama */
		/* ------------------------------------------------- */
		slideDiaporama : function(l,s)
		{
			var props = {},
				speed = (s || s===0) ? s : 800;

			if (CONF.s.hasTransitions)
			{
				props[CONF.s.transition + "-timing-function"] = "ease-out";
				props[CONF.s.transition + "-duration"] =speed+"ms";
				props[CONF.s.transition + "-transform"] = "transform";
				props[CONF.s.transform] = "translate("+l+"px,0)";

				this.$.content.css(props);
			}
			else
			{
				TweenLite.to(this.$.content, speed, {left:l, ease:Sine.easeOut});
			}
		},

		/* ------------------------------------------------- */
		/* ---  private initSwipe */
		/* ------------------------------------------------- */
		initSwipe : function()
		{
			var that = this;

			this.$.container.on(CONF.s.downEvent,
                function(event)
                {
                    var e = event.originalEvent,
                   		w = that.$.content.width(),
						ww = CONF.$.win.width(),
						l = that.$.content.offset().left;

                    event.stopPropagation();

                    if (that.$.content.width() < CONF.$.win.width()) return;

                    if (event.type == CONF.s.downEvent)
                    {
                        that.s.pxStartTouch = that.s.pxEndTouch = (CONF.s.isTouch) ? e.touches[0].pageX - l: event.pageX - l;

                        that.$.container.off(CONF.s.moveEvent).on(CONF.s.moveEvent,
                            function(event)
                            {
                                var e = event.originalEvent,
                                    px = (CONF.s.isTouch) ? e.touches[0].pageX : event.pageX,
                                    d = px - that.s.pxStartTouch;

                            	event.preventDefault();

                            	if(d>0) d = 0;
								else if (d < ww - w) d = ww - w;

	                            that.slideDiaporama(d, 0,false);
	                            that.s.pxEndTouch = px;
                            }

                        ).off(CONF.s.upEvent).one(CONF.s.upEvent,
                            function(event)
                            {
                            	that.$.container.off(CONF.s.moveEvent);
                            }
                        );
                    }
                }
            );
		}

	});
 }());

var APP = APP || {};

(function()
{
	"use strict";

	APP.PopInAbstract = APP.Abstract.extend(
	{
		defaults : {
			href : null
		},

		init : function(options)
		{
			this._super(options);

			this.$.container	= CONF.$.popin;
			this.$.form			= null;
			this.$.wrapper 		= null;
			

			this.loadTemplate();
		},

		/* ------------------------------------------------- */
		/* ---  protected start */
		/* ------------------------------------------------- */
		start : function()
		{
			this.$.form	= this.$.container.find("form");
			this.$.wrapper = this.$.container.find(".popin-wrapper");

			this.$.wrapper.find("div.content").jScrollPane();
		},

		/* ------------------------------------------------- */
		/* ---  public resize */
		/* ------------------------------------------------- */
		resize : function()
		{

		},

		/* ------------------------------------------------- */
		/* ---  public show */
		/* ------------------------------------------------- */
		show : function()
		{
			var that = this;

			TweenLite.set(window, {scrollTo:{y:0}});

			this.$.container.removeClass("hidden");
			CONF.$.body.addClass("noscrolling");
			CONF.$.body.on("touchmove",function(event)
			{
				event.preventDefault();
			});

			TweenLite.to(this.$.container, 0.3, { 
				opacity: 1,
				ease: Quad.easeIn,
				onComplete : function()
				{
					that.start();
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  public hide */
		/* ------------------------------------------------- */
		hide : function(event)
		{
			if(event)
				event.preventDefault();

			var that = this;

			TweenLite.to(this.$.container, 0.3, {
				opacity: 0,
				ease: Quad.easeOut,
				onComplete: function()
				{
					that.$.container.addClass("hidden");
					that.$.container.empty();
					CONF.$.body.removeClass("noscrolling");
					CONF.$.body.off("touchmove");
				}
			});
		},

		/* ------------------------------------------------- */
		/* ---  public initClose */
		/* ------------------------------------------------- */
		initClose : function(event)
		{
			var that = this;

			this.$.container.find(".close").on("click", $.proxy(this.hide, this));

			this.$.container.on("click", function(event)
			{
				var wrapperExists = $(event.target).find(".popin-wrapper").length > 0;
				if(wrapperExists)
					that.hide();
			});
		},

		/* ------------------------------------------------- */
		/* ---  private load template */
		/* ------------------------------------------------- */
		loadTemplate : function()
		{
			var that = this;

			$.get(this.s.href, function(html)
			{
				that.$.container.html(html);
				that.initClose();
			});
		},
	});
 }());

var APP = APP || {};

(function()
{
	"use strict";

	APP.RoutesManager = APP.Abstract.extend(
	{
		defaults : {
			firstQuery	: true
        },

		init : function(options)
		{
			this._super(options);

			this.EVENT = {
				CHANGE_URL : "changeUrl"
			};

			this.start();
		},

		start : function()
		{
			var that = this;

			if (window.location.hash !== '')
			{
				var url = window.location.hash.replace('#/', '');
				window.location.href = CONF.s.baseUrl + url;
			}
			else if (CONF.s.historyHtml5)
			{
				CONF.$.win.on("popstate", function(event)
				{
					if (!that.s.firstQuery)
					{
						event.preventDefault();

						var state = (event.originalEvent.state !==null) ? event.originalEvent.state : {};
						//state.href = window.location.pathname;
						that.trigger(that.EVENT.CHANGE_URL,	state);
					}
					else
					{
						that.s.firstQuery = false;
					}
				});
			}
		},

		/* ------------------------------------------------- */
		/* ---  public method */
		/* ------------------------------------------------- */
		updateUrl : function(href,state)
		{
			this.s.firstQuery = false;

			if (!state)
				state= {href:href};
			else
				state.href = href;

			if (CONF.s.historyHtml5)
			{
				history.pushState(state, null, href);
			}
			else
			{
				var l = CONF.s.baseUrl.length;
				window.location.hash = href;
			}
		}
	});
})();


var APP = APP || {};


APP.Helper = (function()
{
	"use strict";

	function _tagAnalytics(href)
	{
		if(typeof ga !== 'undefined')
        {
			ga('send', 'pageview', {
                'page': href
			});
		}
	}

	function _checkWindow()
	{
		try
		{
			return (typeof top.document !== 'undefined') ? top : window;
		}
		catch (e)
		{
			return window;
		}
	}

	function _getTransformValue(obj,prop)
	{
		var matrix = obj.css(CONF.s.transform),
			values;

		if(matrix !== 'none')
		{
			values = matrix.split('(')[1].split(')')[0].split(',');
			if (prop=="left")
				return values[4];
			else if (prop=="top")
				return values[5];
			else
				return values[0];
		}
		else
		{
			return 0;
		}
	}

	return {
        tagAnalytics : _tagAnalytics,
        checkWindow : _checkWindow,
        getTransformValue : _getTransformValue
    };

}());



var APP = APP || {};

(function()
{
	"use strict";

	APP.Core = APP.Abstract.extend(
	{
		defaults : {
			scrollTop			: 0,
			ticking 			: false
		},

		init : function(options)
		{
			var that = this,
				documentTitle = that.getDocumentTitle(),
				currentHref = window.location.pathname;

			this._super(options);
			this.$.elFocus 			= null;

			this.section		= CONF.s.section;
			this.template		= CONF.s.template;
			this.ajax			= null;
			this.header			= null;
			this.footer			= null;
			this.page			= null;
			this.pageModule		= null;
			this.pageTools		= null;
			this.barTools		= null;
			this.infoCookies 	= null;

			this.initRoutes();
			this.initHeader();
			this.initFooter();
			this.initInfoCookies();
			this.initHelpAccessibility();
			this.initCustomBanner();

			switch(CONF.s.template)
			{
				case CONF.s.TEMPLATE_TOOLS :
					CONF.$.wrap.addClass('invisible');
					this.initPageTools(this.section,currentHref,documentTitle);
					this.pageTools.start();
					break;
				case CONF.s.TEMPLATE_EXPLORER :
				case CONF.s.TEMPLATE_JOURNEY :
					CONF.$.wrap.addClass('invisible');
					CONF.$.tools.addClass('hidden');
					this.initPageModule(this.section,currentHref,documentTitle);
					this.pageModule.start();
					break;
				default :
					this.initPage(this.section,currentHref,documentTitle);
					this.page.start();
			}

			this.initBarTools(currentHref);

			CONF.$.win.on("resize orientationchange",$.proxy(that.resize, that));
			CONF.$.win.on('scroll',$.proxy(that.scroll, that));
		},

		/* ------------------------------------------------- */
		/* --- listener resize */
		/* ------------------------------------------------- */
		resize : function()
		{
			if (this.page !== null)
				this.page.resize();

			if (this.pageTools !== null)
				this.pageTools.resize();

			if (this.pageModule !== null)
				this.pageModule.resize();

			if (this.header !== null)
				this.header.resize();

			if (this.footer !== null)
				this.footer.resize();

			if (this.barTools !== null)
				this.barTools.resize();
		},

		/* ------------------------------------------------- */
		/* --- listener scroll */
		/* ------------------------------------------------- */
		scroll : function(event)
		{
			var that = this;

			if(!that.s.ticking)
			{
			    window.requestAnimationFrame(updateScroll);
			    that.s.ticking = true;
			}

			function updateScroll()
			{
				var st = CONF.$.doc.scrollTop();

				if (that.barTools !== null)
					that.barTools.scroll(st);

				if (that.header !== null)
					that.header.scroll(st);

				if (that.page !== null)
					that.page.scroll(st);

				that.s.ticking = false;
			}
		},

		/* ------------------------------------------------- */
		/* --- initHelpAccessibility */
		/* ------------------------------------------------- */
		initHelpAccessibility : function()
		{
			CONF.$.helpAccess.find("a").on("focus",function()
			{
				CONF.$.helpAccess.removeClass("visuallyhidden");
			});
		},

		/* ------------------------------------------------- */
		/* --- tools bar */
		/* ------------------------------------------------- */
		initBarTools : function(href)
		{
			var that = this;

			this.barTools = new APP.BarTools();

			if (CONF.s.template==CONF.s.TEMPLATE_PAGE)
				this.barTools.update(href);

			this.barTools.on(this.barTools.EVENT.SHOW_PAGE,$.proxy(that.showPageTools, that));
			this.barTools.on(this.barTools.EVENT.CLOSE_PAGE,$.proxy(that.closePageTools, that));

			this.barTools.resize();
		},

		/* ------------------------------------------------- */
		/* --- header */
		/* ------------------------------------------------- */
		initHeader : function()
		{
			var that = this;

			this.header = new APP.Header();
			this.header.on(this.header.EVENT.OPEN_TEMPLATE,$.proxy(that.openTemplate, that));
			this.header.resize();
		},

		openTemplate : function(obj)
		{
			if (obj.template === CONF.s.TEMPLATE_POPIN)
			{
				this.initPopin(obj);
			}
			else if (obj.template === CONF.s.TEMPLATE_EXPLORER)
			{
				CONF.$.module.html("<div class='intro'><h3>"+CONF.s.wording.bienvenue_dans+"</h3><h4>"+CONF.s.wording.explorer_collection+"</h4><span class='loader'></span></div>");
				if (!obj.datas) obj.datas = '';
  				obj.datas += 'fullLayout=1';
				this.startTransitionPageModule(obj);
			}
			else if (obj.template === CONF.s.TEMPLATE_JOURNEY)
			{
				CONF.$.module.html("<div class='intro'><h3>"+CONF.s.wording.decouvrez+"</h3><h4>"+CONF.s.wording.nos_parcours+"</h4><span class='loader'></span></div>");
				this.startTransitionPageModule(obj);
			}
			else if (obj.template === CONF.s.TEMPLATE_TOOLS)
			{
				this.showPageTools(obj);
			}
			else
				this.startTransitionPage(obj);

		},

		/* ------------------------------------------------- */
		/* --- footer */
		/* ------------------------------------------------- */
		initFooter : function()
		{
			this.footer = new APP.Footer();
		},

		/* ------------------------------------------------- */
		/* --- initInfoCookies */
		/* ------------------------------------------------- */
		initInfoCookies : function()
		{
			if(CONF.$.infoCookies.length > 0)
				this.infoCookies = new APP.InfoCookies();
		},

		showInfoCookies : function()
		{
			if(this.infoCookies !==null)
				this.infoCookies.show();
		},

		/* --------------------------------------------------------------------------------------*/
		/* --- TEMPLATE POPIN */
		/* --------------------------------------------------------------------------------------*/
		initPopin : function(obj)
		{
			this.popin = new APP.PopInForm({href : obj.href});
			this.popin.show();
		},

		initCustomBanner : function(obj)
		{
			var custom_banner_close = Cookies.getJSON('custom_banner_close');

			if(!custom_banner_close) {
				$('.mqb-popin').removeClass('hidden');

				$('.mqb-popin__close, .mqb-popin a').click(function() {
					$(this).parents('.mqb-popin').animate({
						height: 0
					}, 300, function() {
						$(this).addClass('hidden').removeAttr('style');
						Cookies.set('custom_banner_close', true, {expires: 180});
					});
				});
			}
		},

		/* --------------------------------------------------------------------------------------*/
		/* --- TEMPLATE PAGE */
		/* --------------------------------------------------------------------------------------*/

		/* --------- init -- */
		initPage : function(section,href,documentTitle)
		{
			var that = this;

			switch(section)
			{
				case 'index' :
					this.page = new APP.PageHome({section:section,href:href,documentTitle:documentTitle});
					break;

				case 'edito' :
					this.page = new APP.PageEdito({section:section,href:href,documentTitle:documentTitle});
					break;
			}

			this.page.on(this.page.EVENT.LOAD_PAGE,$.proxy(that.loadPage, that));
			this.page.on(this.page.EVENT.REMOVE_PAGE,$.proxy(that.removePage, that));
			this.page.on(this.page.EVENT.OPEN_TEMPLATE,$.proxy(that.openTemplate, that));
			this.page.on(this.page.EVENT.SHOW_INFOCOOKIES,$.proxy(that.showInfoCookies, that));
			this.page.on(this.page.EVENT.UPDATE_URL,function(obj)
			{
				if (CONF.s.historyHtml5)
					that.updateUrl(obj.href);
			});
			this.page.resize();
		},

		/* --------- remove -- */
		removePage : function()
		{
			if (this.page !==null)
			{
				this.page.remove();
				this.page = null;
			}

			this.header.removePrehome();
		},

		/* --------- startTransitionPage -- */
		startTransitionPage : function(obj)
		{
			var that = this;

			this.page.hide(function()
			{
				that.header.removePrehome();
				that.header.hideSmenu();
				that.loadPage(obj);
			});
		},


		/* --------------------------------------------------------------------------------------*/
		/* --- TEMPLATE PAGE TOOLS */
		/* --------------------------------------------------------------------------------------*/

		/* --------- init -- */
		initPageTools : function(section,href,documentTitle,transition)
		{
			var that = this;

			if (!CONF.$.toolsBar.hasClass("opened"))
				CONF.$.toolsBar.addClass("opened").removeAttr("style");

			switch(section)
			{
				case 'agenda' :
					this.pageTools = new APP.Agenda({section:section,href:href,documentTitle:documentTitle});
					break;
				case "search" :
					this.pageTools = new APP.Search({section:section,href:href,documentTitle:documentTitle});
					break;
				case "ticket" :
					this.pageTools = new APP.Ticket({section:section,href:href,documentTitle:documentTitle});
					break;
				case "medias" :
					this.pageTools = new APP.Medias({section:section,href:href,documentTitle:documentTitle});
					break;
				case "info" :
					this.pageTools = new APP.Info({section:section,href:href,documentTitle:documentTitle});
					break;
				case "plan" :
					this.pageTools = new APP.Plan({section:section,href:href,documentTitle:documentTitle});
					break;
			}

			this.pageTools.on(this.pageTools.EVENT.LOAD_PAGE,$.proxy(that.loadPage, that));
			this.pageTools.on(this.pageTools.EVENT.REMOVE_PAGE,$.proxy(that.removePageTools, that));
			this.pageTools.on(this.pageTools.EVENT.CLOSE_PAGE,$.proxy(that.closePageTools, that));
			this.pageTools.on(this.pageTools.EVENT.UPDATE_URL,function(obj)
			{
				if (CONF.s.historyHtml5)
					that.updateUrl(obj.href);
			});
			this.pageTools.on(this.pageTools.EVENT.HIDE_PREHOME,function()
			{
				that.header.hidePrehome();
			});

			if (transition==="slide")
				this.pageTools.slideLeft();
			else if (transition==="opacity")
				this.pageTools.show();
			else
				this.pageTools.resize();

			CONF.$.wrap.attr('aria-hidden',true);
			if ($('#prehome').length) $('#prehome').attr('aria-hidden',true);
		},

		/* --------- show -- */
		showPageTools : function(obj)
		{
			var that = this;

			this.s.scrollTop = CONF.$.doc.scrollTop();

			if (this.pageTools !== null && this.pageTools.s.href == obj.href)
			{
				this.updateUrl(obj.href);
				this.updateDocumentTitle(this.pageTools.s.documentTitle);

				this.section = this.pageTools.s.section;
				this.template = CONF.s.TEMPLATE_TOOLS;

				this.pageTools.slideLeft();
				this.barTools.updateNav(this.pageTools.s.section);
			}
			else if (this.pageTools !== null)
			{
				this.pageTools.hide(function()
				{
					that.addLoader(CONF.$.body,"fixed");
					that.removePageTools();
					that.loadPage(obj);
				});
			}
			else
			{
				this.addLoader(CONF.$.body,"fixed");
				this.removePageTools();
				this.loadPage(obj);
			}
		},

		/* --------- close -- */
		closePageTools : function(obj)
		{
			if (this.page !== null && this.page.s.href == obj.href)
			{
				this.updateUrl(obj.href);
				this.updateDocumentTitle(this.page.s.documentTitle);

				this.section = this.page.s.section;
				this.template = CONF.s.TEMPLATE_PAGE;

				if (this.pageTools !==null)
					this.pageTools.slideRight(this.s.scrollTop);

				this.barTools.close(this.s.scrollTop);
			}
			else
			{
				this.header.removePrehome();
				this.removePage();
				this.loadPage(obj);
			}

			CONF.$.wrap.removeAttr('aria-hidden');
			if ($('#prehome').length) $('#prehome').removeAttr('aria-hidden');
		},

		/* --------- remove -- */
		removePageTools : function()
		{
			if (this.pageTools !==null)
			{
				this.pageTools.remove();
				this.pageTools = null;
			}
		},

		/* --------------------------------------------------------------------------------------*/
		/* --- TEMPLATE MODULES JOURNEY AND EXPLORER */
		/* --------------------------------------------------------------------------------------*/

		initPageModule : function(section,href,documentTitle,datas,transition)
		{
			var that = this;

			switch(section)
			{
				case 'explorer-list' :
					this.pageModule = new APP.ExplorerList({section:section,href:href,documentTitle:documentTitle,datas:datas});
					break;
				case "explorer-thumb" :
					this.pageModule = new APP.ExplorerThumb({section:section,href:href,documentTitle:documentTitle,datas:datas});
					break;
				case "explorer-map" :
					this.pageModule = new APP.ExplorerMap({section:section,href:href,documentTitle:documentTitle,datas:datas});
					break;
				case "explorer-details" :
					this.pageModule = new APP.ExplorerDetails({section:section,href:href,documentTitle:documentTitle,datas:datas});
					break;
				case 'journey-index' :
					this.pageModule = new APP.JourneyIndex({section:section,href:href,documentTitle:documentTitle});
					break;
				case "journey-collection" :
					this.pageModule = new APP.JourneyCollection({section:section,href:href,documentTitle:documentTitle});
					break;
			}

			this.pageModule.on(this.pageModule.EVENT.REMOVE_PAGE,$.proxy(that.removePageModule, that));
			this.pageModule.on(this.pageModule.EVENT.LOAD_PAGE,$.proxy(that.loadPageModule, that));
			this.pageModule.on(this.pageModule.EVENT.CLOSE_PAGE,$.proxy(that.closePageModule, that));
			this.pageModule.on(this.pageModule.EVENT.UPDATE_URL,function(obj)
			{
				if (CONF.s.historyHtml5)
					that.updateUrl(obj.href);
			});


			if (transition==="scale")
			{
				this.fadeOutIntroModule();

				if (this.page !==null)
					this.pageModule.show(this.page.s.href);
				else
					this.pageModule.show();
			}
			else if (transition==="opacity")
				this.pageModule.fadeIn();
			else
				this.pageModule.resize();

			CONF.$.wrap.attr('aria-hidden',true);
			CONF.$.tools.attr('aria-hidden',true);
			if ($('#prehome').length) $('#prehome').attr('aria-hidden',true);

			if (this.$.elFocus !==null)
				this.$.elFocus.focus();
		},

		fadeOutIntroModule : function()
		{
			var $intro = CONF.$.module.find("> div.intro");
			if (CONF.s.hasTransition)
			{
				$intro.addClass("fade").one(CONF.s.transitionEnd,function()
				{
					if ($intro.length)
						$intro.remove();
				});
			}
			else
			{
				$intro.remove();
			}
		},

		/* --------- start transition -- */
		startTransitionPageModule : function(obj)
		{
			var that = this,
				ww 	= CONF.$.win.width(),
				wh 	= CONF.$.win.height(),
				w 	= Math.floor(ww*0.6),
				h 	= Math.floor(wh*0.6);

			CONF.$.module.removeClass("hidden").removeClass("dark").css({
					width:w,
					height:h,
					left:ww/2 - w/2 +"px",
					top:wh/2 - h/2 + "px"
				});

			TweenLite.fromTo(CONF.$.module, 0.4,
    				{opacity:0},
   					{opacity:1,onComplete:function()
   						{
   							that.loadPage(obj);
   						}
   					});
		},

		/* --------- close -- */
		closePageModule : function(obj)
		{
			var that = this;

			if (this.page !== null && this.page.s.href == obj.href)
			{
				this.updateUrl(obj.href);
				this.updateDocumentTitle(this.page.s.documentTitle);

				this.section = this.page.s.section;
				this.template = CONF.s.TEMPLATE_PAGE;

				this.pageModule.close();
				if (this.header !==null) this.header.hideSmenu();
			}
			else
			{
				this.removePage();
				this.loadPage(obj);
				this.pageModule.close();
				if (this.header !==null) this.header.hideSmenu();
			}

			CONF.$.wrap.removeAttr('aria-hidden');
			CONF.$.tools.removeAttr('aria-hidden');
			if ($('#prehome').length) $('#prehome').removeAttr('aria-hidden');

			if (this.$.elFocus !==null)
			{
				this.$.elFocus.focus();
			}
		},

		/* --------- load -- */
		loadPageModule : function(obj)
		{
			var that = this;
			that.pageModule.fadeOut(function()
			{
				that.loadPage(obj);
			});
		},

		/* --------- remove -- */
		removePageModule : function()
		{
			if (this.pageModule !==null)
			{
				this.pageModule.remove();
				this.pageModule = null;
			}
		},

		/* --------------------------------------------------------------------------------------*/
		/* --- LOAD AJAX */
		/* --------------------------------------------------------------------------------------*/
		loadPage : function(obj)
		{
			var that = this,
				d = (obj.datas) ? obj.datas : "";

			if (!obj.browser)
				this.updateUrl(obj.href);

			this.$.elFocus = (obj.$el) ? obj.$el : null;
			//console.log('-------------_>',this.$.elFocus);

			if(this.ajax) this.ajax.abort();

			this.ajax = $.ajax({
					type		: "GET",
					url			: obj.href,
					data		: "format=json&"+d,
					dataType	: 'json',
					success		: function(datas)
					{
						that.loadPageComplete(datas,obj);
					},
					error: function(errorLog)
					{
						log("errorLog : "+errorLog);
					}
			});
		},

		loadPageComplete : function(datas,obj)
		{
			var transition = null;
			this.removeLoader();
			log("loadPageComplete : "+datas.template+" - "+datas.section);

			if (datas.documentTitle)
				this.updateDocumentTitle(datas.documentTitle);

			if (datas.template != "tools" && datas.lngs)
   				this.updateHrefSwitchLng(datas.lngs);

			APP.Helper.tagAnalytics(obj.href);

			if (datas.template == CONF.s.TEMPLATE_TOOLS)
			{
				this.s.scrollTop = CONF.$.doc.scrollTop();

				if (this.pageModule !==null)
					this.pageModule.close();

				transition = (this.template == CONF.s.TEMPLATE_TOOLS) ? "opacity" : "slide";
				this.removePageTools();
				CONF.$.tools.append(datas.html);
				this.initPageTools(datas.section,obj.href,datas.documentTitle,transition);
				this.barTools.updateNav(datas.section);
			}
			else if (datas.template == CONF.s.TEMPLATE_PAGE)
			{
				if (this.pageModule !==null)
					this.pageModule.close();

				this.removePage();
				CONF.$.main.append(datas.html);
				this.initPage(datas.section,obj.href,datas.documentTitle);
				this.barTools.update(obj.href);
				this.page.start();
				this.header.update();

				if (CONF.$.body.find(".mask-transition").length)
				{
					this.page.show();
				}
				else if (!CONF.$.tools.hasClass("closed"))
				{
					this.pageTools.slideRight(this.s.scrollTop);
					this.barTools.close(this.s.scrollTop);
					TweenLite.set(window, {scrollTo:{y:0}});
				}
			}
			else //module template journey or explorer
			{
				var d = (obj.datas) ? obj.datas : null;

				transition = (this.pageModule !==null) ? "opacity" : "scale";

				this.removePageModule();

				CONF.$.module.removeClass("hidden").append(datas.html);
				this.initPageModule(datas.section,obj.href,datas.documentTitle,d,transition);
			}

			this.section = datas.section;
			this.template = datas.template;
		},

		/* ------------------------------------------------- */
		/* --- routes  */
		/* ------------------------------------------------- */
		initRoutes : function()
		{
			var that = this;
			this.routes = new APP.RoutesManager();
			this.routes.on(this.routes.EVENT.CHANGE_URL,$.proxy(that.listenerBrowser, that));
		},

		listenerBrowser : function(obj)
		{
			log('--------------------- listenerBrowser : ' + obj.href);

			obj.datas = 'fullLayout=1';
			obj.browser = true;
			this.loadPage(obj);
		},

		updateUrl : function(href)
		{
			var state = {};

			state.section = this.section;
			state.template = this.template;
			this.routes.updateUrl(href,state);
		},

		updateDocumentTitle : function(title)
		{
			var w = APP.Helper.checkWindow();
			if (w) w.document.title  = title;
		},

		getDocumentTitle : function()
		{
			var w = APP.Helper.checkWindow();
			return w.document.title;
		},

		updateHrefSwitchLng : function(aLngs)
		{
			this.header.updateHrefLng(aLngs);
		}
	});
 }());