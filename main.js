document.addEventListener("DOMContentLoaded", () => {
  const textHighlight = document.getElementById("text-hight-light");
  const messages = ["Developer", "Photographer"];
  let messageIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < messages[messageIndex].length) {
      textHighlight.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      textHighlight.textContent = messages[messageIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 50);
    } else {
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(type, 500);
    }
  }

  type();
});
