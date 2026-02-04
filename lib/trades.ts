// lib/trades.ts
export type Trade = {
  id: string;
  createdAt: string;
  senderAsset: string;
  receiverAsset: string;
  senderAmount: string;
  receiverAmount: string;
  role: "seller" | "buyer";
  sellerEmail: string;
  buyerEmail: string;
  feePayer: string;
  status: "active" | "completed";
};

const TRADES_KEY = "trades";

export function getTrades(): Trade[] {
  return JSON.parse(localStorage.getItem(TRADES_KEY) || "[]");
}

export function saveTrade(trade: Trade) {
  const trades = getTrades();
  trades.unshift(trade);
  localStorage.setItem(TRADES_KEY, JSON.stringify(trades));
}

export function getUserTrades(email: string) {
  if (!email) return [];
  return getTrades().filter(
    t => t.sellerEmail === email || t.buyerEmail === email
  );
}
