export default function PlanCard({ plan }) {
  return (
    <tr className="border-b border-white/10">
      <td className="py-3 px-2 font-medium">{plan.name}</td>
      <td className="py-3 px-2">₦{plan.price.toLocaleString()}</td>
      <td className="py-3 px-2 text-teal-400">₦{plan.daily.toLocaleString()}</td>
      <td className="py-3 px-2">{plan.duration} days</td>
    </tr>
  )
}
