# Madflix : Netflix 클론코딩을 통해 리액트, ES6, Css (styled-Component) 학습 & 개발
---

### Madflix 프로젝트 개요

- #Madflix  
  Madflix는 Nomadcoder Code Challenge 프로그램을 통해 개발 한 첫번째 React 프로젝트 입니다. Moviedb restAPI를 기반으로 영화 정보를 볼 수 있는 웹 사이트 입니다.

### 프로젝트 소개

- 홈 화면

1. YT API를 이용해 Autostart, Pause, Mute 기능 구현
2. Styled-components 를 이용해 sticky background와 Poster구현

![madflix](https://user-images.githubusercontent.com/83238246/122630612-050ee700-d100-11eb-8022-54881c1f33cc.jpg)


- Movie 화면

1. MovieDB API를 axios를 사용해 Movie의 각 섹션별로 fetching
2. Poster hovering시 Animation 구현

![madflix_movies](https://user-images.githubusercontent.com/83238246/122630614-05a77d80-d100-11eb-9fe2-48e99b52a8f8.jpg)

- TV 화면

1. MovieDB API를 axios를 사용해 TV Show의 각 섹션별로 fetching
2. Poster hovering시 Animation 구현

![madflix_tvs](https://user-images.githubusercontent.com/83238246/122630611-03452380-d100-11eb-945c-fcbc7452d993.jpg)

- Detail 화면

1. 별점 기능 구현
2. Tab 기능 구현 : Tab별로 각각 정보, 제작사, 클립, 시리즈 기능 구현
![madflix_detail](https://user-images.githubusercontent.com/83238246/122630613-050ee700-d100-11eb-8c3f-f148b02ce97c.jpg)

- Search 화면

1. 검색 기능 구현

![madflix_search](https://user-images.githubusercontent.com/83238246/122630615-05a77d80-d100-11eb-9d60-1f24e2022905.jpg)

### 사용 스킬

- Framework : React
- Language : Javascript
- Styling: styled-components
- API : restFul API, Youtube API
- Deploy : netlify

### 마치며

- 제 첫번쨰 프로젝트인 만큼 정말 많은 것들을 배울 수 있었고 특히 React의 Rendering 방식, 순서와 JSX 문법, Class Components 의 단점과 Functional 방식을 지향해야 하는 이유 등에 대해 많이 알게 되었습니다.


---
## Screens Routes

- 홈
- 영화
- TV시리즈
- 검색
- 디테일 

## API Verbs

- [x] Weekly Trending (Home)
- [x] Now Playing (Movie)
- [x] Upcoming (Movie)
- [x] Popular (TV, Movie)
- [x] Top Rated (TV)
- [x] Airing Today (TV)
- [x] TV Show Detail ( similar, videos, genres )
- [x] Movie Detail ( similar, videos, genres )
- [x] Search (Both)

## Code Challenges

- [x] IMDB Link
- [x] 영화/ TV시리즈에 탭 넣기
- [x] 제작 회사, 나라 표시
- [x] 비슷한 영상들 추천
- [x] TV시리즈 디테일에 시즌 추가

## My Code Challenges

- [x] Homepage Link, 배우 carousel 추가
- [x] 별점 추가
- [x] Carousel 추가
- [x] Search에서 pastTerm 추가
- [x] 홈 route를 추가
- [x] 포스터 hover시 resizing
- [x] 홈에서 background로 유튜브 영상 autoplay
- [x] -> Chrome브라우저에서 안되는 문제 수정 완료
- [x] Weakly Trend Api 추가
- [x] 홈에서 Youtube 재생/일시정지, 소리 mute/unMute 조작 가능하게 수정
- [x] 한국어로 검색 안되던 문제 수정 완료
