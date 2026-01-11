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
import {earthquake, tsunami} from 'jma-lang-ko'

console.log(earthquake.EarthquakeWarningKR('31'))
// 출력 예시: 긴급지진속보(경보)
```
모든 함수는 ```string | number``` 타입의 코드를 입력받을 수 있습니다.

## 🚩제공 함수
### earthquake
| 함수명 | 코드 종류 | 입력값 | 출력값 |
| --- | --- | :-: | --- |
| EarthquakeWarningKR | ”警報等情報要素／緊急地震速報”<br>"경보 등 정보 요소 / 긴급지진속보" | 00 | "없음" |
| EarthquakeForecastKR | ”緊急地震速報”<br>"긴급지진속보" | 00 | "긴급지진속보(예보)" |
| AreaForecastEEWKR | ”緊急地震速報／地方予報区”<br>"긴급지진속보 / 지방 예보구" | 99011910 | "홋카이도 도오" |
| AreaForecastLocalEEWKR | ”地震情報／都道府県等”<br>"지진정보 / 도도부현 등" | 01 | "홋카이도" |
| AreaInformationPrefectureEarthquakeKR | ”緊急地震速報／地方予報区”<br>"긴급지진속보 / 지방 예보구" | 9910 | "홋카이도" |
| AreaForecastLocalEKR | ”地震情報／細分区域”<br>"지진정보 / 세분 구역" | 100 | "이시카리 지방 북부" |
| AreaInformationCityKR | “気象・地震・火山情報／市町村等”<br>"기상・지진・화산정보 / 시정촌 등" | 0123500 | "이시카리 시" |
| PointSeismicIntensityKR | ”震度観測点”<br>"진도 관측점" | 0123500 | "이시카리 시 하나가와" |
| AreaEpicenterKR | ”震央地名”<br>"진앙지명" | 011 | "홋카이도 지방" |
| AreaEpicenterAbbreviationKR | ”短縮用震央地名”<br>"단축용 진앙지명" | 9011 | "홋카이도 도오" |
| AreaEpicenterDetailKR | ”詳細震央地名”<br>"상세 진앙지명" | 1001 | "미국, 알래스카 주 중앙부" |
| AreaEpicenterSupplimentKR | ”震央補助”<br>"진앙지명" | 100 | "에토로후 섬" |
| TokaiInformationKR | ”東海観連情報番号”<br>"도카이 관련 정보 번호" | 000 | "임시" |
| EarthquakeInformationKR | ”地震関連情報番号”<br>"지진 관련 정보 번호" | 111 | "조사중" |
| AdditionalCommentEarthquakeKR | ”固定付加文”<br>"고정 부가문" | 0101 | "이후, 약간의 해수면 변동이 있을 수도 있습니다." |

### tsunami
| 함수명 | 코드 종류 | 입력값 | 출력값 |
| --- | --- | :-: | --- |
| TsunamiWarningKR | ”警報等情報要素／津波警報・注意報・予報”<br>"경보 등 정보 요소 / 해일경보・주의보・예보" | 00 | "해일 없음" |
| AreaTsunamiKR | ”津波予報区”<br>"해일 예보구" | 100 | "홋카이도 태평양 연안 동부" |
| CoastTsunamiKR | ”沿岸地域”<br>"연안 지역" | 100 | "홋카이도 태평양 연안 동부" |
| PointTsunamiKR | “潮位観測点”<br>"조위 관측점" | 10001 | "쿠시로" |

### volcano
| 함수명 | 코드 종류 | 입력값 | 출력값 |
| --- | --- | :-: | --- |
| VolcanicWarningKR | ”警報等情報要素／噴火警報・予報等”<br>"경보 등 정보 요소 / 분화경보・예보 등" | 11 | "레벨 1 (활화산인 것에 유의)" |
| PointVolcanoKR | ”火山名”<br>"화산명" | 101 | "시레토코 이오 산" |

## 참고
- [스프레드시트](https://docs.google.com/spreadsheets/d/17cB-37OMFv_xTEbMl0HCRVv635JfL1TiuYq6dff8Gdw/edit?usp=sharing) 에서 코드를 확인하실 수 있습니다.
- [JMA 지진 화산 관련 XML 전문 해설 자료](https://docs.google.com/document/d/1OP7uViQ5Xldd2slCO8BKJOhEq0IS-fy5NHllnm3vUiU/edit?usp=sharing)에서 코드의 적용 장소를 확인할 수 있습니다.
  - 해당 문서는 현재 미완성이며 오류가 있을 수 있습니다. 파일은 수시 업데이트 됩니다.

## ⚠️ 주의사항
- **Node.js 20 이상** 환경에서 사용하는 것을 권장합니다.  
  (JSON `import ... with { type: "json" }` 문법은 Node.js 20+ 이상에서 정식 지원됩니다.)

- ES Module(`"type": "module"`) 환경을 사용해야 합니다.  
  CommonJS(`require`)에서는 바로 사용할 수 없습니다.  
  CommonJS 환경에서는 [동적 import](https://nodejs.org/api/esm.html#esm_import_expressions)를 이용해 다음과 같이 사용할 수 있습니다:

  ```js
  (async () => {
    const { earthquake } = await import('jma-lang-ko');
    console.log(earthquake.AreaEpicenterKR("350"));
  })();
  ```
- JSON 데이터(data/*.json)는 수시 업데이트됩니다.  
  새로운 관측점 등 코드가 추가된 경우, ```npm update jma-lang-ko```로 최신 버전을 받아주세요.

## 🧾 라이선스
MIT License © 2025 monggae0319

## 🐞 버그 신고
문제가 있거나 새로운 지역명이 필요하다면 이슈를 남겨주세요.
[Github Issues](https://github.com/monggae0319/jma-lang-ko/issues)
