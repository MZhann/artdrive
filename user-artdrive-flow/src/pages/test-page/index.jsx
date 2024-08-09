// // // import React, { useEffect, useState } from "react";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import Lottie from "lottie-react";
// // // import whiteLike from "../../../public/images/image-buttons/white-like.svg";
// // // import imageCheck from "../../../public/images/bannerArt1.png";
// // // import fireworkAnimation from "../../../public/firework-throwed.json";
// // // import { fetchRanking } from "@/pages/api/tournaments";

// // // const RankingComponent = () => {
// // //     const [rankings, setRankings] = useState([
// // //         {
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },
// // //         {
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },
// // //         {
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },
// // //         {
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },
// // //         {
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },
// // //         {
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },{
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },{
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },{
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },{
// // //             user_id: 1,
// // //             artwork: {
// // //                 image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
// // //                 likes_count: 63,
// // //             },
// // //             artist_page: "/profile/",
// // //             username: "CHECK ZHANBO",
// // //             prize: 1000,
// // //         },
// // //     ]);
// // //     const [loading, setLoading] = useState(false);
// // //     const [error, setError] = useState(null);
// // //     const [isClient, setIsClient] = useState(false);
// // //     const [showFireworks, setShowFireworks] = useState(true); // State to control fireworks visibility

// // //     // useEffect(() => {
// // //     //     const fetchRankings = async () => {
// // //     //         try {
// // //     //             const data = await fetchRanking(tournamentId);
// // //     //             setRankings(data.results.participants);
// // //     //         } catch (error) {
// // //     //             setError(error.message);
// // //     //         } finally {
// // //     //             setLoading(false);
// // //     //         }
// // //     //     };

// // //     //     fetchRankings();
// // //     // }, [tournamentId]);

// // //     useEffect(() => {
// // //         setIsClient(true);
// // //     }, []);

// // //     useEffect(() => {
// // //         const timer = setTimeout(() => {
// // //             setShowFireworks(true); // Hide fireworks after 3 seconds
// // //         }, 3000);

// // //         return () => clearTimeout(timer); // Clean up the timer on component unmount
// // //     }, []);

// // //     if (loading) {
// // //         return <div>Loading...</div>;
// // //     }

// // //     if (error) {
// // //         return <div>Error: {error}</div>;
// // //     }

// // //     const formatPrize = (prize) => {
// // //         return Math.floor(prize);
// // //     };

// // //     const fireworkOptions = {
// // //         loop: false,
// // //         autoplay: true,
// // //         animationData: fireworkAnimation,
// // //         rendererSettings: {
// // //             preserveAspectRatio: "xMidYMid slice",
// // //         },
// // //     };

// // //     return (
// // //         <div className="w-full flex flex-col items-center gradient-tournament-background text-white pt-6 px-2 pb-20">
// // //             {showFireworks && (
// // //                 <div className="absolute inset-0 flex justify-center items-center">
// // //                     <Lottie
// // //                         animationData={fireworkAnimation}
// // //                         className="w-[450px] h-[450px]"
// // //                     />
// // //                 </div>
// // //             )}
// // //             <h1 className="text-2xl mb-3">Ranking</h1>
// // //             <div className="h-[2px] w-[85%] mb-6 bg-gray-600"></div>
// // //             <div className="w-full max-w-2xl flex flex-col items-center px-8">
// // //                 {rankings.map((rank, index) => (
// // //                     <div
// // //                         key={rank.user_id}
// // //                         className="flex w-full items-center space-x-5 mb-4"
// // //                     >
// // //                         <div className="flex items-center justify-center text-sm text-gray-300">
// // //                             {index + 1}
// // //                         </div>
// // //                         <div className="relative">
// // //                             {index === 0 ? (
// // //                                 <Image
// // //                                     src={imageCheck}
// // //                                     alt={`Rank ${index + 1}`}
// // //                                     width={200}
// // //                                     height={202}
// // //                                     className="w-[90px] rounded-full mb-4 mt-7 h-[90px] object-cover"
// // //                                 />
// // //                             ) : (
// // //                                 <Image
// // //                                     src={imageCheck}
// // //                                     alt={`Rank ${index + 1}`}
// // //                                     width={200}
// // //                                     height={202}
// // //                                     className="w-[75px] h-[75px] object-cover rounded-full"
// // //                                 />
// // //                             )}

// // //                             {index === 0 && (
// // //                                 <div className="absolute top-[-10px] left-[50%] transform -translate-x-1/2 w-8 h-8">
// // //                                     <Image
// // //                                         src="/images/image-buttons/crown.png"
// // //                                         alt="Crown"
// // //                                         layout="fill"
// // //                                         objectFit="contain"
// // //                                     />
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                         <div className="flex ml-4">
// // //                             <div className="ml-0">
// // //                                 <div className="text-sm">{rank.username}</div>
// // //                                 {isClient && rank.artist_page && (
// // //                                     <Link
// // //                                         className="text-xs underline text-gray-500"
// // //                                         href={rank.artist_page}
// // //                                     >
// // //                                         artist page
// // //                                     </Link>
// // //                                 )}
// // //                             </div>
// // //                             <div className="font-normal text-nowrap ml-6 flex items-center text-xl">
// // //                                 {formatPrize(rank.prize)} $
// // //                             </div>
// // //                             <div className="font-normal text-nowrap ml-4 text-xl flex items-center">
// // //                                 <Image
// // //                                     src={whiteLike}
// // //                                     alt="like"
// // //                                     className="h-[20px] w-[20px]"
// // //                                     height={20}
// // //                                     width={20}
// // //                                 />
// // //                                 <div className="ml-2 text-xm">
// // //                                     {rank.artwork.likes_count}
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 ))}
// // //             </div>

