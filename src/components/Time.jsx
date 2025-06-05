import { useEffect, useState } from "react"

const Time = ({theme})=> {
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timerId)
    }, [])

    const formattedTime = time.toLocaleTimeString('en-uk', {
        'hour': '2-digit',
        'second': '2-digit',
        'minute': '2-digit',
        'hour12': true
    })

    return (
        <div style={{color: theme}} className="flex bg-[#111111] justify-center py-6 px-6 border  rounded-lg">
            <div className="text">
                {formattedTime}
            </div>
        </div>
    )
}

export default Time