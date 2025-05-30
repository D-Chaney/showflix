<section class="search">
    <div class="container">
        <div id="alert"></div>
        <form action="/search.php" class="search-form">
            <!-- movies and shows radio box -->
            <div class="search-radio">
                <input type="radio" id="movie" name="type" value="movie" checked />
                <label for="movies">Movies</label>
                <input type="radio" id="tv" name="type" value="tv" />
                <label for="shows">TV Shows</label>
            </div>
            <div class="search-flex">
                <input
                    type="text"
                    name="search-term"
                    id="search-term"
                    placeholder="Enter search term"
                />
                <button class="btn" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </form>
    </div>
</section>