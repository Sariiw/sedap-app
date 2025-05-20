export default function Hero() {
  return (
    <div className="relative w-full ">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <img
          src="https://nibble-images.b-cdn.net/nibble/original_images/cafe_di_jogja_dekat_malioboro_12_ff946f0741_Hd1PHptII.jpg" // ganti sesuai gambar hero kamu
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-extrabold leading-tight">Sedap</h1>
          <h1 className="text-5xl font-extrabold leading-tight">Restaurant</h1>

          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
            Order Now
          </button>
        </div>

        {/* Left Arrow */}
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
          ←
        </button>

        {/* Right Arrow */}
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
          →
        </button>
      </div>
    </div>
  );
}
