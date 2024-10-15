import { memo,VFC } from "react"
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home"; 
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
    return(
        <Routes>
            {/* ルート "/" は Login コンポーネントを表示 */}
             <Route path="/" element={<Login />} />
            {/* ルート "/home" は Home コンポーネントとネストされたルートを表示 */}       
             <Route path="/home" element={<Home />}/>
            {/* ネストされたルート */}
            {homeRoutes.map((route) => (
                <Route
                key={route.path}
                path={route.path}
                element={route.children}
                />
            ))}
        </Routes>
    )
})
