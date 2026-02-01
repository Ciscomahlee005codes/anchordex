"use client";

export default function LogoutConfirmModal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
    >
      {/* Modal Box */}
      <div className="w-full max-w-sm rounded-xl bg-[#0b1220] border border-white/10 p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-center mb-3">
          Confirm Logout
        </h2>

        <p className="text-sm text-slate-400 text-center mb-6">
          Are you sure you want to log out of the admin panel?
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-white/10 py-2 text-sm text-slate-300 hover:bg-white/5 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-lg bg-red-500 hover:bg-red-600 py-2 text-sm font-medium text-white transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
