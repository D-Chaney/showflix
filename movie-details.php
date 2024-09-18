<?php
    $title = 'ShowFlix | Movie Details';
    include_once './components/header.php';
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
    <?php include_once './components/footer.php'; ?>

    <!-- Shows a spinner when the page is loading -->
    <?php include_once './components/spinner.php' ?>
  </body>
</html>
