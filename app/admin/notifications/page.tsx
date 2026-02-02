import AdminLayout from "../../AdminLayout";
import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
  type: "success" | "warning" | "info";
  read: boolean;
};

const dummyNotifications: Notification[] = [
  {
    id: 1,
    title: "New User Registered",
    message: "A new user just created an account.",
    time: "2 minutes ago",
    type: "success",
    read: false,
  },
  {
    id: 2,
    title: "Withdrawal Request",
    message: "User requested a BTC withdrawal.",
    time: "1 hour ago",
    type: "warning",
    read: false,
  },
  {
    id: 3,
    title: "System Update",
    message: "Platform maintenance completed successfully.",
    time: "Yesterday",
    type: "info",
    read: true,
  },
];

export default function AdminNotificationsPage() {
  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-2xl font-semibold">
          Notifications
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Recent system and user activity
        </p>
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="space-y-4">
        {dummyNotifications.map((note) => {
          const Icon =
            note.type === "success"
              ? CheckCircle
              : note.type === "warning"
              ? AlertTriangle
              : Info;

          return (
            <div
              key={note.id}
              className={`rounded-2xl border p-5 transition ${
                note.read
                  ? "border-white/10 bg-[#0b1220]"
                  : "border-teal-400/40 bg-[#0e1628]"
              }`}
            >
              <div className="flex items-start gap-4">

                <div className="mt-1 rounded-lg bg-teal-400/10 p-2 text-teal-400">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-medium">
                      {note.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {note.time}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-400">
                    {note.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </AdminLayout>
  );
}
