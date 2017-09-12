import React, { Component } from 'react';

export function createMarkup(link) {
  return {
    __html: link
  };
}

export function checkNeed(topic_attr, subtitle){
  if(!topic_attr) {
    return null
  }
  else if(topic_attr && subtitle == 1) {
    return <h4 className="subtitle">{topic_attr}</h4>
  }
  else {
    return <p className="text">{topic_attr}</p>
  }
}

export function formatItalics(substr){
  return (<i key={substr[0]}>{substr}</i>);
}

export function formatText(topic_attr){
  if(!topic_attr) {
    return null
  }
  var br = topic_attr.map(function(string, index) {
      var stringIndex = string.indexOf("- I'm nothing if not persevering.")
      if(stringIndex === -1){
        return(<p key={index}>{string}<br/></p>)
      }
      else{
        var substr = string.slice(stringIndex)
        var italicised = formatItalics(substr)
        return(<p key={stringIndex}>{string.replace(substr, '')}{italicised}<br/></p>)
      }
  });
  return (<div>{ br }</div>);
}

export function formatBullets(topic_attr){
  if(!topic_attr) {
    return null
  }
  var bullets = topic_attr.map(function(bullet, index) {
      return (
        <li key={index}>{bullet}</li>
      );
  });
  return (<ul>{ bullets }</ul>);
}
