import Image from 'next/image';

export default function DiseaseCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <button className="mt-3 text-blue-600 font-medium">
          Learn More →
        </button>
      </div>
    </div>
  );
}