const urlParamaters = new URLSearchParams(window.location.search);

const id = urlParamaters.get("id");

declare var UnityLoader: any;

if (id) {
  UnityLoader.instantiate("gameContainer", `/unity/${id}/build.json`, {
    onProgress: (gameInstance: any, progress: number) => {
      if (progress === 1) {
        document
          .querySelector<HTMLDivElement>("#loader")!
          .classList.add("hidden");
        document
          .querySelector<HTMLDivElement>("#gameContainer")!
          .classList.remove("hidden");
      }
    }
  });
} else {
  document.querySelector<HTMLDivElement>("#loader")!.classList.add("hidden");
  document.querySelector<HTMLDivElement>("#error")!.classList.remove("hidden");
}

export {};
