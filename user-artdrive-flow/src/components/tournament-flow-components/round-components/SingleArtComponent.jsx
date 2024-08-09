// import React, { useState } from "react";
// import Image from "next/image";
// import loadingGif from "../../../../public/loading.gif";
// import profile from "../../../../public/images/image-buttons/profile.svg";
// import share from "../../../../public/images/image-buttons/share.svg";
// import star from "../../../../public/images/image-buttons/star.svg";
// import like from "../../../../public/images/image-buttons/like.svg";
// import { useSwipeable } from "react-swipeable";
// import likeAnimation from "../../../../public/like-animation.gif";

// const SingleArtComponent = ({ handleClose, image, onLike }) => {
//     const [loading, setLoading] = useState(false); // New state for loading
//     const [showAnimation, setShowAnimation] = useState(false); // State to handle like animation

//     const closeSingleArtComponent = async () => {
//         setLoading(true); // Show loading modal
//         setShowAnimation(true); // Show like animation
//         setTimeout(() => setShowAnimation(false), 1000); // Hide like animation after 1 second
//         await onLike();
//         setLoading(false); // Hide loading modal
//         handleClose();
//     };

//     const swipeHandlers = useSwipeable({
//         onSwipedLeft: () => handleClose(),
//         onSwipedRight: () => closeSingleArtComponent(),
//         preventScrollOnSwipe: true,
//         trackMouse: true,
//     });

//     return (
//         <div
//             className="inset-0 bg-black w-full h-full flex flex-col items-center"
//             {...swipeHandlers}
//         >
//             <div className="text-white w-full flex flex-col items-center">
//                 <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//                     <div className="relative">
//                         <Image
//                             src={image}
//                             alt="images"
//                             width={600}
//                             height={800}
//                             className="rounded-lg w-[390px] object-cover bg-purple-950 animate-bg-pulse h-[500px]"
//                         />
//                         {loading && (
//                             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
//                                 <Image src={loadingGif} alt="Loading" width={50} height={50} />
//                             </div>
//                         )}
//                         {showAnimation && (
//                             <div className="absolute inset-0 flex items-center justify-center z-10">
//                                 <Image src={likeAnimation} alt="Like Animation" width={100} height={100} />
//                             </div>
//                         )}
//                         <div className="absolute top-3 right-3">
//                             <button
//                                 onClick={handleClose}
//                                 className="absolute top-2 right-2 text-white text-2xl p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 24 24"
//                                     fill="white"
//                                     className="w-6 h-6"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.715a.75.75 0 11-1.06 1.06L12 14.475l-4.715 4.714a.75.75 0 11-1.06-1.06L10.475 12 5.76 7.285a.75.75 0 010-1.06z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="absolute bottom-3 left-3">
//                             <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                                 <Image src={share} alt="share" />
//                             </button>
//                         </div>
//                         <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                             <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                                 <Image src={star} alt="star" />
//                             </button>
//                         </div>
//                         <div className="absolute bottom-3 right-3">
//                             <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                                 <Image src={profile} alt="profile" />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex justify-between mt-10">
//                         <button
//                             onClick={closeSingleArtComponent}
//                             className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
//                         >
//                             <Image src={like} alt="I like" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleArtComponent;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useSwipeable } from "react-swipeable";
// import loadingGif from "../../../../public/loading.gif";
// import profile from "../../../../public/images/image-buttons/profile.svg";
// import share from "../../../../public/images/image-buttons/share.svg";
// import star from "../../../../public/images/image-buttons/star.svg";
// import like from "../../../../public/images/image-buttons/like.svg";
// import likeAnimation from "../../../../public/like-animation.gif";

// const SingleArtComponent = ({ handleClose, image, onLike }) => {
//     const [loading, setLoading] = useState(false);
//     const [showAnimation, setShowAnimation] = useState(false);
//     const [swipeDirection, setSwipeDirection] = useState(null);

