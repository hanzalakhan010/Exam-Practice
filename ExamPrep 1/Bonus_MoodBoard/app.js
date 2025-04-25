"use strict";
// Bonus - MoodBoard Generator
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Prompt the user for their mood
// Use fetch to get a quote related to that mood
// Render the mood and quote inside the HTML page
function getMood() {
    return __awaiter(this, void 0, void 0, function* () {
        let tags = [...document.querySelectorAll(".selected")].map((tag) => tag.innerHTML).join(",");
        let output = document.getElementById('output');
        try {
            let response = yield fetch(`https://api.quotable.io/random?tags=${tags}`);
            let data = yield response.json();
            // console.log(data)
            output.innerHTML = data;
        }
        catch (_a) { }
    });
}
let tags = document.querySelectorAll(".tags");
if (tags) {
    [...tags].forEach((tag) => {
        tag.addEventListener("click", () => {
            tag.classList.toggle("selected");
        });
    });
}