// // //             {isClient && (
// // //                 <Link
// // //                     href={`/tournaments`}
// // //                     className="text-white mt-10 text-xl border-2 rounded-2xl px-4 py-2 border-indigo-800"
// // //                 >
// // //                     Return to tournaments page
// // //                 </Link>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default RankingComponent;
// // // import { useState, useEffect } from "react";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { fetchRanking } from "@/pages/api/tournaments";
// // // import like from "../../../public/images/image-buttons/like.svg";
// // // import searchIcon from "../../../public/images/image-buttons/search.svg";
// // // import TournamentUserCard from "../../components/tournament-components/TournamentUserCard";
// // // import Lottie from "lottie-react";
// // // import fireworkAnimation from "../../../public/firework-throwed.json";
// // // import TournamentResultSingleCard from "../../components/tournament-components/TournamentResultSingleCard";

// // // const TestRankingComponent = () => {
// // //     const [rankings, setRankings] = useState([]);
// // //     const [userRank, setUserRank] = useState(null);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);
// // //     const [page, setPage] = useState(1);
// // //     const [username, setUsername] = useState("");
// // //     const [noMoreData, setNoMoreData] = useState(false);
// // //     const [searchResults, setSearchResults] = useState([]);
// // //     const [showFireworks, setShowFireworks] = useState(true);

// // //     useEffect(() => {
// // //         const fetchRankings = async () => {
// // //             try {
// // //                 console.log(
// // //                     "Fetching rankings for tournament ID:",
// // //                     12,
// // //                     "page:",
// // //                     page,
// // //                     "username:",
// // //                     username
// // //                 );
// // //                 const data = await fetchRanking(12, page, username);
// // //                 console.log("Fetched rankings data:", data);

// // //                 if (page === 1 && username === "") {
// // //                     setRankings(data.results.participants);
// // //                 } else if (page === 1 && username !== "") {
// // //                     setSearchResults(data.results.participants);
// // //                 } else {
// // //                     setRankings((prev) => [
// // //                         ...prev,
// // //                         ...data.results.participants,
// // //                     ]);
// // //                 }

// // //                 setUserRank(data.results.user_rank);

// // //                 if (!data.next) {
// // //                     setNoMoreData(true);
// // //                 } else {
// // //                     setNoMoreData(false);
// // //                 }

// // //                 setLoading(false);
// // //             } catch (error) {
// // //                 console.error(
// // //                     "Error fetching rankings in TournamentResult component:",
// // //                     error.response ? error.response.data : error.message
// // //                 );
// // //                 setError(error.message);
// // //                 setLoading(false);
// // //             }
// // //         };

// // //         fetchRankings();
// // //     }, [page, username]);

// // //     const loadMore = () => {
// // //         setPage((prev) => prev + 1);
// // //     };

// // //     const handleSearch = (e) => {
// // //         setUsername(e.target.value);
// // //     };

// // //     const handleSearchClick = () => {
// // //         setPage(1); // Reset to page 1 for new search
// // //     };

// // //     useEffect(() => {
// // //         if (showFireworks) {
// // //             const timer = setTimeout(() => {
// // //                 setShowFireworks(false);
// // //             }, 3750);
// // //             return () => clearTimeout(timer);
// // //         }
// // //     }, [showFireworks]);

// // //     if (loading) {
// // //         return <div>Loading...</div>;
// // //     }

// // //     if (error) {
// // //         return <div>Error: {error}</div>;
// // //     }

