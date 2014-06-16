var basedomain = document.domain;
var qasico     = qasico || {};


/*!
 * Mainmenu
 */
(function(){Winkel.MainMenu=function(){this._scroller=null;this._screen=null;this._last_screen=null;this._$dropdown=null;return this};Winkel.MainMenu.prototype.init=function(){var e,c,b,d;this.$window=$(window);this.$body=$("body");this.$menu=$("#main-menu");this.$animation_timer=null;if(!this.$menu.length){return}if(Winkel.settings.main_menu.store_state){d=this._getMenuState();if(d!==null){if(d==="collapsed"){this.$body.addClass("mm-no-transition").addClass("mmc");setTimeout((function(f){return function(){return f.$body.removeClass("mm-no-transition")}})(this),20)}else{this.$body.addClass("mm-no-transition").removeClass("mmc");setTimeout((function(f){return function(){return f.$body.removeClass("mm-no-transition")}})(this),20)}}}e=$("#small-screen-width-point");c=$("#tablet-screen-width-point");b=this;this._screen=getScreenSize(e,c);this._last_screen=this._screen;this.turnOnAnimation(true);this.$window.on("pa.loaded",(function(f){return function(){$("#main-menu .navigation > li > a > .mm-text").removeClass("no-animation");$("#main-menu .navigation > .mm-dropdown > ul").removeClass("no-animation");return $("#main-menu .menu-content").removeClass("no-animation")}})(this));this.$window.on("resize.pa.mm",(function(f){return function(){f._last_screen=f._screen;f._screen=getScreenSize(e,c);f.closeCurrentDropdown(true);if((f._screen==="small"&&f._last_screen!==f._screen)||(f._screen==="tablet"&&f._last_screen==="small")){f.$body.addClass("mm-no-transition");return setTimeout(function(){return f.$body.removeClass("mm-no-transition")},20)}}})(this));this.animation_end=(function(f){return function(){if(f.$animation_timer){window.clearTimeout(f.$animation_timer);f.$animation_timer=null}return f.$animation_timer=window.setTimeout(function(){f.$menu.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");return $(window).trigger("resize")},200)}})(this);this.$window.on("click.pa.mm",(function(f){return function(){return f.closeCurrentDropdown(true)}})(this));$(window).on("pa.screen.small",(function(f){return function(){if(f._scroller===null){return f._setupScroller()}}})(this)).on("pa.screen.tablet pa.screen.desktop",(function(f){return function(){if(f.$menu.css("position")==="fixed"){if(f._scroller===null){return f._setupScroller()}}else{if(f._scroller!==null){return f._removeScroller()}}}})(this));this.$menu.find(".navigation > .mm-dropdown").addClass("mm-dropdown-root");this.$menu.on("click.pa.mm-dropdown",".mm-dropdown > a",function(){var f;f=$(this).parent(".mm-dropdown");if(f.hasClass("mm-dropdown-root")&&b._collapsed()){if(f.hasClass("mmc-dropdown-open")){if(f.hasClass("freeze")){b.closeCurrentDropdown(true)}else{b.freezeDropdown(f)}}else{b.openDropdown(f,true)}}else{if(f.hasClass("open")){b.collapseSubmenu(f,true)}else{if(Winkel.settings.main_menu.accordion){b.collapseAllSubmenus(f)}b.expandSubmenu(f,true)}}return false});this.$menu.find(".navigation").on("mouseenter.pa.mm-dropdown",".mm-dropdown-root",function(){if(b._collapsed()&&(!b._$dropdown||!b._$dropdown.hasClass("freeze"))){return b.openDropdown($(this))}}).on("mouseleave.pa.mm-dropdown",".mm-dropdown-root",function(){return b.closeCurrentDropdown()});return $("#main-menu-toggle").on("click.pa.mm_toggle",(function(f){return function(){f._screen=getScreenSize(e,c);if(f._screen==="small"||f._screen==="tablet"){$("#main-navbar-collapse").removeClass("in").removeClass("collapsing").stop().addClass("collapse").css("height","0px");$("#main-navbar .navbar-toggle").addClass("collapsed");f.$body.removeClass("mm-no-transition").toggleClass("mme")}else{f.$body.toggleClass("mmc");if(Winkel.settings.main_menu.store_state){f._storeMenuState(f.$body.hasClass("mmc"))}if($.support.transition){f.$menu.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",$.proxy(f.animation_end,f))}else{$(window).trigger("resize")}}if(f._scroller){return setTimeout($.proxy(f._updateScroller,f),100)}}})(this))};Winkel.MainMenu.prototype._collapsed=function(){return(this._screen==="tablet"&&!this.$body.hasClass("mme"))||(this._screen==="desktop"&&this.$body.hasClass("mmc"))};Winkel.MainMenu.prototype._setupScroller=function(){if(this._scroller!==null){return}if($("html").hasClass("gt-ie8")){this._scroller=new IScroll("#"+this.$menu.attr("id"),{mouseWheel:true});this._scroller.on("scrollStart",(function(b){return function(){return b.closeCurrentDropdown(true)}})(this))}else{this._scroller=true}$(window).on("pa.resize.mm",$.proxy(this._updateScroller,this));return this._updateScroller()};Winkel.MainMenu.prototype._removeScroller=function(){if(this._scroller===null){return}if(this._scroller!==true){this._scroller.destroy()}this._scroller=null;$(window).off("pa.resize.mm");return this.$menu.attr("style","")};Winkel.MainMenu.prototype._updateScroller=function(){if(this._scroller===null){return}if(this._scroller!==true){return this._scroller.refresh()}else{if(this.$menu.find("> div").outerHeight()>this.$menu.outerHeight()){return this.$menu.css({"overflow-y":"scroll","overflow-y":"scroll","-ms-overflow-x":"hidden","overflow-x":"hidden"})}else{return this.$menu.attr("style","")}}};Winkel.MainMenu.prototype._updateDropdownScroller=function(c){var d,b;d=c.parents(".mmc-dropdown-open");if(d.length){b=d.data("scroller");if(b&&b!==true){return b.refresh()}}};Winkel.MainMenu.prototype._getSubmenuHeight=function(c){var b;if(c.parent(".mm-dropdown").hasClass("open")){b=c.height()}else{b=c.addClass("get-height").height();c.removeClass("get-height")}return b};Winkel.MainMenu.prototype.collapseSubmenu=function(b,c){var d;d=$("> ul",b);return d.animate({height:0},Winkel.settings.main_menu.animation_speed,(function(e){return function(){b.removeClass("open");d.css({display:"none",height:"auto"});$(".mm-dropdown.open",b).removeClass("open").find("> ul").css({display:"none",height:"auto"});if(c){e._updateScroller()}return e._updateDropdownScroller(b)}})(this))};Winkel.MainMenu.prototype.collapseAllSubmenus=function(c,d){var b;if(d==null){d=false}b=this;return c.parent().find("> .mm-dropdown.open").each(function(){if(!d||!$(this).is(c)){return b.collapseSubmenu($(this))}})};Winkel.MainMenu.prototype.expandSubmenu=function(c,d){var b,e;e=$("> ul",c);b=this._getSubmenuHeight(e);e.css({display:"block",height:0});c.addClass("open");return e.animate({height:b},Winkel.settings.main_menu.animation_speed,(function(f){return function(){e.attr("style","");if(d){f._updateScroller()}return f._updateDropdownScroller(c)}})(this))};Winkel.MainMenu.prototype.openDropdown=function(c,d){var i,f,e,g,j,k,h,b;if(d==null){d=false}if(this._$dropdown){this.closeCurrentDropdown(d)}this._$dropdown=c;f=$("> ul",c);i=f.find("> .mmc-title");if(i.length===0){i=$('<div class="mmc-title"></div>').text($("> a > .mm-text",c).text());f.prepend(i)}c.addClass("mmc-dropdown-open");k=(function(l){return function(n){var m;if($("html").hasClass("gt-ie8")){m=new IScroll("#mmc-wrapper",{mouseWheel:true});if(l._scroller&&l._scroller!==null){m.on("beforeScrollStart",function(){return l._scroller.disable()});m.on("scrollEnd",function(){return l._scroller.enable()})}}else{m=true;n.css({"overflow-y":"scroll","overflow-y":"scroll","-ms-overflow-x":"hidden","overflow-x":"hidden"})}return c.data("scroller",m)}})(this);if(this.$body.hasClass("main-menu-fixed")){b=this.$window.innerHeight();h=c.position().top;j=f.find("> .mmc-title").outerHeight()+f.find("> li").first().outerHeight()*3;if((h+j)>b){g=h-$("#main-navbar").outerHeight();c.addClass("top")}else{g=b-h-c.outerHeight()}e=$('<div id="mmc-wrapper" style="overflow:hidden;position:relative;max-height:'+g+'px;"></div>');e.append($("<div></div>").append(f.find("> li"))).appendTo(f);k(e);if(c.hasClass("top")){f.append(i)}}if(d){return this.freezeDropdown(c)}};Winkel.MainMenu.prototype.closeCurrentDropdown=function(d){var c,b;if(d==null){d=false}if(!this._$dropdown||(this._$dropdown.hasClass("freeze")&&!d)){return}c=this._$dropdown.find("> ul");b=this._$dropdown.data("scroller");if(b){if(b!==true){b.destroy()}this._$dropdown.data("scroller",null);c.append($("#mmc-wrapper > div > li"));$("#mmc-wrapper").remove()}if(this._scroller&&this._scroller!==true){this._scroller.enable()}this._$dropdown.removeClass("mmc-dropdown-open freeze top");return this._$dropdown=null};Winkel.MainMenu.prototype.freezeDropdown=function(b){return b.addClass("freeze")};Winkel.MainMenu.prototype.turnOnAnimation=function(b){if(b==null){b=false}this.$body.addClass("main-menu-animated");if(b){$("#main-menu .navigation > li > a > .mm-text").addClass("no-animation");$("#main-menu .navigation > .mm-dropdown > ul").addClass("no-animation");$("#main-menu .menu-content").addClass("no-animation")}$("#main-menu .navigation > li > a > .mm-text").addClass("mmc-dropdown-delay animated fadeIn");$("#main-menu .navigation > .mm-dropdown > ul").addClass("mmc-dropdown-delay animated fadeInLeft");$("#main-menu .menu-content").addClass("animated fadeIn");if(this.$body.hasClass("main-menu-right")||(this.$body.hasClass("right-to-left")&&!this.$body.hasClass("main-menu-right"))){return $("#main-menu .navigation > .mm-dropdown > ul").addClass("fadeInRight")}else{return $("#main-menu .navigation > .mm-dropdown > ul").addClass("fadeInLeft")}};Winkel.MainMenu.prototype.turnOffAnimation=function(){this.$body.removeClass("main-menu-animated");$("#main-menu .navigation > li > a > .mm-text").removeClass("mmc-dropdown-delay animated fadeIn");$("#main-menu .menu-content").removeClass("animated fadeIn");return $("#main-menu .navigation > .mm-dropdown > ul").removeClass("mmc-dropdown-delay animated fadeInLeft fadeInRight")};Winkel.MainMenu.prototype._getMenuState=function(){return Winkel.getStoredValue(Winkel.settings.main_menu.store_state_key,null)};Winkel.MainMenu.prototype._storeMenuState=function(b){if(!Winkel.settings.main_menu.store_state){return}return Winkel.storeValue(Winkel.settings.main_menu.store_state_key,b?"collapsed":"expanded")};Winkel.MainMenu.Constructor=Winkel.MainMenu;Winkel.addInitializer(function(){return Winkel.initPlugin("main_menu",new Winkel.MainMenu)})}).call(this);

/*!
 * Alert
 */
(function(){var c,b;c="pa-page-alerts-box";b=function(){return this};b.DEFAULTS={type:"warning",close_btn:true,classes:false,namespace:"pa_page_alerts",animate:true,auto_close:false};b.TYPES_HASH={warning:"",danger:"alert-danger",success:"alert-success",info:"alert-info"};b.prototype.init=function(){var d;d=this;return $("#main-wrapper").on("click.pa.alerts","#"+c+" .close",function(){d.close($(this).parents(".alert"));return false})};b.prototype.add=function(h,g){var i,e,k,d,f,j;g=$.extend({},b.DEFAULTS,g||{});i=$('<div class="alert alert-page '+g.namespace+" "+b.TYPES_HASH[g.type]+'" />').html(h);if(g.classes){i.addClass(g.classes)}if(g.close_btn){i.prepend($('<button type="button" class="close" />').html("&times;"))}if(g.animate){i.attr("data-animate","true")}k=$("#"+c);if(!k.length){k=$('<div id="'+c+'" />').prependTo($("#content-wrapper"))}e=$("#"+c+" ."+g.namespace);d=i.css({visibility:"hidden",position:"absolute",width:"100%"}).appendTo("body").outerHeight();j=i.css("padding-top");f=i.css("padding-bottom");if(g.animate){i.attr("style","").css({overflow:"hidden",height:0,"padding-top":0,"padding-bottom":0})}if(e.length){e.last().after(i)}else{k.append(i)}if(g.animate){return i.animate({height:d,"padding-top":j,"padding-bottom":f},500,(function(l){return function(){i.attr("style","");if(g.auto_close){return $.data(i,"timer",setTimeout(function(){return l.close(i)},g.auto_close*1000))}}})(this))}else{return i.attr("style","")}};b.prototype.close=function(d){if(d.attr("data-animate")==="true"){return d.animate({height:0,"padding-top":0,"padding-bottom":0},500,function(){if($.data(d,"timer")){clearTimeout($.data(d,"timer"))}return d.remove()})}else{if($.data(d,"timer")){clearTimeout($.data(d,"timer"))}return d.remove()}};b.prototype.clear=function(f,g){var d,e;if(f==null){f=true}if(g==null){g="pa_page_alerts"}d=$("#"+c+" ."+g);if(d.length){e=this;if(f){return d.each(function(){return e.close($(this))})}else{return d.remove()}}};b.prototype.clearAll=function(e){var d;if(e==null){e=true}if(e){d=this;return $("#"+c+" .alert").each(function(){return d.close($(this))})}else{return $("#"+c).remove()}};b.prototype.getContainerId=function(){return c};b.Constructor=b;Winkel.addInitializer(function(){return Winkel.initPlugin("alerts",new b)})}).call(this);

/*!
 * Limiter input ?
 */
(function(){var b;b=function(e,c,d){if(d==null){d={}}this.limit=c;this.$el=e;this.options=$.extend({},b.DEFAULTS,d||{});this.$label=this.options.label&&$(this.options.label).length?$(".limiter-count",this.options.label):null;this.textarea=this.$el.is("textarea");if(!this.textarea){this.$el.attr("maxlength",this.limit)}this.$el.on("keyup focus",$.proxy(this.updateCounter,this));return this.updateCounter()};b.prototype.updateCounter=function(){var d,c;c=this.textarea?this.$el[0].value.replace(/\r?\n/g,"\n"):this.$el.val();d=c.length;if(d>this.limit){this.$el.val(c.substr(0,this.limit));d=this.limit}if(this.$label){return this.$label.html(this.limit-d)}};b.DEFAULTS={label:null};$.fn.limiter=function(c,d){return this.each(function(){var e;e=$(this);if(!e.attr("data-limiter")){return $.data(e,"limiter",new b(e,c,d))}})};$.fn.limiter.Constructor=b}).call(this);

/*!
 * Expanding Input ?
 */
(function(){var b;b=function(d,c){if(c==null){c={}}this.options=$.extend({},b.DEFAULTS,c||{});this.$container=d;this.$target=this.options.target&&this.$container.find(this.options.target).length?this.$container.find(this.options.target):null;this.$content=this.options.hidden_content&&this.$container.find(this.options.hidden_content).length?this.$container.find(this.options.hidden_content):null;this.$container.addClass("expanding-input");if(this.$target){this.$target.addClass("expanding-input-target");if(this.$target.hasClass("input-sm")){this.$container.addClass("expanding-input-sm")}if(this.$target.hasClass("input-lg")){this.$container.addClass("expanding-input-lg")}}if(this.$content){this.$content.addClass("expanding-input-content")}this.$overlay=$('<div class="expanding-input-overlay"></div>').appendTo(this.$container);if(this.$target&&this.$target.attr("placeholder")){if(!this.options.placeholder){this.options.placeholder=this.$target.attr("placeholder")}this.$target.attr("placeholder","")}if(this.options.placeholder){this.$overlay.append($('<div class="expanding-input-placeholder"></div>').text(this.options.placeholder))}if(this.$target){this.$target.on("focus",$.proxy(this.expand,this))}return this.$overlay.on("click.expanding_input",$.proxy(this.expand,this))};b.prototype.expand=function(){if(this.$container.hasClass("expanded")){return}if(this.options.onBeforeExpand){this.options.onBeforeExpand.call(this)}this.$overlay.remove();this.$container.addClass("expanded");if(this.$target){setTimeout((function(c){return function(){return c.$target.focus()}})(this),1)}if(this.$target&&this.options.placeholder){this.$target.attr("placeholder",this.options.placeholder)}if(this.options.onAfterExpand){return this.options.onAfterExpand.call(this)}};b.DEFAULTS={target:null,hidden_content:null,placeholder:null,onBeforeExpand:null,onAfterExpand:null};$.fn.expandingInput=function(c){return this.each(function(){var d;d=$(this);if(!d.attr("data-expandingInput")){return $.data(d,"expandingInput",new b(d,c))}})};$.fn.expandingInput.Constructor=b}).call(this);

/*!
 * Wizard
 */
(function(){var b,c;c=function(d,e){return d.css({width:e,"max-width":e,"min-width":e})};b=function(d,f){var g,e;if(f==null){f={}}this.options=$.extend({},b.DEFAULTS,f||{});this.$element=d;this.$wrapper=$(".wizard-wrapper",this.$element);this.$steps=$(".wizard-steps",this.$wrapper);this.$step_items=$("> li",this.$steps);this.steps_count=this.$step_items.length;this.$content=$(".wizard-content",this.$element);this.current_step=null;this.$current_item=null;this.isFreeze=false;this.isRtl=$("body").hasClass("right-to-left");this.resizeStepItems();g=$("> li.active",this.$steps);if(g.length===0){g=$("> li:first-child",this.$steps)}this.$current_item=g.addClass("active");this.current_step=g.index()+1;$(g.attr("data-target"),this.$content).css({display:"block"});this.placeStepItems();this._setPrevItemStates(this.current_step-1);$(window).on("pa.resize.wizard",(function(h){return function(){$.proxy(h.resizeStepItems,h)();return $.proxy(h.placeStepItems,h)()}})(this));e=this;this.$steps.on("click","> li",function(){var h;h=$(this);if(h.hasClass("completed")){return e.setCurrentStep(h.index()+1)}});return this};b.DEFAULTS={step_item_min_width:200,onChange:null,onFinish:null};b.prototype.resizeStepItems=function(){var d;if(this.$element.width()>(b.DEFAULTS.step_item_min_width*this.$step_items.length)){d=Math.floor(this.$element.width()/this.$step_items.length)}else{d=b.DEFAULTS.step_item_min_width}return this.$step_items.each(function(){return c($(this),d)})};b.prototype.placeStepItems=function(){var k,j,g,f,e,i,h;i=0;f=this.$current_item.position();g=this.$element.outerWidth();h=this.$steps.outerWidth();k=this.$current_item.outerWidth();j=(g-k)/2;if(!this.isRtl){if(g<h&&f.left>j){i=-1*f.left+j;if((h+i)<g){i=-1*h+g}}return this.$steps.css({left:i})}else{e=h-f.left-k;if(g<h&&e>j){i=-1*e+j;if((h+i)<g){i=-1*h+g}}return this.$steps.css({right:i})}};b.prototype.setCurrentStep=function(d){if(this.isFreeze){return}return $(this.$current_item.attr("data-target"),this.$content).css({opacity:1}).animate({opacity:0},200,(function(e){return function(){$(e.$current_item.attr("data-target"),e.$content).attr("style","");e._clearItemStates(d-1);e.$current_item=e.$step_items.eq(d-1).addClass("active");e.current_step=d;e._setPrevItemStates(d-1);return $(e.$current_item.attr("data-target"),e.$content).css({display:"block",opacity:0}).animate({opacity:1},200,function(){if(e.options.onChange){$.proxy(e.options.onChange,e)()}return e.placeStepItems()})}})(this))};b.prototype.nextStep=function(){if(this.isFreeze){return}if(this.current_step>=this.steps_count){if(this.options.onFinish){$.proxy(this.options.onFinish,this)()}return}this.$current_item.removeClass("active").addClass("completed");return this.setCurrentStep(this.current_step+1)};b.prototype.prevStep=function(){if(this.isFreeze){return}if(this.current_step<=1){return}return this.setCurrentStep(this.current_step-1)};b.prototype.currentStep=function(){return this.current_step};b.prototype._clearItemStates=function(e){var f,h,g,d;d=[];for(f=h=e,g=this.steps_count;e<=g?h<g:h>g;f=e<=g?++h:--h){d.push(this.$step_items.eq(f).removeClass("active").removeClass("completed"))}return d};b.prototype._setPrevItemStates=function(f){var e,g,d;d=[];for(e=g=0;0<=f?g<f:g>f;e=0<=f?++g:--g){d.push(this.$step_items.eq(e).addClass("completed"))}return d};b.prototype.freeze=function(){this.isFreeze=true;return this.$element.addClass("freeze")};b.prototype.unfreeze=function(){this.isFreeze=false;return this.$element.removeClass("freeze")};$.fn.pixelWizard=function(f,e){var d,g;g=void 0;d=this.each(function(){var i,h;i=$(this);if(!$.data(this,"pixelWizard")){return $.data(this,"pixelWizard",new b(i,f))}else{if(f&&typeof f==="string"){h=$.data(this,"pixelWizard");if(f==="setCurrentStep"){return h.setCurrentStep(e)}else{if(f==="currentStep"){return g=h.currentStep()}else{if(f==="nextStep"){return h.nextStep()}else{if(f==="prevStep"){return h.prevStep()}else{if(f==="freeze"){return h.freeze()}else{if(f==="unfreeze"){return h.unfreeze()}}}}}}}}});return(g===void 0?d:g)};$.fn.pixelWizard.Constructor=b}).call(this);

/*!
 * File Input
 */
(function(){var b;b=function(d,c){if(c==null){c={}}this.options=$.extend({},b.DEFAULTS,c||{});this.$input=d;this.$el=$('<div class="pixel-file-input"><span class="pfi-filename"></span><div class="pfi-actions"></div></div>').insertAfter(d).append(d);this.$filename=$(".pfi-filename",this.$el);this.$clear_btn=$(b.DEFAULTS.clear_btn_tmpl).addClass("pfi-clear").appendTo($(".pfi-actions",this.$el));this.$choose_btn=$(b.DEFAULTS.choose_btn_tmpl).addClass("pfi-choose").appendTo($(".pfi-actions",this.$el));this.onChange();d.on("change",(function(e){return function(){return $.proxy(e.onChange,e)()}})(this)).on("click",function(f){return f.stopPropagation()});this.$el.on("click",function(){return d.click()});this.$choose_btn.on("click",function(f){return f.preventDefault()});return this.$clear_btn.on("click",(function(e){return function(f){d.wrap("<form>").parent("form").trigger("reset");d.unwrap();$.proxy(e.onChange,e)();f.stopPropagation();return f.preventDefault()}})(this))};b.DEFAULTS={choose_btn_tmpl:'<a href="#" class="btn btn-xs btn-primary">Choose</a>',clear_btn_tmpl:'<a href="#" class="btn btn-xs"><i class="fa fa-times"></i> Clear</a>',placeholder:null};b.prototype.onChange=function(){var c;c=this.$input.val().replace(/\\/g,"/");if(c!==""){this.$clear_btn.css("display","inline-block");this.$filename.removeClass("pfi-placeholder");return this.$filename.text(c.split("/").pop())}else{this.$clear_btn.css("display","none");if(this.options.placeholder){this.$filename.addClass("pfi-placeholder");return this.$filename.text(this.options.placeholder)}else{return this.$filename.text("")}}};$.fn.pixelFileInput=function(c){return this.each(function(){if(!$.data(this,"pixelFileInput")){return $.data(this,"pixelFileInput",new b($(this),c))}})};$.fn.pixelFileInput.Constructor=b}).call(this);

/*!
 * Growl
 */
(function(){var e,d,b,c=function(f,g){return function(){return f.apply(g,arguments)}};e=jQuery;d=(function(){function f(){}f.transitions={webkitTransition:"webkitTransitionEnd",mozTransition:"mozTransitionEnd",oTransition:"oTransitionEnd",transition:"transitionend"};f.transition=function(h){var j,g,i,k;j=h[0];k=this.transitions;for(i in k){g=k[i];if(j.style[i]!=null){return g}}};return f})();b=(function(){f.settings={namespace:"growl",duration:3200,close:"&times;",location:"default",style:"default",size:"medium"};f.growl=function(g){if(g==null){g={}}this.initialize();return new f(g)};f.initialize=function(){return e("body:not(:has(#growls))").append('<div id="growls" />')};function f(g){if(g==null){g={}}this.html=c(this.html,this);this.$growl=c(this.$growl,this);this.$growls=c(this.$growls,this);this.animate=c(this.animate,this);this.remove=c(this.remove,this);this.dismiss=c(this.dismiss,this);this.present=c(this.present,this);this.close=c(this.close,this);this.cycle=c(this.cycle,this);this.unbind=c(this.unbind,this);this.bind=c(this.bind,this);this.render=c(this.render,this);this.settings=e.extend({},f.settings,g);this.$growls().attr("class",this.settings.location);this.render()}f.prototype.render=function(){var g;g=this.$growl();this.$growls().append(g);this.cycle(g)};f.prototype.bind=function(g){if(g==null){g=this.$growl()}return g.find("."+this.settings.namespace+"-close").on("click",this.close)};f.prototype.unbind=function(g){if(g==null){g=this.$growl()}return g.find("."+(this.settings.namespace-close)).off("click",this.close)};f.prototype.cycle=function(g){if(g==null){g=this.$growl()}return g.queue(this.present).delay(this.settings.duration).queue(this.dismiss).queue(this.remove)};f.prototype.close=function(h){var g;h.preventDefault();h.stopPropagation();g=this.$growl();return g.stop().queue(this.dismiss).queue(this.remove)};f.prototype.present=function(h){var g;g=this.$growl();this.bind(g);return this.animate(g,""+this.settings.namespace+"-incoming","out",h)};f.prototype.dismiss=function(h){var g;g=this.$growl();this.unbind(g);return this.animate(g,""+this.settings.namespace+"-outgoing","in",h)};f.prototype.remove=function(g){this.$growl().remove();return g()};f.prototype.animate=function(g,h,i,k){var j;if(i==null){i="in"}j=d.transition(g);g[i==="in"?"removeClass":"addClass"](h);g.offset().position;g[i==="in"?"addClass":"removeClass"](h);if(k==null){return}if(j!=null){g.one(j,k)}else{k()}};f.prototype.$growls=function(){return this.$_growls!=null?this.$_growls:this.$_growls=e("#growls")};f.prototype.$growl=function(){return this.$_growl!=null?this.$_growl:this.$_growl=e(this.html())};f.prototype.html=function(){return"<div class='"+this.settings.namespace+" "+this.settings.namespace+"-"+this.settings.style+" "+this.settings.namespace+"-"+this.settings.size+"'>\n  <div class='"+this.settings.namespace+"-close'>"+this.settings.close+"</div>\n  <div class='"+this.settings.namespace+"-title'>"+this.settings.title+"</div>\n  <div class='"+this.settings.namespace+"-message'>"+this.settings.message+"</div>\n</div>"};return f})();e.growl=function(f){if(f==null){f={}}return b.growl(f)};e.growl.error=function(f){var g;if(f==null){f={}}g={title:"Error!",style:"error"};return e.growl(e.extend(g,f))};e.growl.notice=function(f){var g;if(f==null){f={}}g={title:"Notice!",style:"notice"};return e.growl(e.extend(g,f))};e.growl.warning=function(f){var g;if(f==null){f={}}g={title:"Warning!",style:"warning"};return e.growl(e.extend(g,f))}}).call(this);

/*!
 * Morris
 */
(function(){var d,f,b,i,e=[].slice,g=function(k,l){return function(){return k.apply(l,arguments)}},h={}.hasOwnProperty,c=function(n,l){for(var k in l){if(h.call(l,k)){n[k]=l[k]}}function m(){this.constructor=n}m.prototype=l.prototype;n.prototype=new m();n.__super__=l.prototype;return n},j=[].indexOf||function(n){for(var m=0,k=this.length;m<k;m++){if(m in this&&this[m]===n){return m}}return-1};f=window.Morris={};d=jQuery;f.EventEmitter=(function(){function k(){}k.prototype.on=function(l,m){if(this.handlers==null){this.handlers={}}if(this.handlers[l]==null){this.handlers[l]=[]}this.handlers[l].push(m);return this};k.prototype.fire=function(){var o,q,n,s,m,r,l;n=arguments[0],o=2<=arguments.length?e.call(arguments,1):[];if((this.handlers!=null)&&(this.handlers[n]!=null)){r=this.handlers[n];l=[];for(s=0,m=r.length;s<m;s++){q=r[s];l.push(q.apply(null,o))}return l}};return k})();f.commas=function(m){var n,l,k,o;if(m!=null){k=m<0?"-":"";n=Math.abs(m);l=Math.floor(n).toFixed(0);k+=l.replace(/(?=(?:\d{3})+$)(?!^)/g,",");o=n.toString();if(o.length>l.length){k+=o.slice(l.length)}return k}else{return"-"}};f.pad2=function(k){return(k<10?"0":"")+k};f.Grid=(function(l){c(k,l);function k(m){this.resizeHandler=g(this.resizeHandler,this);var n=this;if(typeof m.element==="string"){this.el=d(document.getElementById(m.element))}else{this.el=d(m.element)}if((this.el==null)||this.el.length===0){throw new Error("Graph container element not found")}if(this.el.css("position")==="static"){this.el.css("position","relative")}this.options=d.extend({},this.gridDefaults,this.defaults||{},m);if(typeof this.options.units==="string"){this.options.postUnits=m.units}this.raphael=new Raphael(this.el[0]);this.elementWidth=null;this.elementHeight=null;this.dirty=false;this.selectFrom=null;if(this.init){this.init()}this.setData(this.options.data);this.el.bind("mousemove",function(q){var u,v,r,s,o;v=n.el.offset();o=q.pageX-v.left;if(n.selectFrom){u=n.data[n.hitTest(Math.min(o,n.selectFrom))]._x;r=n.data[n.hitTest(Math.max(o,n.selectFrom))]._x;s=r-u;return n.selectionRect.attr({x:u,width:s})}else{return n.fire("hovermove",o,q.pageY-v.top)}});this.el.bind("mouseleave",function(o){if(n.selectFrom){n.selectionRect.hide();n.selectFrom=null}return n.fire("hoverout")});this.el.bind("touchstart touchmove touchend",function(o){var q,r;r=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];q=n.el.offset();n.fire("hover",r.pageX-q.left,r.pageY-q.top);return r});this.el.bind("click",function(o){var q;q=n.el.offset();return n.fire("gridclick",o.pageX-q.left,o.pageY-q.top)});if(this.options.rangeSelect){this.selectionRect=this.raphael.rect(0,0,0,this.el.innerHeight()).attr({fill:this.options.rangeSelectColor,stroke:false}).toBack().hide();this.el.bind("mousedown",function(o){var q;q=n.el.offset();return n.startRange(o.pageX-q.left)});this.el.bind("mouseup",function(o){var q;q=n.el.offset();n.endRange(o.pageX-q.left);return n.fire("hovermove",o.pageX-q.left,o.pageY-q.top)})}if(this.options.resize){d(window).bind("resize",function(o){if(n.timeoutId!=null){window.clearTimeout(n.timeoutId)}return n.timeoutId=window.setTimeout(n.resizeHandler,100)})}if(this.postInit){this.postInit()}}k.prototype.gridDefaults={dateFormat:null,axes:true,grid:true,gridLineColor:"#aaa",gridStrokeWidth:0.5,gridTextColor:"#888",gridTextSize:12,gridTextFamily:"sans-serif",gridTextWeight:"normal",hideHover:false,yLabelFormat:null,xLabelAngle:0,numLines:5,padding:25,parseTime:true,postUnits:"",preUnits:"",ymax:"auto",ymin:"auto 0",goals:[],goalStrokeWidth:1,goalLineColors:["#666633","#999966","#cc6666","#663333"],events:[],eventStrokeWidth:1,eventLineColors:["#005a04","#ccffbb","#3a5f0b","#005502"],rangeSelect:null,rangeSelectColor:"#eef",resize:false};k.prototype.setData=function(r,D){var u,C,s,x,E,v,F,n,A,z,o,m,B,w,q;if(D==null){D=true}this.options.data=r;if((r==null)||r.length===0){this.data=[];this.raphael.clear();if(this.hover!=null){this.hover.hide()}return}m=this.cumulative?0:null;B=this.cumulative?0:null;if(this.options.goals.length>0){E=Math.min.apply(Math,this.options.goals);x=Math.max.apply(Math,this.options.goals);B=B!=null?Math.min(B,E):E;m=m!=null?Math.max(m,x):x}this.data=(function(){var H,G,y;y=[];for(s=H=0,G=r.length;H<G;s=++H){F=r[s];v={src:F};v.label=F[this.options.xkey];if(this.options.parseTime){v.x=f.parseDate(v.label);if(this.options.dateFormat){v.label=this.options.dateFormat(v.x)}else{if(typeof v.label==="number"){v.label=new Date(v.label).toString()}}}else{v.x=s;if(this.options.xLabelFormat){v.label=this.options.xLabelFormat(v)}}A=0;v.y=(function(){var K,I,L,J;L=this.options.ykeys;J=[];for(C=K=0,I=L.length;K<I;C=++K){o=L[C];w=F[o];if(typeof w==="string"){w=parseFloat(w)}if((w!=null)&&typeof w!=="number"){w=null}if(w!=null){if(this.cumulative){A+=w}else{if(m!=null){m=Math.max(w,m);B=Math.min(w,B)}else{m=B=w}}}if(this.cumulative&&(A!=null)){m=Math.max(A,m);B=Math.min(A,B)}J.push(w)}return J}).call(this);y.push(v)}return y}).call(this);if(this.options.parseTime){this.data=this.data.sort(function(G,y){return(G.x>y.x)-(y.x>G.x)})}this.xmin=this.data[0].x;this.xmax=this.data[this.data.length-1].x;this.events=[];if(this.options.events.length>0){if(this.options.parseTime){this.events=(function(){var I,G,H,y;H=this.options.events;y=[];for(I=0,G=H.length;I<G;I++){u=H[I];y.push(f.parseDate(u))}return y}).call(this)}else{this.events=this.options.events}this.xmax=Math.max(this.xmax,Math.max.apply(Math,this.events));this.xmin=Math.min(this.xmin,Math.min.apply(Math,this.events))}if(this.xmin===this.xmax){this.xmin-=1;this.xmax+=1}this.ymin=this.yboundary("min",B);this.ymax=this.yboundary("max",m);if(this.ymin===this.ymax){if(B){this.ymin-=1}this.ymax+=1}if(((q=this.options.axes)===true||q==="both"||q==="y")||this.options.grid===true){if(this.options.ymax===this.gridDefaults.ymax&&this.options.ymin===this.gridDefaults.ymin){this.grid=this.autoGridLines(this.ymin,this.ymax,this.options.numLines);this.ymin=Math.min(this.ymin,this.grid[0]);this.ymax=Math.max(this.ymax,this.grid[this.grid.length-1])}else{n=(this.ymax-this.ymin)/(this.options.numLines-1);this.grid=(function(){var H,y,I,G;G=[];for(z=H=y=this.ymin,I=this.ymax;n>0?H<=I:H>=I;z=H+=n){G.push(z)}return G}).call(this)}}this.dirty=true;if(D){return this.redraw()}};k.prototype.yboundary=function(q,n){var o,m;o=this.options["y"+q];if(typeof o==="string"){if(o.slice(0,4)==="auto"){if(o.length>5){m=parseInt(o.slice(5),10);if(n==null){return m}return Math[q](n,m)}else{if(n!=null){return n}else{return 0}}}else{return parseInt(o,10)}}else{return o}};k.prototype.autoGridLines=function(x,n,u){var z,r,m,q,w,o,v,s,A;w=n-x;A=Math.floor(Math.log(w)/Math.log(10));v=Math.pow(10,A);r=Math.floor(x/v)*v;z=Math.ceil(n/v)*v;o=(z-r)/(u-1);if(v===1&&o>1&&Math.ceil(o)!==o){o=Math.ceil(o);z=r+o*(u-1)}if(r<0&&z>0){r=Math.floor(x/o)*o;z=Math.ceil(n/o)*o}if(o<1){q=Math.floor(Math.log(o)/Math.log(10));m=(function(){var B,y;y=[];for(s=B=r;o>0?B<=z:B>=z;s=B+=o){y.push(parseFloat(s.toFixed(1-q)))}return y})()}else{m=(function(){var B,y;y=[];for(s=B=r;o>0?B<=z:B>=z;s=B+=o){y.push(s)}return y})()}return m};k.prototype._calc=function(){var v,u,r,q,n,o,s,m;n=this.el.width();r=this.el.height();if(this.elementWidth!==n||this.elementHeight!==r||this.dirty){this.elementWidth=n;this.elementHeight=r;this.dirty=false;this.left=this.options.padding;this.right=this.elementWidth-this.options.padding;this.top=this.options.padding;this.bottom=this.elementHeight-this.options.padding;if((s=this.options.axes)===true||s==="both"||s==="y"){o=(function(){var z,y,w,x;w=this.grid;x=[];for(z=0,y=w.length;z<y;z++){u=w[z];x.push(this.measureText(this.yAxisFormat(u)).width)}return x}).call(this);this.left+=Math.max.apply(Math,o)}if((m=this.options.axes)===true||m==="both"||m==="x"){v=(function(){var x,y,w;w=[];for(q=x=0,y=this.data.length;0<=y?x<y:x>y;q=0<=y?++x:--x){w.push(this.measureText(this.data[q].text,-this.options.xLabelAngle).height)}return w}).call(this);this.bottom-=Math.max.apply(Math,v)}this.width=Math.max(1,this.right-this.left);this.height=Math.max(1,this.bottom-this.top);this.dx=this.width/(this.xmax-this.xmin);this.dy=this.height/(this.ymax-this.ymin);if(this.calc){return this.calc()}}};k.prototype.transY=function(m){return this.bottom-(m-this.ymin)*this.dy};k.prototype.transX=function(m){if(this.data.length===1){return(this.left+this.right)/2}else{return this.left+(m-this.xmin)*this.dx}};k.prototype.redraw=function(){this.raphael.clear();this._calc();this.drawGrid();this.drawGoals();this.drawEvents();if(this.draw){return this.draw()}};k.prototype.measureText=function(q,o){var m,n;if(o==null){o=0}n=this.raphael.text(100,100,q).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).rotate(o);m=n.getBBox();n.remove();return m};k.prototype.yAxisFormat=function(m){return this.yLabelFormat(m)};k.prototype.yLabelFormat=function(m){if(typeof this.options.yLabelFormat==="function"){return this.options.yLabelFormat(m)}else{return""+this.options.preUnits+(f.commas(m))+this.options.postUnits}};k.prototype.drawGrid=function(){var q,v,s,o,r,m,u,n;if(this.options.grid===false&&((r=this.options.axes)!==true&&r!=="both"&&r!=="y")){return}m=this.grid;n=[];for(s=0,o=m.length;s<o;s++){q=m[s];v=this.transY(q);if((u=this.options.axes)===true||u==="both"||u==="y"){this.drawYAxisLabel(this.left-this.options.padding/2,v,this.yAxisFormat(q))}if(this.options.grid){n.push(this.drawGridLine("M"+this.left+","+v+"H"+(this.left+this.width)))}else{n.push(void 0)}}return n};k.prototype.drawGoals=function(){var o,q,r,u,n,s,m;s=this.options.goals;m=[];for(r=u=0,n=s.length;u<n;r=++u){q=s[r];o=this.options.goalLineColors[r%this.options.goalLineColors.length];m.push(this.drawGoal(q,o))}return m};k.prototype.drawEvents=function(){var o,r,q,u,n,s,m;s=this.events;m=[];for(q=u=0,n=s.length;u<n;q=++u){r=s[q];o=this.options.eventLineColors[q%this.options.eventLineColors.length];m.push(this.drawEvent(r,o))}return m};k.prototype.drawGoal=function(n,m){return this.raphael.path("M"+this.left+","+(this.transY(n))+"H"+this.right).attr("stroke",m).attr("stroke-width",this.options.goalStrokeWidth)};k.prototype.drawEvent=function(n,m){return this.raphael.path("M"+(this.transX(n))+","+this.bottom+"V"+this.top).attr("stroke",m).attr("stroke-width",this.options.eventStrokeWidth)};k.prototype.drawYAxisLabel=function(o,m,n){return this.raphael.text(o,m,n).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor).attr("text-anchor","end")};k.prototype.drawGridLine=function(m){return this.raphael.path(m).attr("stroke",this.options.gridLineColor).attr("stroke-width",this.options.gridStrokeWidth)};k.prototype.startRange=function(m){this.hover.hide();this.selectFrom=m;return this.selectionRect.attr({x:m,width:0}).show()};k.prototype.endRange=function(m){var n,o;if(this.selectFrom){o=Math.min(this.selectFrom,m);n=Math.max(this.selectFrom,m);this.options.rangeSelect.call(this.el,{start:this.data[this.hitTest(o)].x,end:this.data[this.hitTest(n)].x});return this.selectFrom=null}};k.prototype.resizeHandler=function(){this.timeoutId=null;this.raphael.setSize(this.el.width(),this.el.height());return this.redraw()};return k})(f.EventEmitter);f.parseDate=function(x){var z,y,l,w,v,C,u,s,k,B,A;if(typeof x==="number"){return x}y=x.match(/^(\d+) Q(\d)$/);w=x.match(/^(\d+)-(\d+)$/);v=x.match(/^(\d+)-(\d+)-(\d+)$/);u=x.match(/^(\d+) W(\d+)$/);s=x.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/);k=x.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/);if(y){return new Date(parseInt(y[1],10),parseInt(y[2],10)*3-1,1).getTime()}else{if(w){return new Date(parseInt(w[1],10),parseInt(w[2],10)-1,1).getTime()}else{if(v){return new Date(parseInt(v[1],10),parseInt(v[2],10)-1,parseInt(v[3],10)).getTime()}else{if(u){B=new Date(parseInt(u[1],10),0,1);if(B.getDay()!==4){B.setMonth(0,1+((4-B.getDay())+7)%7)}return B.getTime()+parseInt(u[2],10)*604800000}else{if(s){if(!s[6]){return new Date(parseInt(s[1],10),parseInt(s[2],10)-1,parseInt(s[3],10),parseInt(s[4],10),parseInt(s[5],10)).getTime()}else{C=0;if(s[6]!=="Z"){C=parseInt(s[8],10)*60+parseInt(s[9],10);if(s[7]==="+"){C=0-C}}return Date.UTC(parseInt(s[1],10),parseInt(s[2],10)-1,parseInt(s[3],10),parseInt(s[4],10),parseInt(s[5],10)+C)}}else{if(k){A=parseFloat(k[6]);z=Math.floor(A);l=Math.round((A-z)*1000);if(!k[8]){return new Date(parseInt(k[1],10),parseInt(k[2],10)-1,parseInt(k[3],10),parseInt(k[4],10),parseInt(k[5],10),z,l).getTime()}else{C=0;if(k[8]!=="Z"){C=parseInt(k[10],10)*60+parseInt(k[11],10);if(k[9]==="+"){C=0-C}}return Date.UTC(parseInt(k[1],10),parseInt(k[2],10)-1,parseInt(k[3],10),parseInt(k[4],10),parseInt(k[5],10)+C,z,l)}}else{return new Date(parseInt(x,10),0,1).getTime()}}}}}}};f.Hover=(function(){k.defaults={"class":"morris-hover morris-default-style"};function k(l){if(l==null){l={}}this.options=d.extend({},f.Hover.defaults,l);this.el=d("<div class='"+this.options["class"]+"'></div>");this.el.hide();this.options.parent.append(this.el)}k.prototype.update=function(m,l,n){this.html(m);this.show();return this.moveTo(l,n)};k.prototype.html=function(l){return this.el.html(l)};k.prototype.moveTo=function(m,u){var l,q,s,n,o,r;o=this.options.parent.innerWidth();n=this.options.parent.innerHeight();q=this.el.outerWidth();l=this.el.outerHeight();s=Math.min(Math.max(0,m-q/2),o-q);if(u!=null){r=u-l-10;if(r<0){r=u+10;if(r+l>n){r=n/2-l/2}}}else{r=n/2-l/2}return this.el.css({left:s+"px",top:parseInt(r)+"px"})};k.prototype.show=function(){return this.el.show()};k.prototype.hide=function(){return this.el.hide()};return k})();f.Line=(function(k){c(l,k);function l(m){this.hilight=g(this.hilight,this);this.onHoverOut=g(this.onHoverOut,this);this.onHoverMove=g(this.onHoverMove,this);this.onGridClick=g(this.onGridClick,this);if(!(this instanceof f.Line)){return new f.Line(m)}l.__super__.constructor.call(this,m)}l.prototype.init=function(){if(this.options.hideHover!=="always"){this.hover=new f.Hover({parent:this.el});this.on("hovermove",this.onHoverMove);this.on("hoverout",this.onHoverOut);return this.on("gridclick",this.onGridClick)}};l.prototype.defaults={lineWidth:3,pointSize:4,lineColors:["#0b62a4","#7A92A3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],pointStrokeWidths:[1],pointStrokeColors:["#ffffff"],pointFillColors:[],smooth:true,xLabels:"auto",xLabelFormat:null,xLabelMargin:24,continuousLine:true,hideHover:false};l.prototype.calc=function(){this.calcPoints();return this.generatePaths()};l.prototype.calcPoints=function(){var r,s,q,n,o,m;o=this.data;m=[];for(q=0,n=o.length;q<n;q++){r=o[q];r._x=this.transX(r.x);r._y=(function(){var x,v,u,w;u=r.y;w=[];for(x=0,v=u.length;x<v;x++){s=u[x];if(s!=null){w.push(this.transY(s))}else{w.push(s)}}return w}).call(this);m.push(r._ymax=Math.min.apply(Math,[this.bottom].concat((function(){var x,v,u,w;u=r._y;w=[];for(x=0,v=u.length;x<v;x++){s=u[x];if(s!=null){w.push(s)}}return w})())))}return m};l.prototype.hitTest=function(m){var o,q,u,n,s;if(this.data.length===0){return null}s=this.data.slice(1);for(o=u=0,n=s.length;u<n;o=++u){q=s[o];if(m<(q._x+this.data[o]._x)/2){break}}return o};l.prototype.onGridClick=function(m,o){var n;n=this.hitTest(m);return this.fire("click",n,this.data[n].src,m,o)};l.prototype.onHoverMove=function(m,o){var n;n=this.hitTest(m);return this.displayHoverForRow(n)};l.prototype.onHoverOut=function(){if(this.options.hideHover!==false){return this.displayHoverForRow(null)}};l.prototype.displayHoverForRow=function(m){var n;if(m!=null){(n=this.hover).update.apply(n,this.hoverContentForRow(m));return this.hilight(m)}else{this.hover.hide();return this.hilight()}};l.prototype.hoverContentForRow=function(o){var q,n,u,v,s,m,r;u=this.data[o];q="<div class='morris-hover-row-label'>"+u.label+"</div>";r=u.y;for(n=s=0,m=r.length;s<m;n=++s){v=r[n];q+="<div class='morris-hover-point' style='color: "+(this.colorFor(u,n,"label"))+"'>\n  "+this.options.labels[n]+":\n  "+(this.yLabelFormat(v))+"\n</div>"}if(typeof this.options.hoverCallback==="function"){q=this.options.hoverCallback(o,this.options,q,u.src)}return[q,u._x,u._ymax]};l.prototype.generatePaths=function(){var s,q,n,o,m;return this.paths=(function(){var w,v,r,u;u=[];for(n=w=0,v=this.options.ykeys.length;0<=v?w<v:w>v;n=0<=v?++w:--w){m=typeof this.options.smooth==="boolean"?this.options.smooth:(r=this.options.ykeys[n],j.call(this.options.smooth,r)>=0);q=(function(){var z,x,A,y;A=this.data;y=[];for(z=0,x=A.length;z<x;z++){o=A[z];if(o._y[n]!==void 0){y.push({x:o._x,y:o._y[n]})}}return y}).call(this);if(this.options.continuousLine){q=(function(){var z,x,y;y=[];for(z=0,x=q.length;z<x;z++){s=q[z];if(s.y!==null){y.push(s)}}return y})()}if(q.length>1){u.push(f.Line.createPath(q,m,this.bottom))}else{u.push(null)}}return u}).call(this)};l.prototype.draw=function(){var m;if((m=this.options.axes)===true||m==="both"||m==="x"){this.drawXAxis()}this.drawSeries();if(this.options.hideHover===false){return this.displayHoverForRow(this.data.length-1)}};l.prototype.drawXAxis=function(){var w,o,s,m,v,y,n,r,x,q,u=this;n=this.bottom+this.options.padding/2;v=null;m=null;w=function(C,z){var A,B,D,F,E;A=u.drawXAxisLabel(u.transX(z),n,C);E=A.getBBox();A.transform("r"+(-u.options.xLabelAngle));B=A.getBBox();A.transform("t0,"+(B.height/2)+"...");if(u.options.xLabelAngle!==0){F=-0.5*E.width*Math.cos(u.options.xLabelAngle*Math.PI/180);A.transform("t"+F+",0...")}B=A.getBBox();if(((v==null)||v>=B.x+B.width||(m!=null)&&m>=B.x)&&B.x>=0&&(B.x+B.width)<u.el.width()){if(u.options.xLabelAngle!==0){D=1.25*u.options.gridTextSize/Math.sin(u.options.xLabelAngle*Math.PI/180);m=B.x-D}return v=B.x-u.options.xLabelMargin}else{return A.remove()}};if(this.options.parseTime){if(this.data.length===1&&this.options.xLabels==="auto"){s=[[this.data[0].label,this.data[0].x]]}else{s=f.labelSeries(this.xmin,this.xmax,this.width,this.options.xLabels,this.options.xLabelFormat)}}else{s=(function(){var C,A,B,z;B=this.data;z=[];for(C=0,A=B.length;C<A;C++){y=B[C];z.push([y.label,y.x])}return z}).call(this)}s.reverse();q=[];for(r=0,x=s.length;r<x;r++){o=s[r];q.push(w(o[0],o[1]))}return q};l.prototype.drawSeries=function(){var o,s,q,r,m,n;this.seriesPoints=[];for(o=s=r=this.options.ykeys.length-1;r<=0?s<=0:s>=0;o=r<=0?++s:--s){this._drawLineFor(o)}n=[];for(o=q=m=this.options.ykeys.length-1;m<=0?q<=0:q>=0;o=m<=0?++q:--q){n.push(this._drawPointFor(o))}return n};l.prototype._drawPointFor=function(o){var s,u,r,n,q,m;this.seriesPoints[o]=[];q=this.data;m=[];for(r=0,n=q.length;r<n;r++){u=q[r];s=null;if(u._y[o]!=null){s=this.drawLinePoint(u._x,u._y[o],this.colorFor(u,o,"point"),o)}m.push(this.seriesPoints[o].push(s))}return m};l.prototype._drawLineFor=function(m){var n;n=this.paths[m];if(n!==null){return this.drawLinePath(n,this.colorFor(null,m,"line"),m)}};l.createPath=function(C,o,m){var x,w,y,v,r,D,E,s,q,n,B,z,u,A;E="";if(o){y=f.Line.gradients(C)}s={y:null};for(v=u=0,A=C.length;u<A;v=++u){x=C[v];if(x.y!=null){if(s.y!=null){if(o){w=y[v];D=y[v-1];r=(x.x-s.x)/4;q=s.x+r;B=Math.min(m,s.y+r*D);n=x.x-r;z=Math.min(m,x.y-r*w);E+="C"+q+","+B+","+n+","+z+","+x.x+","+x.y}else{E+="L"+x.x+","+x.y}}else{if(!o||(y[v]!=null)){E+="M"+x.x+","+x.y}}}s=x}return E};l.gradients=function(u){var s,w,q,r,m,o,v,n;w=function(y,x){return(y.y-x.y)/(y.x-x.x)};n=[];for(q=o=0,v=u.length;o<v;q=++o){s=u[q];if(s.y!=null){r=u[q+1]||{y:null};m=u[q-1]||{y:null};if((m.y!=null)&&(r.y!=null)){n.push(w(m,r))}else{if(m.y!=null){n.push(w(m,s))}else{if(r.y!=null){n.push(w(s,r))}else{n.push(null)}}}}else{n.push(null)}}return n};l.prototype.hilight=function(n){var o,s,q,r,m;if(this.prevHilight!==null&&this.prevHilight!==n){for(o=s=0,r=this.seriesPoints.length-1;0<=r?s<=r:s>=r;o=0<=r?++s:--s){if(this.seriesPoints[o][this.prevHilight]){this.seriesPoints[o][this.prevHilight].animate(this.pointShrinkSeries(o))}}}if(n!==null&&this.prevHilight!==n){for(o=q=0,m=this.seriesPoints.length-1;0<=m?q<=m:q>=m;o=0<=m?++q:--q){if(this.seriesPoints[o][n]){this.seriesPoints[o][n].animate(this.pointGrowSeries(o))}}}return this.prevHilight=n};l.prototype.colorFor=function(o,n,m){if(typeof this.options.lineColors==="function"){return this.options.lineColors.call(this,o,n,m)}else{if(m==="point"){return this.options.pointFillColors[n%this.options.pointFillColors.length]||this.options.lineColors[n%this.options.lineColors.length]}else{return this.options.lineColors[n%this.options.lineColors.length]}}};l.prototype.drawXAxisLabel=function(o,m,n){return this.raphael.text(o,m,n).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)};l.prototype.drawLinePath=function(n,m,o){return this.raphael.path(n).attr("stroke",m).attr("stroke-width",this.lineWidthForSeries(o))};l.prototype.drawLinePoint=function(q,n,m,o){return this.raphael.circle(q,n,this.pointSizeForSeries(o)).attr("fill",m).attr("stroke-width",this.pointStrokeWidthForSeries(o)).attr("stroke",this.pointStrokeColorForSeries(o))};l.prototype.pointStrokeWidthForSeries=function(m){return this.options.pointStrokeWidths[m%this.options.pointStrokeWidths.length]};l.prototype.pointStrokeColorForSeries=function(m){return this.options.pointStrokeColors[m%this.options.pointStrokeColors.length]};l.prototype.lineWidthForSeries=function(m){if(this.options.lineWidth instanceof Array){return this.options.lineWidth[m%this.options.lineWidth.length]}else{return this.options.lineWidth}};l.prototype.pointSizeForSeries=function(m){if(this.options.pointSize instanceof Array){return this.options.pointSize[m%this.options.pointSize.length]}else{return this.options.pointSize}};l.prototype.pointGrowSeries=function(m){return Raphael.animation({r:this.pointSizeForSeries(m)+3},25,"linear")};l.prototype.pointShrinkSeries=function(m){return Raphael.animation({r:this.pointSizeForSeries(m)},25,"linear")};return l})(f.Grid);f.labelSeries=function(n,w,u,k,A){var v,m,y,l,r,C,z,B,o,x,q;y=200*(w-n)/u;m=new Date(n);z=f.LABEL_SPECS[k];if(z===void 0){q=f.AUTO_LABEL_ORDER;for(o=0,x=q.length;o<x;o++){l=q[o];C=f.LABEL_SPECS[l];if(y>=C.span){z=C;break}}}if(z===void 0){z=f.LABEL_SPECS.second}if(A){z=d.extend({},z,{fmt:A})}v=z.start(m);r=[];while((B=v.getTime())<=w){if(B>=n){r.push([z.fmt(v),B])}z.incr(v)}return r};b=function(k){return{span:k*60*1000,start:function(l){return new Date(l.getFullYear(),l.getMonth(),l.getDate(),l.getHours())},fmt:function(l){return""+(f.pad2(l.getHours()))+":"+(f.pad2(l.getMinutes()))},incr:function(l){return l.setUTCMinutes(l.getUTCMinutes()+k)}}};i=function(k){return{span:k*1000,start:function(l){return new Date(l.getFullYear(),l.getMonth(),l.getDate(),l.getHours(),l.getMinutes())},fmt:function(l){return""+(f.pad2(l.getHours()))+":"+(f.pad2(l.getMinutes()))+":"+(f.pad2(l.getSeconds()))},incr:function(l){return l.setUTCSeconds(l.getUTCSeconds()+k)}}};f.LABEL_SPECS={decade:{span:172800000000,start:function(k){return new Date(k.getFullYear()-k.getFullYear()%10,0,1)},fmt:function(k){return""+(k.getFullYear())},incr:function(k){return k.setFullYear(k.getFullYear()+10)}},year:{span:17280000000,start:function(k){return new Date(k.getFullYear(),0,1)},fmt:function(k){return""+(k.getFullYear())},incr:function(k){return k.setFullYear(k.getFullYear()+1)}},month:{span:2419200000,start:function(k){return new Date(k.getFullYear(),k.getMonth(),1)},fmt:function(k){return""+(k.getFullYear())+"-"+(f.pad2(k.getMonth()+1))},incr:function(k){return k.setMonth(k.getMonth()+1)}},week:{span:604800000,start:function(k){return new Date(k.getFullYear(),k.getMonth(),k.getDate())},fmt:function(k){return""+(k.getFullYear())+"-"+(f.pad2(k.getMonth()+1))+"-"+(f.pad2(k.getDate()))},incr:function(k){return k.setDate(k.getDate()+7)}},day:{span:86400000,start:function(k){return new Date(k.getFullYear(),k.getMonth(),k.getDate())},fmt:function(k){return""+(k.getFullYear())+"-"+(f.pad2(k.getMonth()+1))+"-"+(f.pad2(k.getDate()))},incr:function(k){return k.setDate(k.getDate()+1)}},hour:b(60),"30min":b(30),"15min":b(15),"10min":b(10),"5min":b(5),minute:b(1),"30sec":i(30),"15sec":i(15),"10sec":i(10),"5sec":i(5),second:i(1)};f.AUTO_LABEL_ORDER=["decade","year","month","week","day","hour","30min","15min","10min","5min","minute","30sec","15sec","10sec","5sec","second"];f.Area=(function(m){var k;c(l,m);k={fillOpacity:"auto",behaveLikeLine:false};function l(o){var n;if(!(this instanceof f.Area)){return new f.Area(o)}n=d.extend({},k,o);this.cumulative=!n.behaveLikeLine;if(n.fillOpacity==="auto"){n.fillOpacity=n.behaveLikeLine?0.8:1}l.__super__.constructor.call(this,n)}l.prototype.calcPoints=function(){var u,q,v,s,o,r,n;r=this.data;n=[];for(s=0,o=r.length;s<o;s++){u=r[s];u._x=this.transX(u.x);q=0;u._y=(function(){var z,x,w,y;w=u.y;y=[];for(z=0,x=w.length;z<x;z++){v=w[z];if(this.options.behaveLikeLine){y.push(this.transY(v))}else{q+=v||0;y.push(this.transY(q))}}return y}).call(this);n.push(u._ymax=Math.max.apply(Math,u._y))}return n};l.prototype.drawSeries=function(){var x,y,v,s,o,z,w,u,r,q,n;this.seriesPoints=[];if(this.options.behaveLikeLine){y=(function(){r=[];for(var B=0,A=this.options.ykeys.length-1;0<=A?B<=A:B>=A;0<=A?B++:B--){r.push(B)}return r}).apply(this)}else{y=(function(){q=[];for(var A=u=this.options.ykeys.length-1;u<=0?A<=0:A>=0;u<=0?A++:A--){q.push(A)}return q}).apply(this)}n=[];for(o=0,z=y.length;o<z;o++){x=y[o];this._drawFillFor(x);this._drawLineFor(x);n.push(this._drawPointFor(x))}return n};l.prototype._drawFillFor=function(n){var o;o=this.paths[n];if(o!==null){o=o+("L"+(this.transX(this.xmax))+","+this.bottom+"L"+(this.transX(this.xmin))+","+this.bottom+"Z");return this.drawFilledPath(o,this.fillForSeries(n))}};l.prototype.fillForSeries=function(o){var n;n=Raphael.rgb2hsl(this.colorFor(this.data[o],o,"line"));return Raphael.hsl(n.h,this.options.behaveLikeLine?n.s*0.9:n.s*0.75,Math.min(0.98,this.options.behaveLikeLine?n.l*1.2:n.l*1.25))};l.prototype.drawFilledPath=function(o,n){return this.raphael.path(o).attr("fill",n).attr("fill-opacity",this.options.fillOpacity).attr("stroke","none")};return l})(f.Line);f.Bar=(function(l){c(k,l);function k(m){this.onHoverOut=g(this.onHoverOut,this);this.onHoverMove=g(this.onHoverMove,this);this.onGridClick=g(this.onGridClick,this);if(!(this instanceof f.Bar)){return new f.Bar(m)}k.__super__.constructor.call(this,d.extend({},m,{parseTime:false}))}k.prototype.init=function(){this.cumulative=this.options.stacked;if(this.options.hideHover!=="always"){this.hover=new f.Hover({parent:this.el});this.on("hovermove",this.onHoverMove);this.on("hoverout",this.onHoverOut);return this.on("gridclick",this.onGridClick)}};k.prototype.defaults={barSizeRatio:0.75,barGap:3,barColors:["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],barOpacity:1,barRadius:[0,0,0,0],xLabelMargin:50};k.prototype.calc=function(){var m;this.calcBars();if(this.options.hideHover===false){return(m=this.hover).update.apply(m,this.hoverContentForRow(this.data.length-1))}};k.prototype.calcBars=function(){var m,s,u,r,o,q,n;q=this.data;n=[];for(m=r=0,o=q.length;r<o;m=++r){s=q[m];s._x=this.left+this.width*(m+0.5)/this.data.length;n.push(s._y=(function(){var y,w,v,x;v=s.y;x=[];for(y=0,w=v.length;y<w;y++){u=v[y];if(u!=null){x.push(this.transY(u))}else{x.push(null)}}return x}).call(this))}return n};k.prototype.draw=function(){var m;if((m=this.options.axes)===true||m==="both"||m==="x"){this.drawXAxis()}return this.drawSeries()};k.prototype.drawXAxis=function(){var v,y,z,q,s,m,w,A,x,n,r,u,o;n=this.bottom+(this.options.xAxisLabelTopPadding||this.options.padding/2);w=null;m=null;o=[];for(v=r=0,u=this.data.length;0<=u?r<u:r>u;v=0<=u?++r:--r){A=this.data[this.data.length-1-v];y=this.drawXAxisLabel(A._x,n,A.label);x=y.getBBox();y.transform("r"+(-this.options.xLabelAngle));z=y.getBBox();y.transform("t0,"+(z.height/2)+"...");if(this.options.xLabelAngle!==0){s=-0.5*x.width*Math.cos(this.options.xLabelAngle*Math.PI/180);y.transform("t"+s+",0...")}if(((w==null)||w>=z.x+z.width||(m!=null)&&m>=z.x)&&z.x>=0&&(z.x+z.width)<this.el.width()){if(this.options.xLabelAngle!==0){q=1.25*this.options.gridTextSize/Math.sin(this.options.xLabelAngle*Math.PI/180);m=z.x-q}o.push(w=z.x-this.options.xLabelMargin)}else{o.push(y.remove())}}return o};k.prototype.drawSeries=function(){var C,m,s,y,w,q,n,u,B,x,A,r,v,o,z;s=this.width/this.options.data.length;u=this.options.stacked!=null?1:this.options.ykeys.length;C=(s*this.options.barSizeRatio-this.options.barGap*(u-1))/u;if(this.options.barSize){C=Math.min(C,this.options.barSize)}r=s-C*u-this.options.barGap*(u-1);n=r/2;z=this.ymin<=0&&this.ymax>=0?this.transY(0):null;return this.bars=(function(){var G,E,F,D;F=this.data;D=[];for(y=G=0,E=F.length;G<E;y=++G){B=F[y];w=0;D.push((function(){var K,I,H,J;H=B._y;J=[];for(x=K=0,I=H.length;K<I;x=++K){o=H[x];if(o!==null){if(z){v=Math.min(o,z);m=Math.max(o,z)}else{v=o;m=this.bottom}q=this.left+y*s+n;if(!this.options.stacked){q+=x*(C+this.options.barGap)}A=m-v;if(this.options.stacked){v-=w}this.drawBar(q,v,C,A,this.colorFor(B,x,"bar"),this.options.barOpacity,this.options.barRadius);J.push(w+=A)}else{J.push(null)}}return J}).call(this))}return D}).call(this)};k.prototype.colorFor=function(u,q,n){var o,m;if(typeof this.options.barColors==="function"){o={x:u.x,y:u.y[q],label:u.label};m={index:q,key:this.options.ykeys[q],label:this.options.labels[q]};return this.options.barColors.call(this,o,m,n)}else{return this.options.barColors[q%this.options.barColors.length]}};k.prototype.hitTest=function(m){if(this.data.length===0){return null}m=Math.max(Math.min(m,this.right),this.left);return Math.min(this.data.length-1,Math.floor((m-this.left)/(this.width/this.data.length)))};k.prototype.onGridClick=function(m,o){var n;n=this.hitTest(m);return this.fire("click",n,this.data[n].src,m,o)};k.prototype.onHoverMove=function(m,q){var n,o;n=this.hitTest(m);return(o=this.hover).update.apply(o,this.hoverContentForRow(n))};k.prototype.onHoverOut=function(){if(this.options.hideHover!==false){return this.hover.hide()}};k.prototype.hoverContentForRow=function(q){var r,n,w,v,s,m,u,o;w=this.data[q];r="<div class='morris-hover-row-label'>"+w.label+"</div>";o=w.y;for(n=m=0,u=o.length;m<u;n=++m){s=o[n];r+="<div class='morris-hover-point' style='color: "+(this.colorFor(w,n,"label"))+"'>\n  "+this.options.labels[n]+":\n  "+(this.yLabelFormat(s))+"\n</div>"}if(typeof this.options.hoverCallback==="function"){r=this.options.hoverCallback(q,this.options,r,w.src)}v=this.left+(q+0.5)*this.width/this.data.length;return[r,v]};k.prototype.drawXAxisLabel=function(q,n,o){var m;return m=this.raphael.text(q,n,o).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)};k.prototype.drawBar=function(q,n,m,v,o,u,s){var r,w;r=Math.max.apply(Math,s);if(r===0||r>v){w=this.raphael.rect(q,n,m,v)}else{w=this.raphael.path(this.roundedRect(q,n,m,v,s))}return w.attr("fill",o).attr("fill-opacity",u).attr("stroke","none")};k.prototype.roundedRect=function(m,s,n,o,q){if(q==null){q=[0,0,0,0]}return["M",m,q[0]+s,"Q",m,s,m+q[0],s,"L",m+n-q[1],s,"Q",m+n,s,m+n,s+q[1],"L",m+n,s+o-q[2],"Q",m+n,s+o,m+n-q[2],s+o,"L",m+q[3],s+o,"Q",m,s+o,m,s+o-q[3],"Z"]};return k})(f.Grid);f.Donut=(function(l){c(k,l);k.prototype.defaults={colors:["#0B62A4","#3980B5","#679DC6","#95BBD7","#B0CCE1","#095791","#095085","#083E67","#052C48","#042135"],backgroundColor:"#FFFFFF",labelColor:"#000000",formatter:f.commas,resize:false};function k(m){this.resizeHandler=g(this.resizeHandler,this);this.select=g(this.select,this);this.click=g(this.click,this);var n=this;if(!(this instanceof f.Donut)){return new f.Donut(m)}this.options=d.extend({},this.defaults,m);if(typeof m.element==="string"){this.el=d(document.getElementById(m.element))}else{this.el=d(m.element)}if(this.el===null||this.el.length===0){throw new Error("Graph placeholder not found.")}if(m.data===void 0||m.data.length===0){return}this.raphael=new Raphael(this.el[0]);if(this.options.resize){d(window).bind("resize",function(o){if(n.timeoutId!=null){window.clearTimeout(n.timeoutId)}return n.timeoutId=window.setTimeout(n.resizeHandler,100)})}this.setData(m.data)}k.prototype.redraw=function(){var D,v,s,H,B,z,x,G,E,I,M,F,A,q,n,m,J,L,K,y,u,r,o;this.raphael.clear();v=this.el.width()/2;s=this.el.height()/2;A=(Math.min(v,s)-10)/3;M=0;y=this.values;for(q=0,J=y.length;q<J;q++){F=y[q];M+=F}G=5/(2*A);D=1.9999*Math.PI-G*this.data.length;z=0;B=0;this.segments=[];u=this.values;for(H=n=0,L=u.length;n<L;H=++n){F=u[H];E=z+G+D*(F/M);I=new f.DonutSegment(v,s,A*2,A,z,E,this.data[H].color||this.options.colors[B%this.options.colors.length],this.options.backgroundColor,B,this.raphael);I.render();this.segments.push(I);I.on("hover",this.select);I.on("click",this.click);z=E;B+=1}this.text1=this.drawEmptyDonutLabel(v,s-10,this.options.labelColor,15,800);this.text2=this.drawEmptyDonutLabel(v,s+10,this.options.labelColor,14);x=Math.max.apply(Math,this.values);B=0;r=this.values;o=[];for(m=0,K=r.length;m<K;m++){F=r[m];if(F===x){this.select(B);break}o.push(B+=1)}return o};k.prototype.setData=function(m){var n;this.data=m;this.values=(function(){var s,q,r,o;r=this.data;o=[];for(s=0,q=r.length;s<q;s++){n=r[s];o.push(parseFloat(n.value))}return o}).call(this);return this.redraw()};k.prototype.click=function(m){return this.fire("click",m,this.data[m])};k.prototype.select=function(m){var v,o,q,u,n,r;r=this.segments;for(u=0,n=r.length;u<n;u++){o=r[u];o.deselect()}q=this.segments[m];q.select();v=this.data[m];return this.setLabels(v.label,this.options.formatter(v.value,v))};k.prototype.setLabels=function(r,q){var x,v,u,w,s,m,n,o;x=(Math.min(this.el.width()/2,this.el.height()/2)-10)*2/3;w=1.8*x;u=x/2;v=x/3;this.text1.attr({text:r,transform:""});s=this.text1.getBBox();m=Math.min(w/s.width,u/s.height);this.text1.attr({transform:"S"+m+","+m+","+(s.x+s.width/2)+","+(s.y+s.height)});this.text2.attr({text:q,transform:""});n=this.text2.getBBox();o=Math.min(w/n.width,v/n.height);return this.text2.attr({transform:"S"+o+","+o+","+(n.x+n.width/2)+","+n.y})};k.prototype.drawEmptyDonutLabel=function(s,o,n,q,m){var r;r=this.raphael.text(s,o,"").attr("font-size",q).attr("fill",n);if(m!=null){r.attr("font-weight",m)}return r};k.prototype.resizeHandler=function(){this.timeoutId=null;this.raphael.setSize(this.el.width(),this.el.height());return this.redraw()};return k})(f.EventEmitter);f.DonutSegment=(function(l){c(k,l);function k(o,m,x,v,u,s,n,r,q,w){this.cx=o;this.cy=m;this.inner=x;this.outer=v;this.color=n;this.backgroundColor=r;this.index=q;this.raphael=w;this.deselect=g(this.deselect,this);this.select=g(this.select,this);this.sin_p0=Math.sin(u);this.cos_p0=Math.cos(u);this.sin_p1=Math.sin(s);this.cos_p1=Math.cos(s);this.is_long=(s-u)>Math.PI?1:0;this.path=this.calcSegment(this.inner+3,this.inner+this.outer-5);this.selectedPath=this.calcSegment(this.inner+3,this.inner+this.outer);this.hilight=this.calcArc(this.inner)}k.prototype.calcArcPoints=function(m){return[this.cx+m*this.sin_p0,this.cy+m*this.cos_p0,this.cx+m*this.sin_p1,this.cy+m*this.cos_p1]};k.prototype.calcSegment=function(n,m){var z,y,v,u,q,o,x,w,s,r;s=this.calcArcPoints(n),z=s[0],v=s[1],y=s[2],u=s[3];r=this.calcArcPoints(m),q=r[0],x=r[1],o=r[2],w=r[3];return("M"+z+","+v)+("A"+n+","+n+",0,"+this.is_long+",0,"+y+","+u)+("L"+o+","+w)+("A"+m+","+m+",0,"+this.is_long+",1,"+q+","+x)+"Z"};k.prototype.calcArc=function(s){var n,m,q,o,u;u=this.calcArcPoints(s),n=u[0],q=u[1],m=u[2],o=u[3];return("M"+n+","+q)+("A"+s+","+s+",0,"+this.is_long+",0,"+m+","+o)};k.prototype.render=function(){var m=this;this.arc=this.drawDonutArc(this.hilight,this.color);return this.seg=this.drawDonutSegment(this.path,this.color,this.backgroundColor,function(){return m.fire("hover",m.index)},function(){return m.fire("click",m.index)})};k.prototype.drawDonutArc=function(n,m){return this.raphael.path(n).attr({stroke:m,"stroke-width":2,opacity:0})};k.prototype.drawDonutSegment=function(q,r,o,m,n){return this.raphael.path(q).attr({fill:r,stroke:o,"stroke-width":3}).hover(m).click(n)};k.prototype.select=function(){if(!this.selected){this.seg.animate({path:this.selectedPath},150,"<>");this.arc.animate({opacity:1},150,"<>");return this.selected=true}};k.prototype.deselect=function(){if(this.selected){this.seg.animate({path:this.path},150,"<>");this.arc.animate({opacity:0},150,"<>");return this.selected=false}};return k})(f.EventEmitter)}).call(this);

/*!
 * Modal
 */
(function(){var f,e,c,d,b,g;if(!$.fn.modal||!$.fn.Vague||!$("html").hasClass("not-ie")){return}b=$.fn.modal.Constructor.prototype.show;d=$.fn.modal.Constructor.prototype.hide;f=null;g=false;c=function(){if(g){return}if(!f){f=$("#main-wrapper").Vague({intensity:3,forceSVGUrl:false})}f.blur();return g=true};e=function(){if(!g){return}if(f){f.unblur()}return g=false};$.fn.modal.Constructor.prototype.show=function(){b.call(this);if(this.$element.hasClass("modal-blur")){$("body").append(this.$element);if(getScreenSize($("#small-screen-width-point"),$("#tablet-screen-width-point"))==="desktop"){c()}return $(window).on("pa.resize.modal_blur",function(){if(getScreenSize($("#small-screen-width-point"),$("#tablet-screen-width-point"))==="desktop"){return c()}else{return e()}})}else{return e()}};$.fn.modal.Constructor.prototype.hide=function(){d.call(this);e();return $(window).off("pa.resize.modal_blur").on("hidden",".modal",function(){return alert("asd")})}}).call(this);

/*!
 * Datepicker
 */
(function(){var b;if(!$.fn.datepicker){throw new Error("bootstrap-datepicker.js required")}b=$.fn.datepicker;$.fn.datepicker=function(c){c=$.extend({rtl:$("body").hasClass("right-to-left")},c||{});return b.call($(this),c)}}).call(this);

/*!
 * Tabdrop
 */
(function(){var b;if(!$.fn.tabdrop){throw new Error("bootstrap-tabdrop.js required")}b=$.fn.tabdrop;$.fn.tabdrop=function(c){c=$.extend({},$.fn.tabdrop.defaults,c);return this.each(function(){var e,d;e=$(this);b.call(e,c);d=e.data("tabdrop");if(d){d.dropdown.on("click","li",function(){$(this).parent().parent().find("a.dropdown-toggle").empty().html('<span class="display-tab"> '+$(this).text()+' </span><b class="caret"></b>');return d.layout()});return d.element.on("click","> li",function(){if($(this).hasClass("tabdrop")){return}d.element.find("> .tabdrop > a.dropdown-toggle").empty().html(c.text+' <b class="caret"></b>');return d.layout()})}})};$.fn.tabdrop.defaults={text:'<i class="fa fa-bars"></i>'}}).call(this);
 
/*!
 * Validator
 */
(function(){if(!$.validator){throw new Error("jquery.validate.js required")}$.validator.setDefaults({highlight:function(b){return $(b).closest(".form-group").addClass("has-error")},unhighlight:function(b){return $(b).closest(".form-group").removeClass("has-error").find("help-block-hidden").removeClass("help-block-hidden").addClass("help-block").show()},errorElement:"div",errorClass:"jquery-validate-error",errorPlacement:function(c,d){var b,e,f;f=d.is('input[type="checkbox"]')||d.is('input[type="radio"]');e=d.closest(".form-group").find(".jquery-validate-error").length;if(!f||!e){if(!e){d.closest(".form-group").find(".help-block").removeClass("help-block").addClass("help-block-hidden").hide()}c.addClass("help-block");if(f){return d.closest('[class*="col-"]').append(c)}else{b=d.parent();if(b.is(".input-group")){return b.parent().append(c)}else{return b.append(c)}}}}})}).call(this);


(function() {
	
	Winkel.check = function () {
		var value = [];
		
		$( 'input.selectOne:checked' ).each(function() {
			value.push( $(this).val() );
		});
		
		$( '.show-selected' ).hide();
		if( value != "" ){ $( '.show-selected' ).show(); }
		
		return value;
	};
	
	Winkel.check.single = function () {
		Winkel.check();
	};
	
	Winkel.check.all = function () {
		var allChecked = $( 'input.selectAll' ).is(':checked');
		$('.table').find( 'input.selectOne' ).prop( 'checked', allChecked );
		Winkel.check();
	};
	
	Winkel.check.cookie = function ( action ) {
		var value = Winkel.check();
		
		$.removeCookie( action );
		if( value != "" ){
			$.cookie( action, value, { expires: 1, path: '/', domain: '.' + basedomain });
		}
		
		return true;
	};
	
}).call(this);

(function() {

	Winkel.misc = function () {
		return this;
	};
	
	Winkel.misc.tableRefresh = function ( elem ) {
		$( elem ).dataTable()._fnAjaxUpdate();
	};
	
	Winkel.misc.modalClose = function ( elem ) {
		$(elem).modal('hide');
	};
	
	Winkel.misc.panelExpand = function ( target ) {
        $( "body" ).toggleClass( "expanded-panel" ), 
        $( target ).toggleClass( "panel-expand" );
	};
	
	Winkel.misc.alert = function( type, alert ) {
		
		$('html,body').animate({ scrollTop: 0 }, 500);
		
		setTimeout(
			function () {
			var options = {
				type:      type,
				namespace: 'pa_page_alerts_dark',
				classes:   'alert-dark',
				auto_close: 3
			};
			
			Winkel.plugins.alerts.add( alert, options );
			}, 100
		);
	};
	
}).call(this);



/*!
 * Form Plugins exec
 */
(function(){
	
	if (!$.fn.ajaxSubmit) {
        throw new Error("jquery.form.js required")
    }
	
	Winkel.form = function( elem ) {
		var options = { 
		        target	:  '#output2',   
		        success	:  Winkel.form.response, 
		        dataType:  'json' 
		}; 
		
	    $(elem).ajaxSubmit(options); 
	};
	
	Winkel.form.response = function( response ) {
		
		$( '.help-block' ).remove();
		$( '.has-error' ).removeClass( 'has-error dark' );
		$( '.loading-state' ).button('reset');
		
		if( response.status == 'error' ) {
			Winkel.form.error( response.data );
		}
		else {
			Winkel.form.success( response );
		}
	};
	
	Winkel.form.error = function( error ) {
		
		$.each( $.parseJSON( error ), function( field, msg ) {
			
			var fClass = $( '.field-' + field );
			var format = '<p class="help-block">' + msg + '</p>';
			
			fClass.addClass( 'has-error dark' );
			fClass.find( '.form-control' ).after( format );
			
		});
		
	};
	
	Winkel.form.success = function( response ) {
		
		if( response.modal ) {
			Winkel.misc.modalClose ( '#modal' );
		}
		
		Pace.restart();
		
		setTimeout(function () {
			if( response.reload && response.reload == 'datatable' ) {
				Winkel.misc.tableRefresh ( '.table' );
			}
			
			if( response.message ) {
				Winkel.misc.alert ( 'success', response.message );
			}
			
			if( response.reload && response.reload == 'page' ) {
				location.reload();
			}
			
		}, 800);
	};
	
	Winkel.form.city = function ( propinsi, kabupaten )
	{
		var postData = {};
		
		postData[ ( propinsi ) ? 'prop_id' : 'kab_id' ] = ( propinsi ) ? propinsi : kabupaten ;
		
		$.post('/api/city', postData, function( response ) {
			
			var result = jQuery.parseJSON( response );
			if( propinsi != '' )
			{
				$("#chain_kab select").html( result );
				$("#chain_kec select").html('<option value=""> - </option>');
			} 
			else {
				$("#chain_kec select").html( result );
			}
		});
	};
	
	Winkel.form.upload = function ( object )
	{
		var target  = object.data ( 'target' );
		var width   = object.data ( 'width' );
		var action  = object.data ( 'action' );
		var name    = object.data ( 'name' );
		var current = $( target ).attr('src');
		
		new AjaxUpload( object, {
			action  : action,
			name    : name,
			onSubmit: function(file, ext){
				if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){ 
					// extension is not allowed 
					alert('Only JPG, PNG or GIF files are allowed');
					return false;
				}
				$( target ).attr('src', '/assets/img/loading.gif').css( 'width', width+'px' );
				
			},
			onComplete: function(file, response){
				
				if( response.status == 'error' )
				{
					$( target ).attr('src', current).css('width', width+'px');
					alert( response.message );
				}
				else {
					$( target ).attr('src', response.data ).css( 'width', width+'px' );
				}
				
			}
		});
		
	};
	
}).call(this);


/**
 * Trigger with Plugins
 * ----------------------------------------------------------------------
 */
qasico.plugins = function () {
	
	function format ( state )
	{
		return state.text + " <i class='info'>link</i>";
		 if (!state.id) return state.text; // optgroup
		 return '<a href="/supplier/create" class="btn btn-xs xmodal btn-labeled btn-success" data-size="modal-md" data-api="true" data-target="#modal">test</a>';
	}
	
	$("select.select2").select2({minimumResultsForSearch: -1});
	$("select.select2s").select2({
		 formatResult: format,
		 formatSelection: format,
	});
	
	$("select.select2s").on("change", function(e) {
	    if( e.val == 4 )
	    	{
	    	alert( 'test' );
	    	}
	});
	
	
	
	
	
	$('.btn-popover').popover();
	
	$('.ttips').tooltip();
	
	if ( $('#uploadme').length > 0 ) {
		var button = $( '#uploadme' ), interval;
		Winkel.form.upload( button );
	}
};


/**
 * Euvoria Initialization
 * ----------------------------------------------------------------------
 */
qasico.init = function () {
	
	/**
	 * On Click Trigger
	 * ----------------------------------------------------------------------
	 */
	$(document).on( 'click', '#toggle-mmc', function() {
		$('body').toggleClass('mme');
	});
	
	$(document).on('click', '.xmodal', 
		function (e) {
			e.preventDefault();
			
			var $this   = $(this);
			var href    = e.target.href;
			var $target = $( $this.attr('data-target') );
			var option  = $.extend( { remote: href }, $this.data() );
			
			$( $target ).find('.modal-dialog').removeClass ( 'modal-lg' );
			$( $target ).find('.modal-dialog').removeClass ( 'modal-sm' );
			$( $target ).find('.modal-dialog').removeClass ( 'modal-md' );
			$( $target ).find('.modal-dialog').addClass ( $this.data( 'size' ) );
			
			if( $target.data('load') != 0 ) 
			{
				$( $target ).find('.modal-content').load( href , function () {
					$target.modal( option, this );
				});			
			}
			else {
				$target.modal( option, this );
			}
			
			
			$target.data( 'load', '1' );
			
		}
	);
	
//	$('#modal').on('show.bs.modal.bs.modal', function (e) {
//		qasico.plugins();
//	});
	
	$(document).on( 'submit', '#form-ajax, .form-ajax', function( event ) {
		event.preventDefault();
		$('.form-ajax .button, #form-ajax .button').addClass( 'waiting' );
		
		var btn = $(this).find( '.loading-state' );
		btn.button( 'loading' );
		
		Winkel.form( $(this) );
		return false;
	});
	
	$(document).on( 'focus', '.has-error', function( event ){
		
		$(this).removeClass( 'has-error' );
		$(this).find( 'p.help-block' ).hide();
		
	});
	
	$(document).on( 'click', '.tb-refresh', function( e ){
		Pace.restart();
		Winkel.misc.tableRefresh ( '.table' );
	});
	
	$(document).on( 'click', '.tb-expand', function( e ){
		Pace.restart();
		Winkel.misc.panelExpand ( '.panel' );
	});
	
	$(document).on( 'click', 'input.selectOne', function( e ){
		return new Winkel.check.single();
	});
	
	$(document).on( 'click', 'input.selectAll', function( e ){
		Winkel.check.all( $(this) );
	});
	
	$(document).on( 'click', '.show-selected', function( e ){
		var action = $(this).attr('href');
		
		Winkel.check.cookie( action );
	});
	
	
	/**
	 * On Hover Trigger
	 * ----------------------------------------------------------------------
	 */
	
	
	/**
	 * On Change Trigger
	 * ----------------------------------------------------------------------
	 */
		/**
		 * On Change Propinsi & Kabupaten
		 */
		$(document).on("change", "#chain_prop select", function() {
			Winkel.form.city( this.value, '' );
		});

		$(document).on("change", "#chain_kab select", function() {
			Winkel.form.city( '', this.value );
		});
		
	
	/**
	 * On Keyup Trigger
	 * ----------------------------------------------------------------------
	 */
		$( ".slug-check" ).focusout(function() {
			
			var value = $(this).val();
			if( value == "" || value.length < 3 ) {
				
				$( '#input-callback' ).addClass( 'has-error' );
				$( "#input-callback p.help-block" ).html( 'URL min 4 Char' ).show();
				
				return;
			}
			
			var postData 	   = {};
			postData[ 'slug' ] = value;
			
			// clearing the error if exist
			$( '#input-callback' ).removeClass( 'has-error' );
			$( "#input-callback p.help-block" ).hide();
			
			$.post('/api/company/slug', postData, function( response ) {
				
				var result = jQuery.parseJSON( response );
				
				if( result.status == 'error' )
				{
					$( '#input-callback' ).addClass( 'has-error' );
					$( "#input-callback p.help-block" ).html( result.messages ).show();
				}
			});
			
		});
		
		$( ".just-numeric" ).keyup( function() {
			this.value = this.value.replace(/[^0-9\.]/g,'');
		});
		
		$( ".just-string" ).keyup(function() {
			 this.value = this.value.replace(/[^\w\s]/g,'');
		});
		
		$( ".just-char" ).keyup(function() {
			 this.value = this.value.replace(/[^a-zA-Z0-9_]/g,'');
		});
		
	/**
	 * On Submit Trigger
	 * ----------------------------------------------------------------------
	 */	
		
	
	/**
	 * If Exist Element Trigger
	 * ----------------------------------------------------------------------
	 */
		
};


jQuery(document).ready(function(){

	init.push(function () {
		qasico.init();
		qasico.plugins();
	})
	
	window.Winkel.start(init);
	
});

