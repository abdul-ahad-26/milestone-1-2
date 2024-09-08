"use strict";
function toggleSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
        if (section.style.height === "0px") {
            section.style.height = "auto";
            section.style.overflow = "visible";
            section.style.visibility = "visible";
        }
        else {
            section.style.height = "0px";
            section.style.overflow = "hidden";
            section.style.visibility = "hidden";
        }
    }
    else {
        console.error(`Section with class ${sectionClass} not found.`);
    }
}
