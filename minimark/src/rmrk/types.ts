export enum Interaction {
  MINT = 'MINT',
  MINTNFT = 'MINTNFT',
  LIST = 'LIST',
  UNLIST = 'UNLIST',
  BUY = 'BUY',
  SEND = 'SEND',
  CONSUME = 'CONSUME',
  CHANGEISSUER = 'CHANGEISSUER',
  EMOTE = 'EMOTE',
}

export type JustInteraction = Exclude<Interaction, Interaction.MINT | Interaction.MINTNFT | Interaction.UNLIST>
export enum InteractionV2 {
  ACCEPT = 'ACCEPT',
  BASE = 'BASE',
  EQUIP = 'EQUIP',
  EQUIPPABLE = 'EQUIPPABLE',
  LOCK = 'LOCK',
  RESADD = 'RESADD',
  SETPROPERTY = 'SETPROPERTY',
  SETPRIORITY = 'SETPRIORITY',
  THEMEADD = 'THEMEADD',
}

export type OnlyMintInteraction = Interaction.MINT | Interaction.MINTNFT

// type JSONFiled = Record<string, string> | undefined

export type UnwrappedRemark<T> = {
  interaction: Interaction
  value: T
  version: string
}

export type UnwrappedRemark2<T> = {
  interaction: InteractionV2
  value: T
  version: string
}

export type InteractionValue = {
  id: string
  value?: string
}

export type Base = {
  value: any
}

export type Equip = Omit<InteractionValue, 'value'> & {
  baseslot: string
}

export type Equippable = Required<InteractionValue> & {
  slot: string
}

export type Lock = Omit<InteractionValue, 'value'>

export type Resadd = Required<InteractionValue> & {
  value: Record<string, string>
  replace: string
}

export type SetPriority = Required<InteractionValue>

export type SetProperty = Required<InteractionValue> & {
  name: string
}

export type AddTheme = Required<InteractionValue> & {
  name: string
}

export type InteractionV2Value = Base | Equip | Equippable | Lock | Resadd | SetPriority | SetProperty | AddTheme | undefined

export type BinaryBoolean = 0 | 1

export type CreatedCollection = {
  id: string
  issuer: string
  max: number
  metadata: string
  name: string
  symbol: string
}

export type CreatedNFT = {
  collection: string
  instance: string
  metadata: string
  name: string
  sn: string
  transferable: BinaryBoolean
  currentOwner: string
}

export type CreatedCollectionWithNFT<C = CreatedCollection, N = CreatedNFT[]> = {
  collection: C
  nfts: N
}
