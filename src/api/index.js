import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

  

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, 
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