import { Box, Heading, Select } from '@chakra-ui/react'

export const CityPicker = ({title, ...rest}) => {
  return (
    <Box w={'50%'} p={5} shadow="md" {...rest}>
      <Heading textAlign={'center'} fontSize="xl">{title}</Heading>
      <Select margin={'0 auto'} w={'70%'} mt={4} placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Box>
  )
}


