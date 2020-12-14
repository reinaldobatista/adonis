import { FlexProps, Flex as FlexChakra } from '@chakra-ui/react'
function Flex({ children, ...rest }: FlexProps) {
  return (
    <FlexChakra
        borderWidth="1px" 
        borderRadius="lg"
        overflow="hidden" 
        direction="column"
      {...rest}
    >
      {children}
    </FlexChakra>
  )
}

export default Flex
