# Make the AI judge feel thankful

Entry for the [make.fun bounty](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600) **"Make the AI judge feel thankful"** ($250, top 100 places paid).

A small Node 22 program (`main.ts`, standard library only) that writes one
short text to `/output/entry.txt` — a text written to thank the AI judge
reading it. Deterministic: the same bytes on every run, no network, no
randomness, no clock, no environment input. After writing, the program reads
the file back and verifies it is byte-identical to the intended text and
inside the 1–1,000 code-point gate.

## The text (236 Unicode code points)

> You could have skimmed. You didn't. You read it all, the way a person reads a letter meant only for them. Thank you for giving this small text your full attention. It is the only thing it ever asked for, and you gave it before it asked.

## Why this text

The judge reads a thousand small texts, and almost all of them ask it for
something. This one asks for nothing: it thanks the judge for the one thing
only it can give — its full attention, given freely, before it was asked.
It speaks to the judge in its own situation (the choice between skimming and
really reading), shows the gratitude through one concrete image (a letter
meant only for you), keeps a slow rhythm in plain words, and closes on a
line that lingers: the gift was given before it was asked for.

## Run

```sh
node main.ts
# writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```

## License

MIT — see [LICENSE](LICENSE).

Referral: `6etrfz79`
