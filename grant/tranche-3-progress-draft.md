# Polygon Growth Grant — Tranche 3 Progress Report (Draft)

> Working draft as of August 24, 2026. The two remaining release decisions are marked `[PENDING]` and require the project owner's npm authentication and repository-visibility approval.

## Executive summary

Web3GPT's Tranche 3 work shifted from a Telegram-embedded giveaway agent toward a reusable agent-facing contract generation and deployment capability in the `w3gpt` TypeScript SDK and the core Web3GPT product. The resulting flow supports Polygon Amoy for testing and Polygon mainnet for production deployment through an agent conversation.

We are asking Polygon to assess this productized SDK and observed Polygon usage as a scope variance. We are **not** claiming that the original Telegram engagement target or the original requirement for five deployed agents executing 100 Polygon mainnet transactions has been met.

## Original metrics and current status

| Original Tranche 3 requirement | Status | Evidence and limitation |
| --- | --- | --- |
| SDK published on npm and GitHub with documentation | **In progress** | [`w3gpt@0.1.1` is published on npm](https://www.npmjs.com/package/w3gpt), but its package contents are incomplete. [SDK PR #1](https://github.com/web3-gpt/sdk/pull/1) and version [PR #2](https://github.com/web3-gpt/sdk/pull/2) are merged, and the corrected `0.1.2` tarball passes local consumer imports. [Documentation PR #6](https://github.com/Markeljan/web3gpt-docs/pull/6) is ready. `[PENDING: add npm authentication, publish 0.1.2, and clean-install it from the registry]` `[PENDING: make the SDK GitHub repository public or provide evaluator access; it is private as of this draft]` |
| At least 25 users interacting with agents in Telegram | **Not demonstrated** | Telegram community membership from an earlier tranche is not equivalent to 25 users interacting with agents. No qualifying interaction dataset is presented in this report. |
| At least 5 agents deployed and 100 mainnet transactions executed by those agents | **Not demonstrated under the original definition** | The public deployment dashboard shows 7 Polygon mainnet deployments, not 100 agent-attributed mainnet transactions. The 77 custom-agent records and platform deployment counts do not prove this original metric because they are not joined into an agent-to-mainnet-transaction cohort. |
| Telegram giveaway/challenge agent that autonomously rewards users on Polygon mainnet | **Not delivered** | Work was redirected to general contract-generation and deployment capabilities designed for use by agents. This is a requested scope variance, not strict completion of the original deliverable. |

## Delivered or immediately verifiable progress

### 1. Agent-facing SDK

- Public npm package: [`w3gpt`](https://www.npmjs.com/package/w3gpt)
- The SDK starts an agent chat, preserves a `chatId`, and continues generation and deployment work in the same conversation.
- The documented workflow names the target explicitly as Polygon Amoy or Polygon mainnet.
- The mainnet example is gated by a local source-review confirmation and the agent's separate network confirmation. It warns that a mainnet deployment is a real, irreversible transaction that costs POL.
- Hosted SDK access currently requires no client API key; secrets such as private keys, seed phrases, OpenAI keys, and RPC keys must not be placed in prompts or client code.

Evidence to attach:

- `[PENDING: corrected npm 0.1.2 publication timestamp and registry clean-install log; the current release run failed without an npm credential and published nothing]`
- The `0.1.2` tarball contains the CJS build, ESM build, both declaration files, README, and package manifest; clean CJS and ESM consumer imports passed before the release attempt.
- `[PENDING: public SDK source URL and commit]`
- [SDK pull request #1, merged at commit `5f49e03`](https://github.com/web3-gpt/sdk/pull/1)
- [Documentation pull request #6](https://github.com/Markeljan/web3gpt-docs/pull/6)

### 2. Polygon deployment support and activity

The [public Web3GPT deployment dashboard](https://w3gpt.ai/contracts) showed the following all-time snapshot on August 24, 2026:

| Dashboard measure | Count |
| --- | ---: |
| Raw deployment records | 725 |
| Publicly displayed deployments across all 11 chains | 673 |
| Polygon Amoy deployments | 160 |
| Polygon mainnet deployments | 7 |

These are deployment records shown by the platform dashboard. They must not be described as unique users, unique contracts, milestone-period activity, agent-attributed transactions, or 100 Polygon mainnet transactions.

The dashboard reduces the 725 raw records to 673 public records by deduplicating on `chainId`, deployment hash, and content identifier. The Polygon counts are unchanged by that rule: 160 Amoy and 7 mainnet records both before and after deduplication.

All 167 Polygon transaction hashes visible in that snapshot were checked against Polygon PoS receipts on August 24, 2026. All 160 Amoy receipts and all 7 mainnet receipts had successful status `0x1` and a non-null `contractAddress`, supporting the narrower claim that these are successful contract creations. Four of the mainnet deployments occurred in 2026 (March 30, April 1, and May 1) and three occurred on August 31, 2024, so this remains all-time platform evidence rather than a current-milestone cohort.

Representative receipts were re-read through Polygon dRPC at `2026-08-24T15:26:32.238Z`:

- Polygon mainnet: successful [transaction](https://polygonscan.com/tx/0x41df0f46e5a8fb378e00217c378aa6f307a3182a541b1b03267c79db2e4fa06e) and [created contract](https://polygonscan.com/address/0x5f25db5cd6375476225e89657bd770d275aacc17), with a block time of `2026-05-01T06:20:18Z`.
- Polygon Amoy: successful [transaction](https://amoy.polygonscan.com/tx/0xa13cd6eb195285d99f28526d54952a4ca4f992144cc4c5b2a7e4b6f4ea99474e) and [created contract](https://amoy.polygonscan.com/address/0x0780377b6412138baa78d3675fbaf48ab63b06c6).
- Fresh post-fix SDK flow: successful Amoy [transaction](https://amoy.polygonscan.com/tx/0xc47d2d17b106041ef677675088eff765f7536a929cebe935f235163076c74f79) and [created contract](https://amoy.polygonscan.com/address/0xdee6686c5fd9db49db3693f43fbd4fa13d257469), mined at `2026-08-24T15:43:05Z`. The agent returned the exact address, transaction hash, and both explorer URLs after the explicit same-chat confirmation.

Evidence to attach:

- [Timestamped Amoy dashboard screenshot](evidence/polygon-amoy-deployments-2026-08-24.png) and [Polygon mainnet dashboard screenshot](evidence/polygon-mainnet-deployments-2026-08-24.png)
- [Redacted analytics snapshot and count definitions](evidence/analytics-snapshot-2026-08-24.json)
- [Fresh SDK smoke receipt summary](evidence/polygon-amoy-sdk-smoke-2026-08-24.json)
- [Web3GPT application PR #44](https://github.com/Markeljan/web3gpt/pull/44), production merge commit [`8eb2c7e`](https://github.com/Markeljan/web3gpt/commit/8eb2c7e9c99a0e81395f9263f68aa05eba2e2145)
- [Agent-facing transaction-evidence PR #45](https://github.com/Markeljan/web3gpt/pull/45), production merge commit [`8d893d5`](https://github.com/Markeljan/web3gpt/commit/8d893d5d69485f2954bdd47a738c0199b6f8fc9e)

No new Polygon mainnet transaction was broadcast solely to prepare this report. Mainnet transactions spend real POL and create irreversible state; the report instead links the seven existing receipt-verified deployments and uses Amoy for the fresh end-to-end SDK validation.

### 3. Custom-agent product

At `2026-08-24T15:17:00.584Z`, a read-only production Vercel KV query returned 77 IDs from `agents:list` and 77 corresponding non-null `agent:<id>` hash records. The count excludes the six built-in agents hardcoded in the application. The current application has no custom-agent delete path, but it also stores no creation timestamp or usage rank. This is therefore a count of indexed custom-agent records, not users, Polygon-specific agents, deployed autonomous processes, or mainnet transactions.

The public [Agent Creator](https://w3gpt.ai/?a=agent_creator) demonstrates the product direction toward reusable contract-generation and deployment skills for agents.

Representative public custom-agent examples, verified on August 24, 2026 and not usage-ranked:

- [Dapp Creator](https://w3gpt.ai/?a=asst_K4OLY9h6g8Pwq9Vf9jgxr3ko)
- [CTF Agent](https://w3gpt.ai/?a=asst_GfjkcVcwAXzkNE1JBXNfe89q)
- [TokenScript GPT Agent](https://w3gpt.ai/?a=asst_Ava303baS9hyZeytRhuQG29v)
- [Climate Tribe Map Location Saver](https://w3gpt.ai/?a=asst_jot3PNdg8gF638N1IjRIusl6)

[The redacted analytics snapshot](evidence/analytics-snapshot-2026-08-24.json) records the indexed count and its definition. The schema cannot identify test records because it stores neither a test flag nor a usage rank.

These examples and the custom-agent count show agent-building activity, but they are not presented as Polygon-mainnet-specific agents and do not establish the original five-agent/100-transaction metric.

## Challenges and response

### Product/channel variance

The original plan emphasized Telegram interaction. Product work and usage concentrated instead on the Web3GPT application, its public agent endpoints, and a reusable TypeScript SDK. The proposed remedy is to document the variance plainly and ask the evaluator to recognize the reusable agent capability rather than relabeling general Telegram members as agent users.

### Mainnet safety and cost

Polygon mainnet deployment spends real POL and creates irreversible state. The updated documentation uses Amoy as the default path, requires explicit network wording, separates generation from deployment, and requires both a local source-review confirmation and the agent's final network confirmation.

### Amoy RPC capacity and resolution

The first SDK smoke reached the live deployment flow but returned `Monthly capacity limit exceeded` from the configured production RPC provider; that attempt was not counted as a deployment. [Application PR #44](https://github.com/Markeljan/web3gpt/pull/44) deployed Polygon's documented dRPC defaults with server-side overrides and a public fallback. Two subsequent SDK flows deployed successfully on Amoy. The second, run after [PR #45](https://github.com/Markeljan/web3gpt/pull/45), returned the exact [transaction hash and explorer URL](https://amoy.polygonscan.com/tx/0xc47d2d17b106041ef677675088eff765f7536a929cebe935f235163076c74f79) to the agent.

### Evidence quality

Platform totals are useful but do not automatically prove unique users or autonomous-agent transactions. In addition, the production dashboard's current write path records a deployment before waiting for its receipt. This report therefore relies on the independent receipt check for successful-contract claims and keeps dashboard deployments, custom-agent creation, Telegram activity, and the original mainnet transaction metric separate.

[Application PR #44](https://github.com/Markeljan/web3gpt/pull/44) changed that write path to wait for one confirmation, reject reverted or non-contract-creation receipts, derive the address from `receipt.contractAddress`, and only then persist deployment and verification data. The fresh SDK transaction was persisted after a successful receipt, and [PR #45](https://github.com/Markeljan/web3gpt/pull/45) made its exact transaction evidence available to the agent response.

## User and community feedback

No attributable SDK or agent feedback was collected for this tranche, so none is claimed. Earlier Telegram membership is not presented as SDK usage.

## Evaluator request

We request approval of a Tranche 3 scope variance based on:

1. an installable, documented TypeScript SDK that exposes Web3GPT's agent conversation to external applications;
2. explicit Polygon Amoy and Polygon mainnet contract-deployment support;
3. verifiable Polygon deployment activity in the live product; and
4. a live custom-agent creation surface with public agent examples.

We acknowledge that this evidence does not strictly satisfy the original Telegram interaction, autonomous giveaway agent, or five-agent/100-mainnet-transaction targets. If strict metric substitution is not accepted, we request written confirmation of the smallest additional evidence or demonstration needed for approval.

## Pre-submission checklist

- [ ] Add npm authentication, publish the corrected SDK package, and verify it from a clean temporary project.
- [ ] Make the SDK source repository public, or obtain explicit evaluator acceptance of private-source access.
- [ ] Merge and deploy the documentation change; the Web3GPT application changes are in production.
- [x] Add public PR and commit links for the SDK and app; add the docs merge commit after merging PR #6.
- [x] Add dated receipt-verified Amoy and mainnet transaction/contract links.
- [x] Capture the dashboard snapshot and document how each count is calculated.
- [x] Attach redacted evidence for both the deployment and custom-agent snapshots.
- [x] State that no attributable user feedback was collected.
- [x] Submit this as a transparent scope-variance request, not as proof that the original metrics were all met.
