//import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components';

const Cont = styled.div`
display: ${props => props.display};
z-index:7;
position:fixed;
bottom:90px;
` 
const Drop = styled.div`
background:${({bg})=>bg || '#4A4A4A'};
border-radius: 20px;
border: 1px solid lightgrey;
width:386px;
height:150px;
position:relative;
display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`
const Text = styled.div`
font-size: 14px;
font-weight:400;
color: #FFFFFF;
font-family: 'Sen', sans-serif;

`

const Dropzone = ({
  children=null,
  text="Drag and Drop a Movie Here",
  onDropItem=()=>{},
  display = "none"
}) => {
// 	const [{ canDrop, isOver }, drop] = useDrop(() => ({
//     // The type (or types) to accept - strings or symbols
//     accept: 'notes',
//     drop:(item, monitor)=>{
//       onDropItem(item);
//     },
//     // Props to collect
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//       canDrop: monitor.canDrop()
//     })
//   }))

  return <Cont display ={display}>
  <Drop
	// 		ref={drop}
    //   bg={canDrop && isOver ? 'pink' : 'peachpuff'}
		>
       <Text>{text}</Text>
      {children}
		</Drop>
        </Cont>
}

export default Dropzone