const findSum = () => {
  const input = document.getElementById("input_numbers").value;

  if (input.length < 1) {
    alert("Please Enter Numbers to Find their Sum");
    return;
  }
  let new_array = input.split(",");
  let output = new_array.reduce((sum, i) => Number(sum) + Number(i));
  document.getElementById("result").innerText = output;
};

const resetInput = () => {
  const input = document.getElementById("input_numbers");
  input.value = "";
  document.getElementById("result").innerText = "";
};