// // //     return (
// // //         <div className="w-full h-screen flex justify-center dark-purple-gradient">
// // //             <div className="w-[90%] rounded-3xl text-white mt-10 flex flex-col items-center relative">
// // //                 {showFireworks && (
// // //                     <div className="absolute inset-0 flex justify-center items-center">
// // //                         <Lottie
// // //                             animationData={fireworkAnimation}
// // //                             className="w-[450px] h-[450px]"
// // //                         />
// // //                     </div>
// // //                 )}
// // //                 <h1 className="my-3 text-xl font-bold">Tournament Ranking</h1>
// // //                 <div className="flex justify-center space-x-3 w-full">
// // //                     {rankings.length > 1 && (
// // //                         <div className="flex flex-col items-center mt-10">
// // //                             <div className="relative">
// // //                                 <div className="w-[90px] h-[90px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
// // //                                     <Image
// // //                                         src={rankings[1].artwork.image}
// // //                                         alt={`Rank 2`}
// // //                                         width={200}
// // //                                         height={200}
// // //                                         className="object-fit rounded-full "
// // //                                     />
// // //                                 </div>
// // //                                 <div className="absolute top-0 right-0 w-8 h-8 bg-gray-400 text-xs font-bold text-black flex items-center justify-center rounded-full">
// // //                                     2nd
// // //                                 </div>
// // //                             </div>
// // //                             <div className="text-xs text-gray-300 mt-2">
// // //                                 {rankings[1].username}
// // //                             </div>
// // //                             <div className="text-xs font-bold text-white">
// // //                                 {rankings[1].prize} $
// // //                             </div>
// // //                             <div className="flex items-center space-x-1">
// // //                                 <Image
// // //                                     src={like}
// // //                                     alt="like"
// // //                                     width={15}
// // //                                     height={15}
// // //                                     className="w-[15px] h-[15px]"
// // //                                 />
// // //                                 <div className="text-xs">
// // //                                     {rankings[1].artwork.likes_count}
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     )}
// // //                     {rankings.length > 0 && (
// // //                         <div className="flex flex-col items-center">
// // //                             <div className="relative">
// // //                                 <div className="w-[110px] h-[110px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
// // //                                     <Image
// // //                                         src={rankings[0].artwork.image}
// // //                                         alt={`Rank 1`}
// // //                                         width={200}
// // //                                         height={200}
// // //                                         className="object-fit rounded-full "
// // //                                     />
// // //                                 </div>
// // //                                 <div className="absolute top-0 right-0 w-8 h-8 text-xs font-bold  text-black flex items-center justify-center rounded-full bg-yellow-400">
// // //                                     1st
// // //                                 </div>
// // //                             </div>
// // //                             <div className="text-xs text-gray-300 mt-2">
// // //                                 {rankings[0].username}
// // //                             </div>
// // //                             <div className="text-xs font-bold text-white">
// // //                                 {rankings[0].prize} $
// // //                             </div>
// // //                             <div className="flex items-center space-x-1">
// // //                                 <Image
// // //                                     src={like}
// // //                                     alt="like"
// // //                                     width={15}
// // //                                     height={15}
// // //                                     className="w-[15px] h-[15px]"
// // //                                 />
// // //                                 <div className="text-xs">
// // //                                     {rankings[0].artwork.likes_count}
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     )}
// // //                     {rankings.length > 2 && (
// // //                         <div className="flex flex-col items-center mt-20">
// // //                             <div className="relative">
// // //                                 <div className="w-[80px] h-[80px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
// // //                                     <Image
// // //                                         src={rankings[2].artwork.image}
// // //                                         alt={`Rank 3`}
// // //                                         width={200}
// // //                                         height={200}
// // //                                         className="object-fit rounded-full "
// // //                                     />
// // //                                 </div>
// // //                                 <div className="absolute top-0 right-0 w-8 h-8  text-xs font-bold text-black flex items-center justify-center rounded-full bg-yellow-600">
// // //                                     3rd
// // //                                 </div>
// // //                             </div>
// // //                             <div className="text-xs text-gray-300 mt-2">
// // //                                 {rankings[2].username}
// // //                             </div>
// // //                             <div className="text-xs font-bold text-white">
// // //                                 {rankings[2].prize} $
// // //                             </div>
// // //                             <div className="flex items-center space-x-1">
// // //                                 <Image
// // //                                     src={like}
// // //                                     alt="like"
// // //                                     width={15}
// // //                                     height={15}
// // //                                     className="w-[15px] h-[15px]"
// // //                                 />
// // //                                 <div className="text-xs">
// // //                                     {rankings[2].artwork.likes_count}
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     )}
// // //                 </div>

// // //                 <div className="flex items-center w-[250px] h-[40px] mt-4 mb-4 rounded-3xl bg-white bg-opacity-5 border-2 px-4 border-gray-300">
// // //                     <input
// // //                         className="flex-grow bg-transparent outline-none"
// // //                         placeholder="search"
// // //                         value={username}
// // //                         onChange={handleSearch}
// // //                     />
// // //                     <button onClick={handleSearchClick} className="ml-2">
// // //                         <Image
// // //                             src={searchIcon}
// // //                             alt="search"
// // //                             width={24}
// // //                             height={24}
// // //                         />
// // //                     </button>
// // //                 </div>

// // //                 <div className="w-[330px] flex flex-col items-center">
// // //                     {searchResults.length > 0 ? (
// // //                         searchResults.map((rank) => (
// // //                             <TournamentUserCard
// // //                                 key={rank.user_id}
// // //                                 rank={rank.rank}
// // //                                 user={rank}
// // //                             />
// // //                         ))
// // //                     ) : (
// // //                         <>
// // //                             {userRank && userRank.participant && (
// // //                                 <>
// // //                                     <TournamentUserCard
// // //                                         rank={userRank.rank}
// // //                                         user={userRank.participant}
// // //                                     />
// // //                                     <div className="h-[1px] w-full bg-gray-300 mb-5 mt-3"></div>
// // //                                 </>
// // //                             )}
// // //                             {rankings.slice(3).map((rank) => (
// // //                                 <TournamentResultSingleCard
// // //                                     key={rank.user_id}
// // //                                     rank={rank}
// // //                                 />
// // //                             ))}
// // //                         </>
// // //                     )}
// // //                 </div>
// // //                 {!noMoreData && (
// // //                     <button
// // //                         onClick={loadMore}
// // //                         className="my-3 underline  hover p-3 hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-2xl transition-all duration-200"
// // //                     >
// // //                         Show more
// // //                     </button>
// // //                 )}

