---
layout: post
title: "Codeforces 598A: Tricky Sum"
date: 2017-08-04
lang: zh
ref: codeforces
use_math: true
use_code: true
---

<p>新功能：支持 MathJax。事不宜遲試試看吧。<p>

<div class="page-header">
  <h2>題目</h2>
</div>

<p>
<a href="http://codeforces.com/problemset/problem/598/A">查看原文</a>
</p>

<p>
當輪入數字為 $n$ 時，請算出 $-1-2+3-4+5+6+7-8+\cdots+n$ 的值。（數式中的負數 $-1,-2,-4,-8,\cdots$ 皆為<a href="https://zh.wikipedia.org/wiki/2%E7%9A%84%E5%B9%82">二的冪</a>。）
</p>

<div class="page-header">
  <h2>解答</h2>
</div>

<p>
數式是<a href="https://zh.wikipedia.org/wiki/%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97">等差數列</a>和<a href="https://zh.wikipedia.org/wiki/%E7%AD%89%E6%AF%94%E6%95%B0%E5%88%97">等比數列</a>的混合物。先把它分拆好：

\begin{align*}
-1-2+3-4+ \cdots +n &= 1+2+3+ \cdots +n - (1+2+4+ \cdots +N) \times 2\\\\

&= \frac{1}{2}n(n+1) - (2N-1)\times2\\\\

&= \frac{1}{2}n(n+1) - 4N + 2\\\\
\end{align*}
</p>

<p>
當中，$N$ 是 $1$ 至 $n$ 中最大的二的冪次方數。只要能找出 $N$，一切都好辦了。
</p>

<p>
此外，要注意<a href="https://zh.wikipedia.org/zh-hk/%E7%AE%97%E8%A1%93%E6%BA%A2%E5%87%BA">算術溢位</a>。因 $n$ 的最大值為 $10^9$，用 <code>int</code> 類型變數計算或許會出現溢位。
</p>

<div class="page-header">
  <h2>參考</h2>
</div>

<pre>
<code>long long n;
cin >> n;

long long N = 1;
while (N <= n)
  N = N << 1;
N = N >> 1;

cout << n*(n+1)/2 - 4*N + 2 << endl;</code>
</pre>
