import React, {useEffect, useState} from 'react';
import './covid.css';

const Covid = () => {
    const [data, setdata] = useState([])
    const API_data = async() => {
    try {
        const res_api = await fetch("https://data.covid19india.org/data.json");
        const real_data = await res_api.json();
        setdata(real_data.statewise[0])
        console.log(real_data.statewise[0]);
        } 

    catch (error) {
console.log(error);
}
}
    useEffect(() => {
    API_data();
    }, [])
    return(
<>

<h1> 🔴 LiVE</h1>
<h2>Covid-19 Coronavirus Tracker Website</h2>
< div id="india">
<h3>Total Cases In <br/><span>India</span> </h3>
</div>
<div class="corona">
<ul>
<li class="active">Total Active Cases <br/> <span>{data.active}</span></li>
<li class="confirm">Total confirmed Cases <br/> <span>{data.confirmed}</span></li>
<li class="death">Total deaths <br/> <span>{data.deaths}</span></li>
<li class="delta">Total Delta confirmed <br/> <span>{data.deltaconfirmed}</span>
</li>
<li class="recover">Total Recovered <br/><span>{data.recovered}</span></li>
<li class="state">State &amp; StateCode <br/><span>
{data.state} and {data.statecode}</span></li>
</ul>
</div>
<div class="update" >
<ul>
<li>Total Last Update <br/> <span>{data.lastupdatedtime}</span></li>
</ul>
</div>
</>
)
}
export default Covid