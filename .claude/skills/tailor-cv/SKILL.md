---
name: tailor-cv
description: Tailor Daniel's CV for a specific job posting. Updates en.md and/or pt.md to highlight relevant experience, then rebuilds the PDFs.
---

The user wants to tailor the CV for a specific job or role. Follow these steps:

1. **Read the job description** provided by the user (or ask for it if not given).
2. **Read `en.md`** (and `pt.md` if the user wants both languages updated).
3. **Identify what to adjust** — prioritize relevant experience, reorder or rephrase bullet points to match the job's keywords and requirements. Do NOT fabricate experience or change factual information. Keep changes truthful and grounded in what's already there.
4. **Edit the file(s)** with targeted changes. Focus on:
   - The "About" section — adapt the summary to match the role's focus
   - Bullet points — reorder or lightly rephrase to surface the most relevant work
   - Skills/technologies — ensure the most relevant ones are prominent
5. **Rebuild the PDFs** by running:
   - `npm run build-en` for the English version
   - `npm run build-pt` for the Portuguese version (if applicable)
6. **Report** what was changed and why, so the user can review.

Keep the CV honest and concise. Do not bloat it.
