const Ajv = require('ajv')
const ajv = new Ajv()

ajv.addKeyword('vunbo', {
  compile(schema, parent) {
    // 编译时进行校验
    console.log(schema, parent)
    return () => true
  },
  metaSchema: {
    // 校验类型
    type: 'number',
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
