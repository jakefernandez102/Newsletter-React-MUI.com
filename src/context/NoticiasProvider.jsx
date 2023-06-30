/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const NoticiasContext = createContext();

const NoticiasProvider=({children})=>{

    const [category, setCategory] =useState('general')
    const [noticias, setNoticias] =useState([])
    const [pagina, setPagina] =useState(1)
    const [totalNoticias, settotalNoticias] =useState(0)
    
    useEffect(()=>{
        const askAPI = async ()=>{
            const url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        
            const data = await axios(url)
            
            setNoticias(data?.data?.articles)
            settotalNoticias(data?.data?.totalResults)
            setPagina(1)
        }
        askAPI();
    },[category])
    
    useEffect(()=>{
        const askAPI = async ()=>{
            const url =`https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        
            const data = await axios(url)
            
            setNoticias(data?.data?.articles)
            settotalNoticias(data?.data?.totalResults)
        }
        askAPI();
    },[pagina])

    const handleChangePagina =(e,value)=>{
        setPagina(value)
    }

    const handleChangeCategory = e =>{
        setCategory(e.target.value)
    }

    return(
        <NoticiasContext.Provider
            value={{
                category,
                handleChangeCategory,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export{
    NoticiasProvider
}
export default NoticiasContext;