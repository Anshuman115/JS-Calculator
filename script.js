let lastOp = false;
function setValue(val, type = "number") {
  console.log(type);
  if (type == "operator" && lastOp == false) {
    document.querySelector(".inp").value += val;
    lastOp = true;
  }
  if (type == "number") {
    document.querySelector(".inp").value += val;
    lastOp = false;
  }
}

function calculate() {
  var data = document.querySelector(".inp").value;
  //   console.log(data);
  console.log(eval(data));
  document.querySelector(".inp").value = eval(data);
}

function cleared() {
  document.querySelector(".inp").value = "";
}

function clearOnly1() {
  let data = document.querySelector(".inp").value;
  let newData = data.substring(0, data.length - 1);
  document.querySelector(".inp").value = newData;
  lastOp = false;
}
