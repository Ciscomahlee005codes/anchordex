import AdminLayout from "../../AdminLayout";
import { Shield, User, Bell } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-2xl font-semibold">
          Admin Settings
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Manage admin profile, security, and system preferences
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* PROFILE SETTINGS */}
        <SettingsCard
          title="Admin Profile"
          icon={User}
        >
          <div className="space-y-4 text-sm">
            <SettingRow label="Name" value="Super Admin" />
            <SettingRow label="Email" value="admin@anchordex.com" />

            <button className="mt-2 rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5">
              Edit Profile
            </button>
          </div>
        </SettingsCard>

        {/* SECURITY */}
        <SettingsCard
          title="Security"
          icon={Shield}
        >
          <div className="space-y-4 text-sm">
            <SettingRow label="Password" value="••••••••" />
            <SettingRow label="Two-Factor Auth" value="Disabled" />

            <button className="rounded-lg bg-teal-500 hover:bg-teal-600 px-4 py-2 text-sm font-medium text-black">
              Change Password
            </button>
          </div>
        </SettingsCard>

      </div>

      {/* SYSTEM SETTINGS */}
      <div className="mt-6">
        <SettingsCard
          title="System Preferences"
          icon={Bell}
        >
          <div className="space-y-4">
            <ToggleRow label="Email Notifications" />
            <ToggleRow label="Admin Alerts" />
            <ToggleRow label="Maintenance Mode" />
          </div>
        </SettingsCard>
      </div>

    </AdminLayout>
  );
}

function SettingsCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-lg bg-teal-400/10 p-2 text-teal-400">
          <Icon className="h-4 w-4" />
        </div>
        <h2 className="text-sm font-medium">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}

function SettingRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-2">
      <span className="text-slate-400">
        {label}
      </span>
      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}

function ToggleRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <button className="relative h-6 w-11 rounded-full bg-white/10">
        <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-slate-400" />
      </button>
    </div>
  );
}
