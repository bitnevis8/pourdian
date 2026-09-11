#!/usr/bin/env node
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
    return (err.stdout || "").toString().trim();
  }
}

function summarizeChanges() {
  const names = runCapture("git diff --cached --name-only")
    .split(/\r?\n/)
    .filter(Boolean);

  if (names.length === 0) return "update project files";

  const joined = names.join(" ").toLowerCase();
  const parts = [];

  if (joined.includes("sidebar") || joined.includes("dictionary") || joined.includes("language")) {
    parts.push("fix sidebar menu layout and widen navigation");
  }
  if (joined.includes("git-auto") || joined.includes("package.json")) {
    parts.push("add git auto helper");
  }

  if (parts.length) return parts.join("; ");

  if (names.length === 1) {
    return `update ${path.basename(names[0])}`;
  }
  if (names.length <= 3) {
    return `update ${names.map((n) => path.basename(n)).join(", ")}`;
  }
  return `update ${names.length} files`;
}

const root = process.cwd();
if (!existsSync(path.join(root, ".git"))) {
  console.error("Not a git repository.");
  process.exit(1);
}

console.log("> git add .");
run("git add .");

const staged = runCapture("git diff --cached --name-only");
if (!staged) {
  console.log("Nothing to commit. Pushing current branch...");
} else {
  const message = `10 ${summarizeChanges()}`;
  console.log(`> git commit -m "${message}"`);
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
  console.log("Done.");
} catch {
  console.error("Push failed.");
  process.exit(1);
}
