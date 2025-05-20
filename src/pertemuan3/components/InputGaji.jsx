export default function InputGaji({ label, type, placeholder, value, onChange , persen, pesan}) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">
                            {pesan} <b class="text-red-500">{persen}</b>
                          </label>
                </div>
        </div>
    );
}