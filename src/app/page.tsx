
import Contact from "./components/Contact";
import Home from "./Home";
import Image from "next/image";

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
      <Image
        style={{
          backgroundImage: `url("/OIP.jpg")`,
          backgroundRepeat: "repeat-round",
          // backgroundSize: "100% auto",
          zIndex: -1,
          backgroundPosition: "center",
          // filter: "grayscale(100%)",
        }}
        src="/OIP.jpg"
        fill={true}
        alt={"Background Image"}
      />
      <Home />
      <Footer />
    </div>
  )
}

