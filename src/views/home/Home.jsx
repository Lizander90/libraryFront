import React from 'react'
import { GenerateTable } from '../../components/BookTable/BookTable'
import SpinLoader from '../../components/spinComponent/spin'

const Home = () => {
    return <React.Fragment>
        <div className='flex justify-center p-10'>
            
            <GenerateTable />
        </div>

    </React.Fragment >
}

export default Home