import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'shortened_urls'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('visits').defaultTo(0)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('visits')
    })
  }
}
