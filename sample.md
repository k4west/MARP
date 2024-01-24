---
marp: true
title: sample
theme: gaia
# class: invert
_class: lead
paginate: true # 슬라이드 페이지 수
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
style: |
  .colums {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap 1rem
  }
---

![bg left:40% 80%](https://marp.app/assets/marp.svg)

# **MARP -TITLE**

## Marp 사용법

https://marp.app/
by: k4west

---

# How to write slides

Split pages by horizontal ruler (`---`). It's very simple! :satisfied:

```markdown
# Slide 1

foobar

---

# Slide 2

foobar
```

---

# 슬라이드 헤더

- 리스트 내용 1
- 리스트 내용 2

```java
public void code(String param) {
    String a = "code";
}

```

---

| 헤더1 | 헤더2 |
| ----- | ----- |
| 내용1 | 네용2 |

---

## Image

![bg left](https://picsum.photos/200?random=1)

- 이미지 오른쪽에
- 텍스트 리스트

---

<!--_color: white -->
<!--_backgroundColor: black -->

## Image

![bg left height:400px](https://picsum.photos/400?random=2)

---

## Grid

<div class="columns">
<div>

## 왼쪽 리스트

- 1
- 2
- 3
</div>
<div>

## 오른쪽 리스트

- 4
- 5
- 6
</div>
</div>

---

# <!--fit-->이모지 사용 :rocket: :smile:

# <span style="color:grey">span태그 스타일</span> 텍스트

---
