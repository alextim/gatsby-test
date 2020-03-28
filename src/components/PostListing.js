import React from 'react'
import NewsCard from '../components/NewsCard'

export default ({ postEdges }) => 
    postEdges
    //.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map( (edge, i) => <NewsCard key={i} node={edge.node} /> )
