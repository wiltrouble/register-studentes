import React, { useEffect, useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import { db } from "../firebase/firebase";

const Register = () => {

    const [student, setStudent] = useState([]);

    const addOrEditStudent = async (studentObject) => {
        await db.collection('students').doc().set(studentObject);

    }
    

    const getStudents = async () => {
        db.collection('students').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            });
            console.log(docs)
        });

        // db.collection('students')
        //     .get()
        //     .then(querySnapshot => {
        //     const data = querySnapshot.docs.map(doc => doc.data());
        //     console.log(data); // array of cities objects
        //     });
    };

    useEffect(() => {
        console.log('opteniendo datos')
        getStudents()
    }, [])

    return (
        <div className="register">
            <RegisterForm addOrEditStudent={addOrEditStudent}></RegisterForm>
        </div>
    )
}

export default Register
