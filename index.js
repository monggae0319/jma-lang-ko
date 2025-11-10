import epicenterList from './data/epicenterlist.json' with {type : "json"};
import prefList from './data/preflist.json' with {type : "json"};
import earthquakeAreaList from './data/earthquakearealist.json' with {type : "json"};
import cityList from './data/citylist.json' with {type : "json"};
import commentList from './data/commentlist.json' with {type : "json"};
import tsunamiAreaList from './data/tsunamiarealist.json' with {type : "json"};
import tsunamiStationList from './data/tsunamistation.json' with {type : "json"};


/**
 * 공통 변환 함수
 * @param {string} value - 변환할 값
 * @param {Object} list - 변환 데이터 객체
 * @returns {string} 변환된 값 또는 원본 값
 */
function translate(value, list) {
    for (let key in list) {
        if (key === value) {
            return list[key];
        }
    }
    return value;
}

/**
 * 진앙지명을 한국어로 변환합니다.
 * @param {string} value - 변환할 값
 * @returns {string} 변환된 값 또는 원본 값
 */
export function JPEpicenterToKR(value){
    return translate(value, epicenterList);
}

/**
 * 도도부현명을 한국어로 변환합니다.
 * @param {string} value - 변환할 값
 * @returns {string} 변환된 값 또는 원본 값
 */
export function JPPrefToKR(value){
    return translate(value, prefList);
}

/**
 * 지역명(지진정보/세부구역)을 한국어로 변환합니다.
 * @param {string} value - 변환할 값
 * @returns {string} 변환된 값 또는 원본 값
 */
export function JPQuakeAreaToKR(value){
    return translate(value, earthquakeAreaList);
}

/**
 * 시정촌명을 한국어로 변환합니다.
 * @param {string} value - 변환할 값
 * @returns {string} 변환된 값 또는 원본 값
 */
export function JPCityToKR(value){
    return translate(value, cityList);
}

/**
 * 지진・해일의 고정 부가문을 한국어로 변환합니다.
 * @param {string} value - 변환할 값
 * @returns {string} 변환된 값 또는 원본 값
 */
export function JPCommentToKR(value){
    return translate(value, commentList);
}

/**
 * 해일예보구를 한국어로 변환합니다.
 * @param {string} value - 변환할 값
 * @returns {string} 변환된 값 또는 원본 값
 */
export function JPTsunamiAreaToKR(value){
    return translate(value, tsunamiAreaList);
}

/**
 * 해일관측점명을 한국어로 변환합니다.
 * @param {string} value - 변환할 값
 * @returns {string} 변환된 값 또는 원본 값
 */
export function JPTsunamiStationToKR(value){
    return translate(value, tsunamiStationList);
}