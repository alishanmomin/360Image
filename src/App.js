import { Pannellum } from "pannellum-react";
import * as React from 'react';

 const ImagePreview = () => {
    const [yaw, setYaw] = React.useState(0);
    const [pitch, setPitch] = React.useState(0);
    const panImage  = React.useRef(null);

    return (
    
    <Pannellum
        width="25%"
        height="500px"
        image="https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/content/oh30wZzWSRRqy.jpg?resize=1200%2C600"
        pitch={10} 
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onMouseup={(event)=> { 
        setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
        setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
        }}
    >
        {/* <Pannellum.Hotspot
            type="custom"
            pitch={12.41}
            yaw={117.76}
            handleClick={(evt, name) => console.log(name)}
            name="image info"
        /> */}
    </Pannellum>
    )
}
export default ImagePreview