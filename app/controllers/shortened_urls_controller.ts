import ShortenedUrlsService from '#services/shortened_urls_service'
import { createShortenedUrl } from '#validators/shortened_url_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class ShortenedUrlsController {
  async index({ response }: HttpContext) {
    const shortenedUrls = await ShortenedUrlsService.getAll()

    return response.json(shortenedUrls)
  }

  async redirect({ params, response }: HttpContext) {
    const shortenedUrl = await ShortenedUrlsService.getByShortenedUrl(params.shortenedUrl)

    if (!shortenedUrl) {
      return response.status(404).json({ message: 'Not found' })
    }

    await ShortenedUrlsService.incrementVisits(shortenedUrl)

    return response.redirect(shortenedUrl.originalUrl, false, 301)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createShortenedUrl)
    const shortenedUrl = await ShortenedUrlsService.create(payload)

    return response.status(201).json(shortenedUrl)
  }
}
