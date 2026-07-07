export interface SettingsStatus {
  label: string;
  value: string;
  status: "online" | "mock" | "disabled";
}

export interface AppSettings {
  cloudinary: SettingsStatus;
  backend: SettingsStatus;
  theme: "system" | "dark";
  version: string;
  whisperModel: string;
  information: string[];
}
