const urlParamaters = new URLSearchParams(window.location.search);

const id = urlParamaters.get("id");

declare var RufflePlayer: any;

if (id) {
  window.addEventListener("load", () => {
    const ruffle = RufflePlayer.newest();
    const player = ruffle.createPlayer();
    player.config = {
      autoplay: "on",
      contextMenu: false,
      showSwfDownload: false
    };
    const container = document.querySelector<HTMLDivElement>("#gameContainer");
    container?.appendChild(player);
    player
      .load(`/flash/${id}.swf`)
      .then(() => {
        document
          .querySelector<HTMLDivElement>("#loader")!
          .classList.add("hidden");
        document
          .querySelector<HTMLDivElement>("#gameContainer")!
          .classList.remove("hidden");
      })
      .catch((error: Error) => {
        console.log(error);
      });
  });
} else {
  document.querySelector<HTMLDivElement>("#loader")!.classList.add("hidden");
  document.querySelector<HTMLDivElement>("#error")!.classList.remove("hidden");
}

export {};
