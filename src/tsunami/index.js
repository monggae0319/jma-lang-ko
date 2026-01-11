import tsunami14 from '../data/tsunami/14.json' with {type : 'json'};
import tsunami31 from '../data/tsunami/31.json' with {type : 'json'};
import tsunami34 from '../data/tsunami/34.json' with {type : 'json'};
import tsunami35 from '../data/tsunami/35.json' with {type : 'json'};


import { createTranslator } from '../core/createTranslator.js';

export const tsunami = {
    /**
     * 코드 종류 : ”警報等情報要素／津波警報・注意報・予報” | "경보 등 정보 요소 / 해일경보・주의보・예보"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.TsunamiWarningKR("00"); // "해일 없음"
    */
    TsunamiWarningKR : createTranslator(tsunami14),

    /**
     * 코드 종류 : ”津波予報区” | "해일 예보구"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaTsunamiKR("100"); // "홋카이도 태평양 연안 동부"
    */
    AreaTsunamiKR : createTranslator(tsunami31),

    /**
     * 코드 종류 : ”沿岸地域” | "연안 지역"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.CoastTsunamiKR("100"); // "홋카이도 태평양 연안 동부"
    */
    CoastTsunamiKR : createTranslator(tsunami34),

    /**
     * 코드 종류 : “潮位観測点” | "조위 관측점"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.PointTsunamiKR("10001"); // "쿠시로"
    */
    PointTsunamiKR : createTranslator(tsunami35)
}