//     const closeSingleArtComponent = async () => {
//         setLoading(true);
//         setShowAnimation(true);
//         setTimeout(() => setShowAnimation(false), 1000);
//         await onLike();
//         setLoading(false);
//         handleClose();
//     };

//     const swipeHandlers = useSwipeable({
//         onSwipedLeft: () => handleClose(),
//         onSwipedRight: () => closeSingleArtComponent(),
//         preventScrollOnSwipe: true,
//         trackMouse: true,
//     });

//     const handleSwipe = (dir) => {
//         setSwipeDirection(dir);
//         if (dir === 1) {
//             closeSingleArtComponent();
//         } else {
//             handleClose();
//         }
//     };

//     return (
//         <motion.div
//             className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             {...swipeHandlers}
//         >
//             <motion.div
//                 className="relative w-full max-w-xl h-full flex flex-col items-center justify-center"
//                 initial={{ x: 0 }}
//                 animate={{
//                     x: swipeDirection === 1 ? 300 : swipeDirection === -1 ? -300 : 0,
//                     opacity: swipeDirection ? 0 : 1,
//                 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 <div className="relative w-full h-auto flex flex-col items-center">
//                     <Image
//                         src={image}
//                         alt="Art"
//                         width={600}
//                         height={800}
//                         className="rounded-lg w-[90%] h-[500px] object-cover bg-purple-950 animate-bg-pulse"
//                     />
//                     {loading && (
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
//                             <Image src={loadingGif} alt="Loading" width={50} height={50} />
//                         </div>
//                     )}
//                     {showAnimation && (
//                         <div className="absolute inset-0 flex items-center justify-center z-10">
//                             <Image src={likeAnimation} alt="Like Animation" width={100} height={100} />
//                         </div>
//                     )}
//                     <div className="absolute top-3 right-3">
//                         <button
//                             onClick={handleClose}
//                             className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 mr-4 rounded-full"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="white"
//                                 className="w-6 h-6"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.715a.75.75 0 11-1.06 1.06L12 14.475l-4.714 4.714a.75.75 0 11-1.06-1.06L10.475 12 5.76 7.285a.75.75 0 010-1.06z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
                   
//                     <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                         <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                             <Image src={star} alt="star" />
//                         </button>
//                     </div>
                  
//                 </div>
//                 <div className="flex justify-between mt-10">
//                     <button
//                         onClick={closeSingleArtComponent}
//                         className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
//                     >
//                         <Image src={like} alt="I like" />
//                     </button>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default SingleArtComponent;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useSwipeable } from "react-swipeable";
// import loadingGif from "../../../../public/loading.gif";
// import profile from "../../../../public/images/image-buttons/profile.svg";
// import share from "../../../../public/images/image-buttons/share.svg";
// import star from "../../../../public/images/image-buttons/star.svg";
// import like from "../../../../public/images/image-buttons/like.svg";
// import likeAnimation from "../../../../public/like-animation.gif";
// import { addToFavorites, removeFromFavorites, fetchFavoriteArtworks } from "@/pages/api/favorites";

// const SingleArtComponent = ({ handleClose, image, onLike, artId }) => {
//     const [loading, setLoading] = useState(false);
//     const [showAnimation, setShowAnimation] = useState(false);
//     const [swipeDirection, setSwipeDirection] = useState(null);
//     const [isFavorite, setIsFavorite] = useState(false); // State for favorite
//     const [favorites, setFavorites] = useState([]); // State for storing the list of favorite images

//     useEffect(() => {
//         const fetchFavorites = async () => {
//             const favoriteList = await fetchFavoriteArtworks();
//             setFavorites(favoriteList.map(fav => fav.artwork.id));
//         };
//         fetchFavorites();
//     }, []);

//     useEffect(() => {
//         if (favorites.includes(artId)) {
//             setIsFavorite(true);
//         } else {
//             setIsFavorite(false);
//         }
//     }, [artId, favorites]);

