import { componentsMap as defaultComponentsMap } from './componentsMap'

export type ComponentParserProps = {
  data: any
  componentsMap?: any
}

export const ComponentParser = (props: ComponentParserProps) => {
  const { data, componentsMap = defaultComponentsMap } = props

  if (!data) {
    return null
  }

  const { _modelApiKey, ...rest } = data

  if (!_modelApiKey) {
    return null
  }

  const Component = componentsMap[_modelApiKey]

  if (!Component) {
    return null
  }

  return <Component {...rest} />
}
