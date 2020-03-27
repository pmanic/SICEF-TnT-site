import React from 'react'
import FbImageLibrary from 'react-fb-image-grid'
import "../../style/gallery/gallery.scss"
import variables from "../../style/_variables.scss"

class Gallery extends React.Component {
    render() {

        const images = [
            require("../../assets/galerija/slika1.jpg"),
            require("../../assets/galerija/slika2.jpg"),
            require("../../assets/galerija/slika3.jpg"),
            require("../../assets/galerija/slika4.jpg"),
            require("../../assets/galerija/slika5.jpg"),
            require("../../assets/galerija/slika6.jpg")
        ]

        return (
            <div className="gallery">
                <FbImageLibrary
                    images={images}
                    width={80}
                    overlayBackgroundColor={variables.tntcolor}
                    renderOverlay={() => <div></div>}
                >
                </FbImageLibrary>
            </div>
        )
    }
}

export default Gallery;