//     const closeSingleArtComponent = async () => {
//         setLoading(true);
//         setShowAnimation(true);
//         setTimeout(() => setShowAnimation(false), 1000);
//         await onLike();
//         setLoading(false);
//         handleClose();
//     };

//     const handleFavoriteToggle = async () => {
//         if (isFavorite) {
//             await removeFromFavorites(artId);
//         } else {
//             await addToFavorites(artId);
//         }
//         setIsFavorite(!isFavorite);
//         const updatedFavorites = await fetchFavoriteArtworks();
//         setFavorites(updatedFavorites.map(fav => fav.artwork.id));
//     };

//     const swipeHandlers = useSwipeable({
//         onSwipedLeft: () => handleClose(),
//         onSwipedRight: () => closeSingleArtComponent(),
//         preventScrollOnSwipe: true,
//         trackMouse: true,
//     });

//     const handleSwipe = (dir) => {
//         setSwipeDirection(dir);
//         if (dir === 1) {
//             closeSingleArtComponent();
//         } else {
//             handleClose();
//         }
//     };

//     return (
//         <motion.div
//             className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             {...swipeHandlers}
//         >
//             <motion.div
//                 className="relative w-full max-w-xl h-full flex flex-col items-center justify-center"
//                 initial={{ x: 0 }}
//                 animate={{
//                     x: swipeDirection === 1 ? 300 : swipeDirection === -1 ? -300 : 0,
//                     opacity: swipeDirection ? 0 : 1,
//                 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 <div className="relative w-full h-auto flex flex-col items-center">
//                     <Image
//                         src={image}
//                         alt="Art"
//                         width={600}
//                         height={800}
//                         className="rounded-lg w-[90%] h-[550px] object-cover bg-purple-950 animate-bg-pulse"
//                     />
//                     {loading && (
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
//                             <Image src={loadingGif} alt="Loading" width={50} height={50} />
//                         </div>
//                     )}
//                     {/* {showAnimation && (
//                         <div className="absolute inset-0 flex items-center justify-center z-10">
//                             <Image src={likeAnimation} alt="Like Animation" width={100} height={100} />
//                         </div>
//                     )} */}
//                     <div className="absolute top-3 right-3">
//                         <button
//                             onClick={handleClose}
//                             className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 mr-4 rounded-full"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="white"
//                                 className="w-6 h-6"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.715a.75.75 0 11-1.06 1.06L12 14.475l-4.714 4.714a.75.75 0 11-1.06-1.06L10.475 12 5.76 7.285a.75.75 0 010-1.06z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                         <button
//                             className={`p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full ${isFavorite ? "bg-green-500" : ""}`}
//                             onClick={handleFavoriteToggle}
//                         >
//                             <Image src={star} alt="star" />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="flex justify-between mt-10">
//                     <button
//                         onClick={closeSingleArtComponent}
//                         className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
//                     >
//                         <Image src={like} alt="I like" />
//                     </button>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default SingleArtComponent;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useSwipeable } from "react-swipeable";
// import loadingGif from "../../../../public/loading.gif";
// import profile from "../../../../public/images/image-buttons/profile.svg";
// import share from "../../../../public/images/image-buttons/share.svg";
// import star from "../../../../public/images/image-buttons/star.svg";
// import like from "../../../../public/images/image-buttons/like.svg";
// import expand from "../../../../public/images/image-buttons/expand.png"; // Import the expand icon
// import likeAnimation from "../../../../public/like-animation.gif";
// import { addToFavorites, removeFromFavorites, fetchFavoriteArtworks } from "@/pages/api/favorites";

