import React, {useState, useEffect} from 'react'

const TimeDisplay = () => {
    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );
        return function clearInt() {
            clearInterval(int);
        }
    }, []);
    return (
    <div>
        <h3 className='mt-4'>*** Time Set ***</h3>
        <div><strong>Current Time: {time}</strong></div>
    </div>
)
}

export default TimeDisplay