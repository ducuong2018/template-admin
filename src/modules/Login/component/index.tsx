import styled from "styled-components";
import logo from "../../../assets/login/Image.png";
import title from "../../../assets/login/title.png";
import login from "../../../assets/login/i-login.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect,
    useHistory
} from "react-router-dom";
import Dashboard from "../../Dashboard";
import React from "react";
import {checkLogin} from "../reducer";

function Index (){
        let history = useHistory();
        function handleClick() {
            history.push("/Dashboard");
            console.log(history)
        }

        return(
            <Router>
                <All>
                    <Body>
                        <BodyLeft>
                            <div style={{position:"absolute",bottom:148,right:0}}>
                                <DivInput>
                                    <TitleInput>Email</TitleInput>
                                    <Input/>
                                </DivInput>
                                <DivInput>
                                    <TitleInput>PASSWORD</TitleInput>
                                    <Input onChange={()=>console.log("1")}/>
                                </DivInput>
                            </div>

                            {/*<Link to={"Dashboard"} replace>*/}
                            {/*    <BtnLogin src={login} >*/}
                            {/*    </BtnLogin>*/}
                            {/*</Link>*/}
                            <button onClick={()=>handleClick()}>
                                Login
                            </button>
                        </BodyLeft>
                        <div style={{position:"relative"}}>
                            <Image src={logo}/>
                            <ImageTitle src={title}/>
                        </div>

                    </Body>

                </All>
            </Router>

        )

}


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
  position: relative;
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
  left: -256px;
  top: 200px;

`

const DivInput = styled.div`
    width: 303px;
    height: 80px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #D8D8D8;
opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `
const TitleInput = styled.text`
  text-align: left;
  font: normal normal normal 12px/14px Georgia;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.5;
`
const Input = styled.input`
  width: 100%;
  height: 22px;
  text-align: left;
  font: normal normal normal 20px/22px Georgia;
  letter-spacing: 2px;
  color: #000000;
  opacity: 1;
`
const BtnLogin = styled.img`
    width: 135px;
  height: 30px;
  position: absolute;
  bottom: 100px;
  left: 97px;
`
export default  Index
