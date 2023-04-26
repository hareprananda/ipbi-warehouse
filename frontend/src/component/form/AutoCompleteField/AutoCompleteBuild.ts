/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
export function autoCompleteAdd(
  inp: HTMLInputElement,
  arr: { value: string; label: string }[],
  setValue: (val: any) => void
) {
  /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
  let currentFocus = -1;

  function onInput(this: any, e: any) {
    let a,
      b,
      i,
      val = this.value;
    if (!val) {
      setValue("");
    }
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode?.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].label.toUpperCase().includes(val.toUpperCase())) {
        /*create a DIV element for each matching element:*/
        const startingIndex = arr[i].label.toUpperCase().indexOf(val.toUpperCase());
        b = document.createElement("div");
        /*make the matching letters bold:*/
        b.innerHTML = arr[i].label.slice(0, startingIndex);
        b.innerHTML += "<strong>" + arr[i].label.substr(startingIndex, val.length) + "</strong>";
        b.innerHTML += arr[i].label.slice(startingIndex + val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' aria-label='" + arr[i].label + "'  value='" + arr[i].value + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        // eslint-disable-next-line no-loop-func
        b.addEventListener("click", function () {
          setValue(this.getElementsByTagName("input")[0].value);
          inp.value = this.getElementsByTagName("input")[0].ariaLabel || "";
          /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  }

  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    onInput.call(this, e);
  });

  inp.addEventListener("focus", function (e) {
    let a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode?.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].label.toUpperCase().includes(val.toUpperCase())) {
        /*create a DIV element for each matching element:*/
        const startingIndex = arr[i].label.toUpperCase().indexOf(val.toUpperCase());
        b = document.createElement("div");
        /*make the matching letters bold:*/
        b.innerHTML = arr[i].label.slice(0, startingIndex);
        b.innerHTML += "<strong>" + arr[i].label.substr(startingIndex, val.length) + "</strong>";
        b.innerHTML += arr[i].label.slice(startingIndex + val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' aria-label='" + arr[i].label + "'  value='" + arr[i].value + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        // eslint-disable-next-line no-loop-func
        b.addEventListener("click", function () {
          setValue(this.getElementsByTagName("input")[0].value);
          inp.value = this.getElementsByTagName("input")[0].ariaLabel || "";
          /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    let x = document.getElementById(this.id + "autocomplete-list") as any;
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
            increase the currentFocus letiable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
            decrease the currentFocus letiable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  //   inp.addEventListener("blur", () => {
  //     closeAllLists();
  //   });
  function addActive(x: any) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus]?.classList.add("autocomplete-active");
  }
  function removeActive(x: any) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (let i = 0; i < x.length; i++) {
      x[i]?.classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt?: HTMLInputElement) {
    /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode?.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target as any);
  });
}

export function autoCompleteRemove(
  inp: HTMLInputElement,
  arr: { value: string; label: string }[],
  setValue: (val: any) => void
) {
  /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
  let currentFocus = -1;

  function onInput(this: any, e: any) {
    let a,
      b,
      i,
      val = this.value;
    if (!val) {
      setValue("");
    }
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode?.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].label.toUpperCase().includes(val.toUpperCase())) {
        /*create a DIV element for each matching element:*/
        const startingIndex = arr[i].label.toUpperCase().indexOf(val.toUpperCase());
        b = document.createElement("div");
        /*make the matching letters bold:*/
        b.innerHTML = arr[i].label.slice(0, startingIndex);
        b.innerHTML += "<strong>" + arr[i].label.substr(startingIndex, val.length) + "</strong>";
        b.innerHTML += arr[i].label.slice(startingIndex + val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' aria-label='" + arr[i].label + "'  value='" + arr[i].value + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        // eslint-disable-next-line no-loop-func
        b.addEventListener("click", function () {
          setValue(this.getElementsByTagName("input")[0].value);
          inp.value = this.getElementsByTagName("input")[0].ariaLabel || "";
          /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  }

  /*execute a function when someone writes in the text field:*/
  inp.removeEventListener("input", function (e) {
    onInput.call(this, e);
  });

  inp.removeEventListener("focus", function (e) {
    let a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode?.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].label.toUpperCase().includes(val.toUpperCase())) {
        /*create a DIV element for each matching element:*/
        const startingIndex = arr[i].label.toUpperCase().indexOf(val.toUpperCase());
        b = document.createElement("div");
        /*make the matching letters bold:*/
        b.innerHTML = arr[i].label.slice(0, startingIndex);
        b.innerHTML += "<strong>" + arr[i].label.substr(startingIndex, val.length) + "</strong>";
        b.innerHTML += arr[i].label.slice(startingIndex + val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' aria-label='" + arr[i].label + "'  value='" + arr[i].value + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        // eslint-disable-next-line no-loop-func
        b.removeEventListener("click", function () {
          setValue(this.getElementsByTagName("input")[0].value);
          inp.value = this.getElementsByTagName("input")[0].ariaLabel || "";
          /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.removeEventListener("keydown", function (e) {
    let x = document.getElementById(this.id + "autocomplete-list") as any;
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
              increase the currentFocus letiable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
              decrease the currentFocus letiable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  //   inp.removeEventListener("blur", () => {
  //     closeAllLists();
  //   });
  function addActive(x: any) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus]?.classList.add("autocomplete-active");
  }
  function removeActive(x: any) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (let i = 0; i < x.length; i++) {
      x[i]?.classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt?: HTMLInputElement) {
    /*close all autocomplete lists in the document,
          except the one passed as an argument:*/
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt !== x[i] && elmnt !== inp) {
        x[i].parentNode?.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.removeEventListener("click", function (e) {
    closeAllLists(e.target as any);
  });
}
