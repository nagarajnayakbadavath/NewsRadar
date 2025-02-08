

const NewsCards=({resData})=>{
    
    return(
        <div className="w-[400px] h-[500px] border-r-2 border-l-2 border-t-2 border-b-2 border-neutral-950 overflow-hidden cursor-pointer mx-5 my-5 p-3">
            <img className="rounded-xs" alt={resData.title} src={resData.image}/>
            <h1 className="font-serif font-bold text-lg text-orange-500">{resData.title}</h1>
            <h2 className="font-semibold text-zinc-950">{resData.description}</h2>
            <h3 className="font-mono font-bold text-sky-700">{resData.content}</h3>
        </div>
    );
};

export default NewsCards;