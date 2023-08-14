import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosState = {
  favoritos: Produto[]
}

const initialState: favoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload
      if (state.favoritos.find((prod) => prod.id === item.id)) {
        state.favoritos.splice(state.favoritos.indexOf(item), 1)
      } else {
        state.favoritos.push(item)
      }
    }
  }
})

export const { adicionar } = favoritosSlice.actions
export default favoritosSlice.reducer
