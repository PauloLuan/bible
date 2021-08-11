module.exports = function (plop) {
  plop.setGenerator('component:chakra', {
    description: 'chakra: generates a new component with tests and storybook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: 'templates/chakra/component/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/chakra/component/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'templates/chakra/component/spec.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/chakra/component/stories.tsx.hbs'
      }
    ]
  })
}
