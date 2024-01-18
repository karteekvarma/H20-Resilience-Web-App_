import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'H20 Resilience',
  description: 'Flood risk assessment and mitigation',
}

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 px-6 py-4">
      <Contact />
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <div className="flex-grow">
          <Navbar />
          {children}
        </div>
    </html>
  )
}
