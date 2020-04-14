import React from 'react';
import {Container} from 'react-bootstrap';

import ButtonSuccess from './components/TodoAPp/ButtonSuccess'
import TodoApp from './components/TodoAPp';
import Navbar1 from './components/TodoAPp/NavBar';


function App() {
    return (
        <Container>
          <Navbar1 />
            <div>
                <div>Saya mau belajar reactjs</div>
                <ButtonSuccess name="tombolSetuju">Yes , Please</ButtonSuccess>
                <TodoApp/>
            </div>
        </Container>

    );
}

export default App;
