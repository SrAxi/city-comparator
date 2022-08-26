import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="78rem"
    pt="2rem"
    px="1rem"
    {...props}
  />
)
