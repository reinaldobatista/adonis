import { useState, useEffect, useRef, useCallback } from 'react'
import { FiInfo } from 'react-icons/fi'

import {
  InputProps,
  Input as InputChakra,
  InputGroup,
  InputLeftElement,
  Icon,
  InputRightElement,
  Tooltip
} from '@chakra-ui/react'

import { useField } from '@unform/core'
interface InputAttr extends InputProps {
  name: string
  icon?: React.ElementType
}

function Input({ name, icon, ...rest }: InputAttr) {
  const [filled, setFilled] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputBlur = useCallback(() => {
    setFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color={error ? 'red.700' : filled ? '#ff9000' : '#666360'}
      >
        <Icon as={icon} h={4} w={4} />
      </InputLeftElement>
      <InputChakra
        ref={inputRef}
        name={name}
        bg="#232129"
        borderRadius="10px"
        border={2}
        borderStyle="solid"
        defaultValue={defaultValue}
        borderColor={error ? 'red.700' : '#232129'}
        _placeholder={{ color: '#666360' }}
        color="#f4ede8"
        py={4}
        w="100%"
        mb={2}
        onBlur={handleInputBlur}
        {...rest}
      />

      {error && (
        <InputRightElement color={filled ? '#ff9000' : '#666360'}>
          <Tooltip
            shouldWrapChildren
            hasArrow
            label={error}
            placement="top"
            bg="red.700"
          >
            <Icon as={FiInfo} h={4} w={5} color="red.500" />
          </Tooltip>
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default Input
