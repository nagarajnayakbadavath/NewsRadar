import React,{useState,useEffect,useContext} from 'react';

const Header=({setFilter})=>{
    const [category,setCategory]=useState("");
    const [lang,setLang]=useState("");
    const [country,setCountry]=useState("");
    const [sortby,setSortby]=useState("");

    const handleSearch=()=>{
        setFilter(
            {
                category,
                lang,
                country,
                sortby
            }
        );
    };
    
    return(
        <div>
                <div className="flex flex-wrap">
                    <h1 className="m-2 animate-pulse bold font-serif font-extrabold text-2xl">NewsRadar</h1>
                    <label className="m-1 font-serif">Category:</label>
                    <select value={category} className="border border-gray-400 rounded-sm h-7 w-32 text-sm px-2 focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="general">General</option>
                        <option value="world">World</option>
                        <option value="nation">Nation</option>
                        <option value="business">Business</option>
                        <option value="technology">Technology</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="sports">Sports</option>
                        <option value="science">Science</option>
                        <option value="health">Health</option>
                    </select>
                    <label className="m-1 font-serif">Language:</label>
                    <select value={lang} className="border border-gray-400 rounded-sm h-7 w-32 text-sm px-2 focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={(e)=>setLang(e.target.value)}>
                        <option value="ar">Arabic</option>
                        <option value="zh">Chinese</option>
                        <option value="nl">Dutch</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="el">Greek</option>
                        <option value="he">Hebrew</option>
                        <option value="hi">Hindi</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japanese</option>
                        <option value="ml">Malayalam</option>
                        <option value="mr">Marathi</option>
                        <option value="no">Norwegian</option>
                        <option value="pt">Portuguese</option>
                        <option value="ro">Romanian</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                        <option value="sv">Swedish</option>
                        <option value="ta">Tamil</option>
                        <option value="te">Telugu</option>
                        <option value="uk">Ukrainian</option>
                    </select>
                    <label className="m-1 font-serif">Country:</label>
                    <select value={country} className="border border-gray-400 rounded-sm h-7 w-32 text-sm px-2 focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={(e)=>setCountry(e.target.value)}>
                    <option value="au">Australia</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="cn">China</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="gr">Greece</option>
                    <option value="hk">Hong Kong</option>
                    <option value="in">India</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="nl">Netherlands</option>
                    <option value="no">Norway</option>
                    <option value="pk">Pakistan</option>
                    <option value="pe">Peru</option>
                    <option value="ph">Philippines</option>
                    <option value="pt">Portugal</option>
                    <option value="ro">Romania</option>
                    <option value="ru">Russian Federation</option>
                    <option value="sg">Singapore</option>
                    <option value="es">Spain</option>
                    <option value="se">Sweden</option>
                    <option value="ch">Switzerland</option>
                    <option value="tw">Taiwan</option>
                    <option value="ua">Ukraine</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                    </select>
                    <label className="mx-2 font-serif">Sort by:</label>
                    <select value={sortby} className="border border-gray-400 rounded-sm h-7 w-32 text-sm px-2 focus:outline-none focus:ring-1 focus:ring-blue-500" onChange={(e)=>setSortby(e.target.value)}>
                        <option value="publishedAt">publised At</option>
                        <option value="relevance">relevance</option>
                    </select>
                    <button className="mx-5 border border-gray-400 rounded-sm h-7 w-20 text-sm px-2 focus:outline-none focus:ring-1 focus:ring-blue-500" onClick={handleSearch}>Search</button>
                </div>
        </div>
    );
};

export default Header;