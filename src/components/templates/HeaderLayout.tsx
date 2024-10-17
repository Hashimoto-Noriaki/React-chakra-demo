import { VFC } from "react";
import { Header } from "../../components/organisms/layout/Header"; // Adjust the import path as necessary

export const HeaderLayout: VFC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{ marginTop: "80px" }}> {/* ヘッダーの高さ分のマージンを設定 */}
                {children}
            </div>
        </>
    );
};
