import React from "react";
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard( {$id, title, featuredImage}){

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-stone-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-full justify-center mb-4">
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title}
                        className="rounded-xl w-full h-56 object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                </div>
                <h2 className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors duration-200 line-clamp-2">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard;
