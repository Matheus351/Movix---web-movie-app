import { useState, useEffect } from 'react'
import { fetchData } from './api/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'

function App() {

  const dispatch = useDispatch()
  const {url} = useSelector((state:any)=> state.home)

  useEffect(()=>{
      apiTesting()
  },[])


  const apiTesting = () => {
    fetchData("/movie/popular")
    .then((res) =>{
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
    
  }

  return (
    <div className="App">
      Hello World
    </div>
  )
}

export default App
