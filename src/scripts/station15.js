async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return result
}

function test(list) {
  return new Promise(resolve => {
    setTimeout(resolve, 3000, list.map(
        l => {
          l['full_name'] =l['family_name'] + ' ' + l['first_name']
          return l
        }
    ))
  }).catch(() => {
    console.error('Something wrong!')
  })
}

