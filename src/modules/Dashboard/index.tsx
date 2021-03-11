import Column from "./column/index"
import styled from "styled-components";
import "./style.css"
const index = () =>{
    return(
        <div className={"all"}>
            <Column></Column>
            <body>
                {/*<text>Quản lý</text>*/}
                <table className={"table"}>
                    <tr  >
                        <th className={"title"}>STT</th>
                        <th className={"title"}>FullName</th>
                        <th className={"title"}>Email</th>
                        <th className={"title"}>Email</th>
                        <th className={"title"}>Email</th>
                        <th className={"title"}>Action</th>
                    </tr>
                </table>
            </body>
        </div>
    )
}
export default index
