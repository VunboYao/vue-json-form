const Ajv = require('ajv')
const ajv = new Ajv()

ajv.addKeyword('constant', {
  validate: (schema, data) => {
    console.log(schema, data)
    return true
  },
})

const schema = {
  demo: 'vunbo',
  type: 'object',
  properties: {
    foo: 'string',
  },
}

const validate = ajv.compile(schema)

const valid = validate({
  foo: 123,
})
if (!valid) console.log(validate.errors)
