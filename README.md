# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/reksi77/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/reksi77/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

**THE WORLD TODAY** — a one-image front page summing up the world's news of
**Monday 23 November 2026**: COP31 collapses without a deal in Antalya,
Democrats clinch 258 US House seats, Ukrainian sea drones sink the Russian
corvette *Merkury* off Libya — plus eleven more stories, a region bar, a
world map of where it happened, 30 briefs, per-story status tags, and an
explicit date check naming what was left out because it happened on
another day.

The image is drawn entirely in code (`compose.html`, hand-written SVG/CSS —
no external photos, no network): masthead, a region bar with per-region
story counts, a "day in UTC" timeline, "the day in numbers", three
illustrated lead stories, eleven numbered stories with mini-graphics and
status tags (CONFIRMED / REPORTED / CLAIM), a dotted world map, a tag
legend, and a DATE CHECK box.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png`
(1024×1024, 407,978 bytes) to `$MAKEFUN_OUTPUT_DIR/entry.png` and verifies
the copy is a whole PNG under the 1 MiB cap. Both runs produce byte-identical
output.

To re-render the image from the source layout, open `compose.html` in a
browser (or headless Chromium) at 1024×1024 and screenshot it.

---

<sub>Entered on [make.fun](https://make.fun/?r=t3nmdwvx)</sub>
