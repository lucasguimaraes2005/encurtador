const ShortenedUrlsController = () => import('#controllers/shortened_urls_controller')
const MigrationRunsController = () => import('#controllers/migration_runs_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', async () => {
      return { status: 'ok' }
    })

    router.get('/links', [ShortenedUrlsController, 'index'])
    router.post('/links', [ShortenedUrlsController, 'store'])

    router.get('/migrations', [MigrationRunsController])
  })
  .prefix('api')

router.get('/:shortenedUrl', [ShortenedUrlsController, 'redirect'])
