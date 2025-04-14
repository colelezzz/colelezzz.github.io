function createCarouselHTML(profiles, activeId) {
    var output = "";
    for (var i = 0; i < profiles.length; i += 3) {
        var activeClass = i === 0 ? 'active' : '';
        var slideHTML = `<div class="carousel-item ${activeClass}"><div class="row">`;

        for (var j = i; j < i + 3 && j < profiles.length; j++) {
            var p = profiles[j];
            slideHTML += `
        <div class="col-12 col-sm-6 col-md-4 text-center">
          <div class="profile-card">
            <img src="${p.imgSrc}" alt="${p.name}">
          </div>
          <div class="profile-info">
          <div class="profile-name">${p.name}</div>
          <div class="profile-description">${p.description}</div>
        </div>
        </div>
      `;
        }

        slideHTML += `</div></div>`;
        output += slideHTML;
    }
    document.getElementById(activeId).innerHTML = output;
}

// First carousel profiles
var profiles = [
    { name: "", imgSrc: "img/img1.png", description: "Adie, Cesca, Ben&Ben, Maki and more" },
    { name: "", imgSrc: "img/img2.png", description: "Rob Deniel, Fred Engay, Cup of Joe and more" },
    { name: "", imgSrc: "img/img3.png", description: "Cesca, Zia Quizon, The Itchyworms and more" },
    { name: "", imgSrc: "img/img4.png", description: "Daniel Ceasar, Laufey, Mitski, Sza, and more" },
    { name: "", imgSrc: "img/img5.png", description: "Billie Eilish, Anson Seabra, Arctic Monkeys and more" },
    { name: "", imgSrc: "img/img6.png", description: "Nina, Freestyle, Kyla, Sarah Geronimo and more" },
    { name: "", imgSrc: "img/img7.png", description: "MYMP, Juris, southborder, Side A and more" },
    { name: "", imgSrc: "img/img8.png", description: "Your weekly mixtape of fresh music." },
    { name: "", imgSrc: "img/img9.png", description: "Catch all the latest music from artists you follow." }
];

// Second carousel profiles
var madeProfiles = [
    { name: "", imgSrc: "img/img10.png", description: "The Walters, Rocco, Calein, beabadoobee and more" },
    { name: "", imgSrc: "img/img11.png", description: "Adie, Dilaw, Sugarfree, Lola Amour and more" },
    { name: "", imgSrc: "img/img12.png", description: "Cesca, Zack Tabudlo, Cliff, and more" },
    { name: "", imgSrc: "img/img13.png", description: "Pamungkas, Rex Orange County, Ariana Grande and more" },
    { name: "", imgSrc: "img/img14.png", description: "PUBLIC, Rex Orange County, Madison Beer and more" },
    { name: "", imgSrc: "img/img15.png", description: "SWV, Sza, teo glacier, and more" }
];

// Third carousel profiles
var recentlyProfiles = [
    { name: "👾", imgSrc: "img/img16.png", description: "By Colele" },
    { name: "<3", imgSrc: "img/img17.png", description: "Blast up" },
    { name: "i love", imgSrc: "img/img18.png", description: "(y/n) playlists" },
    { name: "whoooo", imgSrc: "img/img19.png", description: "coffee and toast" },
    { name: "OPM Old Songs", imgSrc: "img/img20.png", description: "Old time all tagalog songs" },
    { name: "Rob Deniel Playlist:>", imgSrc: "img/img21.png", description: "" }
];

createCarouselHTML(profiles, "carousel-inner");
createCarouselHTML(madeProfiles, "made-inner");
createCarouselHTML(recentlyProfiles, "recently-inner");

// Video Clips Section
var videoClips = [
    { src: "vid/vid1.mp4", title: "Rob Deniel - Happy Ending" },
    { src: "vid/vid2.mp4", title: "JENNIE - like JENNIE" },
    { src: "vid/vid3.mp4", title: "Cesca - Pambihirang Harana" },
    { src: "vid/vid4.mp4", title: "Paramore - Still Into You" }
];

function loadVideoClips(clips) {
    var container = document.getElementById("video-clips-section");
    var html = "";

    for (var i = 0; i < clips.length; i++) {
        var clip = clips[i];
        html +=
            '<div class="col-12 mb-4">' +
            '<div class="text-center">' +
            '<video class="vibe-video w-75 rounded" src="' + clip.src + '" loop playsinline style="height: auto; object-fit: cover;"></video>' +
            '<h5 class="video-title mb-2">' + clip.title + '</h5>' +
            '</div>' +
            '</div>';
    }

    container.innerHTML = html;

    var videos = document.querySelectorAll(".vibe-video");
    for (var j = 0; j < videos.length; j++) {
        videos[j].addEventListener("mouseenter", function () {
            this.play();
        });
        videos[j].addEventListener("mouseleave", function () {
            this.pause();
        });
    }
}

loadVideoClips(videoClips);
