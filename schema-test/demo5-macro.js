const Ajv = require('ajv')
const ajv = new Ajv()
const localize = require('ajv-i18n')

ajv.addKeyword('vunbo', {
  /* validate: function fun(schema, data) {
    // 自定义错误信息
    fun.errors = [
      {
        keyword: 'test',
        dataPath: './schema',
        schemaPath: '#/properties/foo/vunbo',
        params: { keyword: 'vunbo' },
        message: 'Hello Error Msg',
      },
    ]
    return false
  }, */
  /* macro() {
    return {
      minLength: 10,
    }
  }, */
})
const schema = {
  type: 'object',
  properties: {
    foo: { type: 'string', vunbo: 'vunbo' },
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
  foo: '1223',
  // bar: 'vunbo@outlook.com',
  bar: 'hei',
  arr: [1, '12'],
}

const valid = validate(data)
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}
