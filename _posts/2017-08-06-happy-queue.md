---
layout: post
title: "Codeforces 545D: Queue"
date: 2017-08-06
lang: zh
ref: codeforces2
use_math: true
use_code: true
---

<p>新增評論功能。<p>

<div class="page-header">
  <h2>題目</h2>
</div>

<p>
<a href="http://codeforces.com/problemset/problem/545/D">查看原文</a>
</p>

<p>
商場中有 $n$ 人排隊。隊中第 $i$ 名顧客需要 $t_i$ 服務時間。如某顧客的等候時間比服務自己的時間長，他就會失望。
</p>

<p>
假設隊中只有三人，服務時間分別是 $3$，$2$ 和 $1$。那按照計算，後兩人會覺得失望。
</p>

<table class="table">
  <thead>
    <tr>
      <th>位置</th>
      <th>服務時間</th>
      <th>等候時間</th>
      <th>失望</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>3</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
      <td>3</td>
      <td><span class="glyphicon glyphicon-ok"></span></td>
    </tr>
    <tr>
      <td>3</td>
      <td>1</td>
      <td>5</td>
      <td><span class="glyphicon glyphicon-ok"></span></td>
    </tr>
  </tbody>
</table>

<p>
不過把三人反過來排的話，沒有人會失望！
</p>
<table class="table">
  <thead>
    <tr>
      <th>位置</th>
      <th>服務時間</th>
      <th>等候時間</th>
      <th>失望</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td></td>
    </tr>
  </tbody>
</table>

<p>
如果你知道 $t_1$ 到 $t_n$ 的值，又有能力任意改變顧客排列順序的話（現實上不可能吧），最多能令多少人不失望呢？
</p>

<div class="page-header">
  <h2>解答</h2>
</div>

<p>
<a href="https://zh.wikipedia.org/wiki/%E8%B4%AA%E5%BF%83%E6%B3%95">貪婪演算法</a>是本題的重點。
先找出最「適合」的人放在前頭。然後，從剩下的人中找出最「適合」的人，放在第二位⋯如此類推。
</p>

<p>
那怎麼樣才能定義「適合」呢？當一人的服務時間愈短，該人就愈「適合」吧！
</p>

<p>
⋯起初我是這樣想的⋯結果就 Wrong Answer 了。以下就是一個反証：
</p>

<table class="table">
  <thead>
    <tr>
      <th>位置</th>
      <th>服務時間</th>
      <th>等候時間</th>
      <th>失望</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>2</td>
      <td>2</td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>3</td>
      <td>4</td>
      <td><span class="glyphicon glyphicon-ok"></span></td>
    </tr>
    <tr>
      <td>5</td>
      <td>5</td>
      <td>7</td>
      <td><span class="glyphicon glyphicon-ok"></span></td>
    </tr>
    <tr>
      <td>6</td>
      <td>8</td>
      <td>12</td>
      <td><span class="glyphicon glyphicon-ok"></span></td>
    </tr>
    <tr>
      <td>7</td>
      <td>13</td>
      <td>20</td>
      <td><span class="glyphicon glyphicon-ok"></span></td>
    </tr>
  </tbody>
</table>

<p>
以上並非最佳選擇。下面的配置更能有效減少失望人數：
</p>

<table class="table">
  <thead>
    <tr>
      <th>位置</th>
      <th>服務時間</th>
      <th>等候時間</th>
      <th>失望</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>2</td>
      <td>2</td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td><span style="color:red">5</span></td>
      <td>4</td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td><span style="color:red">13</span></td>
      <td>9</td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td><span style="color:red">3</span></td>
      <td>22</td>
      <td><span class="glyphicon glyphicon-ok"></span></td>
    </tr>
    <tr>
      <td>7</td>
      <td><span style="color:red">8</span></td>
      <td>25</td>
      <td><span class="glyphicon glyphicon-ok"></span></td>
    </tr>
  </tbody>
</table>

<p>
由此可見，每次選擇服務時間最短的人未必明智。要是他的服務時間比其位置的等候時間短，這樣做不但令他一人感到失望，還會拖累到後面的人們。
</p>

<p>
所以，每一輪我們應該考慮當時隊尾的等候時間。<mark>從服務時間不比當時等候時間短的人群中，選出一個服務時間最短的顧客。</mark>這才是最佳選擇。
</p>

<div class="page-header">
  <h2>參考</h2>
</div>

<pre>
<code>
sort(t.begin(), t.end());

int wait_time = 0, happy = 0;
for (int i = 0; i < n; i++)
{
  if (t[i] >= wait_time)
  {
    happy++;
    wait_time += t[i];
  }
}
</code>
</pre>
