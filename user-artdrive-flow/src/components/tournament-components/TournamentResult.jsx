// import Image from "next/image";
// import testImage from "../../../public/images/bannerArt3.jpg";
// import like from '../../../public/images/image-buttons/like.svg'
// import TournamentResultSingleCard from "./TournamentResultSingleCard";
// import TournamentUserCard from "./TournamentUserCard";

// const TournamentResult = () => {
//     return (
//         <div className="bg-green-200 w-[90%] rounded-3xl bg-opacity-5 mt-10 flex flex-col items-center">
//             <h1 className="my-3">Tournament Ranking:</h1>
//             {/* top3 */}
//             <div className="flex">
//                 <div className="flex flex-col items-center mt-[90px]">
//                     <div className="w-[110px] h-[110px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
//                         <Image src={testImage} alt="testImage" width={200} height={200} className="object-fit rounded-full " />
//                     </div>
//                     <div className="text-xs text-gray-300 mt-2">Joe Blow 777</div>
//                     <div className="text-xs font-bold text-white">1000 $</div>
//                     <div className="flex items-center space-x-1">
//                         <Image src={like} alt="like" width={50} height={50} className="w-[15px] h-[15px]" />
//                         <div className="text-xs">956</div>
//                     </div>
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <div className="w-[120px] h-[120px] border-2 border-yellow-500 bg-green-700 rounded-full overflow-hidden">
//                         <Image src={testImage} alt="testImage" width={200} height={200} className="object-fit rounded-full " />
//                     </div>
//                     <div className="text-xs text-gray-300 mt-2">Joe Blow 777</div>
//                     <div className="text-xs font-bold text-white">1000 $</div>
//                     <div className="flex items-center space-x-1">
//                         <Image src={like} alt="like" width={50} height={50} className="w-[15px] h-[15px]" />
//                         <div className="text-xs">1.6k</div>
//                     </div>
//                 </div>

//                 <div className="flex flex-col items-center mt-[130px]">
//                     <div className="w-[100px] h-[100px] border-2 border-yellow-700 bg-blue-400 rounded-full overflow-hidden">
//                         <Image src={testImage} alt="testImage" width={200} height={200} className="object-fit rounded-full " />
//                     </div>
//                     <div className="text-xs text-gray-300 mt-2">Joe Blow 777</div>
//                     <div className="text-xs font-bold text-white">1000 $</div>
//                     <div className="flex items-center space-x-1">
//                         <Image src={like} alt="like" width={50} height={50} className="w-[15px] h-[15px]" />
//                         <div className="text-xs">504</div>
//                     </div>
//                 </div>

//             </div>

//             <input className="w-[250px] h-[40px] mt-4 mb-4 rounded-3xl bg-white bg-opacity-5 border-2 px-4 border-gray-300 " placeholder="search"/>

//             <div className="w-[330px] flex flex-col items-center">
//                 <TournamentUserCard />
//                 <div className="h-[1px] w-full bg-gray-300 mb-5 mt-3"></div>
//                 <TournamentResultSingleCard />
//                 <TournamentResultSingleCard />
//                 <TournamentResultSingleCard />
//                 <TournamentResultSingleCard />
//                 <TournamentResultSingleCard />
//             </div>
//             <button className="my-3 underline  hover p-3 hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-2xl transition-all duration-200">Show more</button>

//         </div>
//     );
// };

// export default TournamentResult;


import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchRanking } from '@/pages/api/tournaments';
import like from '../../../public/images/image-buttons/like.svg';
import TournamentUserCard from './TournamentUserCard';
import TournamentResultSingleCard from './TournamentResultSingleCard';

