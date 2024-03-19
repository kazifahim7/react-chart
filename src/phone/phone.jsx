import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner';




const Phone = () => {
    const [phone, setPhone] = useState([])
    const [loaded, setLoaded] = useState(true)
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data => setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphon')
            .then(data => {
                const phoneData = data.data.data;
                const fakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhone(fakeData);
                setLoaded(false);
            })
    }, [])

    return (
        <div>
            <div>
                {loaded && <Audio
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />}
            </div>


            <div>
                <BarChart width={1200} height={400} data={phone}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>

                </BarChart>
            </div>



        </div>
    );
};

export default Phone;