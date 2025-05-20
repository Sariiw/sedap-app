export default function FeatureIcons() {
  return (
    <div className="relative -mt-20 z-10 px-4 font-['Rubik']">
      <div className="max-w-6xl mx-auto bg-white shadow-lg grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 rounded-md overflow-hidden">
        
        {/* Return Policy Section */}
        <div className="flex items-center px-6 py-6 space-x-4">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/006/445/974/non_2x/return-policy-black-glyph-icon-refund-rules-compensation-information-online-shopping-website-information-silhouette-symbol-on-white-space-solid-pictogram-isolated-illustration-vector.jpg" 
            alt="Return Policy" 
            className="w-12 h-12"
          />
          <div>
            <h4 className="text-sm font-bold text-gray-800">Return Policy</h4>
            <p className="text-xs text-gray-500">Money back guarantee</p>
          </div>
        </div>

        {/* Free Shipping Section */}
        <div className="flex items-center px-6 py-6 space-x-4">
          <img 
            src="https://www.freeiconspng.com/thumbs/delivery-icon/delivery-icon-1.png" 
            alt="Free Shipping" 
            className="w-12 h-12"
          />
          <div>
            <h4 className="text-sm font-bold text-gray-800">Free Shipping</h4>
            <p className="text-xs text-gray-500">On all orders over $25.00</p>
          </div>
        </div>

        {/* Store Locator Section */}
        <div className="flex items-center px-6 py-6 space-x-4">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4v0lefRxLsgg8sbhGk1VQMiS68UV7E9Nmhw&s" 
            alt="Store Locator" 
            className="w-12 h-12"
          />
          <div>
            <h4 className="text-sm font-bold text-gray-800">Store Locator</h4>
            <p className="text-xs text-gray-500">Find your nearest store</p>
          </div>
        </div>
      </div>
    </div>
  );
}