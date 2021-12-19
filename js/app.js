function loveCalc() {
  let name1 = document.querySelector("#name1").value.replace(/\s+/g, "").toUpperCase();
  let name2 = document.querySelector("#name2").value.replace(/\s+/g, "").toUpperCase();
  if (name1 != "") {
    if (name2 != "") {
      for (let i = 0; i < name1.length; i++) {
        for (let j = 0; j < name2.length; j++) {
          if (name1[i] == name2[j]) {
            let a1 = name1.substring(0, i);
            let a2 = name1.substring(i + 1, name1.length);
            name1 = a1 + a2;
            i = -1;
            let b1 = name2.substring(0, j);
            let b2 = name2.substring(j + 1, name2.length);
            name2 = b1 + b2;
            j = -1;
            break;
          }
        }
      }
      let strikedName = name1 + name2;
      let snLength = strikedName.length;
      let flArr = new Array("F", "L", "A", "M", "E", "S");
      let stp = 1;
      for (let x = 6; x > 1; x--) {
        let g = (snLength % x) + stp - 1;
        if (g > x) {
          g = g % x;
        }
        if (g == 0) {
          g = flArr.length;
        }
        flArr.splice(g - 1, 1);
        stp = g;
      }
      switch (flArr[0]) {
        case "F":
          document.querySelector("#flames_result").style.backgroundImage = `url("./img/friends-bg.jpg")`;
          document.querySelector("#flames_result_img").setAttribute("src", "./img/friends.png");
          document.querySelector("#flames_result_text").innerHTML = "FRIENDSHIP";
          break;
        case "L":
          document.querySelector("#flames_result").style.backgroundImage = `url("./img/lover-bg.jpg")`;
          document.querySelector("#flames_result_img").setAttribute("src", "./img/lover.png");
          document.querySelector("#flames_result_text").innerHTML = "LOVE";
          break;
        case "A":
          document.querySelector("#flames_result").style.backgroundImage = `url("./img/affection-bg.jpg")`;
          document.querySelector("#flames_result_img").setAttribute("src", "./img/affection.png");
          document.querySelector("#flames_result_text").innerHTML = "AFFECTION";
          break;
        case "M":
          document.querySelector("#flames_result").style.backgroundImage = `url("./img/marriage-bg.jpg")`;
          document.querySelector("#flames_result_img").setAttribute("src", "./img/marriage.png");
          document.querySelector("#flames_result_text").innerHTML = "MARRIAGE";
          break;
        case "E":
          document.querySelector("#flames_result").style.backgroundImage = `url("./img/enemy-bg.jpg")`;
          document.querySelector("#flames_result_img").setAttribute("src", "./img/enemy.png");
          document.querySelector("#flames_result_text").innerHTML = "ENMITY";
          break;
        case "S":
          document.querySelector("#flames_result").style.backgroundImage = `url("./img/sister-bg.jpg")`;
          document.querySelector("#flames_result_img").setAttribute("src", "./img/sister.png");
          document.querySelector("#flames_result_text").innerHTML = "SISTERHOOD";
          break;
        default:
          document.querySelector("#flames_result").style.background = `#333`;
          document.querySelector("#flames_result_text").innerHTML = "UNKNOWN";
          break;
      }
      document.querySelector("#flames_result").style.display = "flex";
      document.activeElement.blur();
    }
    return false;
  }
}

function setActive(element_id = "") {
  var el = document.querySelector(element_id);
  if (el.setActive) {
    el.setActive();
  } else if (el.focus) {
    el.focus();
  }
}

function getParam(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return "";
  else return results[1];
}

String.prototype.cleanup = function () {
  return this.toLowerCase().replace(/[^a-zA-Z]+/g, "");
};

function urlQr() {
  var n1 = getParam("name1");
  var n2 = getParam("name2");
  document.getElementById("name1").value = n1.cleanup();
  document.getElementById("name2").value = n2.cleanup();
  updateURL();
  if (document.getElementById("name1").value != "" && document.getElementById("name2").value != "") {
    loveCalc();
  }
}

function updateURL() {
  var q1 = document.getElementById("name1").value.cleanup();
  var q2 = document.getElementById("name2").value.cleanup();
  if (history.pushState) {
    var newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?name1=${q1}&name2=${q2}`;
    window.history.pushState({ path: newurl }, "", newurl);
  }
}

function resetVal() {
  document.getElementById("flames_result").style.display = "none";
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";
  updateURL();
  setActive("#name1");
}

function onEnter(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#btnFlames").click();
  }
}
