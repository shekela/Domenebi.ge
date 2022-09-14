import { categories, domainList } from "./domainList_.js";

let badge = $("#badge");
let badgeint = 0;
document.getElementById("badge").style.display = "none";

$(document).ready(function () {
    for (let i = 0; i < domainList.length; i++) {

        let row = $(`#row${i}`);
        row.cliked = 1;
        row.click(function () {
            $(`#readytoadd${i}`).text((row.cliked++ % 2 == 0) ? "" : "დამატება");
        });

        let btn = $(`#toaddbtn${i}`);
        btn.cliked = 1
        btn.click(function () {
            $(`#readytoadd${i}`).text((btn.cliked++ % 2 == 0) ? (badge.html(badgeint -= 1), "დამატება") : (badge.html(badgeint += 1), "კალათაშია"));
        if (badgeint > 0) {
            document.getElementById("badge").style.display = "block";
        }

        else {
            document.getElementById("badge").style.display = "none";
        }
        })
    }
})


