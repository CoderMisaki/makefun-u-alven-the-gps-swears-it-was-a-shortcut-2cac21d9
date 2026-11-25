// The GPS Swears It Was a Shortcut — make.fun entry (program/v1).
//
// Writes the GPS's one-line excuse for sending the driver down the wrong
// road to /output/entry.txt. Deterministic: the same line on every run,
// pure Node stdlib, no network, no randomness, no input files.
//
// The joke's shape: a defensive GPS pleads its case, blames the map for
// the bad call, then twists the knife — the map never apologised to the
// GPS either, so the GPS is a fellow victim, not the villain. One breath,
// one specific detail (the cul-de-sac), no setup, no dialogue tags.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";

// The excuse, assembled from its two beats: the alibi, then the twist.
function gpsExcuse(): string {
  const alibi = "In my defence, the map swore that cul-de-sac was a shortcut";
  const twist = "and the map has never once apologised to me either.";
  return `${alibi} \u2014 ${twist}`;
}

const line = gpsExcuse();

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, line + "\n", "utf8");
