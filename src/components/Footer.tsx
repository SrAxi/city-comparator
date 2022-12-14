import { Flex, FlexProps } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex as="footer"
        position="fixed"
        bottom={0}
        py="1rem"
        {...props}
  />
)
