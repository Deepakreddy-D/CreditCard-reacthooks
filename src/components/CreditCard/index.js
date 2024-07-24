import {useState} from 'react'

import {
  MainCon,
  ImgCon,
  Head,
  CardName,
  CreditCon,
  Num,
  Name,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onChangeCardNumber = event => setNumber(event.target.value)
  const onChangeCardName = event => setName(event.target.value.toUpperCase())

  return (
    <MainCon>
      <ImgCon data-testid="creditCard">
        <>
          <Head>CREDIT CARD</Head>
        </>
        <CreditCon>
          <Num>{number}</Num>
          <CardName>CARDHOLDER NAME</CardName>
          <Name>{name}</Name>
        </CreditCon>
      </ImgCon>

      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeCardName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainCon>
  )
}

export default CreditCard
