"use strict";function validateCaptcha(a){if(a){var b=document.getElementsByTagName("script")[0],c=document.createElement("script");c.src="./redirect.js?t=".concat(Date.now()),c.type="module",b.parentNode.insertBefore(c,b)}}function init(){var a=document.getElementById("root");grecaptcha.render(a,{sitekey:"6LcUfwklAAAAAK8W9dC1MjYOvxl14Smzb_zc1bId",callback:"validateCaptcha"})}