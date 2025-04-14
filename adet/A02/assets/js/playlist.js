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
        imageSrc: "img/12th.jpg",
        title: "Oh, Irog",
        playlistInfo: "12th Street",
        album: "Oh, Irog",
        duration: "4:57"
    },
    {
        number: "2",
        imageSrc: "img/rob.jpg",
        title: "Happy Ending",
        playlistInfo: "Rob Deniel",
        album: "Happy",
        duration: "4:42"
    },
    {
        number: "3",
        imageSrc: "img/fred.jpg",
        title: "Sunrise",
        playlistInfo: "Fred Engay",
        album: "Sunrise",
        duration: "2:26"
    },
    {
        number: "4",
        imageSrc: "img/dilaw.jpg",
        title: "Orasa",
        playlistInfo: "Dilaw",
        album: "Orasa",
        duration: "3:48"
    },
    {
        number: "5",
        imageSrc: "img/cesca.jpg",
        title: "Sabi-Sabi",
        playlistInfo: "Cesca",
        album: "Balse Ng Gabi",
        duration: "3:43"
    },
    {
        number: "6",
        imageSrc: "img/adie.jpg",
        title: "Dungaw",
        playlistInfo: "Adie",
        album: "Dungaw",
        duration: "3:29"
    },
    {
        number: "7",
        imageSrc: "img/cliff.jpg",
        title: "Everything",
        playlistInfo: "Cliff",
        album: "Everything",
        duration: "3:34"
    },
    {
        number: "8",
        imageSrc: "img/heaven.jpg",
        title: "Heaven",
        playlistInfo: "RADi",
        album: "Heaven",
        duration: "2:34"
    },
    {
        number: "9",
        imageSrc: "img/maybe.jpg",
        title: "Maybe?",
        playlistInfo: "RADi",
        album: "Maybe?",
        duration: "2:54"
    },
    {
        number: "10",
        imageSrc: "img/zia.jpg",
        title: "Ako Na Lang",
        playlistInfo: "Zia Quizon",
        album: "Zia",
        duration: "3:24"
    },
    {
        number: "11",
        imageSrc: "img/laufey.jpg",
        title: "Valentine",
        playlistInfo: "Laufey",
        album: "Promise",
        duration: "2:49"
    },
    {
        number: "12",
        imageSrc: "img/frank.jpg",
        title: "White Ferrari",
        playlistInfo: "Frank Ocean",
        album: "Blonde",
        duration: "4:09"
    },
    {
        number: "13",
        imageSrc: "img/laufey.jpg",
        title: "Promise",
        playlistInfo: "Laufey",
        album: "Promise",
        duration: "3:54"
    },
    {
        number: "14",
        imageSrc: "img/paramore.jpg",
        title: "Still Into You",
        playlistInfo: "Paramore",
        album: "Paramore",
        duration: "3:36"
    },
    {
        number: "15",
        imageSrc: "img/dhruv.jpg",
        title: "double take",
        playlistInfo: "Dhruv",
        album: "rapunzel",
        duration: "2:52"
    },
    {
        number: "16",
        imageSrc: "img/dhruv.jpg",
        title: "moonlight",
        playlistInfo: "Dhruv",
        album: "rapunzel",
        duration: "2:39"
    },
    {
        number: "17",
        imageSrc: "img/sza.jpg",
        title: "snooze",
        playlistInfo: "SZA",
        album: "SOS",
        duration: "3:21"
    },
    {
        number: "18",
        imageSrc: "img/sza.jpg",
        title: "Kill Bill",
        playlistInfo: "SZA",
        album: "SOS",
        duration: "2:33"
    },
    {
        number: "19",
        imageSrc: "img/sza.jpg",
        title: "Blind",
        playlistInfo: "SZA",
        album: "SOS",
        duration: "2:30"
    },
    {
        number: "20",
        imageSrc: "img/clairo.jpg",
        title: "Pretty Girl",
        playlistInfo: "Clairo",
        album: "Pretty Girl",
        duration: "3:04"
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
