let trigger = document.querySelectorAll(".trigger");

trigger.forEach((video) => {
    video.addEventListener("click", (el) => {
        let id = el.target.getAttribute("video-id");
        document.querySelector('iframe').setAttribute("src", 'https://www.youtube.com/embed/' + id);
    });
});