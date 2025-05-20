import testimoniData from "./Testimoni.json"; // SESUAIKAN path jika perlu

export default function Testimoni() {
  return (
    <section className="py-20 bg-white text-center font-['Rubik']">
      <div className="mb-12">
        <p className="text-gray-400 text-sm mb-1">Our Testimonials</p>
        <h2 className="text-4xl font-extrabold text-gray-800">What People Say?</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimoniData.map((item, index) => (
          <Card
            key={index}
            name={item.nama}
            text={item.ulasan}
            avatar={item.avatar}
          />
        ))}
      </div>
    </section>
  );
}

function Card({ name, text, avatar }) {
  return (
    <div className="bg-white rounded-md shadow-md border-t-4 border-green-400 pt-8 pb-10 px-6 transition hover:shadow-lg">
      <div className="flex justify-center mb-6">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <p className="text-gray-500 text-sm mb-6 px-2 leading-relaxed">
        {text}
      </p>
      <h4 className="text-green-600 font-semibold">{name}</h4>
      <span className="text-gray-400 text-sm">Customer</span>
    </div>
  );
}
