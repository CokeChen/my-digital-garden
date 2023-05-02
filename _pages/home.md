---
layout: page
title: Home
id: home
permalink: /
---

## Welcome! 🌱

欢迎来到我的数字花园-考研篇，我是chen，23年上岸电子科技大学通院专硕。我将在这里无偿的分享我的考研笔记，欢迎来此散步。👋

<!-- 添加链接 -->
## 目录

- [数学]({{ site.baseurl }}/数学/)

<strong>Recently updated notes</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>



