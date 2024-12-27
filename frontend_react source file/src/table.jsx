import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Table() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const url = "http://localhost:5000/getdata";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []); // Empty dependency array ensures this runs once when the component mounts.
    
    const handleback= ()=>{
        navigate('/')
    }

    return (
        <>
        <h1>DATA</h1>
        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>GENDER</th>
                    <th>BIO</th>
                </tr>
            </thead>
            <tbody className="tablebody">
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.pass}</td>
                        <td>{item.gender}</td>
                        <td>{item.bio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button className='mt-5' onClick={handleback}>back to register</button>
        </>
    );
}

export default Table;
