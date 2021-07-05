import React, { useEffect } from 'react'

const Drugs = ({setPatient}) => {
    useEffect(()=>{
        setPatient(null)
    },[])
    return (
        <div>
            <h1>Drugs Page</h1>
        </div>
    )
}

export default Drugs;