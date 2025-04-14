var songs = [
    {
        number: "#",
        imageSrc: "img/logo1.png",
        title: "Title",
        playlistInfo: "",
        album: "Album",
        duration: "Length"
    },
    {
        number: "1",
        imageSrc: "img/rob.jpg",
        title: "Sinta",
        playlistInfo: "Rob Deniel",
        album: "Sinta",
        duration: "5:17"
    },
    {
        number: "2",
        imageSrc: "img/rob.jpg",
        title: "Gabi",
        playlistInfo: "Rob Deniel",
        album: "Gabi",
        duration: "5:55"
    },
    {
        number: "3",
        imageSrc: "img/lolaAmour.jpg",
        title: "Fallen",
        playlistInfo: "Lola Amour",
        album: "Fallen",
        duration: "3:22"
    },
    {
        number: "4",
        imageSrc: "img/zack.jpg",
        title: "Pano",
        playlistInfo: "Zack Tabudlo",
        album: "Pano",
        duration: "4:14"
    },
    {
        number: "5",
        imageSrc: "img/sugarcane.jpg",
        title: "Leonara",
        playlistInfo: "Sugarcane",
        album: "Leonora",
        duration: "3:54"
    },
    {
        number: "6",
        imageSrc: "img/keshi.jpg",
        title: "UNDERSTAND",
        playlistInfo: "Keshi",
        album: "GABRIEL",
        duration: "2:31"
    },
    {
        number: "7",
        imageSrc: "img/leeHi.jpg",
        title: "ONLY",
        playlistInfo: "Lee Hi",
        album: "4 ONLY",
        duration: "4:01"
    },
    {
        number: "8",
        imageSrc: "img/jaehyun.jpg",
        title: "Try Again",
        playlistInfo: "Jaehyun, d.ear",
        album: "Try Again",
        duration: "2:58"
    },
    {
        number: "9",
        imageSrc: "img/beabadoobee.jpg",
        title: "Glue Song",
        playlistInfo: "beabadoobee",
        album: "Glue Song",
        duration: "2:15"
    },
    {
        number: "10",
        imageSrc: "img/arcticMonkey.jpg",
        title: "Baby I'm Yours",
        playlistInfo: "Arctic Monkeys",
        album: "Arctic",
        duration: "2:33"
    }
];

function generateSongCards() {
    var container = document.getElementById('song-cards-container');
    container.innerHTML = '';

    songs.forEach(function (song, index) {
        var songCardClass = index === 0 ? 'card-new no-hover' : 'card-new';  
        
        var songCard = `
        <div class="${songCardClass} m-0 p-2 shadow-lg mt-3">
            <div class="song-info d-flex align-items-center flex-wrap rounded p-3">
                <div class="song-number me-3" style="min-width: 50px;">
                    <h3 class="text-white m-0"><strong>${song.number}</strong></h3>
                </div>
                <div class="song-img me-3 ms-3">
                    <img src="${song.imageSrc}" alt="${song.title}" title="${song.title}" class="bg-light rounded" style="width: 47px; height: 47px;">
                </div>
                <div class="artistInfo d-flex flex-column me-auto">
                    <span class="text-light">${song.title}</span>
                    <p class="songs mb-0 text-secondary">${song.playlistInfo}</p>
                </div>
                <p class="album text-secondary me-4 mb-0">${song.album}</p>
                <p class="duration text-secondary ms-3 mb-0">${song.duration}</p>
            </div>
        </div>
        `;
        container.innerHTML += songCard;
    });

    handleResize(); 
}

window.addEventListener('load', function () {
    generateSongCards(); 
});
