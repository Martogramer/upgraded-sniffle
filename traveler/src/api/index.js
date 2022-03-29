import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData=async(sw, ne)=>{
    try{
        const {data: {data}}=await axios.get(URL, {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '82d7d964demsh7d8c7d788dbca8dp14c473jsnbc4473c134ac'
                }
        });
        return data;
    }catch(error){console.log(error)}
}