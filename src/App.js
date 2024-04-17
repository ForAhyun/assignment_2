import CurrencyInput from "./components/CurrencyInput";
import Result from "./components/Result";
import styled from 'styled-components';

function App() {

  return (
    <Container>
      <Border>
      <CurrencyInput/>
      <Result/>
      </Border>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;  
`;

const Border = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 400px;
  height: 500px
`;