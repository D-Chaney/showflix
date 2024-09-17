<!--Includes the header and sets the title -->
<?php 
    $title = 'ShowFlix | Search Movies & Shows';
    include_once './header.php'; 
?>

    <!-- Search Movies -->
    <?php include_once './components/searchBox.php'; ?>

    <!-- Search Results -->
    <section id="search-results-wrapper" class="container">
      <heading id="search-results-heading"></heading>

      <!-- Dynamic search results loaded through javascript fetch api -->
      <div id="search-results" class="grid"></div>
      
      <!--Dynamic pagination inside of script.js -->
      <div id="pagination"></div>

    </section><!-- Search-results -->

    <!-- Footer -->
    <?php include_once './footer.php'; ?>

    <!-- Loads a spinner while the Api fetches the data -->
     <?php include_once './components/spinner.php'; ?>

  </body>
</html>
