import styled from 'styled-components'

export const MainCon = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  font-family: 'Roboto';
  min-height: 100vh;
`

export const ImgCon = styled.div`
  @media screen and (min-width: 768px) {
    // flex-direction:column;
    width: 50%;
  }
  width: 100%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Head = styled.h1`
  color: white;
  margin-bottom: 10px;
  border-bottom: 3px solid #ffd773;
  border-width: 90%;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const CreditCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  color: #d3d9e0;
  margin-bottom: 20px;
  width: 375px;
  height: 280px;

  @media screen and (min-width: 992px) {
    width: 505px;
    height: 375px;
  }
  @media screen and (min-width: 768px and max-width:990px) {
    width: 375px;
    height: 320px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
`

export const Name = styled.p`
  margin-left: 50px;
  font-size: 21px;
`

export const CardName = styled.p`
  margin-left: 50px;
  margin-top: 0px;
  margin-bottom: 0;
`

export const Num = styled.p`
  margin-left: 50px;
  margin-top: 62px;
  font-size: 39px;
`
export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: '#ffffff';
  width: 90%;
  max-width: 350px;
  border-radius: 8px;
  margin-top: 32px;
  padding: 32px 24px;
  box-shadow: 0px 4px 16px #d3d9e0;
  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 48px;
    max-width: 450px;
  }
`
export const PaymentMethodHeading = styled.h1`
  text-align: center;
  color: #475569;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`

export const Input = styled.input`
  color: #475569;
  background-color: '#ffffff';
  font-family: 'Roboto';
  font-size: 14px;
  border: 1px solid #c3cad9;
  border-radius: 2px;
  margin-top: 24px;
  padding: 12px 24px;
  outline: none;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`
