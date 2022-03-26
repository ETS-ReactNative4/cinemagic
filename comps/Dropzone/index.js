import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'

const DropCont =styled.div`
  background: ${({bg})=>bg || '#DDD'};
  border-radius: 20px;
  border: 1px solid #8C8C8C;
  width:370px;
  height:200px;
  padding: 20px;
`

const Dropzone = ({
  //props
  children=null,
  //drop the notes
  onDropItem=()=>{}
}) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: ['notes'],
    drop:(item, monitor)=>{
      onDropItem(item);
    },
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

	return <DropCont
			ref={drop}
      bg={canDrop && isOver ? '#999' : '#484848'}
		>
      {children}
		</DropCont>
}

export default Dropzone