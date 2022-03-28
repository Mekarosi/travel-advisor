import axios from 'axios'
  

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 
       {
            
              params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },

              // headers: {
              //   'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              //   'X-RapidAPI-Key': '26620f07femshcd1759982b23732p1e8815jsnf7df2d32ca2e'
              // }
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '7ed2ce3f10mshc46fb3c2f56b5bap1145a7jsn4f5a2d713bc5'
              }
       })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', 
    { 
      params: { lon: lng, lat: lat, },
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': '26620f07femshcd1759982b23732p1e8815jsnf7df2d32ca2e'
    }
  }) 

  return data
  } catch (error) {
    console.log(error)
  }
}