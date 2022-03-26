import React, {useState, useEffect} from 'react';
import { useDrag, useDrop } from 'react-dnd'

import styled from 'styled-components';

const NoteCont = styled.div`
  background: #A61D11;
  border-radius: 5px;
  height:30px;
  width: 100px;
  color:#FFFFFF;
  font-family: 'Sen';
  font-weight: 400;
  font-size: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  margin-right: 6px;
  margin-bottom: 10px;
  ${({position, left, top})=>(position === 'fixed' || position === 'absolute') && `
    left:${left}px;
    top:${top}px;
    position:${position};
  `}
`
const Notes = ({
  type='notes',
  children=null,
  notepos=null,
  notecontent=null,
  onUpdateNote=()=>{},
}) => {
  const [pos, setPos] = useState(notepos || {
    left:0,
    top:0,
    position: 'relative'
  })

  // ${children || ''} 
  const [content, setContent] = useState(notecontent || `
      NOTE
  `)

  useEffect(()=>{
    if(type === 'boardnotes'){
      onUpdateNote({
        pos,
        content
      })
    }
  }, [pos, content])
  
  const [showInput, setShowInput] = useState(false)

	const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
    type,
    item: {},
    end:(item, monitor)=>{
      if(type === 'boardnotes'){
        setPos({
          left:monitor.getClientOffset().x,
          top:monitor.getClientOffset().y,
          position: 'absolute'
        })
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      coords: monitor.getClientOffset()
    })
  }))

  const sty = {
    left:type === 'boardnotes' ? pos.left : null,
    top:type === 'boardnotes' ? pos.top : null,
    position:type === 'boardnotes' ? pos.position : null
  }

  if(coords && isDragging){
    sty.left = coords.x;
    sty.top = coords.y;
    sty.position = 'fixed';
  }

	return <NoteCont ref={dragPreview} {...sty}> 
    <div ref={drag} onClick={()=>setShowInput(true)}>
      {showInput === false ? content : <textarea 
      // value={content} 
      onChange={(e)=>setContent(e.target.value)}
      onBlur={()=>setShowInput(false)}
      >
        </textarea>}
    </div>
	</NoteCont>
}

export default Notes;