import React, {useEffect, useState} from 'react'
import Client from '../hooks/client'
import Testing from './Testing'
export default function Bio({modal}) {
    const [bio, setBio] = useState([])


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Client.getEntries({
              content_type: 'myBio',
              order: "sys.createdAt"
            })
             const bio = response.items
             setBio(bio)
          } catch(errors) {
            console.log(errors)
          }
        }
        fetchData()
        }, [])  
        // console.log(bio)
    return (
        <div className={modal === true ? 'bio--shaded' : 'bio'}>
            <Testing array={bio}/>
        </div>
    )
}
