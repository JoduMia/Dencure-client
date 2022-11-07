// import { useCallback, useState } from "react";
// import ImageViewer from "react-simple-image-viewer";

// function ImageViewer() {
//     const [currentImage, setCurrentImage] = useState(0);
//     const [isViewerOpen, setIsViewerOpen] = useState(false);
//     const images = [
//       "http://placeimg.com/1200/800/nature",
//       "http://placeimg.com/800/1200/nature",
//       "http://placeimg.com/1920/1080/nature",
//       "http://placeimg.com/1500/500/nature"
//     ];

//     const openImageViewer = useCallback((index) => {
//       setCurrentImage(index);
//       setIsViewerOpen(true);
//     }, []);

//     const closeImageViewer = () => {
//       setCurrentImage(0);
//       setIsViewerOpen(false);
//     };

//     return (
//       <div>
//         {images.map((src, index) => (
//           <img
//             src={src}
//             onClick={() => openImageViewer(index)}
//             width="300"
//             key={index}
//             style={{ margin: "2px" }}
//             alt=""
//           />
//         ))}

//         {isViewerOpen && (
//           <ImageViewer
//             src={images}
//             currentIndex={currentImage}
//             onClose={closeImageViewer}
//             disableScroll={false}
//             backgroundStyle={{
//               backgroundColor: "rgba(0,0,0,0.9)"
//             }}
//             closeOnClickOutside={true}
//           />
//         )}
//       </div>
//     );
//   }

//   export default ImageViewer;