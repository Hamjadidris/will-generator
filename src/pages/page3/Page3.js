import React from 'react'
import './page3.css'
import { useState,useEffect } from 'react'
import Download from '../../components/Download'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const Page3 = () => {
    const [loading, setLoading] = useState(false) 

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    },[])
  return (
    <div>
        {
            loading ?
            (
                <div className='loader'>

                    <ClimbingBoxLoader
                    color={'#dda15e'}
                    loading={loading}
                    size={20}
                  />
                  <h3>Generating your will</h3>
                </div>
            )
            :
                ('yoo')
        }
    </div>
  )
}

export default Page3