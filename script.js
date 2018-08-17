/*

Project: Project 01_06_01

Author: Heather Bente
Date: 17 August 2018

*/

"use strict";

var formValidity = true;

function validateForm(evt) {
    var results = true;
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
    
    formValidity = true;
    validateRequired();
}

function validateRequired() {
    var inputField = document.querySelectorAll("#contactinfo input");
   // alert("slut");
    var errorText = document.getElementById("errorText");
}

function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    }
    else {
        form.addEventListener("onsubmit", validateForm)
    }
}

window.addEventListener("load", createEventListeners, false);
