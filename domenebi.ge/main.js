import { categories, domainList } from "./domainList_.js";

const blank = document.getElementById("blank");

let range1 = document.getElementById("range1");
let rangesec = document.getElementById("rangesec");

let low = document.getElementById("low");
let high = document.getElementById("high");

let badge = $("#badge");
let badgeint = 0;
document.getElementById("badge").style.display = "none";

const blankcategories = document.getElementById("Categories")





categories.map((cate, indexcat) => (
    blankcategories.innerHTML += `
      <label class="checkboxcontainer">
                 ${categories[indexcat].name}
                 <input type="checkbox" id="checkbox${indexcat}">
                 <span class="checkmark"></span>
      </label>
`
))

let check0 = [document.getElementById("checkbox0"), 1]
let check1 = [document.getElementById("checkbox1"), 2]
let check2 = [document.getElementById("checkbox2"), 3]
let checkarray = [check0, check1, check2]


let dom0 = [document.getElementById("dom0"), ".ge"]
let dom1 = [document.getElementById("dom1"), ".com.ge"]
let dom2 = [document.getElementById("dom2"), ".org.ge"]
let dom3 = [document.getElementById("dom3"), ".edu.ge"]
let domarray = [dom0, dom1, dom2, dom3]


domainList.map((row, index) => (
    blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4 class="domText">${domainList[index]["domainName"]}${domainList[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${domainList[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(domainList[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
));

////////////////////////////////////////////////////////////////////////////////////////

let symbolrange1 = document.getElementById("symbolrange1");
let symbolrange2 = document.getElementById("symbolrange2");


let low2 = document.getElementById("low2");
let high2 = document.getElementById("high2");


const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress");
let priceGap = 0;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
        let low = document.getElementById("low").value
        
        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                
                
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
        
        
    });
});



rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});




const symbolrangeInput = document.querySelectorAll(".symbol-range-input input"),
    symbolInput = document.querySelectorAll(".symbol-input input"),
    range2 = document.querySelector(".symbolslider .symbolprogress");
let priceGap2 = 0;

symbolInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(symbolInput[0].value),
            maxPrice = parseInt(symbolInput[1].value);

        if ((maxPrice - minPrice >= priceGap2) && maxPrice <= symbolrangeInput[1].max) {
            if (e.target.className === "input-min") {
                symbolrangeInput[0].value = minPrice;
                range2.style.left = ((minPrice / symbolrangeInput[0].max) * 100) + "%";
            } else {
                symbolrangeInput[1].value = maxPrice;
                range2.style.right = 100 - (maxPrice / symbolrangeInput[1].max) * 100 + "%";
            }
        }


    });
});

symbolrangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(symbolrangeInput[0].value),
            maxVal = parseInt(symbolrangeInput[1].value);

        if ((maxVal - minVal) < priceGap2) {
            if (e.target.className === "symbol-range-min") {
                symbolrangeInput[0].value = maxVal - priceGap2;
            } else {
                symbolrangeInput[1].value = minVal + priceGap2;
            }
        } else {
            symbolInput[0].value = minVal;
            symbolInput[1].value = maxVal;
            range2.style.left = ((minVal / symbolrangeInput[0].max) * 100) + "%";
            range2.style.right = 100 - (maxVal / symbolrangeInput[1].max) * 100 + "%";
        }
    });
});






///////////////////////////////////////////////////////////////////////////////////Price Filter//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


range1.addEventListener("input", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ""

    finalMarket1.map((row, index) => (
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    ));
    rangesec.click()
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
})
rangesec.addEventListener("input", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))


    blank.innerHTML = ""
    finalMarket1.map((row, index) => (

        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    ));
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
})


low.addEventListener("input", () => {

    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ""
    finalMarket1.map((row, index) => (

        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    ));
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
})

high.addEventListener("input", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ""
    finalMarket1.map((row, index) => (
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    ));
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
})




/////////////////////////////////////////////////////////////////////////////////////////////////Symbol Input///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

symbolrange1.addEventListener("input", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ""
    finalMarket1.map((row, index) => (

        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    ));
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
})



symbolrange2.addEventListener("input", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ""
    finalMarket1.map((row, index) => (

        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    ));
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
})




low2.addEventListener("input", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    finalMarket1.map((row, index) => (

        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    ));
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
})



high2.addEventListener("input", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    finalMarket1.map((row, index) => (

        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    ));
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
})






