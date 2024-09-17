<?php 
    $title = 'ShowFlix';
    include_once './header.php';
?>

    <!-- Now Playing Section -->
    <section class="now-playing">
        <!-- Search Movies -->
        <?php include_once './components/searchbox.php'; ?>
      <h2>Now Playing</h2>
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">
            <a href="movie-details.html?id=1">
              <img src="./images/no-image.jpg" alt="Movie Title" />
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i> 8 / 10
            </h4>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Popular Movies -->
    <section class="container">
      <h2>Popular Movies</h2>
      <div id="popular-movies" class="grid"></div>
    </section>

    <!-- Footer Section -->
     <?php include_once './footer.php'; ?>

    <!-- Shows a spinner when the page is loading -->
    <?php include_once './components/spinner.php' ?>
  </body>
</html>