// const SingleArtComponent = ({ handleClose, image, onLike, artId }) => {
//     const [loading, setLoading] = useState(false);
//     const [showAnimation, setShowAnimation] = useState(false);
//     const [swipeDirection, setSwipeDirection] = useState(null);
//     const [isFavorite, setIsFavorite] = useState(false); // State for favorite
//     const [favorites, setFavorites] = useState([]); // State for storing the list of favorite images
//     const [isExpanded, setIsExpanded] = useState(false); // State for expanded image view

//     useEffect(() => {
//         const fetchFavorites = async () => {
//             const favoriteList = await fetchFavoriteArtworks();
//             setFavorites(favoriteList.map(fav => fav.artwork.id));
//         };
//         fetchFavorites();
//     }, []);

//     useEffect(() => {
//         if (favorites.includes(artId)) {
//             setIsFavorite(true);
//         } else {
//             setIsFavorite(false);
//         }
//     }, [artId, favorites]);

//     const closeSingleArtComponent = async () => {
//         setLoading(true);
//         setShowAnimation(true);
//         setTimeout(() => setShowAnimation(false), 1000);
//         await onLike();
//         setLoading(false);
//         handleClose();
//     };

//     const handleFavoriteToggle = async () => {
//         if (isFavorite) {
//             await removeFromFavorites(artId);
//         } else {
//             await addToFavorites(artId);
//         }
//         setIsFavorite(!isFavorite);
//         const updatedFavorites = await fetchFavoriteArtworks();
//         setFavorites(updatedFavorites.map(fav => fav.artwork.id));
//     };

//     const swipeHandlers = useSwipeable({
//         onSwipedLeft: () => handleClose(),
//         onSwipedRight: () => closeSingleArtComponent(),
//         preventScrollOnSwipe: true,
//         trackMouse: true,
//     });

//     const handleSwipe = (dir) => {
//         setSwipeDirection(dir);
//         if (dir === 1) {
//             closeSingleArtComponent();
//         } else {
//             handleClose();
//         }
//     };

//     const toggleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

//     return (
//         <motion.div
//             className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             {...swipeHandlers}
//         >
//             <motion.div
//                 className={`relative w-full ${isExpanded ? 'h-full' : 'max-w-xl h-full'} flex flex-col items-center justify-center`}
//                 initial={{ x: 0 }}
//                 animate={{
//                     x: swipeDirection === 1 ? 300 : swipeDirection === -1 ? -300 : 0,
//                     opacity: swipeDirection ? 0 : 1,
//                 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 <div className="relative w-full h-auto flex flex-col items-center">
//                     <Image
//                         src={image}
//                         alt="Art"
//                         width={isExpanded ? 1200 : 600}
//                         height={isExpanded ? 1000 : 800}
//                         className={`rounded-lg ${isExpanded ? 'w-full h-full object-contain' : 'w-[90%] h-[550px] object-cover bg-purple-950 animate-bg-pulse'}`}
//                     />
//                     {loading && (
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
//                             <Image src={loadingGif} alt="Loading" width={50} height={50} />
//                         </div>
//                     )}
//                     <div className="absolute top-3 right-3 flex space-x-2 mr-3">
//                         <button
//                             onClick={toggleExpand}
//                             className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full"
//                         >
//                             <Image src={expand} alt="Expand" />
//                         </button>
//                         <button
//                             onClick={handleClose}
//                             className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="white"
//                                 className="w-6 h-6"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.715a.75.75 0 11-1.06 1.06L12 14.475l-4.714 4.714a.75.75 0 11-1.06-1.06L10.475 12 5.76 7.285a.75.75 0 010-1.06z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                         <button
//                             className={`p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full ${isFavorite ? "bg-green-500" : ""}`}
//                             onClick={handleFavoriteToggle}
//                         >
//                             <Image src={star} alt="star" />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="flex justify-between mt-10">
//                     <button
//                         onClick={closeSingleArtComponent}
//                         className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
//                     >
//                         <Image src={like} alt="I like" />
//                     </button>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default SingleArtComponent;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import loadingGif from "../../../../public/loading.gif";
import profile from "../../../../public/images/image-buttons/profile.svg";
import share from "../../../../public/images/image-buttons/share.svg";
import star from "../../../../public/images/image-buttons/star.svg";
import like from "../../../../public/images/image-buttons/like.svg";
import expandIcon from "../../../../public/images/image-buttons/expand.png"; // Import the expand icon
import shrinkIcon from "../../../../public/images/image-buttons/shrink.png"; // Import the shrink icon
import likeAnimation from "../../../../public/like-animation.gif";
import { addToFavorites, removeFromFavorites, fetchFavoriteArtworks } from "@/pages/api/favorites";

