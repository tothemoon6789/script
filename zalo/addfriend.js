var array = ["0775910611","0902484656"];
i = 0;
function increament() {
  if (i < array.length) {
    console.log(i)
    console.log(array[i])
    calling(array[i]);
    i++;
  }
}

/// cos 1 cai doi 2 giay
function mot() {
  return new Promise((resolve) => {
    setTimeout(() => {
      //them ban zalo
      document.querySelector("#contact-search > div:nth-child(2) > i").click();
      console.log("function 1 Done !");
      resolve()
    }, 2000);
  });
}
//j 1 functino doi 3 giay

function hai(phone) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let target = document.querySelector(
          "#findFriend > div.flx.flx-center > div > div > input"
        );
        target.selectionStart = 30;
        target.focus();
  
        /**
         * simulateTextareaInput
         * @param id {string} The id of the textarea to target.
         * @param text {string} The text to input, character-by-character.
         * @param lat {number} The latency / time to wait before beginning input.
         * @param irt {number} The interresponse-time between each input / simulated keystroke.
         */
        const sim = function (selector, text, lat, irt) {
          const length = text.length - 1;
          var current = 0;
          /**
           * insertText
           * @param str {string} The character to input into the text area
           */
          const insertChar = function (char) {
            // get element
            var target = document.querySelector(selector);
            if (target !== null) {
              // if it is found in the dom ...
              let [start, end] = [target.selectionStart, target.selectionEnd];
              // insert char
              target.setRangeText(char, start, end, "select");
              // move cursor forward 1
              target.selectionStart = start + 1;
              // trigger any onChange listeners
              var event = new window.Event("change", { bubbles: true });
              target.dispatchEvent(event);
            } else {
              console.log(`No <textarea> with id "${selector}" found.`);
            }
          };
          const write = function () {
            // insert current character
            insertChar(text[current]);
            if (current < length) {
              // so long as there are more chars to input
              current++; // increment
              setTimeout(function () {
                write();
              }, irt); // recurisvely write next char
            } else {
              resolve()
            }
          };
          setTimeout(function () {
            // kickoff input
            setTimeout(function () {
              write();
            }, irt);
          }, lat); // wait this long before starting
        };
  
        sim(
          "#findFriend > div.flx.flx-center > div > div > input",
          phone,
          2000,
          50
        );
      }, 1000);
    });
  }
function ba() {
  return new Promise((resolve) => {
    setTimeout(() => {
      var nutTimKiem = document.querySelectorAll(
        '[data-translate-inner="STR_SEARCH"]'
      )[1];
      nutTimKiem.click();
      console.log("function 3 Done !");
      resolve()
    }, 2000);
  });
}
function bon() {
  return new Promise((resolve) => {
    setTimeout(() => {
      var nutThemBan = document.querySelector(
        "#profile-info > div > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(1) > span"
      );
      nutThemBan.click();
      console.log("function 4 Done !");
      resolve()
    }, 2000);
  });
}
function nam() {
  return new Promise((resolve) => {
    setTimeout(() => {
      document
        .querySelector(
          "#profile-info > div.friend-profile__actions.friend-profile__actions--request > div.z--btn--v2.btn-primary.large.--rounded"
        )
        .click();
      console.log("function 5 Done !");
      increament()
      resolve()
    }, 2000);
  });
}

// dung async
async function calling(phone) {
  console.log("calling");
  await mot();
  await hai(phone);
  await ba();
  await bon();
  await nam();
}
increament();








