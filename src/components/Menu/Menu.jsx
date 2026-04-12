import React from 'react';
import './Menu.css';

const menuData = {
    meals: {
        title: 'お食事',
        categories: [
            {
                name: '【刺身、にぎり】',
                items: [
                    { name: '刺身盛合せ (1人前)', price: '1,650円' },
                    { name: '天然まぐろ刺身', price: '1,760円' },
                    { name: 'にぎり一人前', price: '2,750円' },
                    { name: '〆のにぎり三貫', price: '880円' },
                    { name: '単品にぎり', price: '280円～' },
                    { name: '巻物各種', price: '380円～' },
                ]
            },
            {
                name: '【うなぎ】',
                items: [
                    { name: '上うな重', price: '5,500円' },
                    { name: '上蒲焼き', price: '5,080円' },
                    { name: '上白焼き', price: '5,080円' },
                    { name: 'うなぎ肝串焼き  一本', price: '360円' },
                    { name: 'うなぎ骨せんべい', price: '440円' },
                    { name: '茶碗蒸し', price: '660円' },
                ]
            },
            {
                name: '【肴】',
                items: [
                    { name: '自家製活穴子煮', price: '1,650円' },
                    { name: '自家製豆腐', price: '380円' },
                    { name: '自家製玉子焼き', price: '740円' },
                    { name: '天使の海老塩焼き', price: '770円' },
                    { name: '鶏の唐揚げ', price: '710円' },
                    { name: 'ふぐ唐揚げ', price: '1,100円' },
                ]
            },
            {
                name: '【さざえ、揚げ物】',
                items: [
                    { name: 'さざえ  【刺身、つぼ焼き、天婦羅】', price: '100g 600円～' },
                    { name: '天婦羅盛り合わせ', price: '1,650円' },
                    { name: 'カキ天婦羅', price: '880円' },
                    { name: '海老天婦羅  二尾', price: '800円' },
                    { name: '舞茸天婦羅', price: '550円' },
                    { name: 'モッツァレラチーズ天婦羅', price: '490円' },
                ]
            },
            {
                name: '【野菜、肴】',
                items: [
                    { name: '手作り豆腐のシーザーサラダ', price: '880円' },
                    { name: '長崎チャーメンサラダ', price: '770円' },
                    { name: '大人のポテトサラダ', price: '490円' },
                    { name: '葉わさび漬物', price: '440円' },
                    { name: 'するめいか肝和え', price: '440円' },
                    { name: 'いぶりがっこチーズ', price: '710円' },
                ]
            }
        ]
    },
    drinks: {
        title: 'お飲み物',
        categories: [
            {
                name: '【ビール・サワー】',
                items: [
                    { name: '生ビール (サントリー香るエール)', price: '740円' },
                    { name: '瓶ビール', price: '800円' },
                    { name: 'ノンアルコールビール', price: '550円' },
                    { name: 'こだわり酒場のレモンサワー', price: '490円' },
                    { name: '梅干しレモンサワー', price: '600円' },
                    { name: 'デカレモンサワー', price: '880円' },
                ]
            },
            {
                name: '【サワー】',
                items: [
                    { name: '玉露入りお茶割り', price: '490円' },
                    { name: 'ウーロンハイ', price: '490円' },
                    { name: '男梅サワー', price: '490円' },
                    { name: 'ラ・トマトサワー', price: '490円' },
                    { name: 'カルピスサワー', price: '490円' },
                    { name: 'グレープフルーツサワー', price: '490円' },
                ]
            },
            {
                name: '【焼酎】',
                items: [
                    { name: '黒霧島', price: 'G 580円  B 2,860円' },
                    { name: '赤霧島', price: 'G 600円  B 3,130円' },
                    { name: '㐂六', price: 'G 690円  B 4,780円' },
                    { name: '三岳', price: 'G 710円  B 4,890円' },
                    { name: '中々', price: 'G 710円  B 4,890円' },
                    { name: '神の河 Black', price: 'G 660円  B 4,340円' },
                ]
            },
            {
                name: '【焼酎】',
                items: [
                    { name: '金宮', price: 'G 450円  B 2,200円' },
                    { name: 'かねます (休売中)', price: 'G 600円  B 3,130円' },
                    { name: '樫樽焼酎長期熟成 かねます', price: 'G 680円  B 4,730円' },
                    { name: '鍛高譚', price: 'G 520円  B 2,530円' },
                    { name: '二重仕込み 鶯宿梅', price: '710円' },
                    { name: '鍛高譚梅酒', price: '710円' },
                ]
            },
            {
                name: '【日本酒】',
                items: [
                    { name: '金升 碧ラベル', price: '780円' },
                    { name: '金升 朱ラベル', price: '960円' },
                    { name: '初花', price: '1,070円' },
                    { name: 'KANEMASU 生貯蔵酒', price: '1,370円' },
                    { name: '銘水仕込み 越乃景虎', price: '1,020円' },
                    { name: '極上吉乃川', price: '1,000円' },
                ]
            },
            {
                name: '【日本酒、ワイン】',
                items: [
                    { name: '銀盤 播州50', price: '1,210円' },
                    { name: '立山', price: '1,040円' },
                    { name: 'いづみ橋 桃色黒とんぼ', price: '1,320円' },
                    { name: 'ふぐヒレ酒', price: '960円' },
                    { name: '追酒', price: '770円' },
                    { name: 'カルロ ロッシ 赤・白', price: '440円' },
                ]
            },
            {
                name: '【ハイボール】',
                items: [
                    { name: '角ハイボール', price: '660円' },
                    { name: 'メガ角ハイボール', price: '1,210円' },
                    { name: 'メーカーズマーク', price: '710円' },
                    { name: '電気ブラン', price: '550円' },
                    { name: '六 ROKU GIN', price: '770円' },
                    { name: '翆 SUI', price: '550円' },
                ]
            },
            {
                name: '【ソフトドリンク】',
                items: [
                    { name: 'オレンジジュース', price: '330円' },
                    { name: 'コーラ', price: '330円' },
                    { name: 'ジンジャーエール', price: '330円' },
                    { name: 'カルピス', price: '330円' },
                    { name: '玉露入り緑茶', price: '330円' },
                    { name: 'ウーロン茶', price: '330円' },
                ]
            }
        ]
    }
};

