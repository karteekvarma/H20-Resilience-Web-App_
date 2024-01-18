import Link from "next/link"
import { Button, ButtonGroup } from "@nextui-org/react";


export default function Component() {
    return (
        <div className="flex flex-col h-screen w-full">
            <div className="flex flex-1 w-full">
                <div className="flex flex-col w-1/4 bg-gray-100 dark:bg-gray-800 border-r dark:border-gray-700 overflow-auto">
                    <h2 className="text-lg font-semibold p-4 border-b dark:border-gray-700">Landuse Categories</h2>
                    <div className="grid grid-cols-4 gap-2 p-4">
                    <div className="border rounded-md p-2 bg-red-200 text-center text-black aspect-[1/1]">1</div>
                    <div className="border rounded-md p-2 bg-blue-200 text-center text-black aspect-[1/1]">2</div>
                    <div className="border rounded-md p-2 bg-green-200 text-center text-black aspect-[1/1]">3</div>
                    <div className="border rounded-md p-2 bg-yellow-200 text-center text-black aspect-[1/1]">4</div>
                    <div className="border rounded-md p-2 bg-purple-200 text-center text-black aspect-[1/1]">5</div>
                    <div className="border rounded-md p-2 bg-pink-200 text-center text-black aspect-[1/1]">6</div>
                    <div className="border rounded-md p-2 bg-indigo-200 text-center text-black aspect-[1/1]">7</div>
                    <div className="border rounded-md p-2 bg-teal-200 text-center text-black aspect-[1/1]">8</div>
                    <div className="border rounded-md p-2 bg-gray-200 text-center text-black aspect-[1/1]">9</div>
                    <div className="border rounded-md p-2 bg-red-200 text-center text-black aspect-[1/1]">10</div>
                    <div className="border rounded-md p-2 bg-blue-200 text-center text-black aspect-[1/1]">11</div>
                    <div className="border rounded-md p-2 bg-green-200 text-center text-black aspect-[1/1]">12</div>

                    </div>

            <div className="flex flex-col w-4/4 bg-gray-100 dark:bg-gray-800 border-r dark:border-gray-700 overflow-auto">
                <h2 className="text-lg font-semibold p-4 border-b dark:border-gray-700">Legend</h2>
                <div className="grid grid-cols-2 gap-2 p-4"> 

                    <div className="border rounded-md bg-red-200 text-center text-black flex">
                        <div className="border rounded-md bg-red-200 text-center text-black w-1/4 font-semibold">1</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>               
                    </div>
                    <div className="border rounded-md bg-blue-200 text-center text-black flex">
                        <div className="border rounded-md bg-blue-200 text-center text-black w-1/4 font-semibold">2</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>
                    <div className="border rounded-md bg-green-200 text-center text-black flex">
                        <div className="border rounded-md bg-green-200 text-center text-black w-1/4 font-semibold">3</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>  
                    <div className="border rounded-md bg-yellow-200 text-center text-black flex">
                        <div className="border rounded-md bg-yellow-200 text-center text-black w-1/4 font-semibold">4</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>   
                    <div className="border rounded-md bg-purple-200 text-center text-black flex">
                        <div className="border rounded-md bg-purple-200 text-center text-black w-1/4 font-semibold">5</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>   
                    <div className="border rounded-md bg-pink-200 text-center text-black flex">
                        <div className="border rounded-md bg-pink-200 text-center text-black w-1/4 font-semibold">6</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>   
                    <div className="border rounded-md bg-indigo-200 text-center text-black flex">
                        <div className="border rounded-md bg-indigo-200 text-center text-black w-1/4 font-semibold">7</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>   
                    <div className="border rounded-md bg-teal-200 text-center text-black flex">
                        <div className="border rounded-md bg-teal-200 text-center text-black w-1/4 font-semibold">8</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>   
                    <div className="border rounded-md bg-gray-200 text-center text-black flex">
                        <div className="border rounded-md bg-gray-200 text-center text-black w-1/4 font-semibold">9</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>   
                    <div className="border rounded-md bg-red-200 text-center text-black flex">
                        <div className="border rounded-md bg-red-200 text-center text-black w-1/4 font-semibold">10</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>   
                    <div className="border rounded-md bg-blue-200 text-center text-black flex">
                        <div className="border rounded-md bg-blue-200 text-center text-black w-1/4 font-semibold">11</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>   
                    <div className="border rounded-md bg-green-200 text-center text-black flex">
                        <div className="border rounded-md bg-green-200 text-center text-black w-1/4 font-semibold">12</div>
                        <div className="flex-1 text-xs font-semibold">Single Family Residential</div>
                    </div>        



                </div>
            </div>

                </div>

                {/* <div><h2 className="text-lg font-semibold p-4">Predicted Flood Map</h2>
                <div className="flex flex-1 items-center justify-center">
                    
                    <img
                        className="rounded-lg w-full h-full overflow-hidden"
                        height="100"
                        src= "/landuse.png" // Add the image source here
                        width="100"
                    />
                </div>
                </div> */}

                <div className="flex">
                <div className="flex-1">
                    <h2 className=" flex items-center justify-center text-lg font-semibold p-4">Predicted Flood Map</h2>
                    <div className="flex items-center justify-center">
                    <img
                        className="rounded-lg w-full h-full overflow-hidden"
                        src="/landuse.png" // Add the image source here
                        alt="Landuse Image" // Add alt text for accessibility
                    />
                    </div>
                </div>
                </div>
                {/* <div>
                <h2 className="text-lg font-semibold p-4 border-b dark:border-gray">Predicted Flood Map</h2>
                <div className="flex-1 flex w-4/4 items-center justify-center mt-4 mb-4">
                    <img
                    className="rounded-lg max-w-[80%] h-full overflow-hidden"
                    src="/landuse.png" // Add the image source here
                    alt="Landuse Image" // Add alt text for accessibility
                    />
                </div>
                </div> */}

                <div className="flex flex-col w-1/4 bg-gray-100 dark:bg-gray-800 border-l dark:border-gray-700">
                    <h2 className="text-lg font-semibold p-4 border-b dark:border-gray-700">Location Panel</h2>
                    <div className="p-4 space-y-2">
                        <Button className="w-full border border-gray-500 ">Enter Location</Button>
                        <Button className="w-full border border-gray-500 ">Find Nearby</Button>
                        <Button className="w-full border border-gray-500 bg-red-500">Predict Flood</Button>
                        <Button className="w-full border border-gray-500 ">Edit Mode</Button>
     
                    </div> 
                </div>
            </div>
        </div>
    )
}

