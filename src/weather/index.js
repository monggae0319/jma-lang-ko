import weatherPrefecture from '../data/weather/prefecture.json' with {type : 'json'};
import weatherSubdivision from '../data/weather/1saibun.json' with {type : 'json'};
import weatherCitySummary from '../data/weather/city_sum.json' with {type : 'json'};
import weatherCity from '../data/weather/city.json' with {type : 'json'};
import weatherCityRiver from '../data/weather/city_river.json' with {type : 'json'};

import { createTranslator } from '../core/createTranslator.js';

export const weather = {
    /**
     * 코드 종류 : ”気象警報・注意報（府県予報区等）” | "기상경보・주의보(부현 예보구 등)"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * weather.AreaForecastLocalMPrefectureKR("020000"); // "아오모리 현"
    */
    AreaForecastLocalMPrefectureKR : createTranslator(weatherPrefecture),

    /**
     * 코드 종류 : ”気象警報・注意報（一次細分区域等）” | "기상경보・주의보(1차 세분 구역 등)"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * weather.AreaForecastLocalMSubdivisionKR("011000"); // "소야 지방"
    */
    AreaForecastLocalMSubdivisionKR : createTranslator(weatherSubdivision),

    /**
     * 코드 종류 : ”気象警報・注意報（市町村等をまとめた地域等）” | "기상경보・주의보(시정촌 등을 묶은 지역 등)"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * weather.AreaForecastLocalMCitySummaryKR("011011"); // "소야 북부"
    */
    AreaForecastLocalMCitySummaryKR : createTranslator(weatherCitySummary),

    /**
     * 코드 종류 : ”気象警報・注意報（市町村等）” | "기상경보・주의보(시정촌 등)"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * weather.AreaInformationCityKR("1310300"); // "미나토 구"
    */
    AreaInformationCityKR : createTranslator(weatherCity),

    /**
     * 코드 종류 : ”指定河川洪水予報” | "지정 하천 홍수예보"
        * @param {string | number} value - 변환할 코드 값
        * @returns {string} 대응되는 한국어 문자열 (없으면 원본 값 반환)
        *
        * @example
        * weather.AreaInformationCityRiverKR("1310300"); // "미나토 구"
    */
    AreaInformationCityRiverKR : createTranslator(weatherCityRiver),
}
