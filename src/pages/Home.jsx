import { useState } from 'react'
import PlanCard from '../components/PlanCard'
import { Home as HomeIcon, ShoppingBag, Users, User } from 'lucide-react'

export default function Home() {
  const [wallet, setWallet] = useState(0)

  const plans = Array.from({ length: 14 }).map((_, i) => ({
    name: `Minicool ${i + 1}`,
    price: 5000 * (i + 1),
    daily: 800 * (i + 1),
    duration: 60,
  }))

  return (
    <div className="pb-20">
      <div className="p-4 bg-[#0a2540] rounded-b-2xl">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-teal-300 mt-1">
          Wallet Balance: ₦{wallet.toLocaleString()}
        </p>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">Investment Plans</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-[#0f2f4f] text-teal-300">
              <tr>
                <th className="text-left py-3 px-2">Plan</th>
                <th className="text-left py-3 px-2">Price</th>
                <th className="text-left py-3 px-2">Daily Income</th>
                <th className="text-left py-3 px-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, idx) => (
                <PlanCard key={idx} plan={plan} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <div className="bg-[#0a2540] rounded-xl p-4">
          <h3 className="font-semibold mb-2">Daily Sign-In Reward</h3>
          <button
            onClick={() => setWallet(wallet + 500)}
            className="w-full bg-teal-500 text-black font-semibold py-2 rounded-lg"
          >
            Claim ₦500
          </button>
        </div>

        <div className="bg-[#0a2540] rounded-xl p-4">
          <h3 className="font-semibold mb-2">Referral Commission</h3>
          <ul className="text-sm space-y-1">
            <li>Level 1: 20%</li>
            <li>Level 2: 5%</li>
            <li>Level 3: 2%</li>
          </ul>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#061826] border-t border-white/10">
        <div className="flex justify-around py-3 text-xs">
          <div className="flex flex-col items-center text-teal-400">
            <HomeIcon size={18} /> Home
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBag size={18} /> Orders
          </div>
          <div className="flex flex-col items-center">
            <Users size={18} /> Team
          </div>
          <div className="flex flex-col items-center">
            <User size={18} /> Mine
          </div>
        </div>
      </nav>
    </div>
  )
}
