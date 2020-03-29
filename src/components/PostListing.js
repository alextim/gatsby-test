import React from 'react'
import NewsCard from '../components/NewsCard'

export default ({ posts }) => 
    posts.map( (post, i) => <NewsCard key={i} node={post} /> )
