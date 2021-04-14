import produce from 'immer'
import { themeActions } from './themeActions'
import { IThemeAction, IThemeProps } from './themeContext'

export const themeReducer = (
  state: IThemeProps,
  action: IThemeAction
): IThemeProps =>
  produce<IThemeProps>(state, (draft) => {
    switch (action.type) {
      case themeActions.TOGGLE_THEME_MODE:
        return { type: draft.type === 'light' ? 'dark' : 'light' }
      default:
        throw new Error(`Unhandled action type: ${action.type}`)
    }
  })
