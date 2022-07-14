import { useState } from "react";
import { useEffect } from "react";
import { collection , getDocs } from "firebase/firestore"
import { db } from "../Components/firebase";
import React from 'react'
import { data } from "jquery";

const UserData = () => {

const [users,setUsers] = useState([])
const userCollection = collection (db , "Customers")

useEffect(() => {
    const getUSers = async () => {
        const data = await getDocs(userCollection)
        setUsers(data)
    }
},[userCollection])

  return (
    <div>
        HELLO
    </div>
  )
}

export default UserData