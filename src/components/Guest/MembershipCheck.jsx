import React, { useState, useEffect } from 'react';
export default function MembershipCheck({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/data/members.json')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Email tidak boleh kosong.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setError("Format email tidak valid.");
      return;
    }

    const member = members.find(m => m.email.toLowerCase() === trimmedEmail.toLowerCase());
    if (member) {
      setResult(member);
      onSuccess(member); // Kirim data member ke komponen induk
    } else {
      setResult(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 font-['Rubik']">
      <h2 className="text-2xl font-bold text-center mb-4">Cek Keanggotaan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Masukkan email anda"
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700"
        >
          Cek Sekarang
        </button>
      </form>

      {result && result !== false && (
        <div className={`mt-6 p-4 rounded-md border bg-green-50 text-green-800`}>
          <p className="font-bold text-lg">
            🧾 Selamat datang, {result.nama}! Anda adalah member <strong>{result.tipe_member}</strong>.
          </p>
        </div>
      )}

      {result === false && (
        <div className="mt-6 p-4 rounded-md border border-red-300 bg-red-100 text-red-800 flex items-center space-x-3">
          ❌ Email tidak terdaftar sebagai member.
        </div>
      )}
    </div>
  );
}
