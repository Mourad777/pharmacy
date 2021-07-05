import React,{useEffect} from 'react'

const Support = ({setPatient}) => {
    useEffect(()=>{
        setPatient(null)
    },[])
    return (
        <div>
            <h1>New File Page</h1>
        </div>
    )
}

export default Support;