document.getElementById("checkbox0").addEventListener("click", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ``;
    finalMarket1.map((row, index) => {
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    })
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
})



document.getElementById("checkbox1").addEventListener("click", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ``;
    finalMarket1.map((row, index) => {
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    })
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
})




document.getElementById("checkbox2").addEventListener("click", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ``;
    finalMarket1.map((row, index) => {
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    })
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
})






document.getElementById("dom0").addEventListener("click", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ``;
    finalMarket1.map((row, index) => {
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    })
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
})













document.getElementById("dom1").addEventListener("click", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ``;
    finalMarket1.map((row, index) => {
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    })
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
})










document.getElementById("dom2").addEventListener("click", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ``;
    finalMarket1.map((row, index) => {
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    })
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
})



















document.getElementById("dom3").addEventListener("click", () => {
    let newcheck = checkarray.filter(check => check[0].checked == true);
    let checkedvalues = [];
    for (let i = 0; i < newcheck.length; i++) {
        checkedvalues.push(newcheck[i][1])
    }
    if (checkedvalues.length == 0) {
        for (let i = 0; i < 4; i++) {
            checkedvalues.push(i)
        }
    }

    let obj = []
    checkedvalues.map((v) => {
        domainList.filter((k, i) => {
            k.categories.filter((x) => {
                if (x === v) {
                    obj.push(domainList[i])
                }
            })
        })
    })
    let domcheck = domarray.filter(dom => dom[0].checked == true);
    let domains = [];
    for (let i = 0; i < domcheck.length; i++) {
        domains.push(domcheck[i][1])
    }
    if (domains.length == 0) {
        domains = [".ge", ".com.ge", ".edu.ge", ".org.ge"]
    }
    let domobj = []
    domains.map((v) => {
        domainList.filter((k, i) => {
            if (k.domainExtension === v) {
                domobj.push(domainList[i])
            }
        })
    })
    domobj = new Set(domobj);
    let newdomobj = Array.from(domobj);

    obj = new Set(obj);
    let newobj = Array.from(obj);

    let newMarket = domainList.filter(element => element.price < rangeInput[1].value && element.price > rangeInput[0].value && (element.domainName.length + element.domainExtension.length) < symbolInput[1].value && (element.domainName.length + element.domainExtension.length) > symbolInput[0].value)

    let finalMarket = newMarket.filter(value => newobj.includes(value));
    let finalMarket1 = finalMarket.filter(value => newdomobj.includes(value))

    blank.innerHTML = ``;
    finalMarket1.map((row, index) => {
        blank.innerHTML += `
         <div class="row">
             <div class="noLine">
                 <div class="component1">
                     <div id="row${index}">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" aria-hidden="true" class="w-4 text-gray-600">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                         </svg>
                     </div>
                     <div><h4>${finalMarket1[index]["domainName"]}${finalMarket1[index]["domainExtension"]}</div>
                 </div>

                 <div class="component2">
                     <div>
                        <h4 class="gelPrice">${finalMarket1[index]["price"]}₾</h4>
                         <h4 class="usdPrice">${Math.floor(parseInt(finalMarket1[index]["price"]) / 2.83)}$</h4>
                     </div>

                     <div style="display:flex;align-items:center;" class="basket" id="toaddbtn${index}">
                         <h3 class="readytoadd" id="readytoadd${index}"></h3>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true" style="width: 22px; height: 22px; margin-left: auto; margin-right: auto;">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                         </svg>
                     </div>
                 </div>
             </div>
             <hr />
         </div>
                      `
    })
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
})

document.getElementById("show").addEventListener("click", () => {
    document.getElementById("blank").style.display = "none";
    document.getElementById("section").style.display = "none"; 
    document.getElementById("MAINIMG").style.display = "none"; 
    document.getElementById("Respdiv").style.display = "none";
    document.getElementById("filter").style.display = "block";
    document.getElementById("filter").style.width = '90%';
    document.getElementById("filterheader").style.display = 'flex';
    document.getElementById("filterheader").style.position = 'fixed';
    
})
document.getElementById("closefilter").addEventListener("click", () => {
    document.getElementById("filter").style.display = "none";
    document.getElementById("blank").style.display = "block";
    document.getElementById("section").style.display = "block";
    document.getElementById("MAINIMG").style.display = "block";
    document.getElementById("Respdiv").style.display = "flex";
    document.getElementById("filterheader").style.display = 'none';
})




