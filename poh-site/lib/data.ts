import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

// ── State Metadata ──────────────────────────────────────────────────────────
export const STATE_META: Record<string, { name: string; conLaw: boolean }> = {
  AL: { name: "Alabama", conLaw: true },
  AR: { name: "Arkansas", conLaw: true },
  AZ: { name: "Arizona", conLaw: false },
  CA: { name: "California", conLaw: false },
  CO: { name: "Colorado", conLaw: false },
  FL: { name: "Florida", conLaw: false },
  GA: { name: "Georgia", conLaw: true },
  IA: { name: "Iowa", conLaw: false },
  ID: { name: "Idaho", conLaw: false },
  IN: { name: "Indiana", conLaw: false },
  KS: { name: "Kansas", conLaw: false },
  LA: { name: "Louisiana", conLaw: true },
  MI: { name: "Michigan", conLaw: true },
  MO: { name: "Missouri", conLaw: true },
  MT: { name: "Montana", conLaw: false },
  NC: { name: "North Carolina", conLaw: true },
  NE: { name: "Nebraska", conLaw: true },
  NH: { name: "New Hampshire", conLaw: true },
  NM: { name: "New Mexico", conLaw: false },
  NV: { name: "Nevada", conLaw: true },
  OH: { name: "Ohio", conLaw: false },
  OK: { name: "Oklahoma", conLaw: true },
  OR: { name: "Oregon", conLaw: true },
  PA: { name: "Pennsylvania", conLaw: false },
  SC: { name: "South Carolina", conLaw: false },
  SD: { name: "South Dakota", conLaw: false },
  TN: { name: "Tennessee", conLaw: true },
  TX: { name: "Texas", conLaw: false },
  UT: { name: "Utah", conLaw: false },
  WI: { name: "Wisconsin", conLaw: false },
  WV: { name: "West Virginia", conLaw: true },
  WY: { name: "Wyoming", conLaw: false },
};

export const ALL_STATE_CODES = Object.keys(STATE_META);

export const TIER_1_STATES = [
  "TX", "LA", "OK", "KS", "IN", "OH", "SD", "CA", "AZ", "PA", "WI", "NE", "AR", "ID", "CO",
];

// ── Aggregate Stats ─────────────────────────────────────────────────────────
export const STATS = {
  totalBuilt: 265,
  currentlyOperating: 104,
  trackedInDatabase: 189,
  lostSinceSection6001: 85,
  statesWithActivePOHs: 22,
  statesTracked: 32,
  yearsOfBan: 16,
};

// ── Types ───────────────────────────────────────────────────────────────────
export interface Hospital {
  number: number;
  name: string;
  city: string;
  state: string;
  category: string;
  specialtyFocus: string;
  currentStatus: string;
  notes: string;
}

export interface StateSummary {
  state: string;
  totalListed: number;
  currentlyOperating: number;
  closedAcquired: number;
  soldAcquired: number;
  underDevelopment: number;
}

export interface StateData {
  code: string;
  name: string;
  conLaw: boolean;
  summary: StateSummary;
  hospitalCount: number;
  brief: string;
  tier: 1 | 2;
  price: number;
  attritionRate: number;
}

// ── Data Parsing ────────────────────────────────────────────────────────────
const DATA_DIR = path.join(process.cwd(), "data");

function getExcelPath(): string {
  return path.join(DATA_DIR, "Physician_Owned_Hospitals_US.xlsx");
}

export function parseHospitals(): Hospital[] {
  const filePath = getExcelPath();
  if (!fs.existsSync(filePath)) return [];

  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets["Master List"];
  if (!sheet) return [];

  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);
  return rows.map((row) => ({
    number: Number(row["#"] || 0),
    name: String(row["Hospital Name"] || ""),
    city: String(row["City"] || ""),
    state: String(row["State"] || ""),
    category: String(row["Category"] || ""),
    specialtyFocus: String(row["Specialty Focus"] || ""),
    currentStatus: String(row["Current Status"] || ""),
    notes: String(row["Notes"] || ""),
  }));
}

export function parseStateSummaries(): StateSummary[] {
  const filePath = getExcelPath();
  if (!fs.existsSync(filePath)) return [];

  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets["Summary by State"];
  if (!sheet) return [];

  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);
  return rows.map((row) => ({
    state: String(row["State"] || ""),
    totalListed: Number(row["Total Listed"] || 0),
    currentlyOperating: Number(row["Currently Operating"] || 0),
    closedAcquired: Number(row["Closed/Acquired"] || 0),
    soldAcquired: Number(row["Sold/Acquired"] || 0),
    underDevelopment: Number(row["Under Development"] || 0),
  }));
}

export function getStateBrief(stateCode: string): string {
  const stateName = STATE_META[stateCode]?.name;
  if (!stateName) return "";

  const briefPath = path.join(DATA_DIR, "briefs", `${stateName}.md`);
  if (!fs.existsSync(briefPath)) return "";

  const raw = fs.readFileSync(briefPath, "utf-8");
  const { content } = matter(raw);
  return content.trim();
}

