let obj = {
  top: "10",
  right: "10",
  html: "Hello!",
  className: "welcome",
};

//function to show notification
function showNotification({ top, right, html, className }) {
  let body = document.body;

  //create notification div
  let notification = document.createElement("div");

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;
  notification.style.position = `absolute`;
  notification.style.display = `block`;
  notification.innerHTML = html;
  //   notification.style.display = "block";

  //if className is passed
  if (className.length > 0) notification.classList.add(className);
  body.append(notification);

  //timeout for 1.5s & change display none
  setTimeout(() => {
    notification.style.display = "none";
  }, 1500);
}

showNotification(obj);
