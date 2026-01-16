import kansho from '../data/jma/kansho.json' with {type : 'json'};
import kansho_en from '../data/jma/kansho_en.json' with {type: 'json'};

import { createTranslator } from '../core/createTranslator.js';

export const jma = {
    /**
     *  기상청 관서명(일본어)를 한국어로 변환합니다.
        * @param {string} value - 변환할 관서명(일본어)
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * jma.KanshoKR("札幌管区気象台"); // "삿포로 관구 기상대"
    */
    KanshoKR : createTranslator(kansho),

    /**
     *  기상청 관서코드(영문)를 한국어로 변환합니다.
        * @param {string} value - 변환할 관서코드(영문)
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * jma.KanshoEnKR("JPSP"); // "삿포로 관구 기상대"
    */
    KanshoEnKR : createTranslator(kansho_en),
}