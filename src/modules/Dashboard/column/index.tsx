import React from "react"
import styled from "styled-components";
const All = styled.div`
  background-color: #FFFFFF;
  width: 300px;
 
  
`
const Header = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`
const Image = styled.div`
height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: black;
`
const ButtonHeader = styled.button`
  text-align: center;
  font: normal normal medium 18px/22px Lato;
  letter-spacing: 0px;
  color: #226CFC;
  opacity: 1;
  font-family: "Lato","Medium";
  border-width: 0;
  background-color: #FFFFFF;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.text`
  text-align: left;
  font: normal normal bold 16px/19px Lato;
  letter-spacing: 3.52px;
  color: #262626;
  
`
const ButtonBody = styled(ButtonHeader)`
    color: #272727;
    font-family: "Lato","Regular";
`
const Item = styled.div`
    
`
const ImageButton = styled.img`
`

const index = () =>{
    return(
       <All>
           <Header>
               <Image></Image>
               <p>Michael Atkisons</p>
               <ButtonHeader>My Profile</ButtonHeader>
           </Header>
           <Body>
               <Title>
                   MENU
               </Title>
                   <ButtonBody  >
                       Quản lý tài khoản
                   </ButtonBody>
                   <ButtonBody>
                       Inbox
                   </ButtonBody>
                   <ButtonBody>
                       Inbox
                   </ButtonBody>
                   <ButtonBody>
                       Inbox
                   </ButtonBody>
                   <ButtonBody>
                       Inbox
                   </ButtonBody>
           </Body>

       </All>
        )


}
export  default  index
