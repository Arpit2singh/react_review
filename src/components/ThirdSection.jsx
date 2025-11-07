import React, { useEffect, useState } from 'react';


const ThirdSection = () => {
  const [leetdata, setLeetdata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://leetcode-api-faisalshohag.vercel.app/arpitlibono57");
      const data = await response.json();
      setLeetdata(data);
    };
    fetchData();
  }, []);

  if (!leetdata) return <div>Loading...</div>;

  const difficultyDataset = [
    { difficulty: "Easy", solved: leetdata.easySolved },
    { difficulty: "Medium", solved: leetdata.mediumSolved },
    { difficulty: "Hard", solved: leetdata.hardSolved },
  ];

  return (
    <div className="flex flex-nowrap p-4 gap-8 h-screen w-auto bg-transparent ">
      
      <div className='bg-gradient-to-br w-2/3 from-orange-400 via-red-500 to-pink-500 
        bg-clip-text text-transparent text-5xl font-extrabold'>
        “I solve real-world problems through structured logic, optimized algorithms, 
        and clean code practices"
      </div>

      <div className="w-2/3 bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-bold mb-2">Problem Solving Stats</h2>

      
    </div>
    </div>
  );
};

export default ThirdSection;
