import { ButtonProps, Button as ButtonChakra } from '@chakra-ui/react'
function Button({ children, ...rest }: ButtonProps) {
  return (
    <ButtonChakra
      type="submit"
      bg="#ff9000"
      borderRadius="lg"
      color="#312e38"
      px={0}
      py={4}
      h="40px"
      w="100%"
      mb="8px"
      fontWeight="600"
      transition="background-color 0.2s"
      {...rest}
    >
      {children}
    </ButtonChakra>
  )
}

export default Button
