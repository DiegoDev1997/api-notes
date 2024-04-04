
import j from 'joi'

export const schemaNotes = j.object({
    usuarioid: j.number().required(),
    title: j.string().trim().max(100).required(),
    content: j.string().trim().min(100).max(20000).required(),
  });

  export const schemaNotesUpdate = j.object().keys({
    title: j.string().trim().max(100).optional(),
    content: j.string().trim().min(100).max(20000).optional(),
  }).unknown(true)
