import {
  Link as ChakraLink,
  Text,
  Stack,
} from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import Counter from '../features/counter/Counter'
import { CityPicker } from '../components/CityPicker'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Stack spacing={8} direction="row">
        <CityPicker
          title="City A"
        />
        <CityPicker
          title="City B"
        />
      </Stack>

      {/*<Counter />*/}
    </Main>

    <DarkModeSwitch />
    {/*<CTA />*/}
    <Footer>
      <Text>Copyright &copy;{new Date().getFullYear()}&nbsp;
        <ChakraLink
          href={'https://www.linkedin.com/in/riccardopolacci/'}
          variant="green"
          target={'_blank'}
        >Riccardo Polacci</ChakraLink>
      </Text>
    </Footer>
  </Container>
)

export default Index
