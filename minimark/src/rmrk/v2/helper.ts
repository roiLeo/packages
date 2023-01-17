import { unwrapJSON, unwrapURI } from '../../utils'
import { isValidInteraction } from '../shared/helpers'

import { InteractionValue } from './types'
import { Interaction } from './enums'
export const toInteraction = (interaction: string): Interaction => {
  isValidInteraction(interaction)
  return interaction as Interaction
}

export const resolveValue = (interaction: Interaction, id: string, restValues: string[]): InteractionValue => {
  switch (interaction) {
    case Interaction.ACCEPT:
      return {
        id,
        entity_type: restValues[0] as 'RES' | 'NFT',
        entity_id: restValues[1]
      }
    case Interaction.BASE:
      return {
        value: unwrapJSON(id)
      }
    case Interaction.EQUIP:
      return {
        id,
        baseslot: restValues[0]
      }
    case Interaction.EQUIPPABLE:
      return {
        id,
        slot: restValues[0],
        value: restValues[1]
      }
    case Interaction.LOCK:
      return {
        id
      }
    case Interaction.RESADD:
      return {
        id,
        value: unwrapJSON(restValues[0]),
        replace: restValues[1]
      }
    case Interaction.SETPRIORITY:
      return {
        id,
        value: unwrapURI(restValues[0])
      }
    case Interaction.SETPROPERTY:
      return {
        id,
        name: unwrapURI(restValues[0]),
        value: unwrapURI(restValues[1])
      }
    case Interaction.THEMEADD:
      return {
        base_id: id,
        name: restValues[0],
        value: unwrapJSON(restValues[1])
      }
    case Interaction.BUY:
      return {
        id,
        recipient: restValues[0]
      }
    case Interaction.EMOTE:
      return {
        namespace: id,
        id: restValues[0],
        emotion: restValues[1]
      }
    case Interaction.SEND:
      return {
        id,
        recipient: restValues[0]
      }
    case Interaction.LIST:
      return {
        id,
        price: restValues[0]
      }
    case Interaction.CHANGEISSUER:
      return {
        id,
        newissuer: restValues[0]
      }
    case Interaction.CREATE:
      return {
        value: unwrapJSON(id)
      }
    case Interaction.MINT:
      return {
        value: unwrapJSON(id),
        recipient: restValues[0]
      }
    case Interaction.BURN:
      return {
        id
      }
  }
}
