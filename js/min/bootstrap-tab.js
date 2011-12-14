/* ========================================================
 * bootstrap-tabs.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */!function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target")||b.attr("href"),e,f;if(b.parent("li").hasClass("active"))return;e=c.find(".active a").last()[0],b.trigger({type:"show",relatedTarget:e}),f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent()),b.trigger({type:"shown",relatedTarget:e})},activate:function(a,b){b.find("> .active").removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),a.addClass("active"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active")}},a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Tab=b,a(document).ready(function(){a("body").delegate('[data-toggle="tab"], [data-toggle="pill"]',"click.tab.data-api",function(b){b.preventDefault(),a(this).tab("show")})})}(window.jQuery||window.ender);