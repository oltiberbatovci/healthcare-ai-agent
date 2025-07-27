'use client';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react' //client side

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const{user} = useUser();
    const [userDetail, setUserDetail] = useState<any>();
    useEffect(()=>{ //ekzekutim i logjikes
        user && CreateNewUser();
    },[user])

    const CreateNewUser = async () => {
        const result=await axios.post('/api/users');
        console.log(result.data);
        setUserDetail(result.data);
    }

  return (
    <div>
      <UserDetailContext.Provider value = {{userDetail,setUserDetail}}>
        {children}
    </div>
  )
}

export default Provider
