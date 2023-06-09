import React, { useEffect, useState, useRef } from "react";
import getTrendingTerms from 'services/getTrendingTerms'
import Category from "components/Category";
import './style.css'

export default function TrendingSearches (){
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends)
    }, [])

    return <div className="columns">
        <div className="trendingTrends">
        <Category options={trends}/>
        </div>
    </div>
    
}

