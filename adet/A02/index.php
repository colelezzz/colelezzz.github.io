<?php
$page = "home";

if (isset($_GET['page'])) {
  $page = $_GET['page'];
  switch ($page) {
    case "home":
      $page = "home";
      break;
    case "liked":
      $page = "liked";
      break;
    case "playlist":
      $page = "playlist";
      break;
    default:
      header("Location: ?page=home");
      break;
  }
} else {
  header("Location: ?page=home");
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>A02 | MVC</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <link href="img/logo.png" rel="icon">
</head>

<body>

  <nav class="navbar navbar-dark bg-black px-4 py-3">
    <div class="container-fluid position-relative">

      <div class="d-flex align-items-center">
        <img src="img/logo.png" alt="Spontify Logo" style="height: 40px;" class="me-2">
        <h3 class="m-0" style="color: #1ED760;"><b>Spontify</b></h3>
      </div>

      <div class="d-none d-md-block position-absolute start-50 translate-middle-x" style="width: 350px;">
        <div class="input-group" style="border-radius: 50px;">
          <span class="input-group-text bg-secondary border-0 text-white"
            style="border-top-left-radius: 50px; border-bottom-left-radius: 50px;">
            <i class="bi bi-search"></i>
          </span>
          <input type="text" class="form-control bg-secondary border-0 text-white" placeholder="search"
            style="border-top-right-radius: 50px; border-bottom-right-radius: 50px;">
        </div>
      </div>

      <button class="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="d-none d-md-flex align-items-center gap-3">
        <a href="?page=home" title="Home" class="fs-4 text-decoration-none text-white home-link">
          <i class="bi bi-house-door-fill"></i>
        </a>
        <img src="img/bubbles.jpg" alt="Profile" class="rounded-circle"
          style="width: 30px; height: 30px; object-fit: cover;">
      </div>


      <div class="collapse d-md-none mt-3 w-100" id="navbarToggle">
        <div class="input-group mb-3" style="border-radius: 50px;">
          <span class="input-group-text bg-secondary border-0 text-white"
            style="border-top-left-radius: 50px; border-bottom-left-radius: 50px;">
            <i class="bi bi-search"></i>
          </span>
          <input type="text" class="form-control bg-secondary border-0 text-white" placeholder="search"
            style="border-top-right-radius: 50px; border-bottom-right-radius: 50px;">
        </div>

        <div class="d-flex gap-3 align-items-center">
          <a href="?page=home" title="Home" class="fs-4 text-decoration-none text-white home-link">
            <i class="bi bi-house-door-fill"></i>
          </a>
          <img src="img/bubbles.jpg" alt="Profile" class="rounded-circle"
            style="width: 30px; height: 30px; object-fit: cover;">
        </div>
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">

      <div class="d-flex p-2" id="layout">

        <div id="sidebar" class="sidebar expanded p-3 rounded-3">
          <div class="d-flex align-items-center">
            <button id="toggleBtn" class="btnToggle btn mt-3 me-2 ms-3">
              <i id="sidebarIcon" class="bi bi-arrow-bar-left fs-5"></i>
            </button>
            <h4 class="text-light mt-3 sidebar-text">Your Library</h4>
          </div>
          <a href="?page=liked" class="sidebar-link d-flex align-items-center rounded p-3 mt-3">
            <img src="img/liked.jpg" alt="Image Description" title="Liked Songs" class="bg-light rounded me-2"
              style="width: 47px; height: 47px;">
            <div class="d-flex flex-column">
              <span class="text-decoration-none text-light sidebar-text">Liked Songs</span>
              <p class="songs mb-0 text-secondary sidebar-text">Playlist • 10 songs</p>
            </div>
          </a>
          <a href="?page=playlist" class="sidebar-link d-flex align-items-center rounded p-3">
            <img src="img/cover.jpg" alt="Image Description" title="Playlist #1" class="bg-light rounded me-2"
              style="width: 47px; height: 47px;"> <span class="text-decoration-none text-light sidebar-text">
              <div class="d-flex flex-column">
                <span class="text-decoration-none text-light sidebar-text">👾</span>
                <p class="songs mb-0 text-secondary sidebar-text">Playlist • Colele</p>
              </div>
          </a>
        </div>

        <div id="mainContent" class="flex-grow-1 mx-2">
          <div class="card shadow rounded-3 p-4"
            style="height: 87vh; max-height: 87vh; overflow-y: auto; overflow-x: hidden;">
            <?php include("shared/" . $page . ".php"); ?>
          </div>
        </div>

        <div id="aboutArtist" div class="col-1 col-sm-1 col-md-2 col-lg-3 p-0 position-sticky">
          <div class="card shadow rounded-3" style="height: 87vh; max-height: 87vh; overflow: scroll;">
            <div class="p-2 m-1" style="vertical-align: middle">

              <div class="position-relative text-white mb-2 mt-2">
                <img src="img/rob.png" alt="Artist" class="img-fluid rounded w-100"
                  style="object-fit: cover; max-height: 60vh;">

                <div class="position-absolute bottom-0 start-0 p-2 w-100">
                  <h4 class="m-0">MOST PLAYED ARTIST</h4>
                  <h5 class="m-0" style="color: #B3ADAD">Rob Deniel</h5>
                </div>
              </div>

              <div class="card mt-3" style="background-color: #222121;">
                <div class="card-body">
                  <h4 class="text-light mt-2">
                    <strong>About the artist</strong>
                  </h4>
                  <p class="text-secondary mt-3">
                    A young hotshot singer-songwriter and multi-instrumentalist Rob Deniel made an auto-hit with his
                    most
                    popular track, "Ulap" which was all written, arranged, and produced by Rob himself. Two other songs
                    of
                    his that he put out are the indie-pop flavored “Gabi” which says a lot about Rob’s leanings and he
                    also has “Sinta” that brings back that funky manila sound for his listeners. <br><br>

                    Rob doesn't stop there as he continues to rock our world with his single “Ang Pag-Ibig" that
                    immediately went bubbling under various Spotify’s popular editorial playlists and even peaked at #15
                    for ‘Viral 50 Philippines.’ Now, we can definitely say that “Ang Pag-Ibig” is hitting all the right
                    spots as it reached more than 60 million streams on Spotify alone and had also been included in
                    Apple
                    music's ‘Viral Hits’ playlist. <br><br>

                    As the young solo act continues his music, fresh from his “Ang Pag-ibig” hit, the retro vibe
                    singer-songwriter hits all the right spots with his recent singles like “RomCom," "Miss Miss," and
                    "Arrowmance" that certainly make his listeners love him more. <br><br>

                    <strong>For bookings & inquiries:</strong> email <a href="mailto:vivamusicbookings@viva.com.ph"
                      class="bookings" title="Send an Email">vivamusicbookings@viva.com.ph</a> or contact <a
                      href="tel:+639985753307" class="bookings" title="Contact Them">0998-5753307</a>
                  </p>

                  <div class="text-light mb-3">
                    <h4> 973,079 </h4>
                    <p class="text-secondary"> Followers </p>
                  </div>

                  <div class="text-light mb-4">
                    <h4> 3,677,007</h4>
                    <p class="text-secondary"> Monthly Listeners </p>
                  </div>

                  <div class="socialMedia">
                    <a href="https://www.facebook.com/robdenielph" target="_blank" class="me-2 social-icon">
                      <i class="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="https://www.instagram.com/RobDeniel" target="_blank" class="me-2 social-icon">
                      <i class="bi bi-instagram fs-4"></i>
                    </a>
                    <a href="https://open.spotify.com/artist/7dFzqx2qyelGPiBKmdSEOT" target="_blank"
                      class="me-2 social-icon">
                      <i class="bi bi-spotify fs-4"></i>
                    </a>
                    <a href="https://twitter.com/RobDeniel" target="_blank" class="me-2 social-icon">
                      <i class="bi bi-twitter-x fs-4"></i>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <script src="assets/js/index.js"></script>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
            crossorigin="anonymous"></script>
</body>

</html>