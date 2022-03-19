const Ajv = require('ajv')
const ajv = new Ajv()
ajv.addFormat('test', (data) => {
  console.log('data :>> ', data)
  return data === 'hei'
})

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'number' },
    bar: { type: 'string', format: 'test' },
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
  foo: 123,
  // bar: 'vunbo@outlook.com',
  bar: 'hei',
  arr: [true, '12'],
}

const valid = validate(data)
if (!valid) console.log(validate.errors)