// // //                 <Link
// // //                     href={`/tournaments`}
// // //                     className="text-white mt-10 text-xl border-2 rounded-2xl px-4 py-2 border-purple-800 hover:bg-purple-500"
// // //                 >
// // //                     Return to tournaments page
// // //                 </Link>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default TestRankingComponent;

// // import { useState, useEffect } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { fetchRanking } from "@/pages/api/tournaments";
// // import like from "../../../public/images/image-buttons/like.svg";
// // import TournamentUserCard from "../../components/tournament-components/TournamentUserCard";
// // import dynamic from "next/dynamic";
// // import TournamentResultSingleCard from "../../components/tournament-components/TournamentResultSingleCard";
// // import fireworkAnimation from "../../../public/firework-throwed.json"; // Ensure correct path

// // // Dynamically import Lottie
// // const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// // const TestRankingComponent = () => {
// //     const [rankings, setRankings] = useState([]);
// //     const [userRank, setUserRank] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [page, setPage] = useState(1);
// //     const [username, setUsername] = useState("");
// //     const [searchQuery, setSearchQuery] = useState("");
// //     const [noMoreData, setNoMoreData] = useState(false);
// //     const [searchResults, setSearchResults] = useState([]);
// //     const [showFireworks, setShowFireworks] = useState(true);

// //     useEffect(() => {
// //         const fetchRankings = async () => {
// //             try {
// //                 const data = await fetchRanking(12, page, username);
// //                 if (page === 1 && username === "") {
// //                     setRankings(data.results.participants);
// //                 } else if (page === 1 && username !== "") {
// //                     setSearchResults(data.results.participants);
// //                 } else {
// //                     setRankings((prev) => [
// //                         ...prev,
// //                         ...data.results.participants,
// //                     ]);
// //                 }
// //                 setUserRank(data.results.user_rank);
// //                 if (!data.next) {
// //                     setNoMoreData(true);
// //                 } else {
// //                     setNoMoreData(false);
// //                 }
// //                 setLoading(false);
// //             } catch (error) {
// //                 setError(error.message);
// //                 setLoading(false);
// //             }
// //         };

// //         fetchRankings();
// //     }, [page, username]);

// //     const loadMore = () => {
// //         setPage((prev) => prev + 1);
// //     };

// //     const handleSearch = () => {
// //         setUsername(searchQuery);
// //         setPage(1);
// //     };

// //     const handleInputChange = (e) => {
// //         setSearchQuery(e.target.value);
// //         if (e.target.value === "") {
// //             setUsername("");
// //             setPage(1);
// //         }
// //     };

// //     useEffect(() => {
// //         if (showFireworks) {
// //             const timer = setTimeout(() => {
// //                 setShowFireworks(false);
// //             }, 3750);
// //             return () => clearTimeout(timer);
// //         }
// //     }, [showFireworks]);

// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     if (error) {
// //         return <div>Error: {error}</div>;
// //     }

