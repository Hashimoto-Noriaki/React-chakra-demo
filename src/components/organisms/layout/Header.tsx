import { memo,VFC} from "react"
import { Outlet } from "react-router-dom";

export const Header: VFC = memo(() =>{
    return<div style={{  height: "80px",backgroundColor:"teal" ,width: "100%", position: "fixed", top: 0, left: 0}}>
        <Outlet/>
    </div>
});
