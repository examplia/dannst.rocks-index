import Head from "next/head"
import { motion } from "framer-motion"

const videos = [
  { title: "[TC2] The BEST SHOTGUN in the Game (1K Sub Special)", url: "https://www.youtube.com/embed/hBJUL8DZm-w" },
  { title: "What Happened?", url: "https://www.youtube.com/embed/X52MdYiqPlQ" },
  { title: "Update.", url: "https://www.youtube.com/embed/SHNyRuVDOI0" },
  { title: "Fire Anaurky.", url: "https://www.youtube.com/embed/5r3RtXVhqqs" },
  { title: "Keep Ice Banned", url: "https://www.youtube.com/embed/_lDzOQL864k" },
  { title: "[TC2] Is the Cold Shoulder THAT BAD?", url: "https://www.youtube.com/embed/uzmcjSLn674" },
  { title: "[TC2] The UNDERESTIMATED power of the Sub Shotgun", url: "https://www.youtube.com/embed/ZR5QF3Dbu_s" },
  { title: "[TC2] The core (Un)balance of the Axtinguisher", url: "https://www.youtube.com/embed/b-Kk2twkv_U" },
  { title: "[TC2] How does ONE use the Shotgun Cannon?", url: "https://www.youtube.com/embed/MXbeYS2w45M" },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Dannst | TC2 Gaming</title>
        <meta name="description" content="TC2 videos, guides, and gameplay by Dannst." />
        <meta property="og:title" content="Dannst | TC2 Gaming" />
        <meta property="og:description" content="TC2 videos, guides, and gameplay by Dannst." />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:url" content="https://dannst.rocks" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white"
        >
          <img src="/avatar.jpg" alt="Dannst" className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500" />
          <h1 className="text-5xl font-bold mt-4 text-orange-400">Dannst</h1>
          <p className="mt-2 text-lg">TC2 Gaming • 2.1K+ Subscribers</p>
        </motion.div>
      </section>

      {/* Videos Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-orange-400 text-center mb-8">Featured Videos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <iframe src={video.url} className="w-full h-56" allowFullScreen></iframe>
              <p className="p-4 text-white font-semibold">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Discord Section */}
      <section className="bg-orange-500 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
        <p className="mb-6">Hang out with Dannst and other TC2 fans on Discord!</p>
        <a
          href="https://discord.gg/qV5Z7yatRZ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
        >
          Join Discord
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-400 text-sm">
        © 2025 Dannst.rocks — Built with ❤️ by the community.
      </footer>
    </>
  )
}
