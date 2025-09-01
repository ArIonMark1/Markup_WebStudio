// Check connection status
const connectionStatus = document.getElementsByClassName("connection-status");
const statusDiv = document.getElementsByClassName("status");
connectionStatus[0].classList.remove("fade-out");
statusDiv[0].classList.add("pending");
// asynchronuys function for control internet connection
async function checkConnection() {
  try {
    const response = await fetch(
      "https://www.google.com/favicon.ico?cb=" + Date.now(),
      {
        method: "HEAD",
        mode: "no-cors",
        cache: "no-store",
      }
    );

    statusDiv[0].classList.remove("pending");
    statusDiv[0].classList.add("online");
    statusDiv[0].textContent = "Online";
    clearInterval(connectionControl);
    // Fade out the connection status
    setTimeout(() => {
      connectionStatus[0].classList.add("fade-out");
    }, 1000);
  } catch (error) {
    statusDiv[0].classList.remove("pending");
    statusDiv[0].classList.add("offline");
    statusDiv[0].textContent = "Offline";

    setTimeout(() => {
      statusDiv[0].classList.remove("offline");
      statusDiv[0].classList.add("pending");
      statusDiv[0].textContent = "Pending...";
    }, 2000);
  }
}

const connectionControl = setInterval(checkConnection, 6000);
