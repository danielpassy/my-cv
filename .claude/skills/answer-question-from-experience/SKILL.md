---
name: answer-question-from-experience
description: Answer an interview or application question grounded in Daniel's real past experience. Reads notes and CV, drafts a response in the user's voice, and saves it to the questions/ folder.
---

The user has an interview or application question they need to answer, and wants a response grounded in their real work history. Follow these steps:

1. **Get the question** from the user. If they also specify a language (e.g. "responda em inglês", "em português"), a length target (e.g. "~800 characters"), or a tone, respect it. If not specified, default to the same language the question was asked in.

2. **Read `questions/index.txt`** to see what has already been answered. If any existing question looks similar or overlapping with the new one, flag it to the user before proceeding (e.g. "Question 3 covers similar ground — do you want a different angle, or should this be a separate answer?"). Don't block on this; if the user says to proceed, proceed.

3. **Read `en.md`** (and `pt.md` if question is made on Portuguese) to get a high-level picture of Daniel's roles, dates, and headline achievements.

4. **Read files in `anotacoes_do_passado/`** (e.g. `eden.txt`, `inoa.txt`, `buser.txt`, `perfil das empresas.txt`). These contain detailed factual material about what actually happened day-to-day. Use them as the source of truth for concrete details, numbers, architectures, decisions, and incidents. Every claim in the answer must come from these files, from the CV, or from something the user tells you directly in the conversation. **Do not fabricate facts, numbers, or stories.**

5. **Ask clarifying questions when needed.** If the question is about a specific achievement or project and the notes don't have enough context (or multiple candidates exist), ask the user which one they want to focus on, or ask for the missing details (numbers, outcomes, who owned it). Better to ask than to invent.

6. **Draft the answer** in a natural, conversational tone — as if Daniel were answering out loud in an interview. Focus on:
   - **Answering the question directly.** Don't dance around it or summarize the whole career.
   - **Concrete specifics** over generalities: real systems, real numbers, real decisions.
   - **Ownership honesty**: if Daniel was one of several contributors, frame it that way. Don't inflate his role.
   - **Respect the length target** if given.

7. **Humanization pass** — this is the most important step. After drafting, review every sentence and rewrite anything that sounds like AI:
   - Replace "—" (em dash) and "…" (ellipsis) with plain alternatives (a comma, a period, or rewrite the sentence)
   - Remove or rewrite any text in *italics*
   - Break up overly parallel structures ("Led X, achieving Y. Designed Z, resulting in W.") — vary the rhythm
   - Cut generic AI phrases: "passionate about", "results-driven", "dynamic environment", "leveraged", "spearheaded", "seamlessly", "end-to-end", "cross-functional", "at scale"
   - Cut self-congratulatory phrasing ("Instead of just flagging the issue, I...", "I took ownership of...")
   - Mix sentence lengths. Short sentences are fine. Not everything needs to be a clause chain.
   - Avoid wrap-up summaries like "The end result was...", "In the end...", "Ultimately..."
   - Read Daniel's other answers in the `questions/` folder and mirror the voice already used there. If past answers are direct and a little rough, match that. Don't introduce a polished "interview coach" voice.
   - If a sentence sounds like it was written to impress a robot, rewrite it to impress a human.

8. **Save the answer to `questions/<question title>.txt`**. The filename should be the question itself, cleaned up to be filesystem-safe (no slashes, no question marks, no colons; spaces are fine). Use the actual wording of the question when possible so the file is easy to find later.

8. **Update `questions/index.txt`** — append a new numbered line with the question title. If `index.txt` doesn't exist, create it.

9. **Report** briefly what was written and where. If there were judgment calls during the draft (e.g. "I picked the SQL Server migration over the AI pipeline because you were more hands-on there"), mention them so the user can redirect.

## Important rules

- **Never invent numbers, outcomes, or stories.** If the user says "latency dropped 7%", use 7%. If they didn't give a number, don't make one up.
- **Inflate a little, but don't lie.** If Daniel was one of three people on a project, it's fine to say "I led the database migration" if he was the technical lead, even if others contributed. But don't say "I led the database migration" when I had a minor contribution.
- **Never claim Daniel owned something he didn't own.** Check the notes and ask if unsure.
- **Don't write in Portuguese when the question is in English, or vice versa**, unless the user explicitly says so.
- **The answer belongs to Daniel, not to you.** Write it so he could read it out loud and it would sound like him, not like a LinkedIn profile.
