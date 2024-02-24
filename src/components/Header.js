import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  const date = new Date();
  return (
    //navbar showing page title and current Date
    <Nav className='bg-primary p-2 background'>
      <Container className='d-flex justify-content-between align-items-center'>
        <h3 className='fw-bold'>My Habits</h3>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header;
