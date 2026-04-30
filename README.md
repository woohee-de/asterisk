# Portfolio - Asterisk

## Overview

개인 포트폴리오 웹사이트입니다.
React + Vite 기반으로 구축되었으며, 프로젝트 데이터를 분리한 정적 구조를 통해 유지보수성과 확장성을 고려했습니다.

디자인부터 퍼블리싱까지 직접 작업했으며, 구조 개선 과정에서 AI를 활용해 코드 품질과 개발 효율을 향상시켰습니다.

---

## Live Demo

https://woohee-de.github.io/asterisk/

---

## Tech Stack

* React
* Vite
* SCSS
* GitHub Pages

---

## Features

* 프로젝트 데이터 기반 구조 (projects.js)
* 컴포넌트 기반 UI 설계
* 반응형 레이아웃
* 유지보수를 고려한 asset 관리 구조

---

## Project Structure

```
src/
  assets/
  components/
  data/
  utils/
```

---

## Troubleshooting

### GitHub Pages 배포 시 이미지 경로 문제

**문제**
GitHub Pages는 `/레포명/`을 base path로 사용하기 때문에
기존 `/images/...` 경로가 정상적으로 동작하지 않음

**해결**

* 하드코딩된 `/asterisk` 경로 제거
* `img()` util 함수로 asset 경로 추상화
* `import.meta.env.BASE_URL`을 활용하여 환경별 경로 자동 대응

```js
export const img = (path) => {
  return `${import.meta.env.BASE_URL}images/${path}`;
};
```

---

## Notes

* 기존 dothome 호스팅 → GitHub Pages로 배포 환경 전환
* 환경 의존적인 경로 문제를 개선하여 유지보수성과 확장성 확보
* AI를 활용하여 구조 개선 및 리팩토링 진행

---
