import axios from 'react'

axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
})

