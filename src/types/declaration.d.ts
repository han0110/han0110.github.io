declare module '*.svg' {
  const value: any
  export = value
}

declare const graphql: (query: TemplateStringsArray) => void
