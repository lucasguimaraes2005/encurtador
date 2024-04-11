import type { HttpContext } from '@adonisjs/core/http'
import { MigrationRunner } from '@adonisjs/lucid/migration'
import app from '@adonisjs/core/services/app'
import db from '@adonisjs/lucid/services/db'

export default class MigrationRunsController {
  async handle({}: HttpContext) {
    const migrator = new MigrationRunner(db, app, {
      direction: 'up',
      dryRun: false,
    })

    const migratedFiles = await migrator.getList()
    const pedingMigrations = migratedFiles.filter((file) => file.status === 'pending')

    if (pedingMigrations.length === 0) {
      return { status: 'ok', message: 'No pending migrations' }
    }

    await migrator.run()
    return { status: 'ok', message: 'Migrations run successfully' }
  }
}
