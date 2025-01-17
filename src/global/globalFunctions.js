const handleFullscreen = (src, type) => {
  const fullscreenElement = document.createElement(
    type === "video" ? "video" : "img"
  );
  fullscreenElement.src = src;
  fullscreenElement.style.position = "fixed";
  fullscreenElement.style.top = 0;
  fullscreenElement.style.left = 0;
  fullscreenElement.style.width = "100vw";
  fullscreenElement.style.height = "100vh";
  fullscreenElement.style.objectFit = "contain";
  fullscreenElement.style.backgroundColor = "black";
  fullscreenElement.style.zIndex = 9999;

  if (type === "video") {
    fullscreenElement.controls = true;
    fullscreenElement.autoplay = true;
  }

  document.body.appendChild(fullscreenElement);

  const closeFullscreen = () => {
    fullscreenElement.remove();
  };

  fullscreenElement.onclick = closeFullscreen;
};

export default handleFullscreen;