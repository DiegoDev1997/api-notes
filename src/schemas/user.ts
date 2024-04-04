import j from 'joi'

export const schemaRegister = j.object({
    name: j.string().trim().min(3).required(),
    email: j.string().trim().email().required(),
    password: j.string().trim().min(7).required(),
  });

  export const schemaUpdate = j.object().keys(
    {
      name: j.string().trim().min(3).max(30).optional(),
      email: j.string().trim().email().optional(),
      password: j.string().trim().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).optional(),
    }
  ).unknown(true)

export const schemaLogin = j.object({
    email: j.string().trim().email().required(),
    password: j.string().trim().max(20).required(),
});