import earthquake11 from '../data/earthquake/11.json' with {type : 'json'};
import earthquake12 from '../data/earthquake/12.json' with {type : 'json'};
import earthquake21 from '../data/earthquake/21.json' with {type : 'json'};
import earthquake22 from '../data/earthquake/22.json' with {type : 'json'};
import earthquake23 from '../data/earthquake/23.json' with {type : 'json'};
import earthquake24_1 from '../data/earthquake/24_1.json' with {type : 'json'};
import earthquake24_2 from '../data/earthquake/24_2.json' with {type : 'json'};
import earthquake24_3 from '../data/earthquake/24_3.json' with {type : 'json'};
import earthquake41 from '../data/earthquake/41.json' with {type : 'json'};
import earthquake42 from '../data/earthquake/42.json' with {type : 'json'};
import earthquake43 from '../data/earthquake/43.json' with {type : 'json'};
import earthquake44 from '../data/earthquake/44.json' with {type : 'json'};
import earthquake51 from '../data/earthquake/51.json' with {type : 'json'};
import earthquake52 from '../data/earthquake/52.json' with {type : 'json'};
import earthquake62 from '../data/earthquake/62.json' with {type : 'json'};

import { createTranslator } from '../core/createTranslator.js';

export const earthquake = {
    /**
     * 코드 종류 : ”警報等情報要素／緊急地震速報” | "경보 등 정보 요소 / 긴급지진속보"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.EarthquakeWarningKR("00"); // "없음"
    */
    EarthquakeWarningKR : createTranslator(earthquake11),

    /**
     * 코드 종류 : ”緊急地震速報” | "긴급지진속보"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.EarthquakeForecastKR("00"); // "긴급지진속보(예보)"
    */
    EarthquakeForecastKR : createTranslator(earthquake12),

    /**
     * 코드 종류 : ”緊急地震速報／地方予報区” | "긴급지진속보 / 지방 예보구"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaForecastEEWKR("9910"); // "홋카이도"
    */
    AreaForecastEEWKR : createTranslator(earthquake21),

    /**
     * 코드 종류 : ”緊急地震速報／府県予報区” | "긴급지진속보 / 부현 예보구"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaForecastLocalEEWKR("9011"); // "홋카이도 도오"
    */
    AreaForecastLocalEEWKR : createTranslator(earthquake22),

    /**
     * 코드 종류 : ”地震情報／都道府県等” | "지진정보 / 도도부현 등"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaInformationPrefectureEarthquakeKR("01"); // "홋카이도"
    */
    AreaInformationPrefectureEarthquakeKR : createTranslator(earthquake23),

    /**
     * 코드 종류 : ”地震情報／細分区域” | "지진정보 / 세분 구역"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaForecastLocalEKR("100"); // "이시카리 지방 북부"
    */
    AreaForecastLocalEKR : createTranslator(earthquake24_1),

    /**
     * 코드 종류 : “気象・地震・火山情報／市町村等” | "기상・지진・화산정보 / 시정촌 등"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaInformationCityKR("0123500"); // "이시카리 시"
    */
    AreaInformationCityKR : createTranslator(earthquake24_2),

    /**
     * 코드 종류 : ”震度観測点” | "진도 관측점"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.PointSeismicIntensityKR("0123500"); // "이시카리 시 하나가와"
    */
    PointSeismicIntensityKR : createTranslator(earthquake24_3),

    /**
     * 코드 종류 : ”震央地名” | "진앙지명"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaEpicenterKR("011"); // "홋카이도 지방"
    */
    AreaEpicenterKR : createTranslator(earthquake41),

    /**
     * 코드 종류 : ”短縮用震央地名” | "단축용 진앙지명"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaEpicenterAbbreviationKR("9011"); // "홋카이도 도오"
    */
    AreaEpicenterAbbreviationKR : createTranslator(earthquake42),

    /**
     * 코드 종류 : ”詳細震央地名” | "상세 진앙지명"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaEpicenterDetailKR("1001"); // "미국, 알래스카 주 중앙부"
    */
    AreaEpicenterDetailKR : createTranslator(earthquake43),

    /**
     * 코드 종류 : ”震央補助” | "진앙 보조"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AreaEpicenterSupplimentKR("100"); // "에토로후 섬"
    */
    AreaEpicenterSupplimentKR : createTranslator(earthquake44),

    /**
     * 코드 종류 : ”東海観連情報番号” | "도카이 관련 정보 번호"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.TokaiInformationKR("000"); // "임시"
    */
    TokaiInformationKR : createTranslator(earthquake51),

    /**
     * 코드 종류 : ”地震関連情報番号” | "지진 관련 정보 번호"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.EarthquakeInformationKR("111"); // "조사중"
    */
    EarthquakeInformationKR : createTranslator(earthquake52),

    /**
     * 코드 종류 : ”固定付加文” | "고정 부가문"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * earthquake.AdditionalCommentEarthquakeKR("0101"); // "이후, 약간의 해수면 변동이 있을 수도 있습니다."
    */
    AdditionalCommentEarthquakeKR : createTranslator(earthquake62)
}