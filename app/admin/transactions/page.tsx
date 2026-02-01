import AdminLayout from "../../AdminLayout";

export default function AdminTransactions() {
  return (
    <AdminLayout>
      <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
        Transactions
      </h1>

      <div className="rounded-xl border border-white/10 bg-[#0b1220] p-6 text-slate-400 text-sm text-center">
        Transaction history will appear here
      </div>
    </AdminLayout>
  );
}
