# movies-api

### A simple API REST with express

## Usage

``` js
const moviesServices = new MoviesServices();

  router.get('/', async function (req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS)

    const { tags } = req.query;

    try {
      const movies = await moviesServices.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS)

      const { movieId } = req.params;

      try {
        const movies = await moviesServices.getMovie({ movieId });

        res.status(200).json({
          data: movies,
          message: 'movies listed',
        });
      } catch (error) {
        next(error);
      }
    }
  );
  router.post('/', validationHandler(createMovieSchema), async function (
    req,
    res,
    next
  ) {
    const { body: movie } = req;

    try {
      const createMovieID = await moviesServices.createMovie({ movie });

      res.status(201).json({
        data: createMovieID,
        message: 'movie created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMoviesSchema),
    async function (req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;

      try {
        const updatedMovieId = await moviesServices.updateMovie({
          movieId,
          movie,
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      const { movieId } = req.params;

      try {
        const deleteMovieId = await moviesServices.deleteMovie({ movieId });

        res.status(200).json({
          data: deleteMovieId,
          message: 'movie delete',
        });
      } catch (error) {
        next(error);
      }
    }
  );
```
