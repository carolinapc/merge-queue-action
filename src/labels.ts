export interface Label {
  id: string
  name: string
}

const BotLabel = {
  CommandQueueForMerging: "command:queue-for-merging",
  BotMerging: "bot:merging",
  BotQueued: "bot:queued",
  BotUnblockPrMerge: "bot:unblock-pr-merge",
} as const

export function isCommandQueueForMergingLabel(
  label: Pick<Label, "name">
): boolean {
  return label.name === BotLabel.CommandQueueForMerging
}

export function isBotMergingLabel(label: Pick<Label, "name">): boolean {
  return label.name === BotLabel.BotMerging
}

export function isBotQueuedLabel(label: Pick<Label, "name">): boolean {
  return label.name === BotLabel.BotQueued
}

export function isBotUnblockPrMergeLabel(label: Pick<Label, "name">): boolean {
  return label.name === BotLabel.BotUnblockPrMerge
}
