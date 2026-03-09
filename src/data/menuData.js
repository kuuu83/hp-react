import sasimiImage from '../assets/sasimi.JPG';
import unagiImage from '../assets/unagi.png';
import anagoImage from '../assets/穴子.png';
import sazaeImage from '../assets/sazae.JPG';
import soysaladImage from '../assets/soysalad.png';
import crabImage from '../assets/crab.JPG';
import fuguImage from '../assets/fugu.JPG';

// 1ページ最大6項目として、ページごとにデータをまとめます
export const menuData = {
    meals: {
        title: 'お食事',
        pages: [
            {
                pageIndex: 1,
                image: sasimiImage,
                imageAlt: '刺身',
                layout: 'is-image',
                items: [
                    { name: '【刺身】旬の刺身盛合せ (1人前)', price: '1,650円' },
                    { name: '旬の単品刺身', price: '960円～' },
                    { name: '', price: '' }, // 空行（レイアウト調整用）
                    { name: '', price: '' },
                    { name: '', price: '' },
                    { name: '', price: '' },
                ]
            },
            {
                pageIndex: 2,
                image: unagiImage,
                imageAlt: 'うなぎ',
                layout: 'is-image',
                items: [
                    { name: '【寿司】旬のにぎり (1貫)', price: '280円～630円' },
                    { name: 'おまかせにぎり (7貫と鉄火巻1本)', price: '2,500円' },
                    { name: '追加の寿司1', price: '300円' },
                    { name: '追加の寿司2', price: '400円' },
                    { name: '', price: '' },
                    { name: '', price: '' },
                ]
            },
            {
                pageIndex: 3,
                image: anagoImage,
                imageAlt: '穴子',
                layout: 'is-image',
                items: [
                    { name: '【逸品】活穴子煮', price: '1,650円' },
                    { name: '上うな重 (肝吸い、おしんこ付)', price: '5,500円' },
                    { name: 'さざえの天婦羅', price: '100g 600円' },
                    { name: '追加の逸品1', price: '800円' },
                    { name: 'ダミーの料理 1', price: 'XXX円' },
                    { name: 'ダミーの料理 2', price: 'XXX円' },
                ]
            },
            // 続きのページが必要な場合はここに順次追加できます
        ]
    },
    drinks: {
        title: 'お飲み物',
        pages: [
            {
                pageIndex: 1,
                layout: 'is-simple',
                items: [
                    { name: '【ビール・サワー】生ビール', price: '740円' },
                    { name: '瓶ビール', price: '800円' },
                    { name: 'ノンアルコールビール', price: '550円' },
                    { name: 'こだわり酒場のレモンサワー', price: '490円' },
                    { name: '梅干しレモンサワー', price: '600円' },
                    { name: 'デカレモンサワー', price: '880円' },
                ]
            },
            {
                pageIndex: 2,
                layout: 'is-simple',
                items: [
                    { name: '【サワー】玉露入りお茶割り', price: '490円' },
                    { name: 'ウーロンハイ', price: '490円' },
                    { name: '男梅サワー', price: '490円' },
                    { name: 'ラ・トマトサワー', price: '490円' },
                    { name: 'カルピスサワー', price: '490円' },
                    { name: 'グレープフルーツサワー', price: '490円' },
                ]
            },
            {
                pageIndex: 3,
                image: crabImage,
                imageAlt: 'カニ',
                layout: 'is-image', // お飲み物でも画像付きにできます
                items: [
                    { name: '【焼酎】黒霧島', price: 'G 580円 B 2,860円' },
                    { name: '赤霧島', price: 'G 600円 B 3,130円' },
                    { name: '㐂六', price: 'G 690円 B 4,780円' },
                    { name: '三岳', price: 'G 710円 B 4,890円' },
                    { name: '中々', price: 'G 710円 B 4,890円' },
                    { name: '神の河 Black', price: 'G 660円 B 4,340円' },
                ]
            },
            {
                pageIndex: 4,
                image: fuguImage,
                imageAlt: 'フグ',
                layout: 'is-image',
                items: [
                    { name: '【焼酎】金宮', price: 'G 450円 B 2,200円' },
                    { name: 'かねます (休売中)', price: 'G 600円 B 3,130円' },
                    { name: '樫樽焼酎長期熟成 かねます', price: 'G 680円 B 4,730円' },
                    { name: '鍛高譚', price: 'G 520円 B 2,530円' },
                    { name: '二重仕込み 鶯宿梅', price: '710円' },
                    { name: '鍛高譚梅酒', price: '710円' },
                ]
            },
            // ... 他のページも同様に整理可能
        ]
    }
};
