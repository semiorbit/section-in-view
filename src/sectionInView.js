/*!
* sectionInView.js 1.0
*
* Copyright 2022, Semiorbit Solutions https://semiorbit.com
* By: Ibrahim Khalil Khalbous
* Released under the MIT license
* Forked from https://codepen.io/malsu/pen/VwKzoPG
*
* Date: Tue Nov 29 2022
*/

"use strict";
(function ($) {
    $.fn.sectionInView = function (funcInView, funcOutOfView) {

        const sections = $(this);

        const offset = arguments.length > 2 && arguments[2].offset !== undefined ? arguments[2].offset : 200;


        $(window).on('scroll resize scrollTop', function () {

            // Get current scroll position
            let scrollY = window.scrollY;

            // Now we loop through sections to get height, top and ID values for each
            sections.each((i, elm) => {
                const current = $(elm)[0];
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - offset;
                const sectionId = current.getAttribute("id");

                /*
                - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
                - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
                */
                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ) {
                    funcInView(sectionId);
                } else {
                    funcOutOfView(sectionId);
                }
            });

        });




    };
}(jQuery));