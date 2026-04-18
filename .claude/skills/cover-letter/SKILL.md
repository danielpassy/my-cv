---
name: cover-letter
description: Write a cover letter for a specific job posting, grounded in Daniel's real experience. Reads the job description, CV, and past notes, then saves to cover-letter/daniel-passy-{company}.txt.
---

The user wants a cover letter for a specific job. Follow these steps:

1. **Get the job description** from the user. If they didn't paste it, ask for it. Also get the company name if it's not obvious from the JD.

2. **Ask the user what their angle is** (if they didn't already tell you). Things worth knowing:
   - Why this role specifically? (industry match, product match, scale, tech, location)
   - What matters to them right now? (moving to a bigger company, entering a new market, working on a harder problem, getting out of something)
   - Any gaps they already know about? (tech stack mismatch, missing years of experience)
   - Whether they want to be bold about a connection or stay neutral

   Do not skip this step. The cover letter is only good if it has a strong opinion about *why* Daniel fits this specific job. Without his input you'll write something generic.

3. **Read `en.md`** for the overall picture of roles, dates, headline achievements.

4. **Read `anotacoes_do_passado/perfil das empresas.txt`** — this is the most important file for cover letters. It has the company profiles and industry context for each place Daniel worked. Use it to find genuine connections between Daniel's past employers and the target company (industry, product type, scale, regulatory context, culture).

5. **Read `anotacoes_do_passado/eden.txt`, `inoa.txt`, `buser.txt`** as needed for specific project details, numbers, or stories that support the pitch. Every concrete claim must come from these files or from something the user tells you directly. **Do not fabricate.**

6. **Draft the cover letter** with these principles:
   - **Lead with the strongest connection.** If there's a direct industry match, open with it. If not, open with the most relevant role or achievement. Don't bury the lede.
   - **Be specific, not generic.** Name the product, the scale, the stack, the outcome. Skip "I'm excited to apply" openers.
   - **Be honest about gaps.** If the JD requires a tech stack Daniel doesn't have, address it briefly and offer what he does have that's adjacent. Don't pretend.
   - **State why Daniel is applying**, not just why they should hire him. Hiring managers want to know the person has a reason for wanting this job specifically.
   - **Keep it short.** 4 to 6 short paragraphs. No walls of text.
   - **Write in Daniel's voice**, not in cover letter voice. Read files in `questions/` and `cover-letter/` to match tone.

7. **Humanization pass** — this is the most important step. After drafting, review every sentence and rewrite anything that sounds like AI:
   - Replace "—" (em dash) and "…" (ellipsis) with plain alternatives
   - Cut meta-phrases like "One honest note:", "A quick word on:", "I'd like to highlight:", "In closing:"
   - Cut generic AI phrases: "passionate about", "results-driven", "leveraged", "spearheaded", "seamlessly", "hit the ground running", "eager to contribute", "excited to apply", "perfect fit", "uniquely positioned", "proven track record", "dynamic environment", "cross-functional", "at scale", "end-to-end"
   - Cut self-congratulatory phrasing ("I took ownership of...", "I championed...", "Instead of just X, I...")
   - Avoid wrap-up summaries like "The end result was...", "In the end...", "Ultimately..."
   - Break up parallel structures. Mix sentence lengths. Short sentences are fine.
   - If a sentence sounds like it was written to impress a robot, rewrite it to impress a human reading 200 cover letters in a row.

8. **Save the cover letter to `cover-letter/daniel-passy-{company-name}.txt`**. Use a lowercase, hyphen-separated version of the company name (e.g. `daniel-passy-charterup.txt`, `daniel-passy-acme-corp.txt`). Create the `cover-letter/` directory if it doesn't exist.

9. **Report** briefly what you wrote, what angle you led with, what judgment calls you made, and what gaps you addressed. Flag anything the user should double-check before sending.

## Important rules

- **Never fabricate numbers, outcomes, or stories.** If you don't have the detail, leave it out or ask the user.
- **Never overstate Daniel's role.** If he was one of several contributors on a project, don't claim he led it. Check notes and ask if unsure.
- **The cover letter belongs to Daniel, not to you.** Write it so he could paste it into a form and not feel like it sounds fake.
- **One cover letter per job.** Don't reuse an old cover letter's opening for a different role, even if the role is similar.
