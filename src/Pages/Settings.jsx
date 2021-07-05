import React,{useEffect} from 'react'

const Settings = ({setPatient}) => {
    useEffect(()=>{
        setPatient(null)
    },[])
    return (
        <div>
            <h1>Settings Page</h1>
        </div>
    )
}

export default Settings;