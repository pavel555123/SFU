import { useDispatch } from 'react-redux'
import { type AppDispatch } from '@/app/providers/StoreProvider/config/store.ts'

export const useAppDispatch = () => useDispatch<AppDispatch>()
