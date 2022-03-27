import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import { getPlacesData } from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'


const App = () => {
    const [places, setPlaces] = useState([])
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const [childClicked, setChildClicked] = useState(null)
    const [coordinates, setCoodinates] = useState({})
    const [bounds, setBounds] = useState({})
    const [isloading, setisLoading] = useState(false)
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
           setCoodinates({ lat: latitude, lng: longitude })
        })
    }, []) 

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating)

        setFilteredPlaces(filteredPlaces)
    }, [rating])

    useEffect(() => {

        if(bounds) {

        setisLoading(true)
        getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
            
            setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
            setFilteredPlaces([])
            setisLoading(false)
        })
    }
    }, [type, coordinates, bounds])

    return (
        <>
            <CssBaseline />
            <Header setCoodinates={setCoodinates} />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                       places={filteredPlaces.length ? filteredPlaces : places}
                       childClicked={childClicked}
                       isloading={isloading}
                       type={type}
                       setType={setType}
                       rating={rating}
                       setRating={setRating}


                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                       setCoodinates={setCoodinates}
                       setBounds={setBounds}
                       coordinates={coordinates}
                       places={filteredPlaces.length ? filteredPlaces : places}
                       setChildClicked={setChildClicked}
                    />
                </Grid>

            </Grid>
        </>
    )
}

export default App