import { FaArrowRight } from 'react-icons/fa';

export default function IconCard({ Icon, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1">
      
      <Icon className="text-blue-600 text-3xl mb-2" />
      <span className="text-gray-700 font-medium">{label}</span>

      {/* Right Arrow */}
      <div className="mt-3 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <FaArrowRight className="text-sm" />
      </div>

    </div>
  );
}