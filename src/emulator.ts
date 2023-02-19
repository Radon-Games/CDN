const urlParamaters = new URLSearchParams(window.location.search);

const id = urlParamaters.get("id");
const type = urlParamaters.get("type");
const extension = urlParamaters.get("extension");

declare global {
  interface Window {
    EJS_player: string;
    EJS_core: string;
    EJS_gameUrl: string;
    EJS_pathtodata: string;
  }
}

if (id && type && extension) {
  window.EJS_player = "#gameContainer";
  window.EJS_core = type;
  window.EJS_gameUrl = `/cdn/emulator/${id}.${extension}`;
  window.EJS_pathtodata = "/cdn/data/";

  const script = document.createElement("script");
  script.src = "data/loader.js";
  document.body.appendChild(script);

  script.onload = () => {
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
