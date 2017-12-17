import Detail from '@/components/Good/Detail'
import Publish from '@/components/Good/GoodPublish'

export default [
  {
    path: '/good/detail/:id',
    name: 'GoodDetail',
    component: Detail
  },
  {
    path: '/good/publish',
    name: 'GoodPublish',
    component: Publish
  }
]