// //     return (
// //         <div className="w-full h-full flex justify-center dark-purple-gradient">
// //             <div className="w-[90%] rounded-3xl text-white mt-10 flex flex-col items-center relative">
// //                 {showFireworks && (
// //                     <div className="absolute inset-0 flex justify-center items-center">
// //                         <Lottie
// //                             animationData={fireworkAnimation}
// //                             className="w-[450px] h-[450px]"
// //                         />
// //                     </div>
// //                 )}
// //                 <h1 className="my-3 text-xl font-bold">Tournament Ranking</h1>
// //                 <div className="flex justify-center space-x-3 w-full">
// //                     {rankings.length > 1 && (
// //                         <div className="flex flex-col items-center mt-10">
// //                             <div className="relative">
// //                                 <div className="w-[90px] h-[90px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
// //                                     <Image
// //                                         src={rankings[1].artwork.image}
// //                                         alt={`Rank 2`}
// //                                         width={200}
// //                                         height={200}
// //                                         className="w-[200px] h-[200px] object-cover rounded-full "
// //                                     />
// //                                 </div>
// //                                 <div className="absolute top-0 right-0 w-8 h-8 bg-gray-400 text-xs font-bold text-black flex items-center justify-center rounded-full">
// //                                     2nd
// //                                 </div>
// //                             </div>
// //                             <div className="text-xs text-gray-300 mt-2">
// //                                 {rankings[1].username}
// //                             </div>
// //                             <div className="text-xs font-bold text-white">
// //                                 {rankings[1].prize} $
// //                             </div>
// //                             <div className="flex items-center space-x-1">
// //                                 <Image
// //                                     src={like}
// //                                     alt="like"
// //                                     width={15}
// //                                     height={15}
// //                                     className="w-[15px] h-[15px]"
// //                                 />
// //                                 <div className="text-xs">
// //                                     {rankings[1].artwork.likes_count}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     )}
// //                     {rankings.length > 0 && (
// //                         <div className="flex flex-col items-center">
// //                             <div className="relative">
// //                                 <div className="w-[110px] h-[110px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
// //                                     <Image
// //                                         src={rankings[0].artwork.image}
// //                                         alt={`Rank 1`}
// //                                         width={200}
// //                                         height={200}
// //                                         className="w-[200px] h-[200px] object-cover rounded-full "
// //                                     />
// //                                 </div>
// //                                 <div className="absolute top-0 right-0 w-8 h-8 text-xs font-bold  text-black flex items-center justify-center rounded-full bg-yellow-400">
// //                                     1st
// //                                 </div>
// //                             </div>
// //                             <div className="text-xs text-gray-300 mt-2">
// //                                 {rankings[0].username}
// //                             </div>
// //                             <div className="text-xs font-bold text-white">
// //                                 {rankings[0].prize} $
// //                             </div>
// //                             <div className="flex items-center space-x-1">
// //                                 <Image
// //                                     src={like}
// //                                     alt="like"
// //                                     width={15}
// //                                     height={15}
// //                                     className="w-[15px] h-[15px]"
// //                                 />
// //                                 <div className="text-xs">
// //                                     {rankings[0].artwork.likes_count}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     )}
// //                     {rankings.length > 2 && (
// //                         <div className="flex flex-col items-center mt-20">
// //                             <div className="relative">
// //                                 <div className="w-[80px] h-[80px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
// //                                     <Image
// //                                         src={rankings[2].artwork.image}
// //                                         alt={`Rank 3`}
// //                                         width={200}
// //                                         height={200}
// //                                         className="w-[200px] h-[200px] object-cover rounded-full "
// //                                     />
// //                                 </div>
// //                                 <div className="absolute top-0 right-0 w-8 h-8  text-xs font-bold text-black flex items-center justify-center rounded-full bg-yellow-600">
// //                                     3rd
// //                                 </div>
// //                             </div>
// //                             <div className="text-xs text-gray-300 mt-2">
// //                                 {rankings[2].username}
// //                             </div>
// //                             <div className="text-xs font-bold text-white">
// //                                 {rankings[2].prize} $
// //                             </div>
// //                             <div className="flex items-center space-x-1">
// //                                 <Image
// //                                     src={like}
// //                                     alt="like"
// //                                     width={15}
// //                                     height={15}
// //                                     className="w-[15px] h-[15px]"
// //                                 />
// //                                 <div className="text-xs">
// //                                     {rankings[2].artwork.likes_count}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     )}
// //                 </div>

// //                 <div className="flex mt-4 mb-4 w-[250px]">
// //                     <input
// //                         className="w-full h-[40px] rounded-3xl bg-white bg-opacity-5 border-2 px-4 border-gray-300"
// //                         placeholder="search"
// //                         value={searchQuery}
// //                         onChange={handleInputChange}
// //                     />
// //                     <button
// //                         onClick={handleSearch}
// //                         className="ml-2 bg-gray-700 text-white rounded-full p-2"
// //                     >
// //                         <svg
// //                             xmlns="http://www.w3.org/2000/svg"
// //                             fill="none"
// //                             viewBox="0 0 24 24"
// //                             stroke="currentColor"
// //                             className="w-5 h-5"
// //                         >
// //                             <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth="2"
// //                                 d="M21 21l-4.35-4.35m1.35-4.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
// //                             />
// //                         </svg>
// //                     </button>
// //                 </div>

// //                 <div className="w-[330px] flex flex-col items-center">
// //                     {searchResults.length > 0 ? (
// //                         searchResults.map((rank) => (
// //                             <TournamentResultSingleCard
// //                                 key={rank.user_id}
// //                                 rank={rank}
// //                             />
// //                         ))
// //                     ) : (
// //                         <>
// //                             {userRank && userRank.participant && (
// //                                 <>
// //                                     <TournamentUserCard
// //                                         rank={userRank.rank}
// //                                         user={userRank.participant}
// //                                     />
// //                                     <div className="h-[1px] w-full bg-gray-300 mb-5 mt-3"></div>
// //                                 </>
// //                             )}
// //                             {rankings.slice(3).map((rank) => (
// //                                 <TournamentResultSingleCard
// //                                     key={rank.user_id}
// //                                     rank={rank}
// //                                 />
// //                             ))}
// //                         </>
// //                     )}
// //                 </div>
// //                 {!noMoreData && (
// //                     <button
// //                         onClick={loadMore}
// //                         className="my-3 underline  hover p-3 hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-2xl transition-all duration-200"
// //                     >
// //                         Show more
// //                     </button>
// //                 )}

