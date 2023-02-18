const urlParamaters = new URLSearchParams(window.location.search);

const id = urlParamaters.get("id");

if (id) {
  const iframe = document.createElement("iframe");
  iframe.src = `html/${id}/index.html`;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  const container = document.querySelector<HTMLDivElement>("#gameContainer");
  container?.appendChild(iframe);

  iframe.onload = () => {
    document.querySelector<HTMLDivElement>("#loader")!.classList.add("hidden");
    document
      .querySelector<HTMLDivElement>("#gameContainer")!
      .classList.remove("hidden");
  };
} else {
  document.querySelector<HTMLDivElement>("#loader")!.classList.add("hidden");
  document.querySelector<HTMLDivElement>("#error")!.classList.remove("hidden");
}

export {};
