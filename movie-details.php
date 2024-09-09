<?php
    $title = 'Flixx | Movie Details';
    include_once './header.php';
?>

    <!-- Movie Details -->
    <section class="container">
      <div class="back">
      <a class="btn" onclick="goBack()">&larr; Go Back</a>
      </div>
      <!-- Movie Details Output -->
      <div id="movie-details"></div>
    </section>

    <!-- Footer Section -->
    <?php include_once './footer.php'; ?>

    <!-- Shows a spinner when the page is loading -->
    <?php include_once './components/spinner.php' ?>
  </body>
</html>
