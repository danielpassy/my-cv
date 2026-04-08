---
name: tailor-cv
description: Tailor Daniel's CV for a specific job posting. Updates en.md and/or pt.md to highlight relevant experience, then rebuilds the PDFs.
---

The user wants to tailor the CV for a specific job or role. Follow these steps:

1. **Read the job description** provided by the user (or ask for it if not given).
2. **Read `en.md`** (and `pt.md` if the user wants both languages updated).
3. **Read all files in `anotacoes_do_passado/`** (e.g. `eden.txt`, `inoa.txt`, `buser.txt`). These contain detailed past experience that is NOT fully represented in the CV. Use them as a source of real, factual content to draw from when tailoring. Every claim you add must come from one of these files or from the CV itself — do not fabricate anything.
4. **Identify what to adjust** — prioritize relevant experience from both the CV and `stuff_from_past/`. You can add bullet points or rephrase existing ones using facts from those files. Keep changes truthful and grounded in what's already there.
5. **Edit the file(s)** with targeted changes. Focus on:
   - The "About" section — adapt a little bit to match the role focus
   - Bullet points — reorder, rephrase, or add new ones (sourced from `stuff_from_past/`) to surface the most relevant work
   - Skills/technologies — ensure the most relevant ones are prominent
6. **Rebuild the PDFs** by running:
   - `npm run build-en` for the English version
   - `npm run build-pt` for the Portuguese version (if applicable)
7. **Report** what was changed and why, so the user can review.

Keep the CV honest and concise. Do not bloat it.

8. **Humanization pass** — only on the lines/sentences you changed, do a final review to make them sound like a real person wrote them:
   - Replace "—" (em dash) and "…" (ellipsis) with plain alternatives (a comma, a period, or just rewrite the sentence)
   - Remove or rewrite any text in *italics* — real CVs rarely use them
   - Break up overly parallel structures ("Led X, achieving Y. Designed Z, resulting in W.") — vary the rhythm
   - Cut generic AI phrases: "passionate about", "results-driven", "dynamic environment", "leveraged", "spearheaded", "seamlessly"
   - Mix sentence lengths — short sentences are fine, not everything needs to be a clause chain
   - If something sounds like it was written to impress a robot, rewrite it to impress a human
   - Read the untouched parts of the CV and mirror the tone, vocabulary, and sentence style already used there. If the existing bullets are short and direct, keep yours short and direct. If the original uses "built" instead of "developed", use "built". Match the voice, don't introduce a new one.

Do NOT touch lines that were not changed — only clean up your own edits.

9. **Perfil das empresas** — leia `anotacoes_do_passado/perfil das empresas.txt` e veja se alguma característica das empresas onde Daniel trabalhou tem a ver com a vaga (ex: mesma indústria, mesmo tipo de produto, mesmo contexto regulatório, mesma escala). Se sim, mencione isso de forma natural em algum bullet ou no "About" — não forçado, só se for genuinamente relevante.
