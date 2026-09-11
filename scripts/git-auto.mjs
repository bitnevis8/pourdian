#!/usr/bin/env node
/**
 * git auto for Pourdian portfolio
 * Runs: git add .  ->  git commit -m "10 <message>"  ->  git push origin main
 */
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

function run(cmd, opts = {}) {
  return execSync(cmd, {
    encoding: "utf8",
    stdio: opts.capture ? ["ignore", "pipe", "pipe"] : "inherit",
    ...opts,
  });
}

function runCapture(cmd) {
  try {
    return run(cmd, { capture: true }).trim();
  } catch (err) {
    const out = (err.stdout || "").toString().trim();
    const errOut = (err.stderr || "").toString().trim();
    return out || errOut;
  }
}

function summarizeChanges(names) {
  if (!names.length) return "update project files";

  const joined = names.join(" ").toLowerCase();
  const parts = [];

  if (joined.includes("sidebarcontent") || joined.includes("projectcard") || joined.includes("portfolio") || joined.includes("crm-pourdian") || joined.includes("taganeh") || joined.includes("cal-afg") || joined.includes("car-afg")) {
    parts.push("refresh portfolio with CRM, calculator, car inspection, and Taganeh");
  }
  if (joined.includes("sidebar.jsx") || joined.includes("dictionary") || joined.includes("language")) {
    parts.push("improve sidebar layout and multilingual nav");
  }
  if (joined.includes("git-auto") || joined.includes("package.json")) {
    parts.push("add git auto helper");
  }

  if (parts.length) return parts.join("; ");
  if (names.length === 1) return `update ${path.basename(names[0])}`;
  if (names.length <= 3) return `update ${names.map((n) => path.basename(n)).join(", ")}`;
  return `update ${names.length} files`;
}

const root = process.cwd();
if (!existsSync(path.join(root, ".git"))) {
  console.error("Not a git repository. Run from project root.");
  process.exit(1);
}

console.log("[git auto] project:", root);
console.log("> git add .");
run("git add .");

const names = runCapture("git diff --cached --name-only")
  .split(/\r?\n/)
  .map((s) => s.trim())
  .filter(Boolean);

if (!names.length) {
  console.log("Nothing new to commit. Pushing origin main...");
} else {
  const message = `10 ${summarizeChanges(names)}`;
  console.log(`> git commit -m ${JSON.stringify(message)}`);
  try {
    run(`git commit -m ${JSON.stringify(message)}`);
  } catch {
    console.error("Commit failed.");
    process.exit(1);
  }
}

console.log("> git push origin main");
try {
  run("git push origin main");
  console.log("git auto finished.");
} catch {
  console.error("Push failed.");
  process.exit(1);
}
