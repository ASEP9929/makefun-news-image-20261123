# The World in One Day — 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/ASEP9929/makefun-news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/ASEP9929/makefun-news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

A make.fun bounty entry for [news-image-20261123](https://make.fun/bounty/news-image-20261123):
one image summing up the world news of Monday, 23 November 2026.

## The image

`entry.png` (1024×1024) is a front page, "THE WORLD IN ONE DAY — MONDAY,
23 NOVEMBER 2026", with six stories, each cross-checked against live sources:

1. **COP31 collapses — no deal** (Antalya): UN climate talks end after record
   overtime as the EU rejects a text with no mention of fossil fuels.
2. **NATO meets after missiles hit Poland**: three Russian Kh-101 cruise
   missiles confirmed down in Poland; the North Atlantic Council meets in
   Brussels on Monday.
3. **Democrats' biggest House win since 1992**: North Carolina gives
   Democrats a 258th seat, the largest House majority in over 30 years.
4. **UK to host 2035 Women's World Cup**: FIFA confirms the first World Cup
   in Britain since 1966 — 48 teams, 104 matches, 19 venues.
5. **M6.5 quake shakes Vanuatu**: a magnitude 6.5 earthquake strikes deep
   under the Pacific island nation early on Monday.
6. **Markets on alert as stocks slide**: US shares plunge; Taiwan bans
   short-selling at or below the flat price from today.

## The program

`main.ts` (Node 22, standard library only, no network) copies `entry.png`
to `/output/entry.png` byte-identically. Two runs write the same bytes.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
