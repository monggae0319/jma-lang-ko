# JMA-LANG-KO

**JMA-LANG-KO**는 일본 기상청(JMA, Japan Meteorological Agency)의 지진·해일 정보에서 사용되는 일본어 지역명, 진앙명 등을 한국어로 변환하는 라이브러리입니다.  
Node.js 환경에서 간단히 불러와 사용할 수 있습니다.

---

## 📦설치

```bash
npm install jma-lang-ko
```

## 🔎사용 예시

```js
import {JPEpicenterToKR} from 'jma-lang-ko'

console.log(JPEpicenterToKR("350"))
// 출력 예시: 도쿄도 23구
```

## 🚩제공 함수
| 함수명 | 기능 | 입력값 | 출력값 |
| --- | --- | :-: | --- |
| JPEpicenterToKR | 지진의 진앙지명(코드)을 한국어로 변환합니다 | "350" | "도쿄도 23구" |
| JPPrefToKR | 도도부현 이름(코드)을 한국어로 변환합니다. | "13" | "도쿄도" |
| JPQuakeAreaToKR | 지진정보 세부구역 이름(코드)을 한국어로 변환합니다. | "221" | "미야기 현 중부" |
| JPCityToKR | 시정촌명(코드)을 한국어로 변환합니다. | "1311300" | "도쿄 시부야 구" |
| JPCommentToKR | 지진/해일 전문에서의 고정부가문 코드를 한국어로 변환합니다. | "0211" | "해일경보 등(대해일경보·해···" |
| JPTsunamiAreaToKR | 해일예보구 이름(코드)을 한국어로 변환합니다. | "312" | "도쿄 만 내만" |
| JPTsunamiStationToKR | 해일관측점 이름(코드)을 한국어로 변환합니다. | "21060" | "이와테 해역 70km A" |

## ⚠️ 주의사항
- **입력값은 반드시 문자열(string)** 형태여야 합니다.  
  예: `JPEpicenterToKR("350")` ✅ / `JPEpicenterToKR(350)` ❌  
  (숫자로 입력 시 일치 비교에 실패하여 변환되지 않습니다.)

- **Node.js 20 이상** 환경에서 사용하는 것을 권장합니다.  
  (JSON `import ... with { type: "json" }` 문법은 Node.js 20+ 이상에서 정식 지원됩니다.)

- ES Module(`"type": "module"`) 환경을 사용해야 합니다.  
  CommonJS(`require`)에서는 바로 사용할 수 없습니다.  
  CommonJS 환경에서는 [동적 import](https://nodejs.org/api/esm.html#esm_import_expressions)를 이용해 다음과 같이 사용할 수 있습니다:

  ```js
  const { JPEpicenterToKR } = await import('jma-lang-ko');
  console.log(JPEpicenterToKR("350"));
  ```
- JSON 데이터(data/*.json)는 정기적으로 업데이트됩니다.  
  새로운 관측점 등 코드가 추가된 경우, ```npm update jma-lang-ko```로 최신 버전을 받아주세요.

## 🧾 라이선스
MIT License © 2025 monggae0319

## 🐞 버그 신고
문제가 있거나 새로운 지역명이 필요하다면 이슈를 남겨주세요.
[Github Issues](https://github.com/monggae0319/jma-lang-ko/issues)
