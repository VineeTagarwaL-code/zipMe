import { db } from '@/lib/db'
import Image from 'next/image'

export default function Home() {
  db.set('hello', 'hello')
  return (
    <div className='text-red-500'>Hey</div>
  )
}