// //                 <Link
// //                     href={`/tournaments`}
// //                     className="text-white mt-10 mb-10 text-xl border-2 rounded-2xl px-4 py-2 border-purple-800 hover:bg-purple-500"
// //                 >
// //                     Return to tournaments page
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // };

// // export default TestRankingComponent;

// // import React, { useState } from "react";
// // import ProgressBar from "@/components/tournament-flow-components/round-components/ProgressBar";
// // import ArtCarousel from "@/components/tournament-flow-components/round-components/ArtCarousel";
// // import LikesAndChanceIndicator from "@/components/tournament-flow-components/LikesAndChanceIndicator"; // Import the component
// // import { sendLike } from "@/pages/api/artwork";

// // const TestRoundComponent = ({
// //     currentRound = 1,
// //     tournamentName = "tournament name",
// //     totalParticipants = 10,
// //     artworks = [
// //         {
// //             id: 35,
// //             participant: "ZhanboMain - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02488.JPG",
// //             description: "Mountains",
// //             is_favorite: false,
// //             likes_count: 24,
// //         },
// //         {
// //             id: 36,
// //             participant: "Zhan2004 - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/%D0%BD%D0%B0_%D0%B2%D0%B5%D1%80%D1%88%D0%B8%D0%BD%D0%B5.jpg",
// //             description: "Shymbulak",
// //             is_favorite: false,
// //             likes_count: 29,
// //         },
// //         {
// //             id: 37,
// //             participant: "Yerbolat - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/85ba663372b608d5b662ec4be52dd77d.jpg",
// //             description: "Demon Slayer 90s style",
// //             is_favorite: false,
// //             likes_count: 52,
// //         },
// //         {
// //             id: 38,
// //             participant: "Kaiyrly - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02484.JPG",
// //             description: "city Almaty",
// //             is_favorite: false,
// //             likes_count: 11,
// //         },
// //         {
// //             id: 39,
// //             participant: "kaka - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/83280ff0a6c0c1196b057b9eff3057ff_L0alC5P.png",
// //             description: "awkjdbawkd",
// //             is_favorite: false,
// //             likes_count: 31,
// //         },
// //         {
// //             id: 40,
// //             participant: "koko - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02379.JPG",
// //             description: "awkjdajwbdjwbd",
// //             is_favorite: false,
// //             likes_count: 8,
// //         },
// //         {
// //             id: 41,
// //             participant: "awldk - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02401.JPG",
// //             description: "qwdljawdljawdo",
// //             is_favorite: false,
// //             likes_count: 46,
// //         },
// //         {
// //             id: 43,
// //             participant: "yyy - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/download.jpg",
// //             description: "pizza",
// //             is_favorite: true,
// //             likes_count: 5,
// //         },
// //         {
// //             id: 45,
// //             participant: "admin1 - Test 10 people",
// //             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/Group_46_FDothp3_9MfWl65.png",
// //             description: "asdqwezxc",
// //             is_favorite: false,
// //             likes_count: 0,
// //         },
// //     ],
// //     tournamentId = 12,
// //     backgroundImage = "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02488.JPG",
// //     likes = 25,
// // }) => {
// //     const totalArts = artworks.length;
// //     const [currentArt, setCurrentArt] = useState(0);
// //     const totalRounds = calculateRounds(totalParticipants);
// //     const initialTime = 15;

// //     function calculateRounds(participants) {
// //         console.log("backgroundImage: ", backgroundImage);
// //         if (participants < 2) return 0;
// //         let groupStageParticipants = Math.pow(
// //             2,
// //             Math.floor(Math.log2(participants))
// //         );
// //         let totalRounds = 0;
// //         if (groupStageParticipants === participants) {
// //             totalRounds = Math.log2(participants);
// //         } else {
// //             totalRounds = Math.log2(groupStageParticipants) + 1;
// //         }
// //         return totalRounds + 1;
// //     }

// //     const handleTimeUp = () => {
// //         handleNextArt();
// //     };

// //     const resetTimer = () => {
// //         setCurrentArt(currentArt + 1); // Force ProgressBar to reset the timer
// //     };

// //     const images = artworks.map((art) => ({
// //         src: art.image,
// //         alt: art.description,
// //         id: art.id,
// //     }));

// //     const handleLike = async (artId) => {
// //         await sendLikes(artId);
// //         handleNextArt();
// //     };

// //     const sendLikes = async (artId) => {
// //         try {
// //             const response = await sendLike(artId);
// //             console.log("Like submitted successfully");
// //         } catch (error) {
// //             console.error("Failed to submit like.");
// //             console.error("An error occurred during submission:", error);
// //         }
// //     };

// //     const handleNextArt = () => {
// //         if (currentArt < totalArts - 1) {
// //             setCurrentArt(currentArt + 1);
// //             resetTimer();
// //         } else {
// //             console.log("I guess round is over");
// //         }
// //     };

