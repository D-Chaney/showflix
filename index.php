<?php 
    $title = 'ShowFlix';
    include_once './components/header.php';
?>

    <!-- Now Playing Section -->
    <section class="now-playing">
        <!-- Search Movies -->
        <?php include_once './components/searchbox.php'; ?>
        <h2>Now Playing</h2>
        <div class="swiper">
            <div id="now-playing" class="swiper-wrapper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </section>

    <!-- Popular Movies -->
    <section class="container">
        <h2>Popular Movies</h2>
        <div class="swiper">
            <div id="popular-movies" class="swiper-wrapper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </section>

    <!-- Top Rated Movies -->
    <section class="container">
        <h2>Top Rated Movies</h2>
        <div class="swiper">
            <div id="top-rated-movies" class="swiper-wrapper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </section> 

    <!-- upcoming Movies -->
    <section class="container">
        <h2>Upcoming Movies</h2>
        <div class="swiper">
            <div id="upcoming-movies" class="swiper-wrapper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>  
    </section>

    <!-- Footer Section -->
     <?php include_once './components/footer.php'; ?>

    <!-- Shows a spinner when the page is loading -->
    <?php include_once './components/spinner.php' ?>
  </body>
</html>
