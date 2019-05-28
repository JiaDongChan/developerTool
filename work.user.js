// ==UserScript==
// @name         work
// @version      0.2
// @description  工作常用功能
// @author       yulei@addcn.com
// @Updated date 2018-09-10 15:53:45
// @match *.addcn.com/*
// @match https://docs.google.com/*
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

    // RTX 内的链接带有 # 会自动转义为 %23，导致访问错误，再轉回來
    if (location.href.indexOf('%23') > -1) {
        location.href = location.href.replace('%23', '#')
    }
})()
