import styled from "styled-components";
import logo from "../../assets/login/Image.png";
import title from "../../assets/login/title.png"

const All = styled.div`
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1080px;
  background: transparent linear-gradient(241deg, #292A32 0%, #4F5061 100%) 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
`
const BodyLeft = styled.div`
  margin-top: 158px;
  margin-left: 276px;
  width: 400px;
  height: 764px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 80px #0000001A;
  opacity: 1;
`
const Image = styled.img`
    height: 860px;
  width: 1040px;
  margin-top: 110px;
`
const Body = styled.div`
    display: flex;
  flex-direction: row;
`
const ImageTitle = styled.img`
    height: 340px;
  width: 512px;
  position: absolute;
`
const index = () =>{
    return(
    <All>
    <Body>
      <BodyLeft>

      </BodyLeft>
        <Image src={logo}/>
        <ImageTitle src={title}/>
    </Body>
    </All>
    )
}

export default  index
