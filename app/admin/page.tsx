'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'

export default function Admin() {

    const { user, error, isLoading } = useUser();  
    const [data, setData] = React.useState("")

    const showReport = async () => {
        const response = await fetch(
            `https://retrospect.humberstone.uk/dailyquestion` 
          );
          const [answers] = await response.json();
          setData(answers);
        // setData("data!")
    }
    
    const sendPushNotification = () => {
        console.log('pressed Send Push Notifications button')
    }

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2f2f2f] to-[#050404]">
            <section className="footer w-full">
            <div className="p-2 flex space-between gap-5">
    {user ?  
    <>
        <a href="/api/auth/logout">Logout</a>
        <p>User is: {user.name}</p>
        {user.name == 'nickhumberstone@gmail.com' && 
        <>
        <button onClick={showReport}>Get Retrospect Report</button>
        <p>Number of active users: {data.dailyQuestion}</p>
        <p>Daily Question: {data.dailyQuestion}</p>
        <p>All Responses from entire last 28 day cycle: {data.dailyQuestion}</p>
        <button onClick={sendPushNotification}>Send push notifcation to all users</button>
        </>
        }
    </>
    :
    <a href="/api/auth/login">Admin Login</a>
    }
    </div>
    </section>
    </main>
    )
    
}



