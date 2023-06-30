/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// import articles from '../../data.json';

const NoticiasContext = createContext();

const NoticiasProvider=({children})=>{

    const [category, setCategory] =useState('general')
    const [language, setLanguage] =useState('eng')
    const [noticias, setNoticias] =useState([])
    const [articlesByLanguage, setArticlesByLanguage] =useState([])
    const [pagina, setPagina] =useState(1)
    const [totalNoticias, settotalNoticias] =useState(0)
    // console.log(articlesByLanguage)
    useEffect(()=>{
        const askAPI = async ()=>{
            const url =`https://eventregistry.org/api/v1/article/getArticles?apiKey=261433ee-4545-4a83-988b-6f6a0265d820&keywordOper=and&lang=${language}&articlesCount=12&articlesArticleBodyLen=-1&resultType=articles&dataType=news&keyword=${category}`
            
            const articles = await axios(url)
            // console.log(articles?.data?.articles)
            
            const newArticlesByLanguage = articles?.data?.articles.results?.filter((a)=>a.lang === language)
            setArticlesByLanguage(newArticlesByLanguage)
            
            setNoticias(articles?.data?.articles.results)
            settotalNoticias(articles?.data?.articles.totalResults)
            setPagina(1)
        }
        askAPI();
    },[category,language])
    
    useEffect(()=>{
        const askAPI = async ()=>{
            const url =`https://eventregistry.org/api/v1/article/getArticles?apiKey=261433ee-4545-4a83-988b-6f6a0265d820&keywordOper=and&lang=${language}&articlesCount=12&articlesArticleBodyLen=-1&resultType=articles&dataType=news&keyword=${category}&articlesPage=${pagina}`
            
            const articles = await axios(url)
            console.log(articles)
            
            const newArticlesByLanguage = articles?.data?.articles.results?.filter((a)=>a.lang === language)
            setArticlesByLanguage(newArticlesByLanguage)
            
            setNoticias(articles?.data?.articles.results)
            settotalNoticias(articles?.data?.articles.totalResults)

            
        }
        askAPI();

    },[pagina])

    const handleChangePagina =(e,value)=>{
        setPagina(value)
    }

    const handleChangeCategory = e =>{
        setCategory(e.target.value)
    }
    const handleChangeLanguage = e =>{
        setLanguage(e.target.value)
    }

    return(
        <NoticiasContext.Provider
            value={{
                category,
                handleChangeCategory,
                language,
                handleChangeLanguage,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina,
                articlesByLanguage
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