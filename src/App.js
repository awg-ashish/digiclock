import styled from "styled-components";
import Clock from "./Components/Clock";
function App() {
  return (
    <Div className="App">
      <Clock />
    </Div>
  );
}
const Div = styled.div`
  background: url("https://source.unsplash.com/-djRG1vB1pw");
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
`;
export default App;
