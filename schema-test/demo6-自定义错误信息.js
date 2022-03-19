const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, strict: false }) // 自定义错误对象
const addFormats = require('ajv-formats')
require('ajv-errors')(ajv)
addFormats(ajv)

// TODO: 1自定义规则
ajv.addFormat('myRule', /^a.*z$/)
ajv.addFormat('myRule2', {
  type: 'number',
  validate: (x) => x >= 0 && x <= 25,
})

// TODO: 2自定义关键字
ajv.addKeyword({
  keyword: 'constant',
  validate: (schema, data) => {
    console.log('schema, data :>> ', schema, data)
    return true
  },
})

ajv.addKeyword({
  keyword: 'range',
  type: 'number',
  compile([min, max], parent) {
    return parent.exclusiveRange == true
      ? (data) => data > min && data < max
      : (data) => data >= min && data <= max
  },
  errors: false,
  metaSchema: {
    type: 'array',
    items: [{ type: 'number' }, { type: 'number' }],
    minItems: 2,
    additionalProperties: false,
  },
})

const schema = {
  type: 'object',
  required: ['foo'],
  constant: 'boolean',
  properties: {
    foo: { type: 'integer' },
    // format: 默认的格式化
    bar: { type: 'string', format: 'myRule' },
    age: { type: 'number', format: 'myRule2' },
  },
  additionalProperties: false,
  // errorMessage: '输入一个整数的对象啊', // 自定义错误
}

const schema2 = {
  range: [2, 4],
  exclusiveRange: true,
}

const validate2 = ajv.compile(schema2)
console.log('validate2(2.01) :>> ', validate2(2.01))

const validate = ajv.compile(schema)
const valid = validate({ foo: 12, bar: 'avunbo@outlook.comz', age: 12 })
if (!valid) console.log(validate.errors)
