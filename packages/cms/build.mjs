import { spawnSync } from "node:child_process";

if (process.env.BASEHUB_TOKEN) {
  const result = spawnSync("basehub", ["build"], {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.error) {
    throw result.error;
  }

  process.exit(result.status ?? 1);
}

console.log("Skipping BaseHub generation: CMS is not configured.");
