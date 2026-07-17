'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener (
    'click',
    () => { //無名関数かつアロー関数
        const userName = userNameInput.value;
        if (userName.length === 0) {
          return;
        }
        console.log(assessment(userName));
        resultDivision.innerText = '';
        const headerDivision = document.createElement('div');
        headerDivision.setAttribute('class', 'card-header text-bg-primary');
        headerDivision.innerText = '診断結果';
        const bodyDivision = document.createElement('div');
        bodyDivision.setAttribute('class', 'card-body');
        const paragraph = document.createElement('p');
        paragraph.setAttribute('class', 'card-text');
        const result = assessment(userName);
        paragraph.innerText = result;
        bodyDivision.appendChild(paragraph);
        resultDivision.setAttribute('class', 'card');
        resultDivision.appendChild(headerDivision);
        resultDivision.appendChild(bodyDivision);
        tweetDivision.innerText = '';
        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + 
        encodeURIComponent('東方キャラクター御神籤') + '&ref_src=twsrc%5Etfw';

        anchor.setAttribute('href', hrefValue);
        anchor.setAttribute('class', 'twitter-hashtag-button');
        anchor.setAttribute('data-text', result);
        anchor.innerText = '#御神籤の結果を投稿する。';

        tweetDivision.appendChild(anchor);

        const script = document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        tweetDivision.appendChild(script);
        
    }
);

userNameInput.addEventListener (
    'keydown', 
    (event) => {
        if(event.code ==='Enter') {
            assessmentButton.dispatchEvent(new Event('click'))
        }
    }
);

const answers = [
    '###userName###が紡ぐ縁は博麗霊夢。博麗神社の巫女。彼女は何にも縛られない。ラッキーアイテムは陰陽玉。どうやら不思議な力が込められているみたい。',
    '###userName###が紡ぐ縁は霧雨魔理沙。普通の魔法使い。彼女は意外と努力家みたいね。ラッキーアイテムは八卦炉。ヒヒイロカネで出来ているんですって。',
    '###userName###が紡ぐ縁はルーミア。闇の妖怪。彼女の闇は彼女自身の視界を妨げるらしい。ラッキーアイテムは御札。ルーミアの頭のリボンは御札らしいわ。',
    '###userName###が紡ぐ縁は大妖精。彼女は霧の中を自由に泳げるらしい。名前は無いそうよ。ラッキーアイテムは霧吹き。霧の湖には到底及ばないけどね。',
    '###userName###が紡ぐ縁はチルノ。氷の妖精。彼女は蛙を氷漬けにして遊んでるらしいわ。悪趣味ね。ラッキーアイテムは氷。蛙入りじゃなくてよ。',
    '###userName###が紡ぐ縁は紅美鈴。華人小娘。うちの門番はいつも寝てばかりで困っちゃうわ。ラッキーアイテムはチャイナドレス。背が高くないと似合わないのよね。',
    '###userName###が紡ぐ縁は小悪魔。彼女は目的の本を瞬時に見分ける能力を持ってるそうよ。検索エンジンみたいなものね。ラッキーアイテムは逆十字架。悪魔に十字架なんて効かないけどね。',
    '###userName###が紡ぐ縁はパチュリー・ノーレッジ。七曜の魔法使い。パチェの魔法は東洋の要素があるらしいわ。ラッキーアイテムは魔導書。ネクロノミコンなんかがおすすめよ。',
    '###userName###が紡ぐ縁は十六夜咲夜。瀟洒なメイド。意外と天然なのよね。ラッキーアイテムは投げナイフ。',
    '###username###が紡ぐ縁はレミリア・スカーレット。紅い悪魔。運命を手繰り寄せる永遠に幼い少女。ラッキーアイテムは紅茶。'
];
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {strict} userName ユーザの名前
 * @return {strict} 診断結果
 */
function assessment(userName) {
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0;i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    };
    // 文字コード番号の合計を回答の数で割って添え字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    // TODO ###userName###をユーザの名前に置き換える
    result = result.replaceAll('###userName###',userName);
    return result;
};
function test() {
    console.log('sentents test');
};
//yukkuri
console.log('yukkuri');
console.assert(assessment('yukkuri') === assessment('yukkuri'),'error');

console.log('yukari');
console.assert(assessment('yukari') === assessment('yukari'),'error');

console.log('yuyuyu');
console.assert(assessment('yuyuyu') === assessment('yuyuyu'),'error');

test();
