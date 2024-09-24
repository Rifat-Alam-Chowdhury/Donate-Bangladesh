document
  .getElementById("cash-in-btn-outer")
  .addEventListener("click", function () {
    document.getElementById("drop-down").classList.remove("hidden");
    const userInput = parseFloat(
      document.getElementById("cash-in-field").value
    );
    const currentMainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );

    document.getElementById("main-balance").innerText =
      userInput + currentMainBalance;
  });
document.getElementById("cash-in-btn").addEventListener("click", function () {
  document.getElementById("drop-down").classList.add("hidden");
});
