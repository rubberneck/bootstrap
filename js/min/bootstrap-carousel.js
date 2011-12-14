/* ==========================================================
 * bootstrap-carousel.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
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
 * ========================================================== */!function(a){"use strict";var b=function(b){a(b).delegate(dismiss,"click",this.close)};b.prototype={},a.fn.carousel=function(b){return this.each(function(){var c=a(this),d=c.data("alert");d||c.data("alert",d=new Alert(this)),typeof b=="string"&&d[b].call(c)})},a.fn.carousel.Carousel=b}(window.jQuery||window.ender);