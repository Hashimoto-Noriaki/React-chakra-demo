import { ChakraProvider, Button } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Button colorScheme="teal">ボタン</Button>
        <p>テスト</p>
        <b>Reactテスト</b>
      </BrowserRouter>
    </ChakraProvider>
  );
}
