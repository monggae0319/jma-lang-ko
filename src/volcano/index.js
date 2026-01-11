import volcano81 from '../data/volcano/81.json' with {type : 'json'};
import volcano82 from '../data/volcano/82.json' with {type : 'json'};

import { createTranslator } from '../core/createTranslator.js';

export const volcano = {
    /**
     * 코드 종류 : ”警報等情報要素／噴火警報・予報等” | "경보 등 정보 요소 / 분화경보・예보 등"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.VolcanicWarningKR("11"); // "레벨 1 (활화산인 것에 유의)"
    */
    VolcanicWarningKR : createTranslator(volcano81),

    /**
     * 코드 종류 : ”火山名” | "화산명"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.PointVolcanoKR("101"); // "시레토코 이오 산"
    */
    PointVolcanoKR : createTranslator(volcano82),
}