// //     return (
// //         <div className="w-full flex h-full justify-center gradient-tournament-background bg-cover">
// //             <div className="w-[500px] flex flex-col items-center font-montserrat">
// //                 {/* {renderContent()} */}
// //                 <div className="w-full h-full flex flex-col items-center">
// //                     {backgroundImage && (
// //                         <LikesAndChanceIndicator
// //                             backgroundImage={backgroundImage}
// //                             likes={likes}
// //                             totalParticipants={totalParticipants}
// //                             currentRound={currentRound}
// //                         />
// //                     )}
// //                     <div className="text-white pt-1 pl-1 pr-1 w-full flex flex-col items-center">
// //                         <ProgressBar
// //                             tournamentName={tournamentName}
// //                             totalArts={totalArts}
// //                             currentArt={currentArt}
// //                             totalRounds={totalRounds}
// //                             currentRound={currentRound}
// //                             initialTime={initialTime}
// //                             onTimeUp={handleTimeUp}
// //                             resetTimer={resetTimer} // Pass resetTimer as a prop
// //                         />
// //                     </div>
// //                     <div className="text-white w-full h-full flex flex-col items-center">
// //                         <ArtCarousel
// //                             images={images}
// //                             onLike={handleLike}
// //                             onDislike={handleNextArt}
// //                             totalRounds={totalRounds}
// //                             currentRound={currentRound}
// //                             onNextRound={handleNextArt}
// //                             resetTimer={resetTimer} // Pass resetTimer as a prop
// //                         />
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default TestRoundComponent;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import ProgressBar from "@/components/tournament-flow-components/round-components/ProgressBar";
// import SingleArtComponent from "@/components/tournament-flow-components/round-components/SingleArtComponent";
// import loadingGame from "../../../public/loadingGame.gif";
// import LikesAndChanceIndicator from "@/components/tournament-flow-components/LikesAndChanceIndicator";
// import { sendLike } from "@/pages/api/artwork";
// import likeAnimation from "../../../public/like-animation.gif";

// const TestFinalRoundComponent = ({
//     tournamentName = "zhanbo tournament",
//     currentRound = 3,
//     totalParticipants = 10,
//     artworks = [
//         {
//             id: 35,
//             participant: "ZhanboMain - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02488.JPG",
//             description: "Mountains",
//             is_favorite: false,
//             likes_count: 24,
//         },
//         {
//             id: 36,
//             participant: "Zhan2004 - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/%D0%BD%D0%B0_%D0%B2%D0%B5%D1%80%D1%88%D0%B8%D0%BD%D0%B5.jpg",
//             description: "Shymbulak",
//             is_favorite: false,
//             likes_count: 29,
//         },
//         {
//             id: 37,
//             participant: "Yerbolat - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/85ba663372b608d5b662ec4be52dd77d.jpg",
//             description: "Demon Slayer 90s style",
//             is_favorite: false,
//             likes_count: 52,
//         },
//         {
//             id: 38,
//             participant: "Kaiyrly - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02484.JPG",
//             description: "city Almaty",
//             is_favorite: false,
//             likes_count: 11,
//         },
//         {
//             id: 39,
//             participant: "kaka - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/83280ff0a6c0c1196b057b9eff3057ff_L0alC5P.png",
//             description: "awkjdbawkd",
//             is_favorite: false,
//             likes_count: 31,
//         },
//         {
//             id: 40,
//             participant: "koko - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02379.JPG",
//             description: "awkjdajwbdjwbd",
//             is_favorite: false,
//             likes_count: 8,
//         },
//         {
//             id: 41,
//             participant: "awldk - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02401.JPG",
//             description: "qwdljawdljawdo",
//             is_favorite: false,
//             likes_count: 46,
//         },
//         {
//             id: 43,
//             participant: "yyy - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/download.jpg",
//             description: "pizza",
//             is_favorite: true,
//             likes_count: 5,
//         },
//         {
//             id: 45,
//             participant: "admin1 - Test 10 people",
//             image: "https://d160rpt3lv04e8.cloudfront.net/artworks/Group_46_FDothp3_9MfWl65.png",
//             description: "asdqwezxc",
//             is_favorite: false,
//             likes_count: 0,
//         },
//     ],
//     tournamentId = 12,
//     backgroundImage = "https://d160rpt3lv04e8.cloudfront.net/artworks/DSC02488.JPG",
//     likes = 25,
// }) => {
//     const totalArts = artworks.length;
//     const totalRounds = calculateRounds(totalParticipants);
//     const initialTime = 15;
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [currentArtPair, setCurrentArtPair] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [resetTimer, setResetTimer] = useState(false);
//     const [showWaitModal, setShowWaitModal] = useState(false);
//     const [showLikeAnimation, setShowLikeAnimation] = useState(false); // New state for like animation

//     function calculateRounds(participants) {
//         if (participants < 2) return 0;
//         let groupStageParticipants = Math.pow(
//             2,
//             Math.floor(Math.log2(participants))
//         );
//         let totalRounds = 0;
//         if (groupStageParticipants === participants) {
//             totalRounds = Math.log2(participants);
//         } else {
//             totalRounds = Math.log2(groupStageParticipants) + 1;
//         }
//         return totalRounds + 1;
//     }

//     useEffect(() => {
//         if (artworks.length > 1) {
//             setCurrentArtPair([artworks[0], artworks[1]]);
//         }
//     }, []);