const SingleArtComponent = ({ handleClose, image, onLike, artId }) => {
    const [loading, setLoading] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [swipeDirection, setSwipeDirection] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false); // State for favorite
    const [favorites, setFavorites] = useState([]); // State for storing the list of favorite images
    const [isExpanded, setIsExpanded] = useState(false); // State for expanded image view

    useEffect(() => {
        const fetchFavorites = async () => {
            const favoriteList = await fetchFavoriteArtworks();
            setFavorites(favoriteList.map(fav => fav.artwork.id));
        };
        fetchFavorites();
    }, []);

    useEffect(() => {
        if (favorites.includes(artId)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [artId, favorites]);

    const closeSingleArtComponent = async () => {
        setLoading(true);
        setShowAnimation(true);
        setTimeout(() => setShowAnimation(false), 1000);
        await onLike();
        setLoading(false);
        handleClose();
    };

    const handleFavoriteToggle = async () => {
        if (isFavorite) {
            await removeFromFavorites(artId);
        } else {
            await addToFavorites(artId);
        }
        setIsFavorite(!isFavorite);
        const updatedFavorites = await fetchFavoriteArtworks();
        setFavorites(updatedFavorites.map(fav => fav.artwork.id));
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleClose(),
        onSwipedRight: () => closeSingleArtComponent(),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const handleSwipe = (dir) => {
        setSwipeDirection(dir);
        if (dir === 1) {
            closeSingleArtComponent();
        } else {
            handleClose();
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            {...swipeHandlers}
        >
            <motion.div
                className={`relative w-full ${isExpanded ? 'h-full' : 'max-w-xl h-full'} flex flex-col items-center justify-center`}
                initial={{ x: 0 }}
                animate={{
                    x: swipeDirection === 1 ? 300 : swipeDirection === -1 ? -300 : 0,
                    opacity: swipeDirection ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative w-full h-auto flex flex-col items-center">
                    <Image
                        src={image}
                        alt="Art"
                        width={isExpanded ? 1200 : 600}
                        height={isExpanded ? 1000 : 800}
                        className={`rounded-lg ${isExpanded ? ' h-full object-contain w-[90%]' : 'w-[90%] h-[550px] object-cover bg-purple-950 animate-bg-pulse'}`}
                    />
                    {loading && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                            <Image src={loadingGif} alt="Loading" width={50} height={50} />
                        </div>
                    )}
                    <div className="absolute top-3 right-3 flex space-x-2 mr-6">
                        <button
                            onClick={toggleExpand}
                            className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full"
                        >
                            <Image src={isExpanded ? shrinkIcon : expandIcon} alt={isExpanded ? "Shrink" : "Expand"} />
                        </button>
                        <button
                            onClick={handleClose}
                            className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.715a.75.75 0 11-1.06 1.06L12 14.475l-4.714 4.714a.75.75 0 11-1.06-1.06L10.475 12 5.76 7.285a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                        <button
                            className={`p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full ${isFavorite ? "bg-green-500" : ""}`}
                            onClick={handleFavoriteToggle}
                        >
                            <Image src={star} alt="star" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between mt-10">
                    <button
                        onClick={closeSingleArtComponent}
                        className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
                    >
                        <Image src={like} alt="I like" />
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SingleArtComponent;
