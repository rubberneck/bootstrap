/* ==========================================================
 * bootstrap-alert.js v2.0.0
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
 * ========================================================== */!function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).delegate(b,"click",this.close)};c.prototype={constructor:c,close:function(b){function d(){c.remove()}var c=a(this);c=c.hasClass("alert-message")?c:c.parent(),b&&b.preventDefault(),c.removeClass("in"),a.support.transition&&c.hasClass("fade")?c.bind(a.support.transition.end,d):d()}},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Alert=c,a(function(){a("body").delegate(b,"click.alert.data-api",c.prototype.close)})}(window.jQuery||window.ender);