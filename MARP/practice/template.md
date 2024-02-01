---
marp: true
title: template
theme: default
backgroundColor: #fff
color: #000
header: "Header content"
footer: "Footer content"
style: |
  .columns {
      color: #daf;
  }
  div {
    background-color: red;
    list-style-type: none;
  }
---

<div class='columns'>
    <ol>
        <li>
            <b>'안녕하세요'</b>
        </li>
    </ol>
</div>

@@ for (let i = 0; i < 3; ++i)
@@ {

```cpp
cout << 'hello @{{i}}';
```

@@ }

[hi]
{hi}
{{hi}}

_안녕하세요_
**안녕하세요**

<div class="abc"><b>안녕하세요 {hi}</b></div>
<b>안녕하세요 [div.abc]</b>

---

Refresh to see changes...

<p id="date1"></p>
<p id="date2"></p>
<p id="date3"></p>

<script>
    const now = new Date()
    document.getElementById("date1").innerHTML = now;
    // document.getElementById("date2").innerHTML = now.toLocaleDateString("en-US");
    // document.getElementById("date3").innerHTML = now.toLocaleDateString("en-US", {weekday: 'long'});
</script>
