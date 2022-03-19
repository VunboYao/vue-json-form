const Ajv = require('ajv')
const ajv = new Ajv()

ajv.addKeyword('vunbo', {
  validate(schema, data) {
    if (schema >= true) return true
    return schema === 40001
  },
})
const schema = {
  type: 'object',
  properties: {
    foo: { type: 'number', vunbo: 213 },
    bar: { type: 'string' },
    arr: {
      type: 'array', // 属性类型
      items: [
        {
          // 元素
          type: 'boolean',
        },
        {
          type: 'string',
        },
      ],
    },
  },
  required: ['foo', 'arr'], // 必输
  additionalProperties: false,
}

const validate = ajv.compile(schema)

const data = {
  foo: 12345,
  // bar: 'vunbo@outlook.com',
  bar: 'hei',
  arr: [true, '12'],
}

const valid = validate(data)
if (!valid) console.log(validate.errors)