const PREVIEW_COUNT = 4;

function Menu({ onOpenMenu }) {
    const getPreviewItems = (categories) => {
        let allItems = [];
        categories.forEach(cat => allItems.push(...cat.items));
        return allItems.filter(item => item.name).slice(0, PREVIEW_COUNT);
    };

    return (
        <section id="menu" className="menu-section">
            <h2 className="reveal">
                お品書き
                <span className="section-subtitle">MENU</span>
            </h2>

            <div className="menu-container">
                <div className="menu-column reveal delay-1">
                    <h3>{menuData.meals.title}</h3>
                    <ul>
                        {getPreviewItems(menuData.meals.categories).map((item, index) => (
                            <li key={index} className="menu-item">
                                <span className="menu-item-name">{item.name}</span>
                                <span className="menu-item-price">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => onOpenMenu(menuData.meals)} className="see-more-btn">もっと見る</button>
                </div>

                <div className="menu-column reveal delay-2">
                    <h3>{menuData.drinks.title}</h3>
                    <ul>
                        {getPreviewItems(menuData.drinks.categories).map((item, index) => (
                            <li key={index} className="menu-item">
                                <span className="menu-item-name">{item.name}</span>
                                <span className="menu-item-price">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => onOpenMenu(menuData.drinks)} className="see-more-btn">もっと見る</button>
                </div>
            </div>

            <p className="menu-seasonal-note reveal delay-3">ほかにも旬の日替わりのお食事、季節のお酒がございます。</p>
        </section>
    );
}

export default Menu;