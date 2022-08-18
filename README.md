
# Coin Todo

## 프로젝트 작업 이력

[Notion](https://precious-specialist-25c.notion.site/701de4f78c5a4cce9456bedb379ee6a9?v=a9c00973c4ff41f5a2d2b79f39f790b4)
<hr />

## 배포 페이지

[Coin Todo](https://roqhdehd502.github.io/vue-todo)
<hr />

### 프로젝트 파일 구조 (2022.08.17)
```
-public
    ㄴfavicon.ico
    ㄴindex.html
    
-src
    ㄴassets
        ㄴcss
            ㄴapp.css ... 메인 css 설정
	    
        ㄴimages
            ㄴAnonymousUser.png ... 프로필 사진 조회 불가시 대체 이미지
	    
    ㄴcommon
        ㄴfilters.js ... 단위 환산 및 분기 별 css 처리
        ㄴmessages.js ... 상태 메시지 처리
	
    ㄴcomponents
        ㄴcoins
            ㄴCoinMarketPrice.vue ... 코인 시세 컴포넌트
	    
        ㄴheader
            ㄴNavigationBar.vue ... 네비게이션 바
	    
        ㄴmodals
            ㄴModalComponent.vue ... Modal 이벤트 컴포넌트
	    
        ㄴtoasts
            ㄴToastComponent.vue ... Toast 이벤트 컴포넌트
	    
        ㄴtodos
            ㄴTodoDetail.vue ... Todo 삭제 전 확인 컴포넌트
            ㄴTodoForm.vue ... Todo 작성 컴포넌트
            ㄴTodoList.vue ... Todo 목록 컴포넌트
	    
    ㄴlayouts
        ㄴDefaultLayout.vue ... 웹 사이트 기본 레이아웃
        ㄴEmptyLayout.vue ... 로그인 / 회원가입 및 프로필 페이지 레이아웃
	
    ㄴremote
        ㄴauth.js ... 파이어베이스 인증 처리
        ㄴcoinpaprikaAPI.js ... Coinpaprika 코인 시세 API 처리
        ㄴtodos.js ... 파이어스토어 처리
	
    ㄴrouter
        ㄴindex.js ... Vue-router 메인 설정
	
    ㄴstore
        ㄴmodules
            ㄴtoast.js ... toast 이벤트 Vuex 설정
	    
        ㄴindex.js ... Vuex 메인 설정
	
    ㄴviews
        ㄴauth
            ㄴLoginAuth.vue ... 로그인 페이지
            ㄴSignUpAuth.vue ... 회원가입 페이지
	    
        ㄴtodos
            ㄴTodosIndex.vue ... Todo 목록 페이지
            ㄴ_id.vue ... Todo 상세 페이지
	    
        ㄴusers
            ㄴ_id.vue ... 유저 프로필 페이지
	    
	ㄴApp.vue ... Vue 메인 레이아웃 설정
	ㄴfirebaseConfig.js ... 파이어베이스 / 파이어스토어 / 구글 스토리지 메인 설정
	ㄴmain.js ... Vue 메인 설정
	
-.gitignore

-README.md

-babel.config.js

-db.json ... JSON DB 라이브러리 더미 데이터 (현재 미사용중)

-jsconfig.json

-package-lock.json

-package.json

-vue.config.js    
```
