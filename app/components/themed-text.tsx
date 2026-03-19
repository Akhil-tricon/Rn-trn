import { Text, TextProps, useColorScheme } from 'react-native'

type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  /** Optional semantic variants (used in this project for simple styling) */
  type?: 'title' | 'link'
}

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type,
  ...props
}: ThemedTextProps) {
  const theme = useColorScheme()

  const color = theme === 'dark' ? darkColor ?? '#fff' : lightColor ?? '#000'

  const variantStyle =
    type === 'title'
      ? { fontSize: 24, fontWeight: '700' }
      : type === 'link'
      ? { color: '#0a7ea4' }
      : undefined

  return <Text style={[{ color }, variantStyle, style]} {...props} />
}
