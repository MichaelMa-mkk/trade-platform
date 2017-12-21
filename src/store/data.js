var GoodList = [
  {
    name: '旧书0',
    advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
    price_sell: 6.66,
    category: 1,
    id: 0,
    userid: 1,
    status: 0 // 0表示在售，1表示已售出
  },
  {
    name: '旧书1',
    advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
    price_sell: 6.66,
    category: 2,
    id: 1,
    userid: 1,
    status: 0
  },
  {
    name: '旧书2',
    advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
    price_sell: 6.66,
    category: 2,
    id: 2,
    userid: 1,
    status: 0
  },
  {
    name: '旧书3',
    advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
    price_sell: 6.66,
    category: 2,
    id: 3,
    userid: 1,
    status: 0
  },
  {
    name: '旧书4',
    advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
    price_sell: 6.66,
    category: 2,
    id: 4,
    userid: 1,
    status: 0
  },
  {
    name: '旧书5',
    advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
    price_sell: 6.66,
    category: 3,
    id: 5,
    userid: 1,
    status: 0
  },
  {
    name: '旧书6',
    advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
    price_sell: 6.66,
    category: 3,
    id: 6,
    userid: 1,
    status: 1,
    to: 0
  },
  {
    name: '旧书7',
    advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
    price_sell: 6.66,
    category: 3,
    id: 7,
    userid: 0,
    status: 1,
    to: 1
  }
]
var MessageList = [
  {
    userid: 0,
    goodid: 0,
    status: 0 // 0表示未读，1表示已读
  },
  {
    userid: 0,
    goodid: 1,
    status: 0
  }
]
var UserList = [
  {
    id: 0,
    name: '宋逸凡',
    contact: 'QQ888888888',
    pwd: 'a12345678',
    star: []
  },
  {
    id: 1,
    name: 'newuser',
    contact: '',
    pwd: '123',
    star: []
  }
]
var LoginId = ''
var CommentList = [
  {
    userid: 0,
    content: '这东西海星',
    goodid: 0
  },
  {
    userid: 0,
    content: '这玩意太辣鸡',
    goodid: 1
  },
  {
    userid: 0,
    content: '这东西海星',
    goodid: 2
  },
  {
    userid: 0,
    content: '这玩意太辣鸡',
    goodid: 3
  },
  {
    userid: 0,
    content: '这东西海星',
    goodid: 4
  },
  {
    userid: 0,
    content: '这玩意太辣鸡',
    goodid: 5
  }
]
var EvalList = [
  {
    belong: 1,
    to: 0,
    goodid: 7,
    level: 5,
    content: ''
  },
  {
    belong: 0,
    to: 1,
    goodid: 7,
    level: 5,
    content: ''
  }
]
export default {
  GoodList, MessageList, UserList, LoginId, CommentList, EvalList
}
