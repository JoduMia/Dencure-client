import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

function ImageView({photo}) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [photo
    ];

    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };

    return (
      <div>
          <img
            src={photo}
            onClick={() => openImageViewer()}
            style={{ margin: "2px" }}
            alt=""
          />

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    );
  }

  export default ImageView;