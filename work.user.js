// ==UserScript==
// @name         work
// @version      0.1
// @description  工作常用功能
// @author       yulei@addcn.com
// @Updated date 2018-09-10 15:53:45
// @match *.addcn.com/*
// @namespace   addcn.com 
// ==/UserScript==

/**
 * Mac 下企業微信提醒的 code 平台合併通知，通知鏈接包含了 ‘|close’ 導致打開的鏈接錯誤
 * 以下主要功能就是用來替換掉多餘的 ‘%7Cclose’ 內容，回歸到正確的鏈接
 */

;(function () {
    if (location.href.indexOf('%7Cclose') > -1) {
        location.href = location.href.replace('%7Cclose', '')
    }
})()