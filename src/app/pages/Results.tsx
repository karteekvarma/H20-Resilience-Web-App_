import Link from "next/link"
import { Button, ButtonGroup } from "@nextui-org/react";


export default function Results() {
    return (
        <main className="flex-1 flex flex-col md:flex-row gap-4 p-4">
            <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <header className="bg-gray-200 dark:bg-gray-700 px-4 py-2">
                        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Prediction</h2>
                    </header>
                    <div className="p-4">
                        <img
                            alt="Prediction Image"
                            className="w-full h-64 object-cover"
                            height={500}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "500/500",
                                objectFit: "cover",
                            }}
                            width={500}
                        />
                    </div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <header className="bg-gray-200 dark:bg-gray-700 px-4 py-2">
                        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Analysis</h2>
                    </header>
                    <div className="p-4">
                        <img
                            alt="Analysis Image"
                            className="w-full h-64 object-cover"
                            height={500}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "500/500",
                                objectFit: "cover",
                            }}
                            width={500}
                        />
                    </div>
                </div>
            </div>
            <div className="p-4 flex justify-center">
                <Button className="text-2xl font-bold" variant="flat">
                    Back to Editing
                </Button>
            </div>
        </main>

    )
}