//     const handleImageClick = (image) => {
//         setSelectedImage(image);
//     };

//     const handleClose = () => {
//         setSelectedImage(null);
//     };

//     const handleNextPair = () => {
//         const nextIndex = currentIndex + 2;
//         if (nextIndex < artworks.length - 1) {
//             setCurrentIndex(nextIndex);
//             setCurrentArtPair([artworks[nextIndex], artworks[nextIndex + 1]]);
//         } else if (nextIndex < artworks.length) {
//             setCurrentIndex(nextIndex);
//             setCurrentArtPair([artworks[nextIndex]]);
//         } else {
//             setShowWaitModal(true); // Show the wait modal when all pairs are assessed
//         }
//         setResetTimer(true); // Reset the timer for the next image
//     };

//     const sendLikes = async (artId) => {
//         try {
//             const response = await sendLike(artId);
//             console.log("Like submitted successfully");
//         } catch (error) {
//             console.error("Failed to submit like.");
//             console.error("An error occurred during submission:", error);
//         }
//     };

//     const handleLike = (artId) => {
//         sendLikes(artId);
//         setShowLikeAnimation(true); // Show like animation
//         setTimeout(() => setShowLikeAnimation(false), 1000); // Hide like animation after 1 second
//         handleNextPair();
//     };

//     const handleTimeUp = () => {
//         handleNextPair();
//     };

//     useEffect(() => {
//         if (resetTimer) {
//             setResetTimer(false); // Clear the reset timer flag after the reset
//         }
//     }, [resetTimer]);

//     return (
//         <div className="w-full flex h-full justify-center gradient-tournament-background bg-cover">
//             <div className="w-[500px] md:w-[700px] flex flex-col items-center font-montserrat">
//                 <div className="relative w-full h-full flex flex-col items-center text-white">
//                     <div className="flex flex-col items-center w-full">
//                         {likes != null && (
//                             <LikesAndChanceIndicator
//                                 backgroundImage={backgroundImage}
//                                 likes={likes}
//                                 totalParticipants={totalParticipants}
//                                 currentRound={currentRound}
//                             />
//                         )}
//                         <ProgressBar
//                             tournamentName={tournamentName}
//                             totalArts={totalArts}
//                             currentArt={currentIndex + 1}
//                             totalRounds={totalRounds}
//                             currentRound={currentRound}
//                             initialTime={15}
//                             onTimeUp={handleTimeUp}
//                             resetTimer={resetTimer} // Pass resetTimer as a prop
//                         />
//                         <div className="relative flex items-center overflow-hidden md:justify-center justify-between w-full h-[600px] px-4 mb-4">
//                             {currentArtPair.map((image, index) => (
//                                 <motion.div
//                                     key={image.id}
//                                     className={`absolute top-8 w-full md:w-auto h-[500px] ${
//                                         index === 0 ? "rotate-12" : "-rotate-12"
//                                     } p-2 cursor-pointer ${
//                                         index === 0
//                                             ? "ml-[150px]"
//                                             : "ml-[-150px]"
//                                     }`}
//                                     onClick={() => handleImageClick(image)}
//                                     whileHover={{ marginTop: -5 }}
//                                 >
//                                     <Image
//                                         src={image.image}
//                                         alt={`Art ${index + 1}`}
//                                         width={500}
//                                         height={550}
//                                         className="w-full md:w-[400px] h-[500px] border-4 border-gray-300 object-cover rounded-2xl"
//                                     />
//                                 </motion.div>
//                             ))}
//                             {showLikeAnimation && (
//                                 <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
//                                     <Image
//                                         src={likeAnimation}
//                                         alt="like animation"
//                                         width={50}
//                                         height={50}
//                                     />
//                                 </div>
//                             )}
//                         </div>

//                         <div className="text-center text-xl mb-10">
//                             Please choose one art
//                         </div>

//                         <AnimatePresence>
//                             {selectedImage && (
//                                 <SingleArtComponent
//                                     handleClose={handleClose}
//                                     image={selectedImage.image}
//                                     onLike={() => handleLike(selectedImage.id)}
//                                     artId={selectedImage.id}
//                                 />
//                             )}
//                         </AnimatePresence>

//                         {showWaitModal && (
//                             <div className="fixed inset-0 flex justify-center items-center z-50">
//                                 <div className="text-center text-white flex flex-col items-center mt-[50px]">
//                                     <h3 className="mt-[-100px] mb-4 text-normal">
//                                         round 3 is finished
//                                     </h3>
//                                     <h1 className="px-4 text-3xl mb-8 text-bold">
//                                         You been so fast to rate the arts!
//                                     </h1>
//                                     <h3 className="mb-4 text-thin">
//                                         Lets wait the others
//                                     </h3>
//                                     <Image
//                                         src={loadingGame}
//                                         className="mt-10"
//                                         alt="loading gif"
//                                         width={150}
//                                         height={150}
//                                     />
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TestFinalRoundComponent;

const Test = () => {
    return (
        <div>Test page</div>
    )
}

export default Test;