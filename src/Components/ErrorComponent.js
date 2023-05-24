import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function ErrorComponent({message}) {
  return (
    <Alert status='error' position={'fixed'}  justifyContent={'center'} bottom={'4'} transform={'trannslateX(-50%)'} w={'container.lg'}>
      <AlertIcon/>
      {message}
    </Alert>
  )
}

export default ErrorComponent