# 타이머 앱 만들기

## Layout

### FlexBox

[Flexbox Game](http://flexboxfroggy.com/#ko)


__justify-content__ : 가로선 상에서 정렬함

- `flex-start`: 요소들을 컨테이너의 왼쪽으로 정렬
- `flex-end`: 요소들을 컨테이너의 오른쪽으로 정렬
- `center`: 요소들을 컨테이너의 가운데로 정렬
- `space-between`: 요소들 사이에 동일한 간격
- `space-around`: 요소들 주위에 동일한 간격

__align-items__ : 세로선 상에서 정렬함

- `flex-start`: 요소들을 컨테이너의 꼭대기로 정렬
- `flex-end`: 요소들을 컨테이너의 바닥으로 정렬
- `center`: 요소들을 컨테이너의 세로선상의 가운데로 정렬
- `baseline`: 요소들을 컨테이너의 시작 위치에 정렬
- `stretch`: 요소들을 컨테이너에 맞도록 늘림

__align-self__ : `align-items` 가 사용하는 값들을 인자로 받고, 그 값들을 지정한 요소에만 적용

__flex-direction__ : 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정함

- `row`: 요소들을 텍스트의 방향과 동일하게 정렬
- `row-reverse`: 요소들을 텍스트의 반대 방향으로 정렬
- `column`: 요소들을 위에서 아래로 정렬
- `column-reverse`: 요소들을 아래에서 위로 정렬

__order__ : Flex 요소의 순서를 지정. 기본값은 0이며, 양수/음수로 바꿀수 있음

__flex-wrap__ : Flex 요소들을 한줄or여러줄에 걸쳐 나타냄

- `nowrap`: 모든 요소들을 한 줄에 정렬
- `wrap`: 요소들을 여러 줄에 걸쳐 정렬
- `wrap-reverse`: 요소들을 여러 줄에 걸쳐 반대로 정렬

__flex-flow__ : `flex-direction`과 `flex-wrap` 을 간략하게 사용

```
  .example {
    flex-flow: row wrap
  }
```

__align-content__ : Flex 컨테이너 사이의 간격을 조절

- `flex-start`: 여러 줄들을 컨테이너의 꼭대기로 정렬
- `flex-end`: 여러 줄들을 컨테이너의 바닥으로 정렬
- `center`: 여러 줄들을 세로선상의 가운데로 정렬
- `space-between`: 여러 줄들 사이에 동일한 간격으로 정렬
- `space-around`: 여러 줄들 주위에 동일한 간격으로 정렬
- `stretch`: 여러 줄들을 컨테이너에 맞도록 늘림
