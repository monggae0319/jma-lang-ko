/**
 * 코드 → 한국어 변환 함수 생성기
 * @param {Object<string, string>} map
 * @returns {(value: string | number) => string}
 */
export function createTranslator(map) {
    return (value) => {
        if (value === null || value === undefined) {
            return value;
        }

        const key = String(value);
        return map[key] ?? key;
    };
}
