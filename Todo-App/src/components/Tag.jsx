import React from 'react'
import "./Tag.css";

 const Tag = ({tagName, selectTag, selected }) => {
    const tagStyle = {
        Work: {backgroundColor: "#fda821"},
        FUN: {backgroundColor: "#15d4c8"},
        Studies: {backgroundColor: "#ffd12c"},
        Other: {backgroundColor: "#4cdafc"},
        default: {backgroundColor: "#f9f9f9"},

    }
  return (
    <button type='button' className='tag' 
    style={selected ? tagStyle[tagName] : tagStyle.default}
    onClick={() => selectTag(tagName)}>{tagName}</button>
  )
}

export default Tag
