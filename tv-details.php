
<?php
    $title = 'Flixx | Show Details';
    include_once './header.php';
?>

    <!-- Show Details -->
    <section class="container">
      <div class="back">
        <a class="btn" href="shows.php">Back To TV Shows</a>
      </div>
      <!-- Show Details Output -->
      <div id="show-details"></div>
    </section>

    <!-- Footer -->
    <?php include_once './footer.php' ?>

    <!-- Shows a spinner when the page is loading -->
    <?php include_once './components/spinner.php' ?>
  </body>
</html>
