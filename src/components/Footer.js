
const Footer=()=>{
    const openLinkedIn=()=>{
        window.open("https://www.linkedin.com/in/nagaraju-badavath-58bb3b256/","MyProfile");
    }
    const openGithub=()=>{
        window.open("https://github.com/nagarajnayakbadavath","MyProfile");
    }
    const openInstagram=()=>{
        window.open("https://www.instagram.com/bn.the.one/","MyProfile");
    }
    const openX=()=>{
        window.open("https://x.com/nagaraj_its","MyProfile");
    }
    const openFacebook=()=>{
        window.open("https://www.facebook.com/profile.php?id=100068891513959","MyProfile");
    }
    return (
        <div className="flex justify-center w-[100%] h-28 py-5">
            <ul className="flex">
                
                <li className="px-4"><img className="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-300 cursor-pointer" onClick={openLinkedIn} alt="Linkedin" src="https://tse2.mm.bing.net/th?id=OIP.Rnp0fWfpP4zyIz1F3b4zkwHaHa&pid=Api&P=0&h=180"/>LinkedIn</li>
                <li className="px-4"><img className="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-300 cursor-pointer" onClick={openGithub} alt="Github" src="https://tse3.mm.bing.net/th?id=OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg&pid=Api&P=0&h=180"/>GitHub</li>
                <li className="px-4"><img className="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-300 cursor-pointer" onClick={openInstagram} alt="Instagram" src="https://tse1.mm.bing.net/th?id=OIP.neIYhe6nFHVdk1ssNrchFAHaHa&pid=Api&P=0&h=180"/>Instagram</li>
                <li className="px-4"><img className="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-300 cursor-pointer" onClick={openX} alt="x" src="https://s.yimg.com/fz/api/res/1.2/C8Eq741jpUJTob_YlXnx0Q--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/efe0eda0-a368-3325-8975-d7ae7a783e4c/t_500x300"/>Twitter(X)</li>
                <li className="px-4"><img className="w-[50px] h-[50px] rounded-full object-cover border-2 border-gray-300 cursor-pointer" onClick={openFacebook} alt="facebook" src="https://tse1.mm.bing.net/th?id=OIP.bGPD-oClhpU4utiky9MnxgHaHa&pid=Api&P=0&h=180"/>Facebook</li>
            </ul>
        </div>
    )
}

export default Footer;