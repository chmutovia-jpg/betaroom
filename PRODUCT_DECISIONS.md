# Product Decisions

This document explains the main product choices behind BetaRoom.

## 1. Structured feedback form

Beta feedback often comes as messy free text. BetaRoom uses a structured form to make answers easier to compare:

- What worked?
- What was confusing?
- What annoyed you?
- What was missing?
- How likely are you to return?

This structure helps the product builder find repeated patterns instead of reading every response from zero.

## 2. Pattern detection over raw volume

The dashboard focuses on repeated pain points, not just total feedback count. The key product question is:

> What do multiple testers struggle with?

That is why the demo shows source count, category, priority, and reasoning for each backlog item.

## 3. AI as an assistant, not autopilot

The AI summary is designed to support the decision-maker. Original tester language remains visible so the founder can verify the summary and avoid blindly trusting AI output.

## 4. Return score as lightweight retention signal

The return score gives a simple signal of product pull. It is not a full retention metric, but it helps identify whether users only found the product interesting or would actually come back.

## 5. Backlog items include reasoning

Each AI-generated backlog item includes:

- priority;
- category;
- source count;
- effort estimate;
- product reasoning.

This makes the backlog useful for product discussions instead of becoming a vague AI-generated todo list.
