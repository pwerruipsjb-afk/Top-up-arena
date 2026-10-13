import Link from 'next/link';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const revalidate = 0;

export default async function HomePage() {
  const supabase = createServerSupabaseClient();
  const { data: games } = await supabase.from('games').select('*').eq('is_active', true);

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-white flex flex-col justify-between">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="rounded-2xl p-8 mb-10 bg-gradient-to-r from-purple-900 via-indigo-950 to-black border border-purple-500/30 shadow-2xl">
          <div className="max-w-2xl">
            <span className="bg-purple-600/30 text-purple-400 text-xs px-3 py-1 rounded-full border border-purple-500/50 uppercase tracking-widest font-semibold">
              Official Topup Direct
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-2 tracking-tight text-white neon-text">
              TOPUP <span className="text-purple-500">ARENA</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              ศูนย์บริการเติมเกมออนไลน์ ระบบอัตโนมัติ รวดเร็ว ปลอดภัย 100% ไม่ต้องใช้รหัสผ่าน
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-400 border-l-4 border-purple-500 pl-3">
            รายการเกมยอดนิยม
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {games?.map((game) => (
              <Link
                key={game.id}
                href={`/games/${game.slug}`}
                className="bg-[#16161e] border border-purple-900/40 rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition duration-300 flex flex-col group"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={game.image_url}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-purple-400 font-mono tracking-wide">{game.category}</span>
                    <h3 className="font-bold text-white text-base md:text-lg group-hover:text-purple-400 transition">
                      {game.name}
                    </h3>
                  </div>
                  <button className="mt-4 w-full bg-purple-600 hover:bg-purple-500 text-white text-xs py-2 rounded-lg font-medium transition">
                    เติมเงิน
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
