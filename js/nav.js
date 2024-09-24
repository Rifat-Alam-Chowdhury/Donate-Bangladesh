document.getElementById("Submit-btn").addEventListener("click", function () {
  const userInput = parseFloat(document.getElementById("cash-in-field").value);

  const currentMainBalance = parseFloat(
    document.getElementById("main-balance").innerText
  );

  if (isNaN(userInput)) {
    // alert("please input amount first");
    my_modal_1.showModal();
    return;
  }

  document.getElementById("main-balance").innerText =
    currentMainBalance + userInput;

  document.getElementById("drop-down").classList.add("hidden");
});

document.getElementById("cash-outer").addEventListener("click", function () {
  document.getElementById("drop-down").classList.remove("hidden");
});
