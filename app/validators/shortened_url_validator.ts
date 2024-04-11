import vine from '@vinejs/vine'

export const createShortenedUrl = vine.compile(
  vine.object({
    originalUrl: vine.string().url({ protocols: ['http', 'https'], require_protocol: true }),
    shortenedUrl: vine.string().alphaNumeric().minLength(3).optional(),
  })
)
