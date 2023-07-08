import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    console.log('THESE r my mprops coming into the gallery item', props)
    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>{props.item.trackCensoredName}</p>
            <img src={props.item.artworkUrl100} alt={'test'}></img>
        </div>
    )
}

export default GalleryItem
