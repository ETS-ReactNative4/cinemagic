//import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";
//background:${({dropzonebg})=>dropzonebg || '#4A4A4A'};

const Cont = styled.div`
display: ${props => props.display};
z-index:7;
position:fixed;
bottom:150px;
` 
const Drop = styled.div`
background-color: ${props=>props.dropzonebg};
border-radius: 20px;
border: 1px solid lightgrey;
width:95vw;
height:210px;
position:relative;
display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`
const Text = styled.div`
font-size: 14px;
font-weight:400;
color: ${props=>props.dropzoneText};
font-family: 'Sen', sans-serif;

`

const Dropzone = ({
  children=null,
  text="Drag and Drop a Movie Here",
  onDropItem=()=>{},
  display = "none"
}) => {
  const { theme } = useTheme();
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
  <Drop dropzonebg={comp_themes[theme].dropzone_bg} 
	// 		ref={drop}
    //   bg={canDrop && isOver ? 'pink' : 'peachpuff'}
		>
       <Text dropzoneText={comp_themes[theme].dropzone_text}>{text}</Text>
      {children}
		</Drop>
        </Cont>
}

export default Dropzone