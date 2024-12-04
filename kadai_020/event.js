// idからHTML要素を取得し代入（ボタン）
const changeBtn = document.getElementById('btn');

// ボタンをクリックでテキスト書き換えの処理を実行
changeBtn.addEventListener('click', ()=> {
  // 書き換えるテキストのHTML要素を取得（代入）
  const textElement = document.getElementById('text');
  // テキストの書き換え
  textElement.textContent = 'ボタンをクリックしました';
});