<?php $title = 'Popular Shows';
include_once './components/header.php'; ?>

<!-- Search Movies -->
<?php include_once './components/searchbox.php'; ?>

     <!-- Popular TV Shows -->
    <section class="container">
        <h2>Popular TV Shows</h2>
        <div class="swiper">
            <div id="popular-shows" class="swiper-wrapper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </section>

    <!-- Top Rated TV Shows -->
    <section class="container">
        <h2>Top Rated TV Shows</h2>
        <div class="swiper">
            <div id="top-rated" class="swiper-wrapper"></div>
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
