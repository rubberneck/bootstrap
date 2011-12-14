/* ============================================================
 * bootstrap-dropdown.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdown
 * ============================================================
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
 * ============================================================ */!function(a){function d(){a(b).parent("li").removeClass("open")}"use strict";var b='[data-toggle="dropdown"]',c=function(b){a(b).bind("click",this.toggle)};c.prototype={constructor:c,toggle:function(b){var c=a(this).parent("li"),e=c.hasClass("open");return d(),!e&&c.toggleClass("open"),!1}},a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a(function(){a("html").bind("click.dropdown.data-api",d),a("body").delegate(b,"click.dropdown.data-api",c.prototype.toggle)})}(window.jQuery||window.ender);