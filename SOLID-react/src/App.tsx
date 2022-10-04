// import SingleResponsibility from './SingleResponsibility/badPractice';
import SingleResponsibility from './SingleResponsibility/GoodPractice';
import OpenClose from './OpenClose/BadPractice';
import { Title, Button, Link, Container } from './OpenClose/GoodPractice';
import './App.css'

function App() {
  return (
    <div className="App">
      <SingleResponsibility />
      <OpenClose title="Open close principle" type="withLinkButton" href="//google.com" buttonText="Go to google" />
      <Container>
          <Title>{'Good practices'}</Title>
          <Button buttonText="Go to google" onClick={() => { window.location.href = '//google.com' }} />
          <Link buttonText="Go to google" href="//google.com" />
      </Container>
    </div>
  )
}

export default App
