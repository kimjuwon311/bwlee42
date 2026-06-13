# blog-test9

blog-test6을 기반으로 폭과 현재 위치 표시를 정리한 버전입니다.

## 변경 사항

- Header를 화면 전체 폭 기준으로 재정렬
- 현재 위치한 메뉴를 네비게이션 바에서 표시
- Section Page: 본문 + 우측 프로필 구조 유지, 우측 폭 약 15%
- Article Page: 넓은 본문 + 우측 TOC 구조 유지, 우측 폭 약 15%
- Article Page TOC에 현재 읽는 위치 표시
- About 프로필 크기 축소
- About 링크를 작은 아이콘형 버튼으로 정리
- Astro Dev Toolbar 비활성화
- 반응형 기본 처리: 좁은 화면에서는 우측 사이드바/TOC 숨김

## 실행

```bat
cd C:\blog-test8
npm install
npm run dev
```

## 글 작성

각 섹션의 `src/content/...` 폴더에 Markdown 파일을 추가하면 됩니다.

```md
---
title: "글 제목"
description: "간단한 설명"
date: 2026-06-13
updated: 2026-06-13
tags: ["태그1", "태그2"]
draft: false
---

## 소제목

본문...
```

## 분류 원칙

- Essays, Projects, Reading, Archive는 1차 분류
- tags는 보조 탐색용 메타데이터
- field는 사용하지 않음
- 글이 많아지면 무한 스크롤보다 페이지네이션 추천


## blog-test9 변경 사항

- TOC 항목 클릭 시 해당 문단으로 부드럽게 이동
- 문서 맨 아래에서도 마지막 목차 항목이 active 상태가 되도록 보정
- 하단 여백과 작은 footer 추가
- 나머지 구조와 디자인은 blog-test8 기준 유지