// ── Fallback Data (used when Excel is not available) ────────────────────────
const FALLBACK_STATE_DATA: Record<string, Omit<StateSummary, "state">> = {
  TX: { totalListed: 55, currentlyOperating: 24, closedAcquired: 22, soldAcquired: 8, underDevelopment: 1 },
  LA: { totalListed: 21, currentlyOperating: 13, closedAcquired: 6, soldAcquired: 2, underDevelopment: 0 },
  OK: { totalListed: 18, currentlyOperating: 12, closedAcquired: 3, soldAcquired: 3, underDevelopment: 0 },
  KS: { totalListed: 10, currentlyOperating: 6, closedAcquired: 4, soldAcquired: 0, underDevelopment: 0 },
  IN: { totalListed: 9, currentlyOperating: 5, closedAcquired: 2, soldAcquired: 2, underDevelopment: 0 },
  SD: { totalListed: 9, currentlyOperating: 7, closedAcquired: 2, soldAcquired: 0, underDevelopment: 0 },
  CA: { totalListed: 8, currentlyOperating: 5, closedAcquired: 1, soldAcquired: 2, underDevelopment: 0 },
  OH: { totalListed: 8, currentlyOperating: 4, closedAcquired: 4, soldAcquired: 0, underDevelopment: 0 },
  AZ: { totalListed: 7, currentlyOperating: 3, closedAcquired: 3, soldAcquired: 1, underDevelopment: 0 },
  AR: { totalListed: 4, currentlyOperating: 2, closedAcquired: 2, soldAcquired: 0, underDevelopment: 0 },
  NE: { totalListed: 4, currentlyOperating: 3, closedAcquired: 0, soldAcquired: 1, underDevelopment: 0 },
  PA: { totalListed: 4, currentlyOperating: 3, closedAcquired: 1, soldAcquired: 0, underDevelopment: 0 },
  WI: { totalListed: 4, currentlyOperating: 4, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
  CO: { totalListed: 3, currentlyOperating: 3, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
  FL: { totalListed: 3, currentlyOperating: 0, closedAcquired: 0, soldAcquired: 3, underDevelopment: 0 },
  ID: { totalListed: 3, currentlyOperating: 3, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
  MI: { totalListed: 2, currentlyOperating: 0, closedAcquired: 1, soldAcquired: 1, underDevelopment: 0 },
  MO: { totalListed: 2, currentlyOperating: 0, closedAcquired: 1, soldAcquired: 1, underDevelopment: 0 },
  MT: { totalListed: 2, currentlyOperating: 1, closedAcquired: 1, soldAcquired: 0, underDevelopment: 0 },
  AL: { totalListed: 1, currentlyOperating: 1, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
  GA: { totalListed: 1, currentlyOperating: 0, closedAcquired: 0, soldAcquired: 1, underDevelopment: 0 },
  IA: { totalListed: 1, currentlyOperating: 0, closedAcquired: 1, soldAcquired: 0, underDevelopment: 0 },
  NC: { totalListed: 1, currentlyOperating: 1, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
  NH: { totalListed: 1, currentlyOperating: 0, closedAcquired: 1, soldAcquired: 0, underDevelopment: 0 },
  NM: { totalListed: 1, currentlyOperating: 0, closedAcquired: 0, soldAcquired: 1, underDevelopment: 0 },
  NV: { totalListed: 1, currentlyOperating: 0, closedAcquired: 1, soldAcquired: 0, underDevelopment: 0 },
  OR: { totalListed: 1, currentlyOperating: 0, closedAcquired: 0, soldAcquired: 1, underDevelopment: 0 },
  SC: { totalListed: 1, currentlyOperating: 1, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
  TN: { totalListed: 1, currentlyOperating: 1, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
  UT: { totalListed: 1, currentlyOperating: 0, closedAcquired: 1, soldAcquired: 0, underDevelopment: 0 },
  WV: { totalListed: 1, currentlyOperating: 1, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
  WY: { totalListed: 1, currentlyOperating: 1, closedAcquired: 0, soldAcquired: 0, underDevelopment: 0 },
};

// ── Main Accessor ───────────────────────────────────────────────────────────
export function getStateData(stateCode: string): StateData {
  const meta = STATE_META[stateCode];
  if (!meta) throw new Error(`Unknown state code: ${stateCode}`);

  const summaries = parseStateSummaries();
  let summary = summaries.find(
    (s) => s.state === stateCode || s.state === meta.name
  );

  if (!summary) {
    const fallback = FALLBACK_STATE_DATA[stateCode] || {
      totalListed: 0,
      currentlyOperating: 0,
      closedAcquired: 0,
      soldAcquired: 0,
      underDevelopment: 0,
    };
    summary = { state: stateCode, ...fallback };
  }

  const tier = TIER_1_STATES.includes(stateCode) ? 1 : 2;
  const totalLost = summary.closedAcquired + summary.soldAcquired;
  const attritionRate =
    summary.totalListed > 0
      ? Math.round((totalLost / summary.totalListed) * 100)
      : 0;

  return {
    code: stateCode,
    name: meta.name,
    conLaw: meta.conLaw,
    summary,
    hospitalCount: summary.totalListed,
    brief: getStateBrief(stateCode),
    tier: tier as 1 | 2,
    price: tier === 1 ? 300 : 50,
    attritionRate,
  };
}

export function getAllStatesData(): StateData[] {
  return ALL_STATE_CODES.map(getStateData);
}