const TournamentResult = ({ tournamentId }) => {
    const [rankings, setRankings] = useState([]);
    const [userRank, setUserRank] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState('');
    const [noMoreData, setNoMoreData] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const data = await fetchRanking(tournamentId, page, username);
                if (page === 1 && username === "") {
                    setRankings(data.results.participants);
                } else if (page === 1 && username !== "") {
                    setSearchResults(data.results.participants);
                } else {
                    setRankings((prev) => [...prev, ...data.results.participants]);
                }

                setUserRank(data.results.user_rank);

                if (!data.next) {
                    setNoMoreData(true);
                } else {
                    setNoMoreData(false);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching rankings in TournamentResult component:", error.response ? error.response.data : error.message);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchRankings();
    }, [tournamentId, page, username]);


    const loadMore = () => {
        setPage((prev) => prev + 1);
    };

    const handleSearch = (e) => {
        setUsername(e.target.value);
        setPage(1);
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-[90%] rounded-3xl mt-10 border-2 border-gray-500 flex flex-col items-center">

            <h1 className="my-3 text-xl font-bold">Tournament Ranking</h1>
            <div className="flex justify-center space-x-3 w-full">
                {rankings.length > 1 && (
                    <div className="flex flex-col items-center mt-10">
                        <div className="relative">
                            <div className="w-[90px] h-[90px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                <Image src={rankings[1].artwork.image} alt={`Rank 2`} width={200} height={200} className="w-[120px] h-[120px] object-cover rounded-full " />
                            </div>
                            <div className="absolute top-0 right-0 w-8 h-8 bg-gray-400 text-xs font-bold text-black flex items-center justify-center rounded-full">2nd</div>
                        </div>
                        <div className="text-xs text-gray-300 mt-2">{rankings[1].username}</div>
                        <div className="text-xs font-bold text-white">{rankings[1].prize} $</div>
                        <div className="flex items-center space-x-1">
                            <Image src={like} alt="like" width={15} height={15} className="w-[15px] h-[15px]" />
                            <div className="text-xs">{rankings[1].artwork.likes_count}</div>
                        </div>
                    </div>
                )}
                {rankings.length > 0 && (
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <div className="w-[110px] h-[110px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                <Image src={rankings[0].artwork.image} alt={`Rank 1`} width={200} height={200} className="w-[140px] h-[140px] object-cover rounded-full " />
                            </div>
                            <div className="absolute top-0 right-0 w-8 h-8 text-xs font-bold  text-black flex items-center justify-center rounded-full bg-yellow-400">1st</div>
                        </div>
                        <div className="text-xs text-gray-300 mt-2">{rankings[0].username}</div>
                        <div className="text-xs font-bold text-white">{rankings[0].prize} $</div>
                        <div className="flex items-center space-x-1">
                            <Image src={like} alt="like" width={15} height={15} className="w-[15px] h-[15px]" />
                            <div className="text-xs">{rankings[0].artwork.likes_count}</div>
                        </div>
                    </div>
                )}
                {rankings.length > 2 && (
                    <div className="flex flex-col items-center mt-20">
                        <div className="relative">
                            <div className="w-[80px] h-[80px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                <Image src={rankings[2].artwork.image} alt={`Rank 3`} width={200} height={200} className="w-[130px] h-[130px]  rounded-full " />
                            </div>
                            <div className="absolute top-0 right-0 w-8 h-8  text-xs font-bold text-black flex items-center justify-center rounded-full bg-yellow-600">3rd</div>
                        </div>
                        <div className="text-xs text-gray-300 mt-2">{rankings[2].username}</div>
                        <div className="text-xs font-bold text-white">{rankings[2].prize} $</div>
                        <div className="flex items-center space-x-1">
                            <Image src={like} alt="like" width={15} height={15} className="w-[15px] h-[15px]" />
                            <div className="text-xs">{rankings[2].artwork.likes_count}</div>
                        </div>
                    </div>
                )}
            </div>

            <input className="w-[250px] h-[40px] mt-4 mb-4 rounded-3xl bg-white bg-opacity-5 border-2 px-4 border-gray-300" placeholder="search" value={username} onChange={handleSearch} />

            <div className="w-[330px] flex flex-col items-center">
                {searchResults.length > 0 ? (
                    searchResults.map((rank) => (
                        <TournamentUserCard key={rank.user_id} rank={rank.rank} user={rank} />
                    ))
                ) : (
                    <>
                        {userRank && userRank.participant && (
                            <>
                                <TournamentUserCard rank={userRank.rank} user={userRank.participant} />
                                <div className="h-[1px] w-full bg-gray-300 mb-5 mt-3"></div>
                            </>
                        )}
                        {rankings.slice(3).map((rank) => (
                            <TournamentResultSingleCard key={rank.user_id} rank={rank} />
                        ))}
                    </>
                )}
            </div>
            {!noMoreData && (
                <button onClick={loadMore} className="my-3 underline  hover p-3 hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-2xl transition-all duration-200">Show more</button>
            )}
        </div>
    );
};

export default TournamentResult;
