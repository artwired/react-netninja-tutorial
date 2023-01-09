import { useState } from 'react'

const Home = () => {
    //let name = 'Stellllaaaaaa'
    const [name, setName] = useState('Stellllaaaaa')
    const [age, setAge] = useState(40)

    const handleClick = () => {
        setName('Dave')
        setAge(10000)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;