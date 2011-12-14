/* ===================================================
 * bootstrap-transitions.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html
 * ===================================================
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
 * ========================================================== */$(function(){$.support.transition=function(){var a=document.body||document.documentElement,b=a.style,c=b.transition!==undefined||b.WebkitTransition!==undefined||b.MozTransition!==undefined||b.MsTransition!==undefined||b.OTransition!==undefined;return c&&{end:function(){var a="TransitionEnd";return $.browser.webkit?a="webkitTransitionEnd":$.browser.mozilla?a="transitionend":$.browser.opera&&(a="oTransitionEnd"),a}()}}()});