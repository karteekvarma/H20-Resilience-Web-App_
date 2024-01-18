import Link from "next/link"
import { Button, ButtonGroup } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Results from "./pages/Results";
import LanduseEdit from "./pages/LanduseEdit";
import Home from "./pages/Home";

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 px-6 py-4">
      <Contact />
    </footer>
  )
}

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      {/* <Navbar /> */}
      {/* <main className="flex-1 flex flex-col md:flex-row gap-4 p-4"> */}
        <LanduseEdit />
        {/* <Results /> */}
        {/* <Home /> */}
        <Footer />
      {/* </main> */}
    </div>
